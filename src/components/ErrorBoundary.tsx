'use client';

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component to catch and handle runtime errors in React components
 *
 * This component catches JavaScript errors anywhere in its child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);

    // In production, you might want to send this to a logging service
    if (process.env.NODE_ENV === 'production') {
      try {
        // Example of sending to an error tracking service
        // This is just a placeholder - implement with your actual error tracking
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'error', {
            error_type: error.name,
            error_message: error.message,
            error_stack: error.stack,
            error_component: errorInfo.componentStack,
          });
        }
      } catch {
        // Silently fail if error reporting fails
      }
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="error-container m-4 rounded-md border border-red-300 bg-red-50 p-4">
            <h2 className="mb-2 text-lg font-semibold text-red-800">Something went wrong</h2>
            <p className="mb-4 text-red-600">
              We're sorry, but there was an error loading this component.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
            >
              Refresh Page
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

/**
 * Wrapper component for lazy-loaded components to provide error handling
 */
export const SafeLazyComponent = ({
  component: Component,
  fallback,
  ...props
}: {
  component: React.ComponentType<any>;
  fallback?: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export default ErrorBoundary;
