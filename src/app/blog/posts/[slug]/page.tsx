import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define the blog post data structure
type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: React.ReactNode;
  coverImage: string;
};

// Blog post data
const blogPosts: Record<string, BlogPost> = {
  'march-2025-medicare-advantage-vs-supplement': {
    slug: 'march-2025-medicare-advantage-vs-supplement',
    title: 'Medicare Advantage vs. Medicare Supplement: Which is Right for You in 2025?',
    date: 'March 5, 2025',
    description: 'Compare Medicare Advantage and Medicare Supplement plans for 2025. Learn about costs, provider networks, prescription coverage, and which option might be best for your healthcare needs.',
    coverImage: '/images/blog/medicare-comparison-2025.jpg',
    content: (
      <>
        <p className="mb-6">As we move further into 2025, many Medicare beneficiaries face an important decision: choosing between Medicare Advantage and Medicare Supplement (Medigap) plans. At Choice Insurance Agency, we understand this decision can significantly impact your healthcare experience and finances. This comprehensive guide will help you understand the key differences between these options and determine which might be the better fit for your unique situation.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Understanding the Basics: Medicare Advantage vs. Medicare Supplement</h2>

        <p className="mb-6">Before diving into comparisons, let's clarify what each option entails:</p>

        <p className="mb-2"><strong>Medicare Advantage (Medicare Part C)</strong> replaces Original Medicare (Parts A and B) with coverage provided by private insurance companies approved by Medicare. These plans typically include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Hospital coverage (Part A)</li>
          <li>Medical coverage (Part B)</li>
          <li>Prescription drug coverage (Part D) in most plans</li>
          <li>Additional benefits like dental, vision, and hearing care</li>
          <li>Annual out-of-pocket maximums</li>
        </ul>

        <p className="mb-2"><strong>Medicare Supplement (Medigap)</strong> works alongside Original Medicare to help cover certain costs that Original Medicare doesn't cover. These plans:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Help pay for deductibles, coinsurance, and copayments</li>
          <li>Are standardized across insurance companies (same letter plans offer identical benefits)</li>
          <li>Require separate enrollment in Medicare Part D for prescription drug coverage</li>
          <li>Often have higher premiums but lower out-of-pocket costs</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Factors to Consider in 2025</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Cost Considerations</h3>

        <div className="relative w-full h-[400px] my-6">
          <Image 
            src="/images/blog/medicare-comparison-2025.jpg" 
            alt="Medicare Advantage vs Medicare Supplement comparison showing two seniors reviewing their Medicare options" 
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <p className="mb-2"><strong>Medicare Advantage:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Lower monthly premiums (some plans have $0 premium)</li>
          <li>Copayments and coinsurance for services</li>
          <li>Network restrictions may apply</li>
          <li>Out-of-pocket maximum protection (averaging $4,972 for in-network services in 2025)</li>
        </ul>

        <p className="mb-2"><strong>Medicare Supplement:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Higher monthly premiums (typically $150-$300 in 2025)</li>
          <li>Minimal to no copayments for covered services</li>
          <li>Freedom to see any provider accepting Medicare</li>
          <li>No annual out-of-pocket maximum, but very predictable costs</li>
        </ul>

        <p className="mb-6">For example, a 65-year-old enrolling in Medicare in 2025 might pay $165 monthly for a comprehensive Plan G Medicare Supplement policy, while a Medicare Advantage plan in the same area might have a $0 monthly premium but require various copayments for services.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Provider Network Flexibility</h3>

        <div className="relative w-full h-[400px] my-6">
          <Image 
            src="/images/blog/provider-network-flexibility.jpg" 
            alt="Senior woman consulting with doctor with provider network visualization in background" 
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <p className="mb-2"><strong>Medicare Advantage:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Typically uses HMO or PPO networks</li>
          <li>May require referrals for specialists</li>
          <li>May have limited coverage outside your service area</li>
          <li>Networks can change annually</li>
        </ul>

        <p className="mb-2"><strong>Medicare Supplement:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Works with any provider accepting Medicare nationwide</li>
          <li>No referrals needed for specialists</li>
          <li>Consistent coverage when traveling within the U.S.</li>
          <li>Some plans offer foreign travel emergency coverage</li>
        </ul>

        <p className="mb-6">This difference becomes particularly important if you:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Travel frequently</li>
          <li>Split time between multiple residences</li>
          <li>Have established relationships with specific doctors</li>
          <li>Anticipate needing specialized care</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Additional Benefits</h3>

        <p className="mb-2"><strong>Medicare Advantage:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Many plans include prescription drug coverage</li>
          <li>Often includes dental, vision, and hearing benefits</li>
          <li>May offer gym memberships (like SilverSneakers)</li>
          <li>Some plans provide transportation to medical appointments</li>
          <li>Telehealth services often included</li>
        </ul>

        <p className="mb-2"><strong>Medicare Supplement:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Focuses solely on covering Medicare gaps</li>
          <li>Requires separate Part D plan for prescription coverage</li>
          <li>No additional benefits beyond Medicare coverage</li>
          <li>Some insurers offer discount programs for members</li>
        </ul>

        <p className="mb-6">The 2025 Medicare Advantage plans have expanded their supplemental benefits, with approximately 75% now offering some form of dental coverage and 99% offering telehealth services.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">4. Prescription Drug Coverage</h3>

        <div className="relative w-full h-[400px] my-6">
          <Image 
            src="/images/blog/medicare-prescription-coverage.jpg" 
            alt="Senior reviewing Medicare Part D prescription coverage documents with medication bottles" 
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <p className="mb-2"><strong>Medicare Advantage:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Most plans include Part D coverage</li>
          <li>One card for all healthcare needs</li>
          <li>Drug formularies and costs vary by plan</li>
          <li>Subject to the plan's network pharmacies</li>
        </ul>

        <p className="mb-2"><strong>Medicare Supplement:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Requires separate Part D plan enrollment</li>
          <li>Additional premium for drug coverage</li>
          <li>Can choose from all available Part D plans in your area</li>
          <li>Can select the plan that best covers your medications</li>
        </ul>

        <p className="mb-6">With recent prescription drug pricing reforms taking effect in 2025, both options have seen improvements in drug coverage affordability, but the structure of how you access that coverage differs significantly.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Who Might Prefer Medicare Advantage in 2025?</h2>

        <p className="mb-6">Medicare Advantage plans could be a better fit if you:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Are on a fixed income and need to minimize monthly premiums</li>
          <li>Prefer having one plan covering all healthcare needs</li>
          <li>Value additional benefits like dental and vision coverage</li>
          <li>Don't mind working within a provider network</li>
          <li>Are generally healthy and use healthcare services infrequently</li>
          <li>Live in an area with highly-rated Medicare Advantage plans</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Who Might Prefer Medicare Supplement in 2025?</h2>

        <p className="mb-6">Medicare Supplement plans could be a better fit if you:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Prioritize freedom of provider choice</li>
          <li>Travel frequently or maintain multiple residences</li>
          <li>Have ongoing health conditions requiring specialist care</li>
          <li>Prefer predictable healthcare costs</li>
          <li>Can afford higher monthly premiums</li>
          <li>Want to minimize paperwork and claims issues</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Making Your Decision: Next Steps</h2>

        <p className="mb-6">Choosing between Medicare Advantage and Medicare Supplement requires careful consideration of your:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Budget and financial situation</li>
          <li>Health status and anticipated medical needs</li>
          <li>Preferred doctors and hospitals</li>
          <li>Prescription medications</li>
          <li>Travel plans and lifestyle</li>
          <li>Comfort with potential plan changes</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg mt-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Get Personalized Guidance</h3>
          <p className="mb-4">Every individual's situation is unique, and the "right" Medicare coverage depends on your specific circumstances. At Choice Insurance Agency, our Medicare specialists can provide personalized guidance to help you make an informed decision.</p>
          <Link 
            href="https://calendly.com/choiceinsuranceagency/30-minute-meeting"
            className="inline-block bg-brand-warm-beige-coral text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Consultation
          </Link>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          <em>This blog post is for informational purposes only and is not intended as professional advice. Medicare regulations and plan offerings change regularly. Contact Choice Insurance Agency or Medicare.gov for the most current information.</em>
        </p>
      </>
    ),
  },
  'april-2025-understanding-life-insurance': {
    slug: 'april-2025-understanding-life-insurance',
    title: 'Understanding Life Insurance Options in 2025: A Complete Guide',
    date: 'April 3, 2025',
    description: 'Explore life insurance options for 2025 including term vs. whole life, policy riders, and how to choose the right coverage for your family\'s financial security.',
    coverImage: '/images/blog/family-life-insurance-2025.jpg',
    content: (
      <>
        <p className="mb-6">Life insurance remains one of the most important financial tools for protecting your family's future. As we navigate 2025, the life insurance landscape continues to evolve with new products, features, and purchasing options. At Choice Insurance Agency, we're committed to helping you understand your choices and find the coverage that best meets your needs.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Life Insurance Matters in 2025</h2>
        
        <p className="mb-6">Despite technological advances and changing financial landscapes, the fundamental purpose of life insurance remains constant: to provide financial security for your loved ones after you're gone. Life insurance can:</p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Replace lost income for your family</li>
          <li>Cover final expenses and outstanding debts</li>
          <li>Fund children's education</li>
          <li>Leave a legacy for heirs or charitable causes</li>
          <li>Provide tax advantages and estate planning benefits</li>
          <li>Offer living benefits in certain circumstances</li>
        </ul>
        
        <p className="mb-6">Recent data shows that while 52% of Americans have some form of life insurance in 2025, many remain underinsured, with coverage gaps averaging $200,000 per household.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Term vs. Whole Life Insurance: Understanding the Difference</h2>
        
        <div className="relative w-full h-[400px] my-6">
          <Image 
            src="/images/blog/term-vs-whole-life-insurance.jpg" 
            alt="Comparison chart showing differences between term and whole life insurance policies" 
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <p className="mb-6">The two primary categories of life insurance continue to be term and permanent (whole life) insurance. Understanding the differences is crucial to making an informed decision.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Term Life Insurance</h3>
        
        <p className="mb-2"><strong>Key Features:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provides coverage for a specific period (typically 10, 20, or 30 years)</li>
          <li>Generally more affordable than permanent insurance</li>
          <li>Offers straightforward death benefits with no cash value component</li>
          <li>Premiums typically increase upon renewal after the term expires</li>
          <li>Some policies offer conversion options to permanent coverage</li>
        </ul>
        
        <p className="mb-6">Term life insurance is often recommended for:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Young families with children</li>
          <li>Homeowners with mortgages</li>
          <li>Those with specific, time-limited financial obligations</li>
          <li>Individuals seeking maximum coverage at the lowest initial cost</li>
        </ul>
        
        <p className="mb-6">In 2025, a healthy 35-year-old might pay approximately $25-35 monthly for a $500,000, 20-year term life policy.</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Whole Life Insurance</h3>
        
        <p className="mb-2"><strong>Key Features:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provides lifetime coverage as long as premiums are paid</li>
          <li>Builds cash value over time that grows tax-deferred</li>
          <li>Premiums generally remain level throughout the policy</li>
          <li>May pay dividends (if from a mutual insurance company)</li>
          <li>Offers various living benefits and loan options</li>
        </ul>
        
        <p className="mb-6">Whole life insurance is often recommended for:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Those seeking lifetime coverage</li>
          <li>Individuals with long-term dependents (e.g., children with special needs)</li>
          <li>People with estate planning needs</li>
          <li>Those who value the forced savings component</li>
          <li>Business owners for succession planning</li>
        </ul>
        
        <p className="mb-6">For comparison, that same 35-year-old might pay $300-400 monthly for a $500,000 whole life policy in 2025.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Life Insurance Riders</h2>
        
        <div className="relative w-full h-[400px] my-6">
          <Image 
            src="/images/blog/life-insurance-riders.jpg" 
            alt="Illustration of various life insurance policy riders and additional benefits" 
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <p className="mb-6">Life insurance riders are additional benefits that can be added to your policy, often for an additional premium. In 2025, several riders have become increasingly valuable:</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Popular Life Insurance Riders in 2025</h3>
        
        <p className="mb-2"><strong>Accelerated Death Benefit:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Allows access to a portion of the death benefit if diagnosed with a terminal illness</li>
          <li>Now standard on many policies at no additional cost</li>
          <li>Typically available when life expectancy is 12-24 months</li>
        </ul>
        
        <p className="mb-2"><strong>Critical Illness Rider:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provides a lump sum payment upon diagnosis of specified critical illnesses</li>
          <li>Common covered conditions include cancer, heart attack, stroke, and organ failure</li>
          <li>Helps cover medical expenses not covered by health insurance</li>
        </ul>
        
        <p className="mb-2"><strong>Chronic Illness Rider:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Allows access to death benefits if unable to perform activities of daily living</li>
          <li>Helps cover long-term care expenses</li>
          <li>Increasingly popular as an alternative to standalone long-term care insurance</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">How Much Life Insurance Do You Need in 2025?</h2>
        
        <p className="mb-6">Determining the right amount of life insurance coverage remains one of the most important decisions. While individual circumstances vary, several approaches can help you calculate your needs:</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Common Calculation Methods</h3>
        
        <p className="mb-2"><strong>Income Replacement Method:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Multiply your annual income by 10-15 (depending on age and financial obligations)</li>
          <li>Example: $100,000 annual income × 12 = $1,200,000 coverage</li>
        </ul>
        
        <p className="mb-2"><strong>DIME Formula:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>D</strong>ebt and final expenses (mortgage, loans, funeral costs)</li>
          <li><strong>I</strong>ncome replacement (years needed × annual income)</li>
          <li><strong>M</strong>ortgage balance</li>
          <li><strong>E</strong>ducation costs for children</li>
        </ul>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Ready to Protect Your Family's Future?</h3>
          <p className="mb-4">Our life insurance specialists are here to provide personalized guidance and help you find the right coverage for your needs.</p>
          <Link 
            href="https://calendly.com/choiceinsuranceagency/30-minute-meeting"
            className="inline-block bg-brand-warm-beige-coral text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Consultation
          </Link>
        </div>
        
        <p className="text-sm text-gray-600 mt-8">
          <em>This blog post is for informational purposes only and is not intended as professional advice. Life insurance products, features, and prices vary by company, location, and individual circumstances. Contact Choice Insurance Agency for personalized guidance.</em>
        </p>
      </>
    ),
  },
  'may-2025-health-insurance-changes': {
    slug: 'may-2025-health-insurance-changes',
    title: 'Key Health Insurance Changes to Watch for in 2025',
    date: 'May 7, 2025',
    description: 'Explore major health insurance developments in 2025 including telehealth expansion, preventive care benefits, prescription drug reforms, and mental health coverage improvements.',
    coverImage: '/images/blog/health-insurance-changes-2025.jpg',
    content: (
      <>
        <p className="mb-6">As we move through 2025, the health insurance landscape continues to evolve with new regulations, expanded benefits, and technological innovations. At Choice Insurance Agency, we're committed to keeping our clients informed about these changes and helping you navigate the complexities of health insurance coverage. This comprehensive guide highlights the most significant health insurance developments in 2025 and what they mean for you and your family.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Major Health Insurance Trends in 2025</h2>

        <p className="mb-6">The health insurance industry has undergone substantial transformation in recent years, with several key trends emerging in 2025:</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Enhanced Telehealth Coverage and Accessibility</h3>

        <div className="relative w-full h-[400px] my-6">
          <Image 
            src="/images/blog/telehealth-expansion-2025.jpg" 
            alt="Patient having telehealth consultation with doctor from home" 
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <p className="mb-6">Telehealth services have become a permanent fixture in healthcare delivery, with 2025 bringing significant expansions in coverage and accessibility:</p>

        <p className="mb-2"><strong>Key Developments:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Most insurance plans now cover telehealth visits at the same cost-sharing level as in-person visits</li>
          <li>Expanded coverage for remote monitoring devices and virtual chronic care management</li>
          <li>Integration of AI-assisted diagnostic tools within telehealth platforms</li>
          <li>Increased specialist availability through virtual care networks</li>
          <li>Cross-state telehealth licensing improvements allowing greater provider access</li>
        </ul>

        <p className="mb-2"><strong>What This Means for You:</strong></p>
        <ul className="list-disc pl-6 mb-6">
          <li>More convenient access to care, especially for those in rural areas or with mobility challenges</li>
          <li>Reduced wait times for appointments</li>
          <li>Potential cost savings through elimination of travel and reduced time away from work</li>
          <li>Improved chronic condition management through continuous monitoring</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Expanded Preventive Care Benefits</h3>

        <div className="relative w-full h-[400px] my-6">
          <Image 
            src="/images/blog/preventive-care-benefits-2025.jpg" 
            alt="Doctor reviewing preventive healthcare benefits checklist with patient" 
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <p className="mb-6">The focus on preventive care continues to strengthen in 2025, with insurance plans offering more comprehensive preventive benefits:</p>

        <p className="mb-2"><strong>Key Developments:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Expanded list of covered preventive services with no cost-sharing</li>
          <li>Enhanced coverage for mental health screenings and preventive services</li>
          <li>New preventive benefits for chronic disease management</li>
          <li>Increased coverage for genetic testing and personalized preventive care</li>
          <li>Wellness program incentives reaching up to $1,500 annually for many plans</li>
        </ul>

        <p className="mb-2"><strong>What This Means for You:</strong></p>
        <ul className="list-disc pl-6 mb-6">
          <li>Access to more no-cost preventive services</li>
          <li>Earlier detection of potential health issues</li>
          <li>Financial incentives for maintaining healthy behaviors</li>
          <li>More personalized preventive care recommendations</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Prescription Drug Cost Controls</h3>

        <p className="mb-6">The implementation of prescription drug pricing reforms has continued through 2025, bringing meaningful changes to how Americans pay for medications:</p>

        <p className="mb-2"><strong>Key Developments:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li>Medicare prescription drug price negotiation expanding to more medications</li>
          <li>$2,000 annual out-of-pocket cap for Medicare Part D beneficiaries now fully implemented</li>
          <li>Similar out-of-pocket caps appearing in many commercial plans</li>
          <li>Increased transparency requirements for pharmacy benefit managers</li>
          <li>Growth of cost-comparison tools and prescription discount programs</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg mt-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Get Personalized Health Insurance Guidance</h3>
          <p className="mb-4">Health insurance decisions are highly personal and depend on your specific healthcare needs, financial situation, and preferences. At Choice Insurance Agency, we provide individualized guidance to help you navigate the changing health insurance landscape.</p>
          <Link 
            href="https://calendly.com/choiceinsuranceagency/30-minute-meeting"
            className="inline-block bg-brand-warm-beige-coral text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Consultation
          </Link>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          <em>This blog post is for informational purposes only and is not intended as professional advice. Health insurance regulations and offerings vary by state and can change frequently. Contact Choice Insurance Agency for the most current information specific to your situation.</em>
        </p>
      </>
    ),
  },
};

// Use Next.js 15.3.2 compatible types
type PageProps = {
  params: any;
  searchParams?: any;
};

// Required for static export with dynamic routes
export async function generateStaticParams() {
  return Object.keys(blogPosts).map(slug => ({
    slug: slug
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Choice Insurance',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | Choice Insurance`,
    description: post.description,
    keywords: params.slug.includes('medicare') 
      ? 'Medicare Advantage, Medicare Supplement, Medicare 2025, Medicare comparison'
      : params.slug.includes('life-insurance')
      ? 'life insurance 2025, term life insurance, whole life insurance, life insurance comparison'
      : 'health insurance 2025, health insurance changes, insurance benefits, Choice Insurance',
  };
}

// Use the correct PageProps type for the component
export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-6">Published: {post.date}</p>
      
      <div className="relative w-full h-[400px] mb-8">
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          fill
          className="object-cover rounded-lg"
        />
      </div>
      
      {post.content}
    </article>
  );
}
