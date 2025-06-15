import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Insurance Blog | Choice Insurance Hub - Expert Insurance Insights',
  description: 'Stay informed with the latest insurance insights, tips, and industry updates from Choice Insurance Hub. Expert advice on Medicare, life insurance, health insurance, and more.',
  keywords: 'insurance blog, Medicare, life insurance, health insurance, insurance tips, Choice Insurance, insurance advice, insurance updates, insurance industry news',
  alternates: {
    canonical: "https://insureyourchoices.com/blog"
  }
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Insurance Insights Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest insurance news, tips, and expert advice from Choice Insurance Hub. Our comprehensive guides provide in-depth analysis and practical insights to help you make informed insurance decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* May 2025 Blog Post */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <Image 
              src="/images/blog/health-insurance-changes-2025.jpg" 
              alt="Doctor explaining healthcare policy changes to patient" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">May 7, 2025</p>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Key Health Insurance Changes to Watch for in 2025</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive analysis of major health insurance developments in 2025 including telehealth expansion, preventive care enhancements, prescription drug reforms, mental health coverage improvements, and marketplace innovations. Learn how these changes affect your coverage options and healthcare experience.
            </p>
            <Link 
              href="/blog/posts/may-2025-health-insurance-changes" 
              className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 font-semibold inline-flex items-center"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* April 2025 Blog Post */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <Image 
              src="/images/blog/family-life-insurance-2025.jpg" 
              alt="Family discussing life insurance options" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">April 3, 2025</p>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Understanding Life Insurance Options in 2025: A Complete Guide</h2>
            <p className="text-gray-600 mb-4">
              Complete guide to life insurance options for 2025 including detailed analysis of term vs. whole life, universal and variable policies, advanced riders, business applications, tax strategies, and strategic planning for different life stages. Expert insights to help protect your family&apos;s financial future.
            </p>
            <Link 
              href="/blog/posts/april-2025-understanding-life-insurance" 
              className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 font-semibold inline-flex items-center"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* March 2025 Blog Post */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <Image 
              src="/images/blog/medicare-comparison-2025.jpg" 
              alt="Medicare Advantage vs Medicare Supplement comparison" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">March 5, 2025</p>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Medicare Advantage vs. Medicare Supplement: Which is Right for You in 2025?</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive comparison of Medicare Advantage and Medicare Supplement plans for 2025. Detailed analysis of costs, provider networks, prescription coverage, geographic considerations, enrollment strategies, and decision-making frameworks to help you choose the best Medicare option for your healthcare needs and budget.
            </p>
            <Link 
              href="/blog/posts/march-2025-medicare-advantage-vs-supplement" 
              className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 font-semibold inline-flex items-center"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
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
