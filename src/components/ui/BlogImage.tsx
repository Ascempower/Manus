'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import BuildTimeGuard from '@/components/utils/BuildTimeGuard';
import NoSSR from '@/components/utils/NoSSR';
import {
  IMAGE_LOADING_CONFIG,
  getBlogImageAlt,
  getBlogImageSrc,
  getImageSources,
  getPlaceholderImage,
} from '@/constants/blog-images';
import { cn } from '@/lib/utils';

interface BlogImageProps {
  src: string;
  alt?: string;
  title?: string;
  category?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: (error: string) => void;
}

type ImageState = 'loading' | 'loaded' | 'error' | 'placeholder';

// Internal component that uses useRef - must be client-only
function BlogImageInternal({
  src,
  alt,
  title,
  category,
  className = '',
  width = 1200,
  height = 630,
  priority = false,
  onLoad,
  onError,
}: BlogImageProps) {
  const [isClient, setIsClient] = useState(false);
  const [imageState, setImageState] = useState<ImageState>('loading');
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<number>();

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get all available image sources
  const imageSources = getImageSources(src, category);
  const finalAlt = alt || getBlogImageAlt(src, title);
  const placeholderSrc = getPlaceholderImage(category);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (typeof window !== 'undefined' && timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  // Handle image load success
  const handleImageLoad = useCallback(() => {
    cleanup();
    setImageState('loaded');
    onLoad?.();
  }, [cleanup, onLoad]);

  // Handle image load error
  const handleImageError = useCallback(() => {
    cleanup();

    // Try next source in strategy
    const strategies = IMAGE_LOADING_CONFIG.strategy;
    const currentStrategyIndex = strategies.findIndex(strategy => {
      switch (strategy) {
        case 'local':
          return currentSrc === imageSources.local;
        case 'cdn':
          return currentSrc === imageSources.cdn;
        case 'placeholder':
          return currentSrc === imageSources.placeholder;
        default:
          return false;
      }
    });

    const nextStrategyIndex = currentStrategyIndex + 1;

    if (nextStrategyIndex < strategies.length && retryCount < IMAGE_LOADING_CONFIG.maxRetries) {
      // Try next strategy
      const nextStrategy = strategies[nextStrategyIndex];
      let nextSrc = '';

      switch (nextStrategy) {
        case 'local':
          nextSrc = imageSources.local || '';
          break;
        case 'cdn':
          nextSrc = imageSources.cdn || '';
          break;
        case 'placeholder':
          nextSrc = imageSources.placeholder;
          break;
      }

      if (nextSrc) {
        setRetryCount(prev => prev + 1);
        window.setTimeout(() => {
          setCurrentSrc(nextSrc);
        }, IMAGE_LOADING_CONFIG.retryDelay);
        return;
      }
    }

    // All strategies failed, use placeholder
    setImageState('placeholder');
    setCurrentSrc(placeholderSrc);
    onError?.(`Failed to load image: ${src}`);
  }, [cleanup, currentSrc, imageSources, retryCount, placeholderSrc, src, onError]);

  // Initialize image loading
  useEffect(() => {
    if (!isClient) return;

    // Start with the best available source
    const primarySrc = getBlogImageSrc(src, category);
    setCurrentSrc(primarySrc);
    setImageState('loading');
    setRetryCount(0);

    // Set loading timeout only if we're on the client
    if (typeof window !== 'undefined' && timeoutRef.current !== undefined) {
      timeoutRef.current = window.setTimeout(() => {
        handleImageError();
      }, IMAGE_LOADING_CONFIG.loadTimeout);
    }

    return cleanup;
  }, [src, category, cleanup, handleImageError, isClient]);

  // Handle image state changes
  useEffect(() => {
    if (!isClient || !imgRef.current || !currentSrc) return;

    const img = imgRef.current;

    // Set up event listeners
    img.onload = handleImageLoad;
    img.onerror = handleImageError;

    // Start loading
    img.src = currentSrc;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [currentSrc, handleImageLoad, handleImageError, isClient]);

  // Don't render anything during SSR
  if (!isClient) {
    return <div className={cn('bg-gray-100', className)} style={{ width, height }} />;
  }

  // Render loading state
  if (imageState === 'loading' && !currentSrc) {
    return (
      <div
        className={cn('flex animate-pulse items-center justify-center bg-gray-100', className)}
        style={{ width, height }}
      >
        <div className="text-center text-gray-500">
          <div className="mx-auto mb-2 h-8 w-8 animate-spin rounded-full border-4 border-brand-deep-forest-green border-t-transparent"></div>
          <p className="text-sm">Loading image...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Main image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        alt={finalAlt}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300',
          imageState === 'loaded' ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />

      {/* Loading overlay */}
      {imageState === 'loading' && (
        <div
          className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-100"
          style={{ width, height }}
        >
          <div className="text-center text-gray-500">
            <div className="mx-auto mb-2 h-6 w-6 animate-spin rounded-full border-2 border-brand-deep-forest-green border-t-transparent"></div>
            <p className="text-xs">Loading...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {imageState === 'error' && (
        <div
          className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100"
          style={{ width, height }}
        >
          <div className="p-4 text-center text-gray-500">
            <div className="mb-2 text-2xl">📷</div>
            <p className="text-sm font-medium">Image unavailable</p>
            <p className="mt-1 text-xs text-gray-400">Using fallback content</p>
          </div>
        </div>
      )}

      {/* Placeholder state indicator */}
      {imageState === 'placeholder' && (
        <div className="absolute right-2 top-2 rounded bg-black/50 px-2 py-1 text-xs text-white">
          Placeholder
        </div>
      )}
    </div>
  );
}

// Main BlogImage component with SSR protection
export default function BlogImage(props: BlogImageProps) {
  const { width = 1200, height = 630, className = '' } = props;

  // Always return a static fallback during SSR
  if (typeof window === 'undefined') {
    return <div className={cn('animate-pulse bg-gray-100', className)} style={{ width, height }} />;
  }

  return (
    <BuildTimeGuard
      fallback={
        <div className={cn('animate-pulse bg-gray-100', className)} style={{ width, height }} />
      }
    >
      <BuildTimeGuard
        fallback={
          <div className={cn('animate-pulse bg-gray-100', className)} style={{ width, height }} />
        }
      >
        <NoSSR
          fallback={
            <div className={cn('animate-pulse bg-gray-100', className)} style={{ width, height }} />
          }
        >
          <BlogImageInternal {...props} />
        </NoSSR>
      </BuildTimeGuard>
    </BuildTimeGuard>
  );
}

// Specialized blog image components
export function BlogHeroImage({
  src,
  alt,
  title,
  category,
  className = '',
}: Omit<BlogImageProps, 'width' | 'height' | 'priority'>) {
  // Always return a static fallback during SSR
  if (typeof window === 'undefined') {
    return (
      <BuildTimeGuard
        fallback={
          <div
            className={cn('w-full animate-pulse rounded-lg bg-gray-100 shadow-lg', className)}
            style={{ width: 1200, height: 630 }}
          />
        }
      >
        <div
          className={cn('w-full animate-pulse rounded-lg bg-gray-100 shadow-lg', className)}
          style={{ width: 1200, height: 630 }}
        />
      </BuildTimeGuard>
    );
  }

  return (
    <BuildTimeGuard
      fallback={
        <div
          className={cn('w-full animate-pulse rounded-lg bg-gray-100 shadow-lg', className)}
          style={{ width: 1200, height: 630 }}
        />
      }
    >
      <BuildTimeGuard
        fallback={
          <div
            className={cn(
              'aspect-video w-full animate-pulse rounded-md bg-gray-100 object-cover',
              className
            )}
            style={{ width: 400, height: 250 }}
          />
        }
      >
        <BlogImage
          src={src}
          alt={alt}
          title={title}
          category={category}
          width={1200}
          height={630}
          priority={true}
          className={cn('w-full rounded-lg shadow-lg', className)}
        />
      </BuildTimeGuard>
    </BuildTimeGuard>
  );
}

export function BlogThumbnailImage({
  src,
  alt,
  title,
  category,
  className = '',
}: Omit<BlogImageProps, 'width' | 'height'>) {
  // Always return a static fallback during SSR
  if (typeof window === 'undefined') {
    return (
      <div
        className={cn(
          'aspect-video w-full animate-pulse rounded-md bg-gray-100 object-cover',
          className
        )}
        style={{ width: 400, height: 250 }}
      />
    );
  }

  return (
    <BuildTimeGuard
      fallback={
        <div
          className={cn(
            'mx-auto w-full max-w-2xl animate-pulse rounded-md bg-gray-100 shadow-sm',
            className
          )}
          style={{ width: 800, height: 400 }}
        />
      }
    >
      <BuildTimeGuard
        fallback={
          <div
            className={cn(
              'aspect-video w-full animate-pulse rounded-md bg-gray-100 object-cover',
              className
            )}
            style={{ width: 400, height: 250 }}
          />
        }
      >
        <BlogImage
          src={src}
          alt={alt}
          title={title}
          category={category}
          width={400}
          height={250}
          className={cn('aspect-video w-full rounded-md object-cover', className)}
        />
      </BuildTimeGuard>
    </BuildTimeGuard>
  );
}

export function BlogInlineImage({
  src,
  alt,
  title,
  category,
  className = '',
}: Omit<BlogImageProps, 'width' | 'height'>) {
  // Always return a static fallback during SSR
  if (typeof window === 'undefined') {
    return (
      <div
        className={cn(
          'mx-auto w-full max-w-2xl animate-pulse rounded-md bg-gray-100 shadow-sm',
          className
        )}
        style={{ width: 800, height: 400 }}
      />
    );
  }

  return (
    <BuildTimeGuard
      fallback={
        <div
          className={cn(
            'mx-auto w-full max-w-2xl animate-pulse rounded-md bg-gray-100 shadow-sm',
            className
          )}
          style={{ width: 800, height: 400 }}
        />
      }
    >
      <BlogImage
        src={src}
        alt={alt}
        title={title}
        category={category}
        width={800}
        height={400}
        className={cn('mx-auto w-full max-w-2xl rounded-md shadow-sm', className)}
      />
    </BuildTimeGuard>
  );
}
