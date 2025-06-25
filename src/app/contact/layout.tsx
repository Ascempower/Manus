import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const metadata: Metadata = {
  title: 'Contact Us - Choice Insurance Agency',
  description: 'Get in touch with Choice Insurance Agency for expert advice on Medicare, life, and health insurance. Book a consultation or request a quote today.',
  keywords: 'contact insurance, insurance consultation, Medicare help, insurance quotes, Choice Insurance Agency',
  openGraph: {
    title: 'Contact Choice Insurance Agency',
    description: 'Get expert insurance advice and personalized consultations',
    type: 'website',
  },
};

export { metadata };

type ContactLayoutProps = {
  children: ReactNode;
};

function ContactLayout({ children }: ContactLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

export default ContactLayout;