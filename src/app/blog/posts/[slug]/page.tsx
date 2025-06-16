import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogPost, formatDate } from '@/lib/blog';

// Generate static params for all blog posts
export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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
    description: frontmatter.description || 'Expert insurance insights and advice from Choice Insurance Hub specialists.',
    keywords: frontmatter.tags ? frontmatter.tags.join(', ') : undefined,
    authors: frontmatter.author ? [{ name: frontmatter.author }] : undefined,
    publishedTime: frontmatter.date,
    category: frontmatter.category,
    alternates: {
      canonical: `https://insureyourchoices.com/blog/posts/${slug}`
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: frontmatter.author ? [frontmatter.author] : undefined,
      images: frontmatter.image ? [
        {
          url: frontmatter.image,
          alt: frontmatter.title,
        }
      ] : undefined,
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
    <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg text-gray-700 mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-lg text-gray-700">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-lg text-gray-700">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-brand-warm-beige-coral pl-4 my-6 italic text-gray-600 bg-gray-50 py-2">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-gray-900">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
      <code className="text-sm font-mono">{children}</code>
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
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Back to Blog Link */}
      <div className="mb-10">
        <Link href="/blog" className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
      </div>
      
      <article>
        {/* Article Header */}
        <div className="mb-8">
          {frontmatter.date && (
            <p className="text-gray-500 mb-2">{formatDate(frontmatter.date)}</p>
          )}
          {frontmatter.category && (
            <span className="inline-block bg-brand-teal-blue text-brand-black px-3 py-1 rounded-full text-sm font-medium mb-4">
              {frontmatter.category}
            </span>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-xl text-gray-600 leading-relaxed">{frontmatter.description}</p>
          )}
        </div>
        
        {/* Featured Image */}
        {frontmatter.image && (
          <div className="relative w-full h-96 mb-8">
            <Image 
              src={frontmatter.image} 
              alt={frontmatter.title || 'Blog post image'} 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        
        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown components={MarkdownComponents}>
            {content}
          </ReactMarkdown>
        </div>
        
        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Author and Date */}
            <div className="flex items-center space-x-4">
              {frontmatter.author && (
                <p className="text-gray-600">
                  By <span className="font-medium text-gray-900">{frontmatter.author}</span>
                </p>
              )}
              {frontmatter.date && (
                <p className="text-gray-500">
                  Published {formatDate(frontmatter.date)}
                </p>
              )}
            </div>
            
            {/* Tags */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-brand-teal-blue/10 p-8 rounded-lg my-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Need Expert Insurance Guidance?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Our licensed insurance specialists at Choice Insurance Hub are here to help you navigate your options and find the coverage that best meets your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-3 px-6 rounded-md text-center transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="https://calendly.com/choiceinsuranceagency/30-minute-meeting" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-deep-forest-green hover:bg-brand-deep-forest-green/80 text-white font-semibold py-3 px-6 rounded-md text-center transition-colors"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </article{ Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogPost, formatDate } from '@/lib/blog';

// Generate static params for all blog posts
export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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
    description: frontmatter.description || 'Expert insurance insights and advice from Choice Insurance Hub specialists.',
    keywords: frontmatter.tags ? frontmatter.tags.join(', ') : undefined,
    authors: frontmatter.author ? [{ name: frontmatter.author }] : undefined,
    publishedTime: frontmatter.date,
    category: frontmatter.category,
    alternates: {
      canonical: `https://insureyourchoices.com/blog/posts/${slug}`
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: frontmatter.author ? [frontmatter.author] : undefined,
      images: frontmatter.image ? [
        {
          url: frontmatter.image,
          alt: frontmatter.title,
        }
      ] : undefined,
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
    <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg text-gray-700 mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-lg text-gray-700">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-lg text-gray-700">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-brand-warm-beige-coral pl-4 my-6 italic text-gray-600 bg-gray-50 py-2">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-gray-900">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
      <code className="text-sm font-mono">{children}</code>
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
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Back to Blog Link */}
      <div className="mb-10">
        <Link href="/blog" className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
      </div>
      
      <article>
        {/* Article Header */}
        <div className="mb-8">
          {frontmatter.date && (
            <p className="text-gray-500 mb-2">{formatDate(frontmatter.date)}</p>
          )}
          {frontmatter.category && (
            <span className="inline-block bg-brand-teal-blue text-brand-black px-3 py-1 rounded-full text-sm font-medium mb-4">
              {frontmatter.category}
            </span>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-xl text-gray-600 leading-relaxed">{frontmatter.description}</p>
          )}
        </div>
        
        {/* Featured Image */}
        {frontmatter.image && (
          <div className="relative w-full h-96 mb-8">
            <Image 
              src={frontmatter.image} 
              alt={frontmatter.title || 'Blog post image'} 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        
        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown components={MarkdownComponents}>
            {content}
          </ReactMarkdown>
        </div>
        
        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Author and Date */}
            <div className="flex items-center space-x-4">
              {frontmatter.author && (
                <p className="text-gray-600">
                  By <span className="font-medium text-gray-900">{frontmatter.author}</span>
                </p>
              )}
              {frontmatter.date && (
                <p className="text-gray-500">
                  Published {formatDate(frontmatter.date)}
                </p>
              )}
            </div>
            
            {/* Tags */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-brand-teal-blue/10 p-8 rounded-lg my-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Need Expert Insurance Guidance?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Our licensed insurance specialists at Choice Insurance Hub are here to help you navigate your options and find the coverage that best meets your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-3 px-6 rounded-md text-center transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="https://calendly.com/choiceinsuranceagency/30-minute-meeting" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-deep-forest-green hover:bg-brand-deep-forest-green/80 text-white font-semibold py-3 px-6 rounded-md text-center transition-colors"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
