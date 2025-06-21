'use client';

import React from 'react';

interface SSRErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface SSRErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class SSRErrorBoundary extends React.Component<
  SSRErrorBoundaryProps,
  SSRErrorBoundaryState
> {
  constructor(props: SSRErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): SSRErrorBoundaryState {
    // Check if this is a useRef/SSR related error
    const isSSRError =
      error.message.includes('useRef') ||
      error.message.includes('Cannot read properties of null') ||
      error.message.includes('Cannot read property') ||
      error.stack?.includes('useRef');

    if (isSSRError) {
      console.warn('SSR Error caught by boundary:', error.message);
      return { hasError: true, error };
    }

    // Re-throw non-SSR errors
    throw error;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('SSR Error Boundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-white">
            {/* Safe fallback for SSR errors */}
            <div className="h-16 bg-brand-deep-forest-green" />
            <main className="flex-1">{this.props.children}</main>
            <div className="h-32 bg-gray-100" />
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default SSRErrorBoundary;
