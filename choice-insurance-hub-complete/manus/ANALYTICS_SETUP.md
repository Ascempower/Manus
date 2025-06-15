# Google Analytics & Tag Manager Setup Guide

## 🚀 Quick Setup

Your website is now ready for Google Analytics 4 (GA4) and Google Tag Manager (GTM). Follow these steps to complete the setup:

### 1. Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Create Google Tag Manager Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container for your website
3. Copy your **Container ID** (format: `GTM-XXXXXXX`)

### 3. Update Environment Variables

Edit your `.env.local` file and replace the placeholder values:

```bash
# Replace with your actual IDs
NEXT_PUBLIC_GTM_ID=GTM-YOUR-ACTUAL-ID
NEXT_PUBLIC_GA4_ID=G-YOUR-ACTUAL-ID
```

### 4. Deploy Your Changes

After updating the environment variables, deploy your website. The analytics will start tracking automatically.

## 📊 What's Already Configured

### ✅ Google Analytics 4 Features
- **Page view tracking** - Automatic
- **User engagement metrics** - Automatic
- **Conversion tracking** - Ready for setup
- **Privacy compliance** - Cookie consent banner included
- **Performance optimized** - Scripts load after user interaction

### ✅ Insurance-Specific Event Tracking
- Quote requests (`quote_request`)
- Consultation bookings (`consultation_booked`)
- Service page views (`service_viewed`)
- Contact form submissions (`form_submit`)
- Phone number clicks (`phone_click`)
- External link clicks (`external_link_click`)

### ✅ Privacy & Compliance
- **Cookie consent banner** - Users can accept/decline tracking
- **GDPR compliant** - Respects user privacy choices
- **No ad tracking** - Only analytics, no advertising cookies
- **Anonymized IP** - User privacy protected

## 🎯 Recommended GTM Setup

Once you have GTM set up, configure these recommended tags:

### 1. Enhanced Ecommerce (for insurance products)
- Track insurance quote requests as conversions
- Monitor consultation bookings
- Measure service page engagement

### 2. Conversion Tracking
- Set up goals for:
  - Quote form completions
  - Consultation bookings
  - Contact form submissions
  - Phone number clicks

### 3. Audience Building
- Create audiences for:
  - Users interested in specific insurance types
  - Users who viewed multiple service pages
  - Users who started but didn't complete quote process

## 🔧 Custom Events Available

The following custom events are already implemented and will appear in your GA4:

```javascript
// Quote requests
trackInsuranceEvents.quoteRequest('medicare-advantage');

// Consultation bookings
trackInsuranceEvents.consultationBooked('calendly');

// Service page views
trackInsuranceEvents.serviceViewed('life-insurance');

// Contact form submissions
trackInsuranceEvents.contactSubmitted('contact-form');

// Phone clicks
trackInsuranceEvents.phoneClicked();

// External links
trackInsuranceEvents.externalLinkClicked('planenroll');
```

## 🚨 Important Notes

1. **Environment Variables**: Never commit your actual tracking IDs to version control
2. **Testing**: Use GA4's DebugView to test events in development
3. **Privacy**: The cookie consent banner is required for GDPR compliance
4. **Performance**: Analytics scripts load after user interaction to maintain page speed

## 📈 Monitoring & Optimization

### Key Metrics to Monitor
- **Page Load Speed** - Core Web Vitals
- **Conversion Rates** - Quote requests, consultations
- **User Engagement** - Time on site, pages per session
- **Traffic Sources** - Organic, direct, referral traffic

### Recommended Reports
1. **Acquisition Reports** - How users find your site
2. **Engagement Reports** - What content performs best
3. **Conversion Reports** - Which pages drive the most leads
4. **Real-time Reports** - Monitor current activity

## 🛠️ Troubleshooting

### Analytics Not Working?
1. Check that environment variables are set correctly
2. Verify GA4 and GTM IDs are valid
3. Ensure cookie consent has been accepted
4. Check browser console for JavaScript errors

### Events Not Tracking?
1. Open browser developer tools
2. Check the Network tab for gtag requests
3. Use GA4's DebugView for real-time event monitoring
4. Verify event names match the configured tracking

## 📞 Support

If you need help with the analytics setup, the tracking code is located in:
- `/src/components/analytics/GoogleAnalytics.tsx`
- `/src/lib/analytics.ts`
- `/src/components/analytics/CookieConsent.tsx`

All tracking is privacy-compliant and performance-optimized for your insurance website.