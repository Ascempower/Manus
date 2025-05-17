import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Choice Insurance Agency',
  description: 'Read the latest news, tips, and insights on insurance from Choice Insurance Agency.',
};

// Placeholder data for blog posts
const blogPosts = [
  {
    slug: "understanding-medicare-part-d",
    title: "Understanding Medicare Part D: Prescription Drug Coverage",
    date: "May 10, 2025",
    excerpt: "Medicare Part D can be confusing. This post breaks down what it covers, how to enroll, and tips for choosing the right plan for your prescription needs.",
    imageUrl: "/images/blog/placeholder-1.jpg", // Replace with actual image path
  },
  {
    slug: "top-5-questions-about-life-insurance",
    title: "Top 5 Questions to Ask When Buying Life Insurance",
    date: "May 3, 2025",
    excerpt: "Buying life insurance is a big decision. We cover the most important questions you should ask your agent to ensure you get the best policy for your family.",
    imageUrl: "/images/blog/placeholder-2.jpg", // Replace with actual image path
  },
  {
    slug: "navigating-open-enrollment",
    title: "Navigating Health Insurance Open Enrollment: A Simple Guide",
    date: "April 25, 2025",
    excerpt: "Open enrollment season is here! Learn how to prepare, compare plans, and make the most of this period to secure your health coverage for the upcoming year.",
    imageUrl: "/images/blog/placeholder-3.jpg", // Replace with actual image path
  },
];

export default function BlogPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Page Header */}
      <section className="py-12 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins">Our Blog</h1>
          <p className="text-lg text-brand-black/80 mt-4 max-w-2xl mx-auto">
            Stay informed with the latest news, tips, and insights on health, life, and Medicare insurance from the experts at Choice Insurance Agency.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <div className="bg-brand-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col border border-brand-teal-blue/30 hover:shadow-xl transition-shadow duration-300">
                    {/* Placeholder for image - In a real app, you would use Next/Image */}
                    <div className="w-full h-48 bg-brand-teal-blue/30 flex items-center justify-center text-brand-deep-forest-green">
                      {/* <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" /> */}
                      <span>Blog Post Image</span> {/* Placeholder text */}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-2xl font-bold mb-2 text-brand-deep-forest-green font-poppins group-hover:text-brand-teal-blue transition-colors duration-300">{post.title}</h2>
                      <p className="text-sm text-brand-black/70 mb-1">{post.date}</p>
                      <p className="text-brand-black/80 mb-4 flex-grow">{post.excerpt}</p>
                      <span className="mt-auto text-brand-warm-beige-coral font-semibold group-hover:underline">
                        Read More &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-brand-deep-forest-green mb-4">Coming Soon!</h2>
              <p className="text-lg text-brand-black/80">
                We are working on bringing you insightful articles. Please check back later.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section (Optional, can be similar to other pages) */}
      <section className="py-16 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Have Questions or Need Insurance Advice?</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-2xl mx-auto">
            Our experienced agents are ready to help you find the best coverage solutions tailored to your needs.
          </p>
          <Link 
            href="/contact#book-a-call" 
            className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

