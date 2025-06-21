'use client';

import { Button } from '@/components/ui/button';

interface ButtonLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function ButtonLink({ href, className, children, target, rel }: ButtonLinkProps) {
  return (
    <Button size="lg" asChild className={className}>
      <a href={href} target={target} rel={rel}>
        {children}
      </a>
    </Button>
  );
}
