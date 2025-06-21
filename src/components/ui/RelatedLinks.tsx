import { ArrowRight, Tag } from 'lucide-react';

import InternalLink from '@/components/ui/InternalLink';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type InternalLink as IInternalLink } from '@/lib/internal-links';

interface RelatedLinksProps {
  links: IInternalLink[];
  title?: string;
  showDescriptions?: boolean;
  variant?: 'card' | 'list' | 'grid';
  className?: string;
}

export default function RelatedLinks({
  links,
  title = 'Related Pages',
  showDescriptions = true,
  variant = 'card',
  className = '',
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  const LinkItem = ({ link }: { link: IInternalLink }) => (
    <div className="group">
      <InternalLink
        href={link.href}
        className="flex items-center gap-2 font-medium text-brand-deep-forest-green transition-all duration-200 hover:text-brand-teal-blue group-hover:gap-3"
        title={link.description}
      >
        <ArrowRight className="h-4 w-4 text-brand-teal-blue" />
        {link.text}
      </InternalLink>
      {showDescriptions && link.description && (
        <p className="ml-6 mt-1 text-sm text-brand-black/70">{link.description}</p>
      )}
      {link.keywords && link.keywords.length > 0 && (
        <div className="ml-6 mt-2 flex items-center gap-1">
          <Tag className="h-3 w-3 text-brand-black/50" />
          <div className="flex flex-wrap gap-1">
            {link.keywords.slice(0, 3).map((keyword, index) => (
              <span
                key={index}
                className="rounded-full bg-brand-teal-blue/10 px-2 py-1 text-xs text-brand-deep-forest-green"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  if (variant === 'list') {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-brand-deep-forest-green">
          <Tag className="h-5 w-5" />
          {title}
        </h3>
        <div className="space-y-3">
          {links.map((link, index) => (
            <LinkItem key={index} link={link} />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`${className}`}>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-brand-deep-forest-green">
          <Tag className="h-5 w-5" />
          {title}
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {links.map((link, index) => (
            <Card key={index} className="transition-shadow duration-200 hover:shadow-md">
              <CardContent className="p-4">
                <LinkItem link={link} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Default card variant
  return (
    <Card className={`${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg text-brand-deep-forest-green">
          <Tag className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {links.map((link, index) => (
          <LinkItem key={index} link={link} />
        ))}
      </CardContent>
    </Card>
  );
}
