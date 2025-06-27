"use client";

export default function ContactForm() {
  return (
    <div className="secure-contact-wrapper" style={{ maxWidth: '800px', margin: 'auto' }}>
      <div style={{ background: '#f9f9f9', border: '1px solid #ccc', padding: '16px', borderRadius: '6px', marginBottom: '16px' }}>
        <strong>🔒 Secure Contact Form</strong><br />
        Your information is encrypted and protected in compliance with HIPAA regulations.
      </div>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSf69uAmSns6v8JsE_zedXjG0CTS-kNV5vaDrz9I57Bfa6i51A/viewform?embedded=true" 
        width="100%" 
        height={1200} 
        frameBorder={0} 
        style={{ marginHeight: 0, marginWidth: 0 }}
        title="Secure Contact Form"
        sandbox="allow-scripts allow-forms allow-same-origin"
        loading="lazy"
      >
        Your browser does not support iframes. 
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf69uAmSns6v8JsE_zedXjG0CTS-kNV5vaDrz9I57Bfa6i51A/viewform" target="_blank" rel="noopener noreferrer">Click here to open the form</a>.
      </iframe>
    </div>
  );
}
