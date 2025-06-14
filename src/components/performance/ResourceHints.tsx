interface ResourceHintsProps {
  preconnect?: string[];
  dnsPrefetch?: string[];
  preload?: Array<{
    href: string;
    as: string;
    type?: string;
    crossOrigin?: boolean;
  }>;
}

export default function ResourceHints({ 
  preconnect = [], 
  dnsPrefetch = [], 
  preload = [] 
}: ResourceHintsProps) {
  return (
    <>
      {/* Preconnect hints for critical resources */}
      {preconnect.map((url) => (
        <link 
          key={url} 
          rel="preconnect" 
          href={url} 
          crossOrigin={url.includes('fonts') ? 'anonymous' : undefined}
        />
      ))}
      
      {/* DNS prefetch for non-critical resources */}
      {dnsPrefetch.map((url) => (
        <link key={url} rel="dns-prefetch" href={url} />
      ))}
      
      {/* Preload critical resources */}
      {preload.map((resource) => (
        <link
          key={resource.href}
          rel="preload"
          href={resource.href}
          as={resource.as}
          type={resource.type}
          crossOrigin={resource.crossOrigin ? 'anonymous' : undefined}
        />
      ))}
    </>
  );
}