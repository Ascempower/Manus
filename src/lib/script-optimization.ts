// Script optimization utilities

export interface ScriptConfig {
  src: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
  defer?: boolean;
  async?: boolean;
  preload?: boolean;
  critical?: boolean;
}

export const SCRIPT_PRIORITIES = {
  CRITICAL: 1,
  HIGH: 2,
  MEDIUM: 3,
  LOW: 4,
  LAZY: 5,
} as const;

export const optimizedScripts: Record<string, ScriptConfig> = {
  // Critical scripts (load immediately)
  polyfills: {
    src: '/scripts/polyfills.js',
    strategy: 'beforeInteractive',
    critical: true,
  },
  
  // High priority scripts (load after interactive)
  analytics: {
    src: 'https://www.googletagmanager.com/gtag/js',
    strategy: 'afterInteractive',
    defer: true,
  },
  
  // Medium priority scripts (lazy load)
  chatWidget: {
    src: '/scripts/chat-widget.js',
    strategy: 'lazyOnload',
    defer: true,
  },
  
  // Low priority scripts (lazy load)
  socialMedia: {
    src: '/scripts/social-media.js',
    strategy: 'lazyOnload',
    defer: true,
  },
  
  // Lazy scripts (load on demand)
  maps: {
    src: 'https://maps.googleapis.com/maps/api/js',
    strategy: 'lazyOnload',
    defer: true,
  },
};

export function getScriptLoadingStrategy(priority: number): 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' {
  switch (priority) {
    case SCRIPT_PRIORITIES.CRITICAL:
      return 'beforeInteractive';
    case SCRIPT_PRIORITIES.HIGH:
      return 'afterInteractive';
    default:
      return 'lazyOnload';
  }
}

export function shouldPreloadScript(config: ScriptConfig): boolean {
  return config.critical || config.preload || false;
}

export function createScriptPreloadLink(src: string): string {
  return `<link rel="preload" href="${src}" as="script" crossorigin="anonymous">`;
}

// Utility to defer non-critical scripts
export function deferScript(callback: () => void, delay: number = 0): void {
  if (typeof window === 'undefined') return;
  
  if (delay > 0) {
    setTimeout(callback, delay);
  } else {
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback);
    } else {
      setTimeout(callback, 0);
    }
  }
}

// Utility to load scripts on user interaction
export function loadOnInteraction(callback: () => void, events: string[] = ['click', 'scroll', 'keydown']): void {
  if (typeof window === 'undefined') return;
  
  let hasLoaded = false;
  
  const loadScript = () => {
    if (hasLoaded) return;
    hasLoaded = true;
    
    // Remove event listeners
    events.forEach(event => {
      window.removeEventListener(event, loadScript, { passive: true });
    });
    
    callback();
  };
  
  // Add event listeners
  events.forEach(event => {
    window.addEventListener(event, loadScript, { passive: true });
  });
  
  // Fallback: load after 5 seconds
  setTimeout(loadScript, 5000);
}

// Utility to check if script is already loaded
export function isScriptLoaded(src: string): boolean {
  if (typeof document === 'undefined') return false;
  
  const scripts = document.querySelectorAll('script[src]');
  return Array.from(scripts).some(script => 
    (script as HTMLScriptElement).src.includes(src)
  );
}

// Utility to dynamically load scripts
export function loadScript(src: string, options: Partial<ScriptConfig> = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof document === 'undefined') {
      reject(new Error('Document not available'));
      return;
    }
    
    if (isScriptLoaded(src)) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = src;
    script.async = options.async ?? true;
    script.defer = options.defer ?? false;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.head.appendChild(script);
  });
}

export default {
  SCRIPT_PRIORITIES,
  optimizedScripts,
  getScriptLoadingStrategy,
  shouldPreloadScript,
  createScriptPreloadLink,
  deferScript,
  loadOnInteraction,
  isScriptLoaded,
  loadScript,
};