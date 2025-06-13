import Link from 'next/link';
import { MAIN_NAVIGATION } from '@/constants/navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-teal-blue/40 bg-brand-deep-forest-green text-brand-white">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/">
          <a className="mr-6 flex items-center">
            <img src="/assets/logos/main-logo-orange.png" alt="Choice Insurance Agency Logo" className="max-h-10 w-auto object-contain" />
          </a>
        </Link>
        <nav aria-label="Main" className="hidden lg:flex">
          <ul className="flex space-x-4">
            {MAIN_NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a className="hover:text-brand-black">{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-x-2">
          <a href="https://www.planenroll.com/?purl=kOW7ufSy" target="_blank" rel="noopener noreferrer" className="hidden md:flex bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black px-4 py-2 rounded-md">
            Quote Now
          </a>
          <a href="https://calendly.com/choiceinsuranceagency/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="hidden md:flex bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black px-4 py-2 rounded-md">
            Book a Free Consultation
          </a>
          <button className="md:hidden bg-brand-deep-forest-green hover:bg-brand-teal-blue text-brand-white p-2 rounded-md">
            <span className="sr-only">Toggle navigation menu</span>
            {/* Icon for mobile menu */}
          </button>
        </div>
      </div>
    </header>
  );
}
