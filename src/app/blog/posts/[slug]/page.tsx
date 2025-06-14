import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// Generate static params for all blog posts
export function generateStaticParams() {
  return [
    { slug: 'march-2025-medicare-advantage-vs-supplement' },
    { slug: 'april-2025-understanding-life-insurance' },
    { slug: 'may-2025-health-insurance-changes' }
  ];
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // Define metadata based on slug
  if (slug === 'march-2025-medicare-advantage-vs-supplement') {
    return {
      title: 'Medicare Advantage vs. Medicare Supplement: Which is Right for You in 2025? | Choice Insurance',
      description: 'Compare Medicare Advantage and Medicare Supplement plans for 2025. Expert analysis of costs, provider networks, and coverage options from Choice Insurance Hub.',
      keywords: 'Medicare Advantage, Medicare Supplement, Medigap, Medicare comparison, Medicare 2025, Choice Insurance, Medicare options',
      alternates: {
        canonical: `https://insureyourchoices.com/blog/posts/${slug}`
      }
    };
  } 
  else if (slug === 'april-2025-understanding-life-insurance') {
    return {
      title: 'Understanding Life Insurance Options: A Spring 2025 Guide | Choice Insurance',
      description: 'Comprehensive guide to life insurance options in 2025 including term vs. whole life, policy riders, and choosing the right coverage for your family from Choice Insurance.',
      keywords: 'life insurance, term life, whole life, life insurance riders, family protection, life insurance guide, Choice Insurance, life insurance 2025',
      alternates: {
        canonical: `https://insureyourchoices.com/blog/posts/${slug}`
      }
    };
  } 
  else if (slug === 'may-2025-health-insurance-changes') {
    return {
      title: 'Key Health Insurance Changes to Watch for in 2025 | Choice Insurance',
      description: 'Stay informed about major health insurance developments in 2025 including telehealth expansion, preventive care benefits, and coverage improvements from Choice Insurance experts.',
      keywords: 'health insurance changes, health insurance 2025, telehealth, preventive care, health coverage, insurance reforms, Choice Insurance, healthcare updates',
      alternates: {
        canonical: `https://insureyourchoices.com/blog/posts/${slug}`
      }
    };
  }
  
  // Default metadata if slug doesn't match
  return {
    title: 'Insurance Blog | Choice Insurance Hub',
    description: 'Expert insurance insights and advice from Choice Insurance Hub specialists.',
    alternates: {
      canonical: `https://insureyourchoices.com/blog/posts/${slug}`
    }
  };
}

// Define the page component
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Access params.slug directly as a string
  const { slug } = await params;
  
  // Content for March 2025 Medicare post
  if (slug === 'march-2025-medicare-advantage-vs-supplement') {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/blog" className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        <article>
          <div className="mb-6">
            <p className="text-gray-500">March 5, 2025</p>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">Medicare Advantage vs. Medicare Supplement: Which is Right for You in 2025?</h1>
          </div>
          
          <div className="relative w-full h-96 mb-8">
            <Image 
              src="/images/blog/medicare-comparison-2025.jpg" 
              alt="Medicare Advantage vs Medicare Supplement comparison chart" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              As we move through 2025, Medicare beneficiaries face important decisions about their healthcare coverage. Two popular options—Medicare Advantage (Part C) and Medicare Supplement (Medigap)—offer different approaches to extending Original Medicare coverage.
            </p>
            
            <h2>Understanding the Basics</h2>
            
            <p>
              At Choice Insurance Hub, we help you navigate these complex options to find the right coverage for your needs.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4">Need Help Deciding?</h3>
              <p className="mb-4">
                Our Medicare specialists at Choice Insurance Hub can help you navigate your options and find the plan that best meets your needs and budget.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-2 px-6 rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  }
  
  // Content for April 2025 Life Insurance post
  else if (slug === 'april-2025-understanding-life-insurance') {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/blog" className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        <article>
          <div className="mb-6">
            <p className="text-gray-500">April 3, 2025</p>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">Understanding Life Insurance Options: A Spring 2025 Guide for Families</h1>
          </div>
          
          <div className="relative w-full h-96 mb-8">
            <Image 
              src="/images/blog/family-life-insurance-2025.jpg" 
              alt="Family discussing life insurance options" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              As we move into spring 2025, many families are reassessing their financial protection strategies. Life insurance remains one of the most important financial tools for ensuring your loved ones' security.
            </p>
            
            <h2>Understanding the Main Types of Life Insurance in 2025</h2>
            
            <p>
              At Choice Insurance Agency, we help you navigate these complex options to find the right coverage for your needs.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4">Need Help Deciding?</h3>
              <p className="mb-4">
                Our life insurance specialists at Choice Insurance Agency can help you navigate your options and find the plan that best meets your needs and budget.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-2 px-6 rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  }
  
  // Content for May 2025 Health Insurance post
  else if (slug === 'may-2025-health-insurance-changes') {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/blog" className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        <article>
          <div className="mb-6">
            <p className="text-gray-500">May 10, 2025</p>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">Key Health Insurance Changes to Watch for in 2025</h1>
          </div>
          
          <div className="relative w-full h-96 mb-8">
            <Image 
              src="/images/blog/health-insurance-changes-2025.jpg" 
              alt="Person reviewing health insurance documents" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              As we move through 2025, several important changes to health insurance are taking effect that could impact your coverage and costs.
            </p>
            
            <h2>Key Health Insurance Trends in 2025</h2>
            
            <p>
              At Choice Insurance Agency, we help you navigate these complex options to find the right coverage for your needs.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4">Need Help Understanding Your Options?</h3>
              <p className="mb-4">
                Our health insurance specialists at Choice Insurance Agency can help you navigate your options and find the plan that best meets your needs and budget.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-2 px-6 rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  }
  
  // Default content if slug doesn't match any known posts
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <Link href="/blog" className="text-brand-warm-beige-coral hover:text-brand-warm-beige-coral/80 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
      </div>
      
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900">Post Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/blog" 
          className="mt-8 inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-white font-semibold py-2 px-6 rounded-md"
        >
          View All Blog Posts
        </Link>
      </div>
    </div>
  );
}
