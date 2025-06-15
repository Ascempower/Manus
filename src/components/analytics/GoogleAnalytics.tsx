"use client";

import Script from 'next/script';
import React from 'react';
import { hasHIPAAConsent, isPotentialPHIPage } from '@/lib/hipaa-compliance';
import { usePathname } from 'next/navigation';

interface GoogleAnalyticsProps {
  gtmId?: string;
  ga4Id?: string;
}

export default function GoogleAnalytics({ gtmId, ga4Id }: GoogleAnalyticsProps) {
  const [canLoadAnalytics, setCanLoadAnalytics] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    // Check HIPAA compliance before loading any analytics
    const hasConsent = hasHIPAAConsent();
    const isPHIPage = isPotentialPHIPage(pathname);
    
    // Only load analytics if we have consent and not on PHI pages
    if (hasConsent && !isPHIPage) {
      setCanLoadAnalytics(true);
    } else {
      setCanLoadAnalytics(false);
    }
  }, [pathname]);

  // Don't render analytics if not compliant
  if (!canLoadAnalytics) {
    return null;
  }

  return (
    <>
      {/* HIPAA-Compliant Google Tag Manager */}
      {gtmId && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
          >
            {`
                // HIPAA-compliant GTM configuration
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
          {/* GTM NoScript fallback */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* HIPAA-Compliant Google Analytics 4 */}
      {ga4Id && (
        <>
          <Script
            id="ga4-loader"
            strategy="afterInteractive"
          >
            {`
                // Load GA4 script
                (function() {
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=${ga4Id}';
                  document.head.appendChild(script);
                })();
            `}
          </Script>
          <Script
            id="ga4-script"
            strategy="afterInteractive"
          >
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                // Initialize with HIPAA-compliant settings
                gtag('js', new Date());
                gtag('consent', 'default', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'personalization_storage': 'denied',
                  'functionality_storage': 'granted',
                  'security_storage': 'granted'
                });
                
                gtag('config', '${ga4Id}', {
                  'anonymize_ip': true,
                  'allow_google_signals': false,
                  'allow_ad_personalization_signals': false,
                  'restricted_data_processing': true
                });
            `}
          </Script>
        </>
      )}
    </>
  );
}

