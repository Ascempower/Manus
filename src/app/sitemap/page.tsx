import type { Metadata } from 'next';
import CustomBreadcrumb from '@/components/navigation/CustomBreadcrumb';
import Sitemap from '@/components/navigation/Sitemap';

export const metadata: Metadata = {
  title: 'Sitemap | Choice Insurance Hub - Find All Our Pages',
  description: 'Complete sitemap of Choice Insurance Hub website. Find all our insurance services, blog posts, and important pages in one place.',
  alternates: {
    canonical: "https://choiceinsurancehub.com/sitemap"
  }
};

export default function SitemapPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Breadcrumbs */}
      <section className="py-4 bg-brand-white border-b border-brand-teal-blue/20">
        <div className="container mx-auto px-4">
          <CustomBreadcrumb 
            items={[
              { label: 'Sitemap' }
            ]}
          />
        </div>
      </section>

      {/* Page Header */}
      <section className="py-12 bg-brand-teal-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-forest-green font-poppins">
            Website Sitemap
          </h1>
          <p className="text-lg text-brand-black/80 mt-4 max-w-3xl mx-auto">
            Find all the pages and resources available on our website. Navigate easily to any section of Choice Insurance Hub.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Sitemap />
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Need Help Finding Something?</h2>
          <p className="text-lg text-brand-white/90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect insurance solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="tel:8774142319"
              className="inline-block border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-deep-forest-green font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Call (877) 414-2319
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}