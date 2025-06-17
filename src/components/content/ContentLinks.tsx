"use client";

import { useEffect, useState } from 'react';
import { autoLinkContent, generateContentSuggestions } from '@/lib/markdown-links';
import { type InternalLink } from '@/lib/internal-links';
import RelatedLinks from '@/components/ui/RelatedLinks';
import InternalLink from '@/components/ui/InternalLink';

interface ContentLinksProps {
  content: string;
  currentPath?: string;
  showSuggestions?: boolean;
  autoLink?: boolean;
  className?: string;
}

export default function ContentLinks({
  content,
  currentPath,
  showSuggestions = true,
  autoLink = true,
  className = '',
}: ContentLinksProps) {
  const [processedContent, setProcessedContent] = useState(content);
  const [suggestions, setSuggestions] = useState<InternalLink[]>([]);

  useEffect(() => {
    // Process content for auto-linking
    if (autoLink) {
      const linkedContent = autoLinkContent(content);
      setProcessedContent(linkedContent);
    }

    // Generate suggestions
    if (showSuggestions) {
      const contentSuggestions = generateContentSuggestions(content, currentPath);
      setSuggestions(contentSuggestions);
    }
  }, [content, currentPath, autoLink, showSuggestions]);

  // Convert markdown links to React components
  const renderContentWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, linkText, href] = match;
      const beforeLink = text.slice(lastIndex, match.index);
      
      if (beforeLink) {
        parts.push(beforeLink);
      }
      
      parts.push(
        <InternalLink
          key={match.index}
          href={href}
          className="font-medium"
        >
          {linkText}
        </InternalLink>
      );
      
      lastIndex = match.index + fullMatch.length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts;
  };

  return (
    <div className={className}>
      {/* Processed content with auto-links */}
      {autoLink && (
        <div className="prose prose-brand max-w-none">
          {renderContentWithLinks(processedContent)}
        </div>
      )}
      
      {/* Related content suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="mt-8">
          <RelatedLinks
            links={suggestions}
            title="Related Information"
            variant="card"
            showDescriptions={true}
          />
        </div>
      )}
    </div>
  );
}

// Hook for using content links in components
export function useContentLinks(content: string, currentPath?: string) {
  const [suggestions, setSuggestions] = useState<InternalLink[]>([]);
  const [processedContent, setProcessedContent] = useState(content);

  useEffect(() => {
    const linkedContent = autoLinkContent(content);
    const contentSuggestions = generateContentSuggestions(content, currentPath);
    
    setProcessedContent(linkedContent);
    setSuggestions(contentSuggestions);
  }, [content, currentPath]);

  return {
    processedContent,
    suggestions,
    hasLinks: suggestions.length > 0,
  };
}"use client";

import { useEffect, useState } from 'react';
import { autoLinkContent, generateContentSuggestions } from '@/lib/markdown-links';
import { type InternalLink } from '@/lib/internal-links';
import RelatedLinks from '@/components/ui/RelatedLinks';
import InternalLink from '@/components/ui/InternalLink';

interface ContentLinksProps {
  content: string;
  currentPath?: string;
  showSuggestions?: boolean;
  autoLink?: boolean;
  className?: string;
}

export default function ContentLinks({
  content,
  currentPath,
  showSuggestions = true,
  autoLink = true,
  className = '',
}: ContentLinksProps) {
  const [processedContent, setProcessedContent] = useState(content);
  const [suggestions, setSuggestions] = useState<InternalLink[]>([]);

  useEffect(() => {
    // Process content for auto-linking
    if (autoLink) {
      const linkedContent = autoLinkContent(content);
      setProcessedContent(linkedContent);
    }

    // Generate suggestions
    if (showSuggestions) {
      const contentSuggestions = generateContentSuggestions(content, currentPath);
      setSuggestions(contentSuggestions);
    }
  }, [content, currentPath, autoLink, showSuggestions]);

  // Convert markdown links to React components
  const renderContentWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, linkText, href] = match;
      const beforeLink = text.slice(lastIndex, match.index);
      
      if (beforeLink) {
        parts.push(beforeLink);
      }
      
      parts.push(
        <InternalLink
          key={match.index}
          href={href}
          className="font-medium"
        >
          {linkText}
        </InternalLink>
      );
      
      lastIndex = match.index + fullMatch.length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts;
  };

  return (
    <div className={className}>
      {/* Processed content with auto-links */}
      {autoLink && (
        <div className="prose prose-brand max-w-none">
          {renderContentWithLinks(processedContent)}
        </div>
      )}
      
      {/* Related content suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="mt-8">
          <RelatedLinks
            links={suggestions}
            title="Related Information"
            variant="card"
            showDescriptions={true}
          />
        </div>
      )}
    </div>
  );
}

// Hook for using content links in components
export function useContentLinks(content: string, currentPath?: string) {
  const [suggestions, setSuggestions] = useState<InternalLink[]>([]);
  const [processedContent, setProcessedContent] = useState(content);

  useEffect(() => {
    const linkedContent = autoLinkContent(content);
    const contentSuggestions = generateContentSuggestions(content, currentPath);
    
    setProcessedContent(linkedContent);
    setSuggestions(contentSuggestions);
  }, [content, currentPath]);

  return {
    processedContent,
    suggestions,
    hasLinks: suggestions.length > 0,
  };
}