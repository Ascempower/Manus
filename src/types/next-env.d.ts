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
    onLoad?: () => any;
    layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    objectPosition?: string;
    lazyBoundary?: string;
    lazyRoot?: React.RefObject<HTMLElement>;
    className?: string;
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
  export function notFound(): never;
}

declare module 'next' {
  export interface Metadata {
    title?: string | { absolute?: string; template?: string; default?: string };
    description?: string;
    applicationName?: string;
    authors?: Array<{ name: string; url?: string }> | { name: string; url?: string } | any;
    generator?: string;
    keywords?: string | string[];
    referrer?:
      | 'no-referrer'
      | 'origin'
      | 'no-referrer-when-downgrade'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url';
    themeColor?: string | { media: string; color: string }[];
    colorScheme?: 'normal' | 'light' | 'dark' | 'light dark';
    viewport?:
      | string
      | {
          width?: string | number;
          height?: string | number;
          initialScale?: number;
          minimumScale?: number;
          maximumScale?: number;
          userScalable?: boolean;
          viewportFit?: 'auto' | 'cover' | 'contain';
        };
    robots?:
      | string
      | {
          index?: boolean;
          follow?: boolean;
          nocache?: boolean;
          googleBot?:
            | string
            | {
                index?: boolean;
                follow?: boolean;
                noimageindex?: boolean;
                'max-video-preview'?: number | string;
                'max-image-preview'?: 'none' | 'standard' | 'large';
                'max-snippet'?: number;
              };
        };
    icons?:
      | string
      | string[]
      | {
          icon?: string | string[];
          shortcut?: string | string[];
          apple?: string | string[];
          other?: { rel: string; url: string; sizes?: string; type?: string }[];
        };
    openGraph?: {
      type?: string;
      url?: string;
      title?: string;
      description?: string;
      siteName?: string;
      images?:
        | string
        | string[]
        | { url: string; alt?: string; width?: string | number; height?: string | number }[];
      locale?: string;
      audio?: string | string[] | { url: string; type?: string }[];
      videos?:
        | string
        | string[]
        | { url: string; type?: string; width?: string | number; height?: string | number }[];
      publishedTime?: string;
      modifiedTime?: string;
      expirationTime?: string;
      authors?: string[] | any[];
      section?: string;
      tags?: string[];
    };
    twitter?: {
      card?: 'summary' | 'summary_large_image' | 'app' | 'player';
      site?: string;
      creator?: string;
      title?: string;
      description?: string;
      image?: string | { url: string; alt?: string };
      images?: string | string[] | { url: string; alt?: string }[];
    };
    verification?: {
      google?: string | string[];
      yahoo?: string | string[];
      yandex?: string | string[];
      me?: string | string[];
      other?: { name: string; content: string }[];
    };
    appleWebApp?:
      | boolean
      | {
          capable?: boolean;
          title?: string;
          startupImage?: string | string[] | { url: string; media?: string }[];
          statusBarStyle?: 'default' | 'black' | 'black-translucent';
        };
    formatDetection?: {
      telephone?: boolean;
      date?: boolean;
      address?: boolean;
      email?: boolean;
      url?: boolean;
    };
    itunes?: {
      appId: string;
      appArgument?: string;
    };
    appLinks?: {
      ios?: { url: string; app_store_id?: string; app_name?: string }[];
      android?: { package: string; url: string; app_name?: string }[];
      web?: { url: string; should_fallback?: boolean }[];
    };
    archives?: string | string[];
    assets?: string | string[];
    bookmarks?: string | string[];
    category?: string;
    classification?: string;
    alternates?: {
      canonical?: string;
      languages?: Record<string, string>;
      media?: Record<string, string>;
      types?: Record<string, string>;
    };
    creator?: string;
    publisher?: string;
    publishedTime?: string;
    metadataBase?: URL;
    other?: { [name: string]: string };
  }

  export interface Viewport {
    width?: string | number;
    height?: string | number;
    initialScale?: number;
    minimumScale?: number;
    maximumScale?: number;
    userScalable?: boolean;
    viewportFit?: 'auto' | 'cover' | 'contain';
    themeColor?: string | { media: string; color: string }[];
    colorScheme?: 'normal' | 'light' | 'dark' | 'light dark';
  }

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

  export interface GetStaticPathsResult<
    P extends Record<string, string | string[]> = Record<string, string | string[]>,
  > {
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
    Q extends Record<string, string | string[]> = Record<string, string | string[]>,
  >(context: GetStaticPropsContext & { params: Q }): Promise<GetStaticPropsResult<P>>;

  export function getStaticPaths(context?: GetStaticPathsContext): Promise<GetStaticPathsResult>;
}
