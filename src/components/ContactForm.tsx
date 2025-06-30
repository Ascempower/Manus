"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  insuranceType: string;
  preferredContact: string;
  agreeToTerms: boolean;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>();

  useEffect(() => {
    register("insuranceType", {
      required: "Please select an insurance type",
    });
    register("agreeToTerms", {
      required: "You must accept the terms",
    });
  }, [register]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xpzvgkrj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _replyto: data.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        setError("There was a problem submitting your form. Please try again.");
      }
    } catch (err) {
      setError("There was a problem connecting to our server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your message has been sent successfully. We'll get back to you as soon as possible.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-brand-deep-forest-green hover:bg-brand-deep-forest-green/90"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <input type="hidden" name="_replyto" value={watch("email")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="John Doe"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="you@example.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="(123) 456-7890" {...register("phone")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="insuranceType">Insurance Type <span className="text-red-500">*</span></Label>
          <Select onValueChange={(val) => setValue("insuranceType", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select insurance type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medicare">Medicare</SelectItem>
              <SelectItem value="health">Health Insurance</SelectItem>
              <SelectItem value="life">Life Insurance</SelectItem>
              <SelectItem value="annuities">Annuities</SelectItem>
              <SelectItem value="final-expense">Final Expense</SelectItem>
              <SelectItem value="hospital-indemnity">Hospital Indemnity</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.insuranceType && <p className="text-red-500 text-sm">{errors.insuranceType.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
        <Input
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          placeholder="How can we help you?"
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
        <Textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          placeholder="Please provide details..."
          rows={5}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>Preferred Contact Method</Label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="email"
              {...register("preferredContact", { required: true })}
              defaultChecked
            />
            Email
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="phone"
              {...register("preferredContact", { required: true })}
            />
            Phone
          </label>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="agreeToTerms"
          onCheckedChange={(checked) => setValue("agreeToTerms", checked === true)}
        />
        <Label htmlFor="agreeToTerms" className="text-sm font-normal leading-snug">
          I agree to the <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-blue-600 underline">Terms of Service</a>. <span className="text-red-500">*</span>
        </Label>
      </div>
      {errors.agreeToTerms && (
        <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
      )}

      <Button
        type="submit"
        className="w-full bg-brand-deep-forest-green hover:bg-brand-deep-forest-green/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
