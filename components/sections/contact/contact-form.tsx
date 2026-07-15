"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp } from "@/lib/animations";
import { ArrowRight, Upload } from "lucide-react";

// Zod validation schema
export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().min(2, "Please select a country"),
  projectType: z.string().min(1, "Please select a project type"),
  estimatedBudget: z.string().min(1, "Please select an estimated budget"),
  preferredConsultationMethod: z.string().min(1, "Please select a consultation method"),
  projectLocation: z.string().min(2, "Please enter a project location"),
  desiredTimeline: z.string().optional(),
  projectDescription: z.string().min(10, "Please provide a brief project description (10+ characters)"),
  preferredContactDate: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must consent to being contacted"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Budget options
export const BUDGET_OPTIONS = [
  { label: "Under $50,000", value: "under-50k" },
  { label: "$50,000 - $100,000", value: "50k-100k" },
  { label: "$100,000 - $250,000", value: "100k-250k" },
  { label: "$250,000 - $500,000", value: "250k-500k" },
  { label: "$500,000 - $1,000,000", value: "500k-1m" },
  { label: "Over $1,000,000", value: "over-1m" },
];

// Project type options
export const PROJECT_TYPE_OPTIONS = [
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Industrial", value: "industrial" },
  { label: "Mixed-Use", value: "mixed-use" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Education", value: "education" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Government", value: "government" },
];

// Consultation method options
export const CONSULTATION_METHOD_OPTIONS = [
  { label: "Video Call", value: "video-call" },
  { label: "Phone Call", value: "phone-call" },
  { label: "In-Person Meeting", value: "in-person" },
];

// Country options (for simplicity, we'll use a basic list, but this could be expanded)
export const COUNTRY_OPTIONS = [
  { label: "Uganda", value: "UG" },
  { label: "Kenya", value: "KE" },
  { label: "Tanzania", value: "TZ" },
  { label: "Rwanda", value: "RW" },
  { label: "Burundi", value: "BI" },
  { label: "South Sudan", value: "SS" },
  { label: "United States", value: "US" },
  { label: "United Kingdom", value: "GB" },
  { label: "Other", value: "other" },
];

interface ContactFormProps {
  onSubmit?: (data: ContactFormValues) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      consent: false,
    },
  });

  const internalOnSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    onSubmit?.(data);
  };

  return (
    <FadeUp>
      <Card className="p-6 md:p-8 lg:p-10">
        <form onSubmit={handleSubmit(internalOnSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-semibold text-heading mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-heading">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="John Doe"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-sm text-danger">{errors.fullName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-heading">
                  Company (Optional)
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Company Name"
                  {...register("company")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-heading">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="john@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-danger">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-heading">
                  Phone Number (Optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="+256 XXX XXX XXX"
                  {...register("phone")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="country" className="text-sm font-medium text-heading">
                  Country
                </label>
                <select
                  id="country"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  {...register("country")}
                >
                  <option value="">Select a country</option>
                  {COUNTRY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-sm text-danger">{errors.country.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-xl font-semibold text-heading mb-6">Project Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-heading">
                  Project Type
                </label>
                <select
                  id="projectType"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  {...register("projectType")}
                >
                  <option value="">Select a project type</option>
                  {PROJECT_TYPE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-sm text-danger">{errors.projectType.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="estimatedBudget" className="text-sm font-medium text-heading">
                  Estimated Budget
                </label>
                <select
                  id="estimatedBudget"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  {...register("estimatedBudget")}
                >
                  <option value="">Select a budget range</option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.estimatedBudget && (
                  <p className="text-sm text-danger">{errors.estimatedBudget.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="preferredConsultationMethod" className="text-sm font-medium text-heading">
                  Preferred Consultation Method
                </label>
                <select
                  id="preferredConsultationMethod"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  {...register("preferredConsultationMethod")}
                >
                  <option value="">Select a method</option>
                  {CONSULTATION_METHOD_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.preferredConsultationMethod && (
                  <p className="text-sm text-danger">{errors.preferredConsultationMethod.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="projectLocation" className="text-sm font-medium text-heading">
                  Project Location
                </label>
                <input
                  id="projectLocation"
                  type="text"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="City, Country"
                  {...register("projectLocation")}
                />
                {errors.projectLocation && (
                  <p className="text-sm text-danger">{errors.projectLocation.message}</p>
                )}
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="desiredTimeline" className="text-sm font-medium text-heading">
                  Desired Timeline (Optional)
                </label>
                <input
                  id="desiredTimeline"
                  type="text"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g., Q4 2024 - Q2 2025"
                  {...register("desiredTimeline")}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="projectDescription" className="text-sm font-medium text-heading">
                  Project Description
                </label>
                <textarea
                  id="projectDescription"
                  rows={4}
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us about your project..."
                  {...register("projectDescription")}
                />
                {errors.projectDescription && (
                  <p className="text-sm text-danger">{errors.projectDescription.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* File Upload & Preferences */}
          <div>
            <h3 className="text-xl font-semibold text-heading mb-6">Additional Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="preferredContactDate" className="text-sm font-medium text-heading">
                  Preferred Contact Date (Optional)
                </label>
                <input
                  id="preferredContactDate"
                  type="date"
                  className="w-full p-3 border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  {...register("preferredContactDate")}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-heading">
                  File Upload (Coming Soon)
                </label>
                <div className="flex items-center justify-center p-6 border border-dashed border-border rounded-lg bg-muted/30">
                  <Upload className="h-8 w-8 text-muted-foreground mr-3" />
                  <span className="text-muted-foreground">Drag and drop files here or click to browse</span>
                </div>
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                className="mt-1"
                {...register("consent")}
              />
              <label htmlFor="consent" className="text-sm text-body">
                I agree to be contacted by TEI-HA Construction Services about my project. I understand that my information will be used in accordance with the privacy policy.
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-danger">{errors.consent.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button size="lg" type="submit" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? "Submitting..." : "Schedule Consultation"}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </Card>
    </FadeUp>
  );
}
