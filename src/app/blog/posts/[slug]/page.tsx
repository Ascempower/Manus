import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ReactMarkdown from 'react-markdown';

import InternalLink from '@/components/ui/InternalLink';
import { getAllBlogPosts, getBlogPost } from '@/lib/blog-server';

// Blog post page component

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all published blog posts
export function generateStaticParams() {
  const posts = getAllBlogPosts({ includeFuturePosts: false });
  const slugs = posts.map(post => post.slug);
  return slugs.map(slug => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Choice Insurance Hub',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const { frontmatter } = post;

  return {
    title: `${frontmatter.title} | Choice Insurance Hub`,
    description:
      frontmatter.description ||
      'Expert insurance insights and advice from Choice Insurance Hub specialists.',
    keywords: frontmatter.tags ? frontmatter.tags.join(', ') : undefined,
    authors: frontmatter.author ? [{ name: frontmatter.author }] : undefined,
    alternates: {
      canonical: `https://choiceinsurancehub.com/blog/posts/${slug}`,
    },
    openGraph: {
      title: frontmatter.title,
      description:
        frontmatter.description ||
        'Expert insurance insights and advice from Choice Insurance Hub specialists.',
      type: 'article',
      url: `https://choiceinsurancehub.com/blog/posts/${slug}`,
      publishedTime: frontmatter.date,
      authors: frontmatter.author ? [frontmatter.author] : undefined,
      images: frontmatter.image
        ? [
            {
              url: frontmatter.image,
              alt: frontmatter.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.image ? [frontmatter.image] : undefined,
    },
  };
}

// Custom components for ReactMarkdown
const MarkdownComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mb-4 mt-8 text-4xl font-bold text-gray-900 first:mt-0">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mb-4 mt-8 text-3xl font-bold text-gray-800">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-3 mt-6 text-2xl font-bold text-gray-800">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="mb-3 mt-6 text-xl font-bold text-gray-800">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 text-lg leading-relaxed text-gray-700">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-4 list-inside list-disc space-y-2 text-lg text-gray-700">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-4 list-inside list-decimal space-y-2 text-lg text-gray-700">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="mb-1">{children}</li>,
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="my-6 border-l-4 border-brand-deep-forest-green bg-gray-50 py-2 pl-4 italic text-gray-600">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <InternalLink
      href={href || '#'}
      className="font-medium text-brand-deep-forest-green hover:text-brand-teal-blue"
      external={href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:')}
      showIcon={href?.startsWith('http')}
    >
      {children}
    </InternalLink>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-gray-900">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm">{children}</code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4">
      <code className="font-mono text-sm">{children}</code>
    </pre>
  ),
};

// Define the page component
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  let post;

  try {
    post = getBlogPost(slug);
    // If post doesn't exist, show 404
    if (!post) {
      notFound();
    }
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-lg max-w-none">
        {/* Blog post header */}
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-xl text-gray-600">{frontmatter.description}</p>
          )}
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            {frontmatter.date && (
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            {frontmatter.author && <span>By {frontmatter.author}</span>}
            {frontmatter.readingTime && (
              <span>
                {typeof frontmatter.readingTime === 'number' || typeof frontmatter.readingTime === 'string' 
                  ? `${frontmatter.readingTime} min read` 
                  : 'Reading time available'}
              </span>
            )}
          </div>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-deep-forest-green/10 px-3 py-1 text-sm text-brand-deep-forest-green"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Blog post content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown components={MarkdownComponents}>{content}</ReactMarkdown>
        </div>

        {/* Back to blog link */}
        <footer className="mt-12 border-t border-gray-200 pt-8">
          <InternalLink
            href="/blog"
            className="inline-flex items-center text-brand-deep-forest-green hover:text-brand-teal-blue"
          >
            ← Back to Blog
          </InternalLink>
        </footer>
      </article>
    </div>
  );
}
