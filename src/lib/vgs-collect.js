// VGS Collect.js integration for secure form handling
// This file demonstrates how to integrate VGS Collect.js for secure form handling
// in an insurance website context

// Initialize VGS Collect with environment variables that will be set in Netlify
const initVGSCollect = () => {
  try {
    // Check if VGSCollect is available
    if (typeof window === 'undefined' || typeof window.VGSCollect === 'undefined') {
      console.error('VGS Collect is not available');
      return { vgsForm: null, fieldCSS: {} };
    }

    // Use the specific vault ID provided
    const vaultId = 'tnt5wkuialz';
    const routeId = process.env.VGS_ROUTE_ID;

    if (!vaultId) {
      console.warn('VGS vault ID not available. Form security is not active.');
      return { vgsForm: null, fieldCSS: {} };
    }

    // Create VGS Collect instance
    const vgsForm = window.VGSCollect.create(
      vaultId,
      'sandbox', // Change to 'live' in production
      state => {
        // VGS Collect state updated - avoid console logging in production
        if (process.env.NODE_ENV !== 'production') {
          console.log('VGS Collect state:', state);
        }
      }
    );

    // Set route ID if available
    if (routeId) {
      vgsForm.setRouteId(routeId);
    }

    // Common CSS for form fields
    const fieldCSS = {
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Poppins", sans-serif',
      fontSize: '16px',
      color: '#000000',
      '&::placeholder': {
        color: '#bcbcbc',
      },
      '&:focus': {
        borderColor: '#42615A', // Match Choice Insurance brand color
      },
    };

    return { vgsForm, fieldCSS };
  } catch (error) {
    console.error('Error initializing VGS Collect:', error);
    return { vgsForm: null, fieldCSS: {} };
  }
};

// Initialize secure quote form fields
const initQuoteForm = (vgsForm, fieldCSS) => {
  if (!vgsForm) {
    console.warn('VGS form not available, skipping quote form initialization');
    return;
  }

  try {
    // Check if form elements exist before initializing
    const customerNameField = document.getElementById('customer-name');
    const customerEmailField = document.getElementById('customer-email');
    const customerPhoneField = document.getElementById('customer-phone');
    const customerSsnField = document.getElementById('customer-ssn');

    // Only initialize fields that exist in the DOM
    if (customerNameField) {
      vgsForm.field('#customer-name', {
        type: 'text',
        name: 'customer_name',
        placeholder: 'Full Name',
        validations: ['required'],
        css: fieldCSS,
      });
    }

    if (customerEmailField) {
      vgsForm.field('#customer-email', {
        type: 'text',
        name: 'customer_email',
        placeholder: 'Email Address',
        validations: ['required', 'format:email'],
        css: fieldCSS,
      });
    }

    if (customerPhoneField) {
      vgsForm.field('#customer-phone', {
        type: 'tel',
        name: 'customer_phone',
        placeholder: 'Phone Number',
        validations: ['required'],
        css: fieldCSS,
      });
    }

    if (customerSsnField) {
      vgsForm.field('#customer-ssn', {
        type: 'text',
        name: 'customer_ssn',
        placeholder: 'SSN (Last 4 digits)',
        validations: ['required', 'format:^\\d{4}$'],
        css: fieldCSS,
      });
    }

    // Handle form submission (client-side only)
    if (typeof window !== 'undefined') {
      const quoteForm = document.getElementById('insurance-quote-form');

      if (quoteForm) {
        quoteForm.addEventListener('submit', e => {
          e.preventDefault();

          try {
            // Get form data safely
            const insuranceTypeElement = document.getElementById('insurance-type');
            const coverageAmountElement = document.getElementById('coverage-amount');

            const formData = {
              // Additional non-sensitive data can be added here
              insurance_type: insuranceTypeElement ? insuranceTypeElement.value : '',
              coverage_amount: coverageAmountElement ? coverageAmountElement.value : '',
            };

            vgsForm.submit(
              '/submit-quote',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                data: formData,
              },
              (status, __response) => {
                if (status >= 200 && status < 300) {
                  // Success handling
                  showSuccessMessage('Your quote request has been submitted securely.');
                } else {
                  // Error handling
                  showErrorMessage('There was an error submitting your request. Please try again.');
                }
              }
            );
          } catch (error) {
            console.error('Error submitting form:', error);
            showErrorMessage('An unexpected error occurred. Please try again later.');
          }
        });
      }
    }
  } catch (error) {
    console.error('Error initializing quote form:', error);
  }
};

// Note: Payment form functionality removed as no credit card information is collected on this site

// Helper functions with safety checks
const showSuccessMessage = message => {
  if (typeof document === 'undefined') return;

  try {
    const messageElement = document.createElement('div');
    messageElement.className = 'success-message';
    messageElement.textContent = message;
    document.body.appendChild(messageElement);

    setTimeout(() => {
      if (document.body.contains(messageElement)) {
        document.body.removeChild(messageElement);
      }
    }, 5000);
  } catch (error) {
    console.error('Error showing success message:', error);
  }
};

const showErrorMessage = message => {
  if (typeof document === 'undefined') return;

  try {
    const messageElement = document.createElement('div');
    messageElement.className = 'error-message';
    messageElement.textContent = message;
    document.body.appendChild(messageElement);

    setTimeout(() => {
      if (document.body.contains(messageElement)) {
        document.body.removeChild(messageElement);
      }
    }, 5000);
  } catch (error) {
    console.error('Error showing error message:', error);
  }
};

// Initialize when DOM is loaded (client-side only)
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    try {
      // Load VGS Collect script dynamically
      const script = document.createElement('script');
      script.src = 'https://js.verygoodvault.com/vgs-collect/3.0.1/vgs-collect.js';
      script.integrity = 'sha384-sMGU8J1IBBOc6NzxRI7zK7JZgQUX40I+UApjJiQSLyVGJN5n1PdIcX+ZeKakY5uU';
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        try {
          // Check if VGSCollect is available
          if (typeof window.VGSCollect === 'undefined') {
            console.error('VGS Collect failed to load properly');
            return;
          }

          const { vgsForm, fieldCSS } = initVGSCollect();

          // Initialize forms based on page content
          const quoteForm = document.getElementById('insurance-quote-form');
          if (quoteForm && vgsForm) {
            initQuoteForm(vgsForm, fieldCSS);
          }
        } catch (error) {
          console.error('Error initializing VGS Collect:', error);
        }
      };
      script.onerror = event => {
        console.error('Failed to load VGS Collect script:', event);
      };
      document.head.appendChild(script);
    } catch (error) {
      console.error('Error loading VGS Collect script:', error);
    }
  });
}

export { initQuoteForm, initVGSCollect };
