'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitSuccess(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitSuccess && (
        <div className="mb-6 rounded border border-green-400 bg-green-100 p-4 text-green-700">
          Thank you for your message! We'll get back to you as soon as possible.
        </div>
      )}

      {submitError && (
        <div className="mb-6 rounded border border-red-400 bg-red-100 p-4 text-red-700">
          There was an error sending your message. Please try again or contact us directly at
          info@choiceinsurancehub.com.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-gray-700">
            Full Name
          </Label>
          <Input type="text" id="name" name="name" required className="mt-1 w-full" />
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-700">
            Email Address
          </Label>
          <Input type="email" id="email" name="email" required className="mt-1 w-full" />
        </div>
        <div>
          <Label htmlFor="phone" className="text-gray-700">
            Phone Number (Optional)
          </Label>
          <Input type="tel" id="phone" name="phone" className="mt-1 w-full" />
        </div>
        <div>
          <Label htmlFor="subject" className="text-gray-700">
            Subject
          </Label>
          <Input type="text" id="subject" name="subject" required className="mt-1 w-full" />
        </div>
        <div>
          <Label htmlFor="message" className="text-gray-700">
            Your Message
          </Label>
          <Textarea id="message" name="message" rows={5} required className="mt-1 w-full" />
        </div>
        <div>
          <Button
            type="submit"
            className="w-full bg-brand-warm-beige-coral text-brand-black hover:bg-brand-warm-beige-coral/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
}
