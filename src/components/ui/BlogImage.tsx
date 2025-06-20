'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import {
  getBlogImageAlt,
  getBlogImageSrc,
  getImageSources,
  getPlaceholderImage,
  IMAGE_LOADING_CONFIG,
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

export default function BlogImage({
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
  const [imageState, setImageState] = useState<ImageState>('loading');
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<number>();

  // Get all available image sources
  const imageSources = getImageSources(src, category);
  const finalAlt = alt || getBlogImageAlt(src, title);
  const placeholderSrc = getPlaceholderImage(category);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
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
        setTimeout(() => {
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
    // Start with the best available source
    const primarySrc = getBlogImageSrc(src, category);
    setCurrentSrc(primarySrc);
    setImageState('loading');
    setRetryCount(0);

    // Set loading timeout
    timeoutRef.current = setTimeout(() => {
      handleImageError();
    }, IMAGE_LOADING_CONFIG.loadTimeout);

    return cleanup;
  }, [src, category, cleanup, handleImageError]);

  // Handle image state changes
  useEffect(() => {
    if (!imgRef.current || !currentSrc) return;

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
  }, [currentSrc, handleImageLoad, handleImageError]);

  // Render loading state
  if (imageState === 'loading' && !currentSrc) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gray-100 animate-pulse',
          className
        )}
        style={{ width, height }}
      >
        <div className="text-center text-gray-500">
          <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-brand-deep-forest-green border-t-transparent mx-auto"></div>
          <p className="text-sm">Loading image...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Main image */}
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
          className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse"
          style={{ width, height }}
        >
          <div className="text-center text-gray-500">
            <div className="mb-2 h-6 w-6 animate-spin rounded-full border-2 border-brand-deep-forest-green border-t-transparent mx-auto"></div>
            <p className="text-xs">Loading...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {imageState === 'error' && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300"
          style={{ width, height }}
        >
          <div className="text-center text-gray-500 p-4">
            <div className="mb-2 text-2xl">📷</div>
            <p className="text-sm font-medium">Image unavailable</p>
            <p className="text-xs text-gray-400 mt-1">Using fallback content</p>
          </div>
        </div>
      )}

      {/* Placeholder state indicator */}
      {imageState === 'placeholder' && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Placeholder
        </div>
      )}
    </div>
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
  return (
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
  );
}

export function BlogThumbnailImage({
  src,
  alt,
  title,
  category,
  className = '',
}: Omit<BlogImageProps, 'width' | 'height'>) {
  return (
    <BlogImage
      src={src}
      alt={alt}
      title={title}
      category={category}
      width={400}
      height={250}
      className={cn('w-full aspect-video object-cover rounded-md', className)}
    />
  );
}

export function BlogInlineImage({
  src,
  alt,
  title,
  category,
  className = '',
}: Omit<BlogImageProps, 'width' | 'height'>) {
  return (
    <BlogImage
      src={src}
      alt={alt}
      title={title}
      category={category}
      width={800}
      height={400}
      className={cn('w-full max-w-2xl mx-auto rounded-md shadow-sm', className)}
    />
  );
}