// VGS Collect.js integration for secure form handling
// This file demonstrates how to integrate VGS Collect.js for secure form handling
// in an insurance website context

// Initialize VGS Collect with environment variables that will be set in Netlify
const initVGSCollect = () => {
  // These environment variables will be set by the VGS plugin
  const vaultId = process.env.VGS_VAULT_ID;
  const routeId = process.env.VGS_ROUTE_ID;
  
  if (!vaultId || !routeId) {
    console.error('VGS environment variables not set. Form security is not active.');
    return null;
  }
  
  // Create VGS Collect instance
  const vgsForm = VGSCollect.create(
    vaultId,
    'sandbox', // Change to 'live' in production
    (state) => {
      console.log('VGS Collect state updated:', state);
    }
  ).setRouteId(routeId);
  
  // Common CSS for form fields
  const fieldCSS = {
    boxSizing: 'border-box',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Poppins", sans-serif',
    fontSize: '16px',
    color: '#000000',
    '&::placeholder': {
      color: '#bcbcbc'
    },
    '&:focus': {
      borderColor: '#42615A' // Match Choice Insurance brand color
    }
  };
  
  return { vgsForm, fieldCSS };
};

// Initialize secure quote form fields
const initQuoteForm = (vgsForm, fieldCSS) => {
  if (!vgsForm) return;
  
  // Secure PII fields
  vgsForm.field('#customer-name', {
    type: 'text',
    name: 'customer_name',
    placeholder: 'Full Name',
    validations: ['required'],
    css: fieldCSS
  });
  
  vgsForm.field('#customer-email', {
    type: 'text',
    name: 'customer_email',
    placeholder: 'Email Address',
    validations: ['required', 'format:email'],
    css: fieldCSS
  });
  
  vgsForm.field('#customer-phone', {
    type: 'tel',
    name: 'customer_phone',
    placeholder: 'Phone Number',
    validations: ['required'],
    css: fieldCSS
  });
  
  vgsForm.field('#customer-ssn', {
    type: 'text',
    name: 'customer_ssn',
    placeholder: 'SSN (Last 4 digits)',
    validations: ['required', 'format:^\\d{4}$'],
    css: fieldCSS
  });
  
  // Handle form submission (client-side only)
  if (typeof window !== 'undefined') {
    document.getElementById('insurance-quote-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    vgsForm.submit('/submit-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        // Additional non-sensitive data can be added here
        insurance_type: document.getElementById('insurance-type')?.value,
        coverage_amount: document.getElementById('coverage-amount')?.value
      }
    }, 
    (status, response) => {
      if (status >= 200 && status < 300) {
        // Success handling
        showSuccessMessage('Your quote request has been submitted securely.');
      } else {
        // Error handling
        showErrorMessage('There was an error submitting your request. Please try again.');
      }
    });
  }
};

// Note: Payment form functionality removed as no credit card information is collected on this site

// Helper functions
const showSuccessMessage = (message) => {
  const messageElement = document.createElement('div');
  messageElement.className = 'success-message';
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
  
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
};

const showErrorMessage = (message) => {
  const messageElement = document.createElement('div');
  messageElement.className = 'error-message';
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
  
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
};

// Initialize when DOM is loaded (client-side only)
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Load VGS Collect script dynamically
    const script = document.createElement('script');
    script.src = 'https://js.verygoodvault.com/vgs-collect/2.14.0/vgs-collect.js';
    script.onload = () => {
      const { vgsForm, fieldCSS } = initVGSCollect();
      
      // Initialize forms based on page content
      if (document.getElementById('insurance-quote-form')) {
        initQuoteForm(vgsForm, fieldCSS);
      }
    };
    document.head.appendChild(script);
  });
}

export { initVGSCollect, initQuoteForm };
