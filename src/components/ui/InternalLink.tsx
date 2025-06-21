import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

import { cn } from '@/lib/utils';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  external?: boolean;
  title?: string;
  'aria-label'?: string;
}

export default function InternalLink({
  href,
  children,
  className,
  showIcon = false,
  external = false,
  title,
  'aria-label': ariaLabel,
}: InternalLinkProps) {
  // Check if it's an external link
  const isExternal =
    external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  const linkClasses = cn(
    'text-brand-deep-forest-green hover:text-brand-teal-blue transition-colors duration-200',
    'underline decoration-brand-teal-blue/30 hover:decoration-brand-teal-blue',
    'focus:outline-none focus:ring-2 focus:ring-brand-teal-blue focus:ring-offset-2 rounded-sm',
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(linkClasses, 'inline-flex items-center gap-1')}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        aria-label={ariaLabel}
      >
        {children}
        {showIcon && <ExternalLink className="h-3 w-3" />}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses} title={title} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
