// Protect against bots, PII exposure, form abuse & common attacks
import arcjet, { shield, detectBot, sensitiveInfo, signupProtection } from "@arcjet/node";

const aj = arcjet({
  // ARCJET_KEY automatically set by the Netlify integration
  // Log in at https://app.arcjet.com
  key: process.env.ARCJET_KEY,
  rules: [
    // Block common attacks e.g. SQL injection, XSS, CSRF
    shield({
      // Will block requests. Use "DRY_RUN" to log only
      mode: "LIVE",
    }),
    
    // Detect bots
    detectBot({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      // Block all bots except search engine crawlers. See the full list of bots
      // for other options: https://arcjet.com/bot-list
      allow: ["CATEGORY:SEARCH_ENGINE"],
      // Block these high-risk categories
      block: [
        "CATEGORY:SCRAPER",       // Block data scrapers
        "CATEGORY:IMPERSONATOR"   // Block bots impersonating browsers
      ]
    }),
    
    // PII Protection for insurance customer data
    sensitiveInfo({
      mode: "LIVE",
      // Detect and protect common insurance-related PII
      detect: ["SSN", "CREDIT_CARD", "PHONE_NUMBER", "EMAIL", "ADDRESS"]
    }),
    
    // Form Protection for quote requests
    signupProtection({
      mode: "LIVE",
      // Prevent form spam and fake submissions
      emailValidation: true,
      // Additional protection for insurance quote forms
      options: {
        // Increase protection for high-value insurance quote forms
        riskLevel: "high"
      }
    })
  ],
});

// Middleware function to protect routes
export const protectRoute = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);
    
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ 
          error: "Too Many Requests", 
          reason: decision.reason 
        });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ 
          error: "Automated access not allowed", 
          reason: decision.reason 
        });
      } else if (decision.reason.isSensitiveInfo()) {
        return res.status(400).json({ 
          error: "Sensitive information detected", 
          reason: "Please remove sensitive data from your request" 
        });
      } else {
        return res.status(403).json({ 
          error: "Access denied", 
          reason: decision.reason 
        });
      }
    }
    
    // Request is allowed
    next();
  } catch (error) {
    console.error("Arcjet protection error:", error);
    // Allow the request to proceed if Arcjet fails
    next();
  }
};

export default aj;
