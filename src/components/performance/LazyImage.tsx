'use client';

import React from 'react';

import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
      />
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" style={{ width, height }} />
      )}
    </div>
  );
}
