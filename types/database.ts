/**
 * Supabase Database Type Definitions
 * 
 * This file contains TypeScript types for the Supabase database schema.
 * 
 * [SETUP]: Create the form_submissions table in Supabase with this SQL:
 * 
 * ```sql
 * CREATE TABLE form_submissions (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   project_type TEXT NOT NULL,
 *   selected_features TEXT[] DEFAULT '{}',
 *   additional_features TEXT,
 *   budget TEXT NOT NULL,
 *   timeline TEXT NOT NULL,
 *   project_brief TEXT NOT NULL,
 *   company_name TEXT,
 *   company_website TEXT,
 *   reference_links TEXT,
 *   full_name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   phone TEXT,
 *   best_time_to_contact TEXT NOT NULL,
 *   status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in-progress', 'completed', 'archived')),
 *   notes TEXT,
 *   submitted_at TIMESTAMPTZ DEFAULT NOW(),
 *   updated_at TIMESTAMPTZ DEFAULT NOW(),
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 * 
 * -- Create index for faster queries
 * CREATE INDEX idx_form_submissions_status ON form_submissions(status);
 * CREATE INDEX idx_form_submissions_submitted_at ON form_submissions(submitted_at DESC);
 * CREATE INDEX idx_form_submissions_email ON form_submissions(email);
 * 
 * -- Enable Row Level Security (optional, but recommended)
 * ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
 * 
 * -- Create policy to allow inserts from anyone (for form submissions)
 * CREATE POLICY "Allow public inserts" ON form_submissions
 *   FOR INSERT TO anon
 *   WITH CHECK (true);
 * 
 * -- Create policy to allow reads only for authenticated users (for dashboard)
 * CREATE POLICY "Allow authenticated reads" ON form_submissions
 *   FOR SELECT TO authenticated
 *   USING (true);
 * ```
 * 
 * @module types/database
 */

export interface Database {
  public: {
    Tables: {
      form_submissions: {
        Row: {
          id: string;
          project_type: string;
          selected_features: string[];
          additional_features: string | null;
          budget: string;
          timeline: string;
          project_brief: string;
          company_name: string | null;
          company_website: string | null;
          reference_links: string | null;
          full_name: string;
          email: string;
          phone: string | null;
          best_time_to_contact: string;
          status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'archived';
          notes: string | null;
          submitted_at: string;
          updated_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_type: string;
          selected_features?: string[];
          additional_features?: string | null;
          budget: string;
          timeline: string;
          project_brief: string;
          company_name?: string | null;
          company_website?: string | null;
          reference_links?: string | null;
          full_name: string;
          email: string;
          phone?: string | null;
          best_time_to_contact: string;
          status?: 'new' | 'contacted' | 'in-progress' | 'completed' | 'archived';
          notes?: string | null;
          submitted_at?: string;
          updated_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_type?: string;
          selected_features?: string[];
          additional_features?: string | null;
          budget?: string;
          timeline?: string;
          project_brief?: string;
          company_name?: string | null;
          company_website?: string | null;
          reference_links?: string | null;
          full_name?: string;
          email?: string;
          phone?: string | null;
          best_time_to_contact?: string;
          status?: 'new' | 'contacted' | 'in-progress' | 'completed' | 'archived';
          notes?: string | null;
          submitted_at?: string;
          updated_at?: string;
          created_at?: string;
        };
      };
    };
  };
}
