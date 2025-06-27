import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMetadata, getAllCategories, getPostsByCategory } from '@/lib/blog-utils';

export const metadata: Metadata = {
  title: 'Insurance Blog | Choice Insurance Agency',
  description: 'Stay informed with the latest insurance insights, tips, and industry updates from Choice Insurance Agency. Expert advice on Medicare, life insurance, health insurance, and more.',
  keywords: 'insurance blog, Medicare, life insurance, health insurance, insurance tips, Choice Insurance',
};

export default function BlogPage() {
  // Get all posts sorted by date (newest first)
  const allPosts = getAllPostsMetadata();
  
  // Get the 3 most recent posts
  const recentPosts = allPosts.slice(0, 3);
  
  // Get all categories
  const categories = getAllCategories();
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Insurance Insights Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest insurance news, tips, and expert advice from Choice Insurance Agency
        </p>
      </div>

      {/* Latest Articles Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <Link href={`/blog/posts/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <Link href={`/blog/posts/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-brand-warm-beige-coral transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                <Link 
                  href={`/blog/posts/${post.slug}`}
                  className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 font-medium inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Blog Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
          Future Blog Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Medicare Category Preview */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-brand-warm-beige-coral/10 p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Medicare</h3>
              <p className="text-gray-600 mb-4">
                Coming soon: Expert insights on Medicare Advantage, Medicare Supplements, enrollment periods, and coverage options.
              </p>
            </div>
          </div>
          
          {/* Life Insurance Category Preview */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-brand-warm-beige-coral/10 p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Coming soon: Guides on term life, whole life, universal life policies, and choosing the right coverage for your family.
              </p>
            </div>
          </div>
          
          {/* Health Insurance Category Preview */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-brand-warm-beige-coral/10 p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Health Insurance</h3>
              <p className="text-gray-600 mb-4">
                Coming soon: Updates on health insurance plans, marketplace options, and maximizing your healthcare benefits.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Retirement Planning Category Preview */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-brand-warm-beige-coral/10 p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Retirement Planning</h3>
              <p className="text-gray-600 mb-4">
                Coming soon: Strategies for retirement savings, annuities, and creating a secure financial future.
              </p>
            </div>
          </div>
          
          {/* Insurance Tips Category Preview */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-brand-warm-beige-coral/10 p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Insurance Tips</h3>
              <p className="text-gray-600 mb-4">
                Coming soon: Practical advice on comparing policies, understanding coverage, and avoiding common insurance mistakes.
              </p>
            </div>
          </div>
          
          {/* Industry News Category Preview */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-brand-warm-beige-coral/10 p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Industry News</h3>
              <p className="text-gray-600 mb-4">
                Coming soon: The latest updates on insurance regulations, industry changes, and how they affect your coverage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscribe to Our Insurance Newsletter</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay updated with the latest insurance trends, tips, and exclusive offers delivered straight to your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-warm-beige-coral"
            />
            <button className="bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-2 px-6 rounded-md">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Have Insurance Questions?</h2>
          <p className="text-gray-600">
            Our insurance experts are ready to provide personalized guidance for your specific needs.
          </p>
        </div>
        <div className="text-center">
          <Link 
            href="https://calendly.com/choiceinsurancehub" 
            className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-3 px-8 rounded-md"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
