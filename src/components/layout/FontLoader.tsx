'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Load fonts asynchronously
    const loadFonts = () => {
      const link = document.createElement('link');
      link.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    // Load fonts after component mounts
    loadFonts();
  }, []);

  return null;
}
