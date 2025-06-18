import Link from 'next/link';

import { Calendar, ExternalLink, Mail, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { trackInsuranceEvents } from '@/lib/analytics';
import { type CTA_LINKS, getCTALink } from '@/lib/link-manager';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  ctaKey: keyof typeof CTA_LINKS;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  className?: string;
  children?: React.ReactNode;
  trackingContext?: string;
  showIcon?: boolean;
  fullWidth?: boolean;
}

export default function CTAButton({
  ctaKey,
  size = 'default',
  variant = 'default',
  className,
  children,
  trackingContext = 'cta_button',
  showIcon = false,
  fullWidth = false,
}: CTAButtonProps) {
  const cta = getCTALink(ctaKey);

  const handleClick = () => {
    // Track the CTA click
    if (cta.external) {
      if (cta.href.includes('calendly')) {
        trackInsuranceEvents.consultationBooked(trackingContext);
      } else if (cta.href.includes('planenroll')) {
        trackInsuranceEvents.externalLinkClicked('planenroll');
      } else {
        trackInsuranceEvents.externalLinkClicked(ctaKey);
      }
    } else {
      trackInsuranceEvents.internalLinkClicked(ctaKey, trackingContext);
    }
  };

  const getIcon = () => {
    if (!showIcon) return null;

    if (cta.href.includes('calendly')) return <Calendar className="h-4 w-4" />;
    if (cta.href.includes('tel:')) return <Phone className="h-4 w-4" />;
    if (cta.href.includes('mailto:')) return <Mail className="h-4 w-4" />;
    if (cta.external) return <ExternalLink className="h-4 w-4" />;

    return null;
  };

  const buttonClasses = cn(
    cta.primary &&
      variant === 'default' &&
      'bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold',
    fullWidth && 'w-full',
    className
  );

  const buttonContent = (
    <>
      {children || cta.text}
      {getIcon()}
    </>
  );

  if (cta.external) {
    return (
      <Button size={size} variant={variant} className={buttonClasses} asChild>
        <a href={cta.href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
          {buttonContent}
        </a>
      </Button>
    );
  }

  return (
    <Button size={size} variant={variant} className={buttonClasses} asChild>
      <Link href={cta.href} onClick={handleClick}>
        {buttonContent}
      </Link>
    </Button>
  );
}

// Convenience components for common CTAs
export function BookConsultationButton({
  className,
  size = 'lg',
  trackingContext = 'book_consultation',
  showIcon = true,
  fullWidth = false,
}: Omit<CTAButtonProps, 'ctaKey'>) {
  return (
    <CTAButton
      ctaKey="book_consultation"
      size={size}
      className={className}
      trackingContext={trackingContext}
      showIcon={showIcon}
      fullWidth={fullWidth}
    />
  );
}

export function GetQuoteButton({
  className,
  size = 'lg',
  trackingContext = 'get_quote',
  showIcon = true,
  fullWidth = false,
}: Omit<CTAButtonProps, 'ctaKey'>) {
  return (
    <CTAButton
      ctaKey="get_quote"
      size={size}
      className={className}
      trackingContext={trackingContext}
      showIcon={showIcon}
      fullWidth={fullWidth}
    />
  );
}

export function ContactUsButton({
  className,
  size = 'default',
  trackingContext = 'contact_us',
  fullWidth = false,
}: Omit<CTAButtonProps, 'ctaKey'>) {
  return (
    <CTAButton
      ctaKey="contact_us"
      size={size}
      className={className}
      trackingContext={trackingContext}
      fullWidth={fullWidth}
    />
  );
}
