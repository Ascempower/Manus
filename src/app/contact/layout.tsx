import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Choice Insurance Hub',
  description:
    'Get in touch with Choice Insurance Hub for expert advice on Medicare, life, and health insurance. Book a consultation or request a quote today.',
  keywords:
    'insurance contact, insurance consultation, insurance quote, Choice Insurance Hub contact, insurance agency phone number, insurance agency email',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
