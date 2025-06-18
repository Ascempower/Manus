import React from 'react';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ReactMarkdown from 'react-markdown';

import InternalLink from '@/components/ui/InternalLink';
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog-server';
import { formatDate } from '@/lib/blog-utils';

// No need for a custom PageProps type, we'll use inline typing

// Generate static params for all blog posts
export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-6 border-l-4 border-brand-deep-forest-green bg-gray-50 py-2 pl-4 italic text-gray-600">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
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
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  // If post doesn't exist, show 404
  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back to Blog Link */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      <article>
        {/* Article Header */}
        <div className="mb-8">
          {frontmatter.date && <p className="mb-2 text-gray-500">{formatDate(frontmatter.date)}</p>}
          {frontmatter.category && (
            <span className="mb-4 inline-block rounded-full bg-brand-teal-blue px-3 py-1 text-sm font-medium text-brand-black">
              {frontmatter.category}
            </span>
          )}
          <h1 className="mb-4 text-4xl font-bold text-gray-900">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-xl leading-relaxed text-gray-600">{frontmatter.description}</p>
          )}
        </div>

        {/* Featured Image */}
        {frontmatter.image && (
          <div className="relative mb-8 h-96 w-full">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title || 'Blog post image'}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown components={MarkdownComponents}>{content}</ReactMarkdown>
        </div>

        {/* Article Footer */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Author and Date */}
            <div className="flex items-center space-x-4">
              {frontmatter.author && (
                <p className="text-gray-600">
                  By <span className="font-medium text-gray-900">{frontmatter.author}</span>
                </p>
              )}
              {frontmatter.date && (
                <p className="text-gray-500">Published {formatDate(frontmatter.date)}</p>
              )}
            </div>

            {/* Tags */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="my-12 rounded-lg bg-brand-teal-blue/10 p-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">Need Expert Insurance Guidance?</h3>
          <p className="mb-6 text-lg text-gray-700">
            Our licensed insurance specialists at Choice Insurance Hub are here to help you navigate
            your options and find the coverage that best meets your needs and budget.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-brand-warm-beige-coral px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-warm-beige-coral/80"
            >
              Get Free Consultation
            </Link>
            <Link
              href="https://calendly.com/choiceinsuranceagency/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-brand-deep-forest-green px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-deep-forest-green/80"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
