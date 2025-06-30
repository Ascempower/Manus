import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [iframeHeight, setIframeHeight] = useState(1400);
  
  useEffect(() => {
    // Function to handle messages from the iframe
    const handleMessage = (event) => {
      // Check if the message is from our iframe
      if (event.data && event.data.type === 'formHeight') {
        setIframeHeight(event.data.height);
      }
    };
    
    // Add event listener for messages from the iframe
    window.addEventListener('message', handleMessage);
    
    // Clean up
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: `${iframeHeight}px`, overflow: 'hidden' }}>
      <iframe
        src="/contact-form.html"
        title="Contact Form"
        width="100%"
        height={iframeHeight}
        frameBorder="0"
        style={{ 
          border: 'none',
          overflow: 'hidden',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
}
