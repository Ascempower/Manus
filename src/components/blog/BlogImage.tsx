'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DEFAULT_BLOG_IMAGE, getBlogImage, getBlogImageAlt } from '@/lib/blog-images';
import { cn } from '@/lib/utils';

interface BlogImageProps {
  src: string;
  alt?: string;
  title?: string;
  category?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export default function BlogImage({
  src,
  alt,
  title,
  category,
  className,
  fill = false,
  width,
  height,
  priority = false,
  sizes,
}: BlogImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get the correct image path
  const imageSrc = imageError ? DEFAULT_BLOG_IMAGE : getBlogImage(src, category);

  // Get appropriate alt text
  const imageAlt = alt || getBlogImageAlt(src, title);

  const handleImageError = () => {
    console.warn(`Blog image failed to load: ${src}, falling back to default`);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const imageProps = {
    src: imageSrc,
    alt: imageAlt,
    onError: handleImageError,
    onLoad: handleImageLoad,
    priority,
    sizes: sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    className: cn(
      'transition-opacity duration-300',
      isLoading && 'opacity-0',
      !isLoading && 'opacity-100',
      className
    ),
  };

  if (fill) {
    return (
      <div className="relative overflow-hidden">
        {isLoading && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
        <Image {...imageProps} fill />
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className="absolute inset-0 animate-pulse rounded bg-gray-200"
          style={{ width: width || '100%', height: height || 'auto' }}
        />
      )}
      <Image {...imageProps} width={width || 800} height={height || 400} />
    </div>
  );
}

// Specialized components for different blog image types
export function BlogHeroImage({
  src,
  alt,
  title,
  category,
  className,
}: Omit<BlogImageProps, 'fill' | 'width' | 'height'>) {
  return (
    <div className={cn('relative mb-8 h-[400px] w-full overflow-hidden rounded-lg', className)}>
      <BlogImage
        src={src}
        alt={alt}
        title={title}
        category={category}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}

export function BlogInlineImage({
  src,
  alt,
  title,
  category,
  className,
}: Omit<BlogImageProps, 'fill'>) {
  return (
    <div className={cn('relative mb-6 overflow-hidden rounded-lg', className)}>
      <BlogImage
        src={src}
        alt={alt}
        title={title}
        category={category}
        width={800}
        height={400}
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

export function BlogThumbnailImage({
  src,
  alt,
  title,
  category,
  className,
}: Omit<BlogImageProps, 'fill' | 'width' | 'height'>) {
  return (
    <div className={cn('relative h-48 w-full overflow-hidden', className)}>
      <BlogImage
        src={src}
        alt={alt}
        title={title}
        category={category}
        fill
        className="object-cover"
      />
    </div>
  );
}
