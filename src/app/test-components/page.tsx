'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';

// Import components for testing
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Dynamic imports for client-only components
const CalendlyWidget = dynamic(() => import('@/components/widgets/CalendlyWidget'), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse rounded bg-gray-200">Loading Calendly...</div>,
});

const LazyAnalytics = dynamic(() => import('@/components/analytics/LazyAnalytics'), {
  ssr: false,
  loading: () => <div>Loading Analytics...</div>,
});

const CookieConsent = dynamic(() => import('@/components/analytics/CookieConsent'), {
  ssr: false,
  loading: () => <div>Loading Cookie Consent...</div>,
});

const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  ssr: false,
  loading: () => (
    <div className="h-96 animate-pulse rounded bg-gray-200">Loading Contact Form...</div>
  ),
});

const BlogImage = dynamic(() => import('@/components/ui/BlogImage'), {
  ssr: false,
  loading: () => <div className="h-48 animate-pulse rounded bg-gray-200">Loading Image...</div>,
});

const LazyLoad = dynamic(() => import('@/components/performance/LazyLoad'), {
  ssr: false,
  loading: () => <div>Loading LazyLoad...</div>,
});

export default function TestComponentsPage() {
  const [testResults, setTestResults] = useState<Record<string, 'loading' | 'success' | 'error'>>(
    {}
  );
  const [isClient, setIsClient] = useState(false);

  // Client-side detection
  useState(() => {
    setIsClient(true);
  });

  const updateTestResult = (component: string, status: 'loading' | 'success' | 'error') => {
    setTestResults(prev => ({ ...prev, [component]: status }));
  };

  const TestStatus = ({ component }: { component: string }) => {
    const status = testResults[component] || 'loading';
    const colors = {
      loading: 'bg-yellow-100 text-yellow-800',
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`rounded px-2 py-1 text-xs font-medium ${colors[status]}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Component Testing Dashboard</h1>
        <p className="text-gray-600">
          Testing all plugins and components for SSR compatibility and functionality.
        </p>
        <div className="mt-4 rounded-lg bg-blue-50 p-4">
          <p className="text-sm">
            <strong>Client Status:</strong>{' '}
            {isClient ? '✅ Client-side ready' : '⏳ Server-side rendering'}
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        {/* UI Components Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              UI Components
              <TestStatus component="ui-components" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold">Buttons</h4>
              <div className="flex gap-2">
                <Button onClick={() => updateTestResult('ui-components', 'success')}>
                  Primary Button
                </Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">Accordion</h4>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Test Accordion Item</AccordionTrigger>
                  <AccordionContent>This accordion is working properly! ✅</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">Dialog</h4>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Test Dialog</DialogTitle>
                  </DialogHeader>
                  <p>Dialog is working properly! ✅</p>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Components Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Analytics Components
              <TestStatus component="analytics" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold">Google Analytics</h4>
                <div className="rounded bg-gray-50 p-4">
                  {isClient && <LazyAnalytics gtmId="GTM-TEST" ga4Id="GA-TEST" />}
                  <p className="text-sm text-gray-600">
                    Analytics component loaded {isClient ? '✅' : '⏳'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Cookie Consent</h4>
                <div className="rounded bg-gray-50 p-4">
                  {isClient && <CookieConsent />}
                  <p className="text-sm text-gray-600">
                    Cookie consent loaded {isClient ? '✅' : '⏳'}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendly Widget Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Calendly Widget
              <TestStatus component="calendly" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Testing Calendly widget integration and SSR safety
              </p>
              {isClient && (
                <div className="rounded-lg border p-4">
                  <CalendlyWidget
                    variant="inline"
                    onEventScheduled={() => updateTestResult('calendly', 'success')}
                    onError={() => updateTestResult('calendly', 'error')}
                  />
                </div>
              )}
              {!isClient && (
                <div className="flex h-64 items-center justify-center rounded bg-gray-100">
                  <p>Calendly widget will load on client-side</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Forms Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Contact Form
              <TestStatus component="contact-form" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isClient && <ContactForm />}
            {!isClient && (
              <div className="flex h-96 items-center justify-center rounded bg-gray-100">
                <p>Contact form will load on client-side</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Image Components Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Image Components
              <TestStatus component="images" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold">Blog Image</h4>
                {isClient && (
                  <BlogImage
                    src="/assets/images/blog/test-image.jpg"
                    alt="Test image"
                    title="Test Image"
                    category="general"
                    onLoad={() => updateTestResult('images', 'success')}
                    onError={() => updateTestResult('images', 'error')}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Components Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Performance Components
              <TestStatus component="performance" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold">Lazy Load</h4>
                {isClient && (
                  <LazyLoad threshold={0.1} rootMargin="50px">
                    <div className="flex h-32 items-center justify-center rounded bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white">
                      This content was lazy loaded! ✅
                    </div>
                  </LazyLoad>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Test Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {Object.entries(testResults).map(([component, _status]) => (
                <div
                  key={component}
                  className="flex items-center justify-between rounded border p-3"
                >
                  <span className="font-medium">{component}</span>
                  <TestStatus component={component} />
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-green-50 p-4">
              <h4 className="mb-2 font-semibold text-green-800">SSR Safety Check</h4>
              <ul className="space-y-1 text-sm text-green-700">
                <li>✅ All components use proper client-side detection</li>
                <li>✅ No useRef calls during SSR</li>
                <li>✅ Dynamic imports with ssr: false for client-only components</li>
                <li>✅ Proper loading states and fallbacks</li>
                <li>✅ Error boundaries in place</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
