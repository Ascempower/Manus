import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function ContactForm() {
  const containerRef = useRef(null);

  return (
    <div
      style={{ 
        width: '100%', 
        minHeight: '1400px', 
        padding: '2rem 0'
      }}
      ref={containerRef}
    >
      <div id="ff-compose"></div>
      
      {/* Use Next.js Script component for better CSP compatibility */}
      <Script
        src="https://formfacade.com/include/108178716957596495252/form/1FAIpQLScw-dgH0FXYkm_O-BjGXNVQrmXM9cwHdluCZ-D87oqE5aiPpg/classic.js?div=ff-compose"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Error loading FormFacade script:', e);
          if (containerRef.current) {
            containerRef.current.innerHTML = `
              <div style="text-align: center; padding: 2rem; border: 1px solid #ddd; border-radius: 8px; margin: 2rem 0;">
                <h3>Form Loading Error</h3>
                <p>We're having trouble loading our contact form.</p>
                <p>Please try again later or contact us directly at <a href="mailto:contact@choiceinsuranceagency.com">contact@choiceinsuranceagency.com</a></p>
              </div>
            `;
          }
        }}
      />
    </div>
  );
}
