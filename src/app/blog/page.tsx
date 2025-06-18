import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { getAllBlogPosts } from '@/lib/blog-server';
import { formatDate, generateExcerpt } from '@/lib/blog-utils';

export const metadata: Metadata = {
  title: 'Insurance Blog | Choice Insurance Hub - Expert Insurance Insights',
  description:
    'Stay informed with the latest insurance insights, tips, and industry updates from Choice Insurance Hub. Expert advice on Medicare, life insurance, health insurance, and more.',
  keywords:
    'insurance blog, Medicare, life insurance, health insurance, insurance tips, Choice Insurance, insurance advice, insurance updates, insurance industry news',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/blog',
  },
};

export default function BlogPage() {
  let posts = [];
  try {
    // Get all published blog posts (excluding future posts)
    posts = getAllBlogPosts({
      sortBy: 'date',
      sortOrder: 'desc',
      includeFuturePosts: false, // Only show published posts
    });
    console.log(`Found ${posts.length} published blog posts`);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    // Continue with empty posts array
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Insurance Insights Blog</h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          Stay informed with the latest insurance news, tips, and expert advice from Choice
          Insurance Hub. Our comprehensive guides provide in-depth analysis and practical insights
          to help you make informed insurance decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div
            key={post.slug}
            className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Featured Image */}
            {post.frontmatter.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title || 'Blog post image'}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6">
              {/* Date and Category */}
              <div className="mb-2 flex items-center justify-between">
                {post.frontmatter.date && (
                  <p className="text-sm text-gray-500">{formatDate(post.frontmatter.date)}</p>
                )}
                {post.frontmatter.category && (
                  <span className="inline-block rounded-full bg-brand-teal-blue px-2 py-1 text-xs font-medium text-brand-black">
                    {post.frontmatter.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="mb-2 line-clamp-2 text-xl font-bold text-gray-900">
                {post.frontmatter.title}
              </h2>

              {/* Description or Excerpt */}
              <p className="mb-4 line-clamp-3 text-gray-600">
                {post.frontmatter.description || generateExcerpt(post.content)}
              </p>

              {/* Tags */}
              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-1">
                  {post.frontmatter.tags.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-block rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.frontmatter.tags.length > 3 && (
                    <span className="inline-block px-2 py-1 text-xs text-gray-500">
                      +{post.frontmatter.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Read More Link */}
              <Link
                href={`/blog/posts/${post.slug}`}
                className="inline-flex items-center font-semibold text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}

        {/* Show message if no posts found */}
        {posts.length === 0 && (
          <div className="col-span-full py-12 text-center">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">No Blog Posts Found</h3>
            <p className="text-gray-600">
              Check back soon for new insurance insights and expert advice.
            </p>
          </div>
        )}
      </div>

      <div className="mt-16 text-center">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Subscribe to Our Insurance Newsletter
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Stay updated with the latest insurance trends, tips, and exclusive offers delivered
          straight to your inbox.
        </p>
        <div className="mx-auto max-w-md">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-warm-beige-coral"
            />
            <button className="rounded-md bg-brand-warm-beige-coral px-6 py-2 font-semibold text-white hover:bg-brand-warm-beige-coral/80">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-gray-50 p-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Have Insurance Questions?</h2>
          <p className="text-gray-600">
            Our insurance experts are ready to provide personalized guidance for your specific
            needs.
          </p>
        </div>
        <div className="text-center">
          <Link
            href="https://calendly.com/choiceinsuranceagency/30-minute-meeting"
            className="inline-block rounded-md bg-brand-warm-beige-coral px-8 py-3 font-semibold text-white hover:bg-brand-warm-beige-coral/80"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
