'use client';

export default function ContactFormWrapper() {
  return (
    <div style={{ width: "100%", minHeight: "1400px", padding: "2rem 0" }}>
      <iframe
        src="/contact-form.html"
        width="100%"
        height="1400"
        style={{ border: "none" }}
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
}