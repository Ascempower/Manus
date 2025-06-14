"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, X } from 'lucide-react';
import { hasHIPAAConsent, setHIPAAConsent, clearSensitiveData } from '@/lib/hipaa-compliance';

export default function HIPAANotice() {
  const [showNotice, setShowNotice] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has already seen the HIPAA notice
    const hasConsent = hasHIPAAConsent();
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

  const handleDecline = () => {
    localStorage.setItem('hipaa-notice-seen', 'true');
    setHIPAAConsent(false);
    clearSensitiveData();
    setShowNotice(false);
  };

  if (!isLoaded || !showNotice) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-brand-white border-brand-deep-forest-green shadow-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-brand-deep-forest-green" />
            <CardTitle className="text-brand-deep-forest-green text-xl">
              HIPAA Privacy Notice
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-brand-teal-blue/10 p-4 rounded-lg border border-brand-teal-blue/20">
            <div className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-brand-deep-forest-green mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-brand-deep-forest-green mb-2">
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
              <Eye className="h-4 w-4 text-brand-deep-forest-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-brand-deep-forest-green">What We Collect</h4>
                <p className="text-sm text-brand-black/70">
                  Only basic contact information and insurance preferences for quote purposes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Shield className="h-4 w-4 text-brand-deep-forest-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-brand-deep-forest-green">How We Protect It</h4>
                <p className="text-sm text-brand-black/70">
                  All data is encrypted, securely transmitted, and never shared with unauthorized parties.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium text-brand-deep-forest-green mb-3">
              Choose Your Privacy Level:
            </h4>
            
            <div className="space-y-3">
              <Button
                onClick={handleAcceptMinimal}
                className="w-full bg-brand-deep-forest-green hover:bg-brand-deep-forest-green/90 text-brand-white justify-start"
              >
                <Shield className="h-4 w-4 mr-2" />
                Maximum Privacy (Recommended)
                <span className="ml-auto text-xs opacity-80">No tracking, essential cookies only</span>
              </Button>
              
              <Button
                onClick={handleAcceptAnalytics}
                variant="outline"
                className="w-full border-brand-teal-blue text-brand-deep-forest-green hover:bg-brand-teal-blue/10 justify-start"
              >
                <Eye className="h-4 w-4 mr-2" />
                Allow Anonymous Analytics
                <span className="ml-auto text-xs opacity-80">HIPAA-compliant usage data only</span>
              </Button>
            </div>
          </div>

          <div className="text-xs text-brand-black/60 pt-2 border-t">
            <p>
              By using this website, you acknowledge that you understand our privacy practices. 
              For detailed information, please review our{' '}
              <a href="/privacy-policy" className="text-brand-deep-forest-green hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/hipaa-notice" className="text-brand-deep-forest-green hover:underline">
                HIPAA Notice
              </a>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}