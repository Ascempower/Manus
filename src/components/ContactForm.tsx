"use client";

export default function ContactForm() {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <iframe 
        src="https://docs.google.com/forms/d/1F7NAG6kkBEIdQJ2Ratjt4FXv2pl-1ihqoRBdQy-wWGk/viewform?embedded=true" 
        width="100%" 
        height={1600} 
        frameBorder={0} 
        style={{ margin: 0 }}
        title="Contact Form"
        sandbox="allow-scripts allow-forms allow-same-origin"
        loading="lazy"
      >
        Loading...
      </iframe>
    </div>
  );
}
