import type { Metadata } from 'next';

import CustomBreadcrumb from '@/components/navigation/CustomBreadcrumb';
import Sitemap from '@/components/navigation/Sitemap';

export const metadata: Metadata = {
  title: 'Sitemap | Choice Insurance Hub - Find All Our Pages',
  description:
    'Complete sitemap of Choice Insurance Hub website. Find all our insurance services, blog posts, and important pages in one place.',
  alternates: {
    canonical: 'https://choiceinsurancehub.com/sitemap',
  },
};

export default function SitemapPage() {
  return (
    <div className="bg-brand-white text-brand-black">
      {/* Breadcrumbs */}
      <section className="border-b border-brand-teal-blue/20 bg-brand-white py-4">
        <div className="container mx-auto px-4">
          <CustomBreadcrumb items={[{ label: 'Sitemap' }]} />
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-brand-teal-blue/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl font-bold text-brand-deep-forest-green md:text-5xl">
            Website Sitemap
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-brand-black/80">
            Find all the pages and resources available on our website. Navigate easily to any
            section of Choice Insurance Hub.
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
      <section className="bg-brand-deep-forest-green py-16 text-brand-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-poppins text-3xl font-bold">Need Help Finding Something?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-brand-white/90">
            Can't find what you're looking for? Our team is here to help you navigate our services
            and find the perfect insurance solution.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-block rounded-lg bg-brand-warm-beige-coral px-8 py-3 font-semibold text-brand-black transition duration-300 hover:bg-brand-warm-beige-coral/80"
            >
              Contact Us
            </a>
            <a
              href="tel:8774142319"
              className="inline-block rounded-lg border-2 border-brand-white px-8 py-3 font-semibold text-brand-white transition duration-300 hover:bg-brand-white hover:text-brand-deep-forest-green"
            >
              Call (877) 414-2319
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
