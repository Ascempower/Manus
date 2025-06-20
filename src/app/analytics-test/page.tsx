'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trackEvent, trackInsuranceEvents } from '@/lib/analytics';

export default function AnalyticsTestPage() {
  const [events, setEvents] = React.useState<string[]>([]);

  const addEvent = (eventName: string) => {
    setEvents(prev => [...prev, `${new Date().toLocaleTimeString()}: ${eventName}`]);
  };

  const testBasicEvent = () => {
    trackEvent('test_event', 'testing', 'analytics_test_page');
    addEvent('Basic Event Tracked');
  };

  const testQuoteRequest = () => {
    trackInsuranceEvents.quoteRequest('Medicare Supplement');
    addEvent('Quote Request Tracked (Medicare Supplement)');
  };

  const testConsultationBooked = () => {
    trackInsuranceEvents.consultationBooked('test_page');
    addEvent('Consultation Booking Tracked');
  };

  const testServiceViewed = () => {
    trackInsuranceEvents.serviceViewed('Life Insurance');
    addEvent('Service View Tracked (Life Insurance)');
  };

  const testContactSubmitted = () => {
    trackInsuranceEvents.contactSubmitted('test_form');
    addEvent('Contact Form Submission Tracked');
  };

  const testPhoneClick = () => {
    trackInsuranceEvents.phoneClicked();
    addEvent('Phone Click Tracked');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-brand-deep-forest-green">
          Google Analytics Test Page
        </h1>

        <div className="mb-8 rounded-lg bg-blue-50 p-4">
          <h2 className="mb-2 text-lg font-semibold text-blue-800">Analytics Configuration</h2>
          <div className="space-y-1 text-sm text-blue-700">
            <p>
              <strong>GA4 ID:</strong> {process.env.NEXT_PUBLIC_GA4_ID || 'Not configured'}
            </p>
            <p>
              <strong>GTM ID:</strong> {process.env.NEXT_PUBLIC_GTM_ID || 'Not configured'}
            </p>
            <p>
              <strong>HIPAA Compliant:</strong> ✅ Yes
            </p>
            <p>
              <strong>Lazy Loading:</strong> ✅ Yes
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Test Analytics Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={testBasicEvent} className="w-full">
                Test Basic Event
              </Button>

              <Button onClick={testQuoteRequest} className="w-full" variant="outline">
                Test Quote Request
              </Button>

              <Button onClick={testConsultationBooked} className="w-full" variant="outline">
                Test Consultation Booking
              </Button>

              <Button onClick={testServiceViewed} className="w-full" variant="outline">
                Test Service View
              </Button>

              <Button onClick={testContactSubmitted} className="w-full" variant="outline">
                Test Contact Submission
              </Button>

              <Button onClick={testPhoneClick} className="w-full" variant="outline">
                Test Phone Click
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-64 overflow-y-auto rounded bg-gray-50 p-3">
                {events.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No events tracked yet. Click buttons to test.
                  </p>
                ) : (
                  <div className="space-y-1">
                    {events.map((event, index) => (
                      <div key={index} className="font-mono text-sm text-gray-700">
                        {event}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-lg bg-yellow-50 p-4">
          <h3 className="mb-2 text-lg font-semibold text-yellow-800">How to Verify Analytics</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>
              <strong>1. Google Analytics Real-Time:</strong>
            </p>
            <p className="ml-4">
              • Go to{' '}
              <a
                href="https://analytics.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Google Analytics
              </a>
            </p>
            <p className="ml-4">• Navigate to Reports → Real-time</p>
            <p className="ml-4">• Click the test buttons above and watch for events</p>

            <p className="mt-3">
              <strong>2. Browser Developer Tools:</strong>
            </p>
            <p className="ml-4">• Open DevTools (F12)</p>
            <p className="ml-4">• Go to Network tab</p>
            <p className="ml-4">• Filter by "google-analytics" or "gtag"</p>
            <p className="ml-4">• Click test buttons and watch for network requests</p>

            <p className="mt-3">
              <strong>3. Google Tag Assistant:</strong>
            </p>
            <p className="ml-4">• Install Google Tag Assistant Chrome extension</p>
            <p className="ml-4">• Enable it and refresh this page</p>
            <p className="ml-4">• Check if GA4 and GTM tags are firing</p>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-green-50 p-4">
          <h3 className="mb-2 text-lg font-semibold text-green-800">HIPAA Compliance Notes</h3>
          <div className="space-y-1 text-sm text-green-700">
            <p>• All events are sanitized before transmission</p>
            <p>• No personal health information (PHI) is tracked</p>
            <p>• Analytics only load with user consent</p>
            <p>• IP addresses are anonymized</p>
            <p>• Ad personalization is disabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}
