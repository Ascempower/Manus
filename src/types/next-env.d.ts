// Custom type declarations for Next.js modules
declare module 'next/image' {
  import * as React from 'react';
  
  export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string | { src: string; height: number; width: number; blurDataURL?: string };
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    loader?: (resolverProps: ImageLoaderProps) => string;
    quality?: number | string;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
    onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void;
    layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    objectPosition?: string;
    lazyBoundary?: string;
    lazyRoot?: React.RefObject<HTMLElement>;
  }

  interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number | string;
  }

  export default function Image(props: ImageProps): React.ReactElement;
}

declare module 'next/navigation' {
  export function useRouter(): {
    push: (url: string, options?: { scroll?: boolean }) => void;
    replace: (url: string, options?: { scroll?: boolean }) => void;
    refresh: () => void;
    back: () => void;
    forward: () => void;
    prefetch: (url: string) => void;
  };

  export function usePathname(): string;
  export function useSearchParams(): URLSearchParams;
}

declare module 'next' {
  export interface GetStaticPropsContext {
    params?: Record<string, string | string[]>;
    preview?: boolean;
    previewData?: any;
    locale?: string;
    locales?: string[];
    defaultLocale?: string;
  }

  export interface GetStaticPathsContext {
    locales?: string[];
    defaultLocale?: string;
  }

  export interface GetStaticPathsResult<P extends Record<string, string | string[]> = Record<string, string | string[]>> {
    paths: Array<{ params: P; locale?: string }>;
    fallback: boolean | 'blocking';
  }

  export interface GetStaticPropsResult<P> {
    props: P;
    revalidate?: number | boolean;
    notFound?: boolean;
    redirect?: {
      destination: string;
      permanent: boolean;
    };
  }

  export function getStaticProps<
    P extends Record<string, any> = Record<string, any>,
    Q extends Record<string, string | string[]> = Record<string, string | string[]>
  >(
    context: GetStaticPropsContext & { params: Q }
  ): Promise<GetStaticPropsResult<P>>;

  export function getStaticPaths(
    context?: GetStaticPathsContext
  ): Promise<GetStaticPathsResult>;
}