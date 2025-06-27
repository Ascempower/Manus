"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xpzvgkrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        setError('There was a problem submitting your form. Please try again.');
      }
    } catch (err) {
      setError('There was a problem connecting to our server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="(123) 456-7890"
            {...register('phone')}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="insuranceType">Insurance Type</Label>
          <Select onValueChange={(value) => setValue('insuranceType', value)}>
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
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
        <Input
          id="subject"
          placeholder="How can we help you?"
          {...register('subject', { required: 'Subject is required' })}
          className={errors.subject ? 'border-red-500' : ''}
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
        <Textarea
          id="message"
          placeholder="Please provide details about your insurance needs or questions..."
          rows={5}
          {...register('message', { required: 'Message is required' })}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>
      
      <div className="space-y-2">
        <Label>Preferred Contact Method</Label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="contact-email"
              value="email"
              {...register('preferredContact')}
              defaultChecked
              className="h-4 w-4 text-brand-deep-forest-green"
            />
            <Label htmlFor="contact-email" className="font-normal">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="contact-phone"
              value="phone"
              {...register('preferredContact')}
              className="h-4 w-4 text-brand-deep-forest-green"
            />
            <Label htmlFor="contact-phone" className="font-normal">Phone</Label>
          </div>
        </div>
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox
          id="terms"
          onCheckedChange={(checked) => setValue('agreeToTerms', checked === true)}
          required
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="terms"
            className="text-sm font-normal leading-snug text-gray-700"
          >
            I agree to the <a href="/privacy-policy" className="text-brand-teal-blue hover:underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-brand-teal-blue hover:underline">Terms of Service</a>. <span className="text-red-500">*</span>
          </Label>
        </div>
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-brand-deep-forest-green hover:bg-brand-deep-forest-green/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
      
      <div className="text-xs text-gray-500 text-center">
        <p>Your information is secure and will never be shared with third parties.</p>
        <p>Fields marked with <span className="text-red-500">*</span> are required.</p>
      </div>
    </form>
  );
}
