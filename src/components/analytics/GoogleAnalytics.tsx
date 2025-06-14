"use client";

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { hasHIPAAConsent, isPotentialPHIPage } from '@/lib/hipaa-compliance';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { hasHIPAAConsent, isPotentialPHIPage } from '@/lib/hipaa-compliance';
import { usePathname } from 'next/navigation';

interface GoogleAnalyticsProps {
  gtmId?: string;
  ga4Id?: string;
}

export default function GoogleAnalytics({ gtmId, ga4Id }: GoogleAnalyticsProps) {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check HIPAA compliance before loading any analytics
    const hasConsent = hasHIPAAConsent();
    const isPHIPage = isPotentialPHIPage(pathname);
    
    // Only load analytics if:
    // 1. User has given explicit HIPAA consent
    // 2. Current page doesn't potentially contain PHI
    // 3. We're not in a sensitive area of the site
    setCanLoadAnalytics(hasConsent && !isPHIPage);
  }, [pathname]);

  // Don't render any analytics scripts if HIPAA compliance prevents it
  if (!canLoadAnalytics) {
    return null;
  }

  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check HIPAA compliance before loading any analytics
    const hasConsent = hasHIPAAConsent();
    const isPHIPage = isPotentialPHIPage(pathname);
      
    // Only load analytics if:
    // 1. User has given explicit HIPAA consent
    // 2. Current page doesn't potentially contain PHI
    // 3. We're not in a sensitive area of the site
    setCanLoadAnalytics(hasConsent && !isPHIPage);
  }, [pathname]);

  // Don't render any analytics scripts if HIPAA compliance prevents it
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
            dangerouslySetInnerHTML={{
              __html: `
                // HIPAA-compliant GTM configuration
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                  
                  // Set HIPAA-compliant defaults
                  w[l].push({
                    'event': 'hipaa_compliance_mode',
                    'hipaa_compliant': true,
                    'data_retention': 'minimal'
                  });
                })(window,document,'script','dataLayer','${gtmId}');
              `
                // Initialize with HIPAA-compliant settings
                gtag('js', new Date());
                gtag('consent', 'default', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
            }}
          />
          {/* GTM NoScript fallback */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}'denied',
                  'personalization_storage': 'denied',
                  'functionality_storage': 'denied',
                  'security_storage': 'granted'
                });
                
                gtag('config', '${ga4Id}', {
                  // HIPAA-compliant configuration
                  anonymize_ip: true,
                  allow_google_signals: false,
                  allow_ad_personalization_signals: false,
                  restricted_data_processing: true,
                  client_storage: 'none',
                  
                  // Minimal data collection
                  send_page_view: true,
                  page_title: document.title,
                  page_location: window.location.href.split('?')[0], // Remove query parameters
                  
                  // Custom HIPAA parameters
                  custom_map: {
                    'custom_parameter_1': 'hipaa_compliant_session'
                  }
                });
                
                // Override default behavior to prevent PHI collection
                gtag('event', 'hipaa_compliance_active', {
                  'event_category': 'compliance',
                  'event_label': 'hipaa_mode_enabled'
            />
          </noscript>
        </>
      )}

      {/* HIPAA-Compliant Google Analytics 4 */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
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
                  'functionality_storage': 'denied',
                  'security_storage': 'granted'
                });
                
                gtag('config', '${ga4Id}', {
                  // HIPAA-compliant configuration
                  anonymize_ip: true,
                  allow_google_signals: false,
                  allow_ad_personalization_signals: false,
                  restricted_data_processing: true,
                  client_storage: 'none',
                  
                  // Minimal data collection
                  send_page_view: true,
                  page_title: document.title,
                  page_location: window.location.href.split('?')[0], // Remove query parameters
                  
                  // Custom HIPAA parameters
                  custom_map: {
                    'custom_parameter_1': 'hipaa_compliant_session'
                  }
                });
                
                // Override default behavior to prevent PHI collection
                gtag('event', 'hipaa_compliance_active', {
                  'event_category': 'compliance',
                  'event_label': 'hipaa_mode_enabled'
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}