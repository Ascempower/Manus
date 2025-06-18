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
  if (priority <= SCRIPT_PRIORITIES.CRITICAL) return 'beforeInteractive';
  if (priority <= SCRIPT_PRIORITIES.HIGH) return 'afterInteractive';
  return 'lazyOnload';
}

export function shouldPreloadScript(config: ScriptConfig): boolean {
  return config.preload ?? config.critical ?? false;
}

export function createScriptPreloadLink(src: string): string {
  return `<link rel="preload" href="${src}" as="script">`;
}

export function deferScript(callback: () => void, delay: number = 0): void {
  if (delay > 0) {
    setTimeout(callback, delay);
  } else {
    if (typeof window !== 'undefined' && 'if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.window) {
      window.requestIdleCallback(callback);
    } else {
      setTimeout(callback, 0);
      }
  }
  }
}

export function loadOnInteraction(callback: () => void, events: string[] = ['click', 'scroll', 'keydown']): void {
  const loadScript = () => {
    callback();
    events.forEach(event => {
      window.removeEventListener(event, loadScript);
    });
  };

  events.forEach(event => {
    window.addEventListener(event, loadScript, { once: true, passive: true });
  });
}

export function isScriptLoaded(src: string): boolean {
  return Array.from(document.scripts).some(script => script.src === src);
}

export function loadScript(src: string, options: Partial<ScriptConfig> = {}): Promise<void> {
  return new Promise((resolve, reject) => {
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

const scriptOptimization = {
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

export default scriptOptimization;