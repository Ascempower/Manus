"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    const hipaaNotice = localStorage.getItem('hipaa-notice-seen');
    
    // Only show cookie consent if HIPAA notice has been handled
    const hipaaNotice = localStorage.getItem('hipaa-notice-seen');
    
    // Only show cookie consent if HIPAA notice has been handled
    if (!consent && hipaaNotice && hipaaNotice) {
      // Delay showing consent banner to not interfere with page load
      setTimeout(() => {
        setShowConsent(true);
        setIsLoaded(true);
      }, 2000);
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
    
    // Enable analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied', // Keep ads denied for privacy
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
    
    // Disable analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!isLoaded || !showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-brand-white border-brand-teal-blue shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-brand-deep-forest-green mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-brand-deep-forest-green mb-2">
                Cookie Consent
              </h3>
              <p className="text-sm text-brand-black/80 mb-4">
                We use essential cookies for website functionality. Optional analytics cookies 
                helpe maintaining HIPAA compliance. No personal 
                health information is ever collected urrtransmitted while maintaining HIPAA compliance. No personal 
                health information is ever collected or transmitted.
              </p>
              <div className="flex gap-2 flex-col sm:flex-row">
                <Button
                  onClick={handleAccept}
                  className="bg-brand-deep-forest-green hover:bg-brand-deep-forest-green/90 text-brand-white text-sm"
                  size="sm"
                >
                  Accept
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="border-brand-teal-blue text-brand-deep-forest-green hover:bg-brand-teal-blue/10 text-sm"
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
              className="p-1 h-auto text-brand-black/60 hover:text-brand-black"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}