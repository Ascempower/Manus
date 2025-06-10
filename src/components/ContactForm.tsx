
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(&quot;Form submitted! (This is a demo - no data was actually sent)&quot;);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-gray-700">Full Name</Label>
        <Input type="text" id="name" name="name" required className="mt-1 w-full" />
      </div>
      <div>
        <Label htmlFor="email" className="text-gray-700">Email Address</Label>
        <Input type="email" id="email" name="email" required className="mt-1 w-full" />
      </div>
      <div>
        <Label htmlFor="phone" className="text-gray-700">Phone Number (Optional)</Label>
        <Input type="tel" id="phone" name="phone" className="mt-1 w-full" />
      </div>
      <div>
        <Label htmlFor="subject" className="text-gray-700">Subject</Label>
        <Input type="text" id="subject" name="subject" required className="mt-1 w-full" />
      </div>
      <div>
        <Label htmlFor="message" className="text-gray-700">Your Message</Label>
        <Textarea id="message" name="message" rows={5} required className="mt-1 w-full" />
      </div>
      <div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Send Message
        </Button>
      </div>
    </form>
  );
}

