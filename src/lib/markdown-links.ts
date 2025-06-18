import { INTERNAL_LINKS, type InternalLink } from './internal-links';

// Markdown link patterns that should be converted to internal links
export const MARKDOWN_LINK_PATTERNS: Record<string, string> = {
  // Service shortcuts
  '[[medicare-advantage]]': INTERNAL_LINKS.medicare_advantage.href,
  '[[medicare-supplement]]': INTERNAL_LINKS.medicare_supplement.href,
  '[[life-insurance]]': INTERNAL_LINKS.life_insurance.href,
  '[[health-insurance]]': INTERNAL_LINKS.health_insurance.href,
  '[[final-expense]]': INTERNAL_LINKS.final_expense.href,
  '[[annuities]]': INTERNAL_LINKS.annuities.href,
  '[[hospital-indemnity]]': INTERNAL_LINKS.hospital_indemnity.href,
  '[[cancer-illness]]': INTERNAL_LINKS.cancer_illness.href,

  // Page shortcuts
  '[[about]]': INTERNAL_LINKS.about.href,
  '[[contact]]': INTERNAL_LINKS.contact.href,
  '[[services]]': INTERNAL_LINKS.services.href,
  '[[testimonials]]': INTERNAL_LINKS.testimonials.href,
  '[[faq]]': INTERNAL_LINKS.faq.href,
  '[[blog]]': INTERNAL_LINKS.blog.href,

  // Legal shortcuts
  '[[privacy]]': INTERNAL_LINKS.privacy_policy.href,
  '[[terms]]': INTERNAL_LINKS.terms_of_service.href,
  '[[hipaa]]': INTERNAL_LINKS.hipaa_notice.href,
  '[[accessibility]]': INTERNAL_LINKS.accessibility_statement.href,
};

// Convert markdown shortcuts to proper links
export function processMarkdownLinks(content: string): string {
  let processedContent = content;

  // Replace shortcut patterns
  Object.entries(MARKDOWN_LINK_PATTERNS).forEach(([pattern, href]) => {
    const regex = new RegExp(pattern.replace(/\[/g, '\\[').replace(/\]/g, '\\]'), 'g');
    const linkKey = Object.keys(INTERNAL_LINKS).find(key => INTERNAL_LINKS[key].href === href);
    const linkText = linkKey ? INTERNAL_LINKS[linkKey].text : href;
    
    processedContent = processedContent.replace(regex, `[${linkText}](${href})`);
  });

  return processedContent;
}

// Extract internal links from markdown content
export function extractInternalLinks(content: string): InternalLink[] {
  const links: InternalLink[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const [, , href] = match;
    
    // Check if it's an internal link
    const internalLink = Object.values(INTERNAL_LINKS).find(link => link.href === href);
    if (internalLink) {
      links.push(internalLink);
    }
  }

  return links;
}

// Generate related content suggestions based on current content
export function generateContentSuggestions(content: string, currentPath?: string): InternalLink[] {
  const words = content.toLowerCase().split(/\s+/);
  const suggestions: InternalLink[] = [];

  // Look for keyword matches
  Object.values(INTERNAL_LINKS).forEach(link => {
    if (currentPath && link.href === currentPath) return;

    const score = link.keywords?.reduce((acc, keyword) => {
      const keywordWords = keyword.toLowerCase().split(/\s+/);
      const matches = keywordWords.filter(kw => words.some(w => w.includes(kw)));
      return acc + matches.length;
    }, 0) || 0;

    if (score > 0) {
      suggestions.push({ ...link, score } as InternalLink & { score: number });
    }
  });

  // Sort by score and priority
  return suggestions
    .sort((a, b) => {
      const aScore = (a as any).score || 0;
      const bScore = (b as any).score || 0;
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      
      if (aScore !== bScore) return bScore - aScore;
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
    .slice(0, 5);
}

// Auto-link common insurance terms in content
export function autoLinkContent(content: string): string {
  let linkedContent = content;

  // Define terms to auto-link (case-insensitive)
  const autoLinkTerms: Record<string, string> = {
    'Medicare Advantage': INTERNAL_LINKS.medicare_advantage.href,
    'Medicare Supplement': INTERNAL_LINKS.medicare_supplement.href,
    'Medigap': INTERNAL_LINKS.medicare_supplement.href,
    'Life Insurance': INTERNAL_LINKS.life_insurance.href,
    'Health Insurance': INTERNAL_LINKS.health_insurance.href,
    'Final Expense': INTERNAL_LINKS.final_expense.href,
    'Annuities': INTERNAL_LINKS.annuities.href,
    'Hospital Indemnity': INTERNAL_LINKS.hospital_indemnity.href,
    'Cancer Insurance': INTERNAL_LINKS.cancer_illness.href,
    'Critical Illness': INTERNAL_LINKS.cancer_illness.href,
  };

  // Only auto-link if the term isn't already in a link
  Object.entries(autoLinkTerms).forEach(([term, href]) => {
    const regex = new RegExp(`(?<!\\[)\\b${term}\\b(?![^\\[]*\\])`, 'gi');
    linkedContent = linkedContent.replace(regex, `[${term}](${href})`);
  });

  return linkedContent;
}

const markdownLinksUtils = {
  MARKDOWN_LINK_PATTERNS,
  processMarkdownLinks,
  extractInternalLinks,
  generateContentSuggestions,
  autoLinkContent,
};

export default markdownLinksUtils;