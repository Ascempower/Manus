import { Home } from 'lucide-react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { INTERNAL_LINKS } from '@/lib/internal-links';

interface BreadcrumbItemData {
  label: string;
  href?: string;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItemData[];
  className?: string;
}

export default function CustomBreadcrumb({ items, className = '' }: CustomBreadcrumbProps) {
  const allItems = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="text-brand-black/70">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isHome = index === 0;

          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-brand-deep-forest-green font-medium">
                    {isHome && <Home className="h-4 w-4 inline mr-1" />}
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link 
                      href={item.href || '/'} 
                      className="hover:text-brand-deep-forest-green transition-colors duration-200"
                    >
                      {isHome && <Home className="h-4 w-4 inline mr-1" />}
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              
              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

// Helper function to generate breadcrumbs from pathname
export function generateBreadcrumbs(pathname: string): BreadcrumbItemData[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItemData[] = [];

  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Find matching internal link
    const matchingLink = Object.values(INTERNAL_LINKS).find(link => link.href === currentPath);
    
    if (matchingLink) {
      breadcrumbs.push({
        label: matchingLink.text,
        href: index === segments.length - 1 ? undefined : currentPath, // Don't link the current page
      });
    } else {
      // Fallback: create readable label from segment
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: index === segments.length - 1 ? undefined : currentPath,
      });
    }
  });

  return breadcrumbs;
}import { Home } from 'lucide-react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { INTERNAL_LINKS } from '@/lib/internal-links';

interface BreadcrumbItemData {
  label: string;
  href?: string;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItemData[];
  className?: string;
}

export default function CustomBreadcrumb({ items, className = '' }: CustomBreadcrumbProps) {
  const allItems = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="text-brand-black/70">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isHome = index === 0;

          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-brand-deep-forest-green font-medium">
                    {isHome && <Home className="h-4 w-4 inline mr-1" />}
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link 
                      href={item.href || '/'} 
                      className="hover:text-brand-deep-forest-green transition-colors duration-200"
                    >
                      {isHome && <Home className="h-4 w-4 inline mr-1" />}
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              
              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

// Helper function to generate breadcrumbs from pathname
export function generateBreadcrumbs(pathname: string): BreadcrumbItemData[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItemData[] = [];

  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Find matching internal link
    const matchingLink = Object.values(INTERNAL_LINKS).find(link => link.href === currentPath);
    
    if (matchingLink) {
      breadcrumbs.push({
        label: matchingLink.text,
        href: index === segments.length - 1 ? undefined : currentPath, // Don't link the current page
      });
    } else {
      // Fallback: create readable label from segment
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: index === segments.length - 1 ? undefined : currentPath,
      });
    }
  });

  return breadcrumbs;
}