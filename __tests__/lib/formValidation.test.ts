/**
 * Tests for form validation utilities
 * @module __tests__/lib/formValidation
 */

import {
  validateField,
  validateForm,
  validateStep,
  isFormComplete,
  sanitizeFormData,
} from "@/lib/formValidation";
import type { ContactFormData } from "@/types/form";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Minimal valid form data that passes full schema validation */
const validFormData: ContactFormData = {
  projectType: "ecommerce",
  selectedFeatures: ["payment-gateway", "product-catalog"],
  additionalFeatures: "",
  budget: "2k-4k",
  timeline: "2-4-weeks",
  projectBrief:
    "We need an online store for handmade furniture with payment integration.",
  companyName: "Wood & Co",
  companyWebsite: "https://woodandco.com",
  referenceLinks: "",
  fullName: "Jane Doe",
  email: "jane@woodandco.com",
  phone: "+61 400 123 456",
  bestTimeToContact: "morning",
};

// ---------------------------------------------------------------------------
// validateField
// ---------------------------------------------------------------------------

describe("validateField", () => {
  it("returns null for a valid email", () => {
    expect(validateField("email", "user@example.com")).toBeNull();
  });

  it("returns an error for an invalid email", () => {
    const error = validateField("email", "not-an-email");
    expect(error).toBeTruthy();
  });

  it("returns null for a valid projectType enum value", () => {
    expect(validateField("projectType", "ecommerce")).toBeNull();
    expect(validateField("projectType", "not-sure")).toBeNull();
  });

  it("returns an error for an invalid projectType", () => {
    expect(validateField("projectType", "invalid-type")).toBeTruthy();
  });

  it("returns null for a valid fullName", () => {
    expect(validateField("fullName", "John Smith")).toBeNull();
  });

  it("returns an error when fullName is too short", () => {
    expect(validateField("fullName", "J")).toBeTruthy();
  });

  it("accepts an empty optional phone field", () => {
    expect(validateField("phone", "")).toBeNull();
  });

  it("returns an error for an invalid phone number", () => {
    expect(validateField("phone", "abc")).toBeTruthy();
  });

  it("validates projectBrief minimum length", () => {
    expect(validateField("projectBrief", "short")).toBeTruthy();
    expect(
      validateField(
        "projectBrief",
        "This is a valid brief that exceeds the minimum length requirement.",
      ),
    ).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// validateStep
// ---------------------------------------------------------------------------

describe("validateStep", () => {
  it("step 1 requires projectType", () => {
    const errors = validateStep(1, {});
    expect(errors).toHaveProperty("projectType");
  });

  it("step 1 passes with a valid projectType", () => {
    const errors = validateStep(1, { projectType: "landing-page" });
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it("step 3 requires budget, timeline, and projectBrief", () => {
    const errors = validateStep(3, {});
    expect(errors).toHaveProperty("budget");
    expect(errors).toHaveProperty("timeline");
    expect(errors).toHaveProperty("projectBrief");
  });

  it("step 4 requires fullName, email, bestTimeToContact", () => {
    const errors = validateStep(4, {});
    expect(errors).toHaveProperty("fullName");
    expect(errors).toHaveProperty("email");
    expect(errors).toHaveProperty("bestTimeToContact");
  });

  it("step 5 (review) returns no errors", () => {
    const errors = validateStep(5, {});
    expect(Object.keys(errors)).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// validateForm
// ---------------------------------------------------------------------------

describe("validateForm", () => {
  it("returns no errors for complete valid data", () => {
    const errors = validateForm(validFormData);
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it("returns errors for completely empty data", () => {
    const errors = validateForm({});
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it("returns an email error when email is invalid", () => {
    const errors = validateForm({ ...validFormData, email: "bad" });
    expect(errors).toHaveProperty("email");
  });
});

// ---------------------------------------------------------------------------
// isFormComplete
// ---------------------------------------------------------------------------

describe("isFormComplete", () => {
  it("returns true for valid complete data", () => {
    expect(isFormComplete(validFormData)).toBe(true);
  });

  it("returns false when required fields are missing", () => {
    expect(isFormComplete({})).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// sanitizeFormData
// ---------------------------------------------------------------------------

describe("sanitizeFormData", () => {
  it("trims whitespace from string fields", () => {
    const dirty: ContactFormData = {
      ...validFormData,
      fullName: "  Jane Doe  ",
      email: "  JANE@example.COM  ",
      projectBrief: "  Some brief  ",
    };

    const clean = sanitizeFormData(dirty);
    expect(clean.fullName).toBe("Jane Doe");
    expect(clean.projectBrief).toBe("Some brief");
  });

  it("lowercases the email", () => {
    const dirty: ContactFormData = {
      ...validFormData,
      email: "  JANE@Example.COM  ",
    };

    const clean = sanitizeFormData(dirty);
    expect(clean.email).toBe("jane@example.com");
  });

  it("preserves non-string fields untouched", () => {
    const clean = sanitizeFormData(validFormData);
    expect(clean.selectedFeatures).toEqual(validFormData.selectedFeatures);
    expect(clean.projectType).toBe(validFormData.projectType);
  });
});
