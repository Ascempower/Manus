import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical CSS */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/assets/logos/main-logo-optimized-transparent.png" 
          as="image" 
          fetchpriority="high"
        />
        
        {/* Add preconnect for external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://formfacade.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}