/**
 * Contact Form Submission API Route
 * 
 * Handles form submissions from the contact/quote form.
 * 
 * Features:
 * - Validates form data using Zod schema
 * - Stores submission in Supabase database
 * - Sends email notification to admin
 * - Returns success/error response
 * 
 * [SECURITY]: All sensitive operations are server-side only
 * [PLACEHOLDER]: Add rate limiting and spam protection
 * 
 * @module app/api/contact/submit/route
 */

import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, isSupabaseAdminConfigured } from '@/lib/supabase';
import { contactFormSchema, sanitizeFormData } from '@/lib/formValidation';
import type { ContactFormData } from '@/types/form';

/**
 * POST handler for form submission
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate form data
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    // Sanitize data
    const formData = sanitizeFormData(validationResult.data as ContactFormData);

    // Check if Supabase is configured
    if (!isSupabaseAdminConfigured() || !supabaseAdmin) {
      console.error('[API] Supabase is not configured');
      
      // [DEVELOPMENT MODE]: Log submission and return success
      // In production, this should return an error
      if (process.env.NODE_ENV === 'development') {
        console.log('[API] Form submission (Supabase not configured):', formData);
        return NextResponse.json({
          success: true,
          message: 'Form submitted successfully (development mode - not saved to database)',
        });
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Service configuration error. Please try again later.',
        },
        { status: 500 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('form_submissions')
      .insert({
        project_type: formData.projectType,
        selected_features: formData.selectedFeatures,
        additional_features: formData.additionalFeatures || null,
        budget: formData.budget,
        timeline: formData.timeline,
        project_brief: formData.projectBrief,
        company_name: formData.companyName || null,
        company_website: formData.companyWebsite || null,
        reference_links: formData.referenceLinks || null,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        best_time_to_contact: formData.bestTimeToContact,
        status: 'new',
        submitted_at: new Date().toISOString(),
      })
      .select('id')
      .single();

    if (error) {
      console.error('[API] Supabase error:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save submission. Please try again.',
        },
        { status: 500 }
      );
    }

    // Send email notification
    // [PLACEHOLDER]: Implement email notification
    try {
      await sendEmailNotification(formData, data.id);
    } catch (emailError) {
      // Log error but don't fail the submission
      console.error('[API] Email notification error:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: data.id,
    });
  } catch (error) {
    console.error('[API] Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}

/**
 * Send email notification to admin
 * [PLACEHOLDER]: Implement actual email sending logic
 */
async function sendEmailNotification(
  formData: ContactFormData,
  submissionId: string
): Promise<void> {
  // Check if Resend API key is configured
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!resendApiKey || !adminEmail) {
    console.warn('[API] Email not configured. Skipping email notification.');
    return;
  }

  // [TODO]: Implement Resend email integration
  // Example implementation:
  /*
  const { Resend } = require('resend');
  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: 'noreply@truqorun.com',
    to: adminEmail,
    subject: `New Project Inquiry from ${formData.fullName}`,
    html: generateEmailHtml(formData, submissionId),
  });
  */

  console.log('[API] Email notification would be sent to:', adminEmail);
  console.log('[API] Submission ID:', submissionId);
}

/**
 * Generate HTML email content
 * [PLACEHOLDER]: Enhance email template
 */
function generateEmailHtml(
  formData: ContactFormData,
  submissionId: string
): string {
  return `
    <h2>New Project Inquiry</h2>
    <p><strong>Submission ID:</strong> ${submissionId}</p>
    
    <h3>Contact Information</h3>
    <ul>
      <li><strong>Name:</strong> ${formData.fullName}</li>
      <li><strong>Email:</strong> ${formData.email}</li>
      <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
      <li><strong>Best Time:</strong> ${formData.bestTimeToContact}</li>
    </ul>
    
    <h3>Project Details</h3>
    <ul>
      <li><strong>Type:</strong> ${formData.projectType}</li>
      <li><strong>Budget:</strong> ${formData.budget}</li>
      <li><strong>Timeline:</strong> ${formData.timeline}</li>
    </ul>
    
    <h3>Project Brief</h3>
    <p>${formData.projectBrief}</p>
    
    ${
      formData.selectedFeatures.length > 0
        ? `
      <h3>Selected Features</h3>
      <ul>
        ${formData.selectedFeatures.map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
    `
        : ''
    }
    
    ${
      formData.companyName
        ? `
      <h3>Company Information</h3>
      <ul>
        <li><strong>Company:</strong> ${formData.companyName}</li>
        ${formData.companyWebsite ? `<li><strong>Website:</strong> ${formData.companyWebsite}</li>` : ''}
      </ul>
    `
        : ''
    }
  `;
}
