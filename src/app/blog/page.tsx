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

      {/* Recent Posts Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div 
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <Link 
                  href={`/blog/posts/${post.slug}`}
                  className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 font-semibold inline-flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Navigation */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Browse by Category</h2>
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((category) => (
            <Link 
              key={category}
              href={`#${category.replace(/\s+/g, '-').toLowerCase()}`}
              className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Blog Posts by Category */}
      {categories.map((category) => (
        <div 
          id={category.replace(/\s+/g, '-').toLowerCase()}
          key={category} 
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
            {category}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getPostsByCategory(category).map((post) => (
              <div 
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Link 
                    href={`/blog/posts/${post.slug}`}
                    className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 font-semibold inline-flex items-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

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
            href="https://calendly.com/choiceinsuranceagency/30-minute-meeting" 
            className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-3 px-8 rounded-md"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
