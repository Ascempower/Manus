'use client';

import React from 'react';

import { Cookie, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Safely check localStorage
    let consent: string | null = null;
    let hipaaNotice: string | null = null;

    try {
      // Check if user has already made a choice
      consent = localStorage.getItem('cookie-consent');
      hipaaNotice = localStorage.getItem('hipaa-notice-seen');
    } catch (e) {
      // Handle localStorage errors (e.g., in private browsing)
      console.error('LocalStorage access error:', e);
    }

    // Only show cookie consent if HIPAA notice has been handled
    if (!consent && hipaaNotice) {
      // Delay showing consent banner to not interfere with page load
      const timer = setTimeout(() => {
        setShowConsent(true);
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookie-consent', 'accepted');
    } catch (e) {
      console.error('Could not save cookie consent:', e);
    }

    setShowConsent(false);

    // Enable analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'denied', // Keep ads denied for privacy
        });
      } catch (e) {
        console.error('GTM consent update error:', e);
      }
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('cookie-consent', 'declined');
    } catch (e) {
      console.error('Could not save cookie consent:', e);
    }

    setShowConsent(false);

    // Disable analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
        });
      } catch (e) {
        console.error('GTM consent update error:', e);
      }
    }
  };

  if (!isLoaded || !showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="border-brand-teal-blue bg-brand-white shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-deep-forest-green" />
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-brand-deep-forest-green">Cookie Consent</h3>
              <p className="mb-4 text-sm text-brand-black/80">
                We use essential cookies for website functionality. Optional analytics cookies help
                us improve our services while maintaining HIPAA compliance. No personal health
                information is ever collected or transmitted.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  onClick={handleAccept}
                  className="bg-brand-deep-forest-green text-sm text-brand-white hover:bg-brand-deep-forest-green/90"
                  size="sm"
                >
                  Accept
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="border-brand-teal-blue text-sm text-brand-deep-forest-green hover:bg-brand-teal-blue/10"
                  size="sm"
                >
                  Decline
                </Button>
              </div>
            </div>
            <Button
              onClick={handleDecline}
              variant="ghost"
              size="sm"
              className="h-auto p-1 text-brand-black/60 hover:text-brand-black"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
