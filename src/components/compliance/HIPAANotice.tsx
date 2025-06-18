'use client';

import React from 'react';

import { Eye, Lock, Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { setHIPAAConsent } from '@/lib/hipaa-compliance';

export default function HIPAANotice() {
  const [showNotice, setShowNotice] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Check if user has already seen the HIPAA notice
    const hasSeenNotice = localStorage.getItem('hipaa-notice-seen');

    if (!hasSeenNotice) {
      // Show notice after a brief delay to not interfere with page load
      setTimeout(() => {
        setShowNotice(true);
        setIsLoaded(true);
      }, 1500);
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleAcceptMinimal = () => {
    localStorage.setItem('hipaa-notice-seen', 'true');
    setHIPAAConsent(false); // No tracking, minimal data collection
    setShowNotice(false);
  };

  const handleAcceptAnalytics = () => {
    localStorage.setItem('hipaa-notice-seen', 'true');
    setHIPAAConsent(true); // Allow HIPAA-compliant analytics
    setShowNotice(false);
  };

  // Decline handler available if needed
  // const handleDecline = () => {
  //   localStorage.setItem('hipaa-notice-seen', 'true');
  //   setHIPAAConsent(false);
  //   clearSensitiveData();
  //   setShowNotice(false);
  // };

  if (!isLoaded || !showNotice) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="w-full max-w-2xl border-brand-deep-forest-green bg-brand-white shadow-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-brand-deep-forest-green" />
            <CardTitle className="text-xl text-brand-deep-forest-green">
              HIPAA Privacy Notice
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-brand-teal-blue/20 bg-brand-teal-blue/10 p-4">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-deep-forest-green" />
              <div>
                <h3 className="mb-2 font-semibold text-brand-deep-forest-green">
                  Your Health Information is Protected
                </h3>
                <p className="text-sm text-brand-black/80">
                  As a healthcare-related service, Choice Insurance is committed to protecting your
                  health information in compliance with HIPAA regulations. We do not collect, store,
                  or transmit Protected Health Information (PHI) through this website.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Eye className="mt-1 h-4 w-4 flex-shrink-0 text-brand-deep-forest-green" />
              <div>
                <h4 className="font-medium text-brand-deep-forest-green">What We Collect</h4>
                <p className="text-sm text-brand-black/70">
                  Only basic contact information and insurance preferences for quote purposes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="mt-1 h-4 w-4 flex-shrink-0 text-brand-deep-forest-green" />
              <div>
                <h4 className="font-medium text-brand-deep-forest-green">How We Protect It</h4>
                <p className="text-sm text-brand-black/70">
                  All data is encrypted, securely transmitted, and never shared with unauthorized
                  parties.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="mb-3 font-medium text-brand-deep-forest-green">
              Choose Your Privacy Level:
            </h4>

            <div className="space-y-3">
              <Button
                onClick={handleAcceptMinimal}
                className="w-full justify-start bg-brand-deep-forest-green text-brand-white hover:bg-brand-deep-forest-green/90"
              >
                <Shield className="mr-2 h-4 w-4" />
                Maximum Privacy (Recommended)
                <span className="ml-auto text-xs opacity-80">
                  No tracking, essential cookies only
                </span>
              </Button>

              <Button
                onClick={handleAcceptAnalytics}
                variant="outline"
                className="w-full justify-start border-brand-teal-blue text-brand-deep-forest-green hover:bg-brand-teal-blue/10"
              >
                <Eye className="mr-2 h-4 w-4" />
                Allow Anonymous Analytics
                <span className="ml-auto text-xs opacity-80">HIPAA-compliant usage data only</span>
              </Button>
            </div>
          </div>

          <div className="border-t pt-2 text-xs text-brand-black/60">
            <p>
              By using this website, you acknowledge that you understand our privacy practices. For
              detailed information, please review our{' '}
              <a href="/privacy-policy" className="text-brand-deep-forest-green hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/hipaa-notice" className="text-brand-deep-forest-green hover:underline">
                HIPAA Notice
              </a>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
