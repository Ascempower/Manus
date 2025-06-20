'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getCookie, setCookie } from '@/lib/cookies';

const COOKIE_CONSENT_NAME = 'cookie-consent';
const COOKIE_CONSENT_DURATION = 365 * 24 * 60 * 60; // 1 year in seconds

export default function CookieConsent() {
  const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    // Check if user has already given consent
    const consent = getCookie(COOKIE_CONSENT_NAME);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_CONSENT_NAME, 'accepted', {
      maxAge: COOKIE_CONSENT_DURATION,
      sameSite: 'Strict',
      secure: true
    });
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie(COOKIE_CONSENT_NAME, 'declined', {
      maxAge: COOKIE_CONSENT_DURATION,
      sameSite: 'Strict',
      secure: true
    });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="border-orange-200 bg-white shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Cookie Notice</CardTitle>
          <CardDescription className="text-sm">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            These cookies are essential for the website to function properly.
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-xs text-muted-foreground">
            By clicking "Accept", you consent to our use of essential cookies. 
            We do not use tracking or advertising cookies.
          </p>
        </CardContent>
        <CardFooter className="flex gap-2 pt-0">
          <Button 
            onClick={handleAccept}
            className="flex-1 bg-orange-600 hover:bg-orange-700"
            size="sm"
          >
            Accept
          </Button>
          <Button 
            onClick={handleDecline}
            variant="outline"
            className="flex-1"
            size="sm"
          >
            Decline
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}'use client';



const COOKIE_CONSENT_NAME = 'cookie-consent';
const COOKIE_CONSENT_DURATION = 365 * 24 * 60 * 60; // 1 year in seconds

export default function CookieConsent() {
  const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    // Check if user has already given consent
    const consent = getCookie(COOKIE_CONSENT_NAME);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_CONSENT_NAME, 'accepted', {
      maxAge: COOKIE_CONSENT_DURATION,
      sameSite: 'Strict',
      secure: true
    });
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie(COOKIE_CONSENT_NAME, 'declined', {
      maxAge: COOKIE_CONSENT_DURATION,
      sameSite: 'Strict',
      secure: true
    });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="border-orange-200 bg-white shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Cookie Notice</CardTitle>
          <CardDescription className="text-sm">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            These cookies are essential for the website to function properly.
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-xs text-muted-foreground">
            By clicking "Accept", you consent to our use of essential cookies. 
            We do not use tracking or advertising cookies.
          </p>
        </CardContent>
        <CardFooter className="flex gap-2 pt-0">
          <Button 
            onClick={handleAccept}
            className="flex-1 bg-orange-600 hover:bg-orange-700"
            size="sm"
          >
            Accept
          </Button>
          <Button 
            onClick={handleDecline}
            variant="outline"
            className="flex-1"
            size="sm"
          >
            Decline
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}