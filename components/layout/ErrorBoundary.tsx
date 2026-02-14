"use client";

/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in the component tree and displays a fallback UI.
 * Logs error information for debugging purposes.
 *
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */

import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary class component
 * Note: Error boundaries must be class components in React
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details for debugging
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full rounded-lg border border-danger/30 bg-danger/10 p-8 text-center">
            <div className="mb-4 text-4xl">⚠️</div>
            <h2 className="mb-2 text-2xl font-semibold text-foreground">
              Something went wrong
            </h2>
            <p className="mb-4 text-foreground-secondary">
              We&apos;re sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>
            {this.state.error && (
              <details className="mb-4 text-left">
                <summary className="cursor-pointer text-sm text-foreground-secondary hover:text-foreground">
                  Technical details
                </summary>
                <pre className="mt-2 text-xs text-foreground-muted overflow-auto p-2 bg-background-secondary rounded">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-danger px-6 py-2 text-white transition-colors hover:opacity-90"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
