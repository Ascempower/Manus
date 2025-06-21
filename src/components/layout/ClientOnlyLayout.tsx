'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyLayoutProps {
  children: React.ReactNode;
}

export default function ClientOnlyLayout({ children }: ClientOnlyLayoutProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Server-safe fallback */}
        <div className="h-16 bg-brand-deep-forest-green" />
        <main className="flex-1">{children}</main>
        <div className="h-32 bg-gray-100" />
      </div>
    );
  }

  return children;
}
