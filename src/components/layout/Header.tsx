'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { Menu } from 'lucide-react';

// import { trackInsuranceEvents } from '@/lib/analytics';
import { BookConsultationButton, GetQuoteButton } from '@/components/ui/CTAButton';
import { Button } from '@/components/ui/button';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FOOTER_LINKS, MAIN_NAVIGATION } from '@/constants/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render a simple header during SSR
  if (!isClient) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-brand-teal-blue/40 bg-brand-deep-forest-green text-brand-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="mr-6 flex items-center">
            <Image
              src="/assets/logos/Main Logo - Orange (3).png"
              alt="Choice Insurance Hub Logo"
              width={120}
              height={40}
              className="max-h-10 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            {MAIN_NAVIGATION.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-white transition-colors hover:text-brand-teal-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-x-2">
            <div className="hidden md:flex md:gap-2">
              <div className="h-9 w-20 animate-pulse rounded bg-brand-deep-forest-green/50" />
              <div className="h-9 w-24 animate-pulse rounded bg-brand-deep-forest-green/50" />
            </div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-teal-blue/40 bg-brand-deep-forest-green text-brand-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="mr-6 flex items-center">
          <Image
            src="/assets/logos/Main Logo - Orange (3).png"
            alt="Choice Insurance Hub Logo"
            width={120}
            height={40}
            className="max-h-10 w-auto object-contain"
            priority
          />
        </Link>

        <NavigationMenuPrimitive.Root
          className="relative z-10 flex hidden max-w-max flex-1 items-center justify-start lg:flex"
          delayDuration={200}
          skipDelayDuration={300}
        >
          <NavigationMenuList>
            {MAIN_NAVIGATION.map(item => (
              <NavigationMenuItem
                key={item.href}
                className="relative"
                onMouseEnter={e => {
                  if (item.hasDropdown && !('ontouchstart' in window)) {
                    const button = e.currentTarget.querySelector('[data-state]');
                    if (button?.getAttribute('data-state') !== 'open') {
                      (button as HTMLElement)?.click();
                    }
                  }
                }}
                onMouseLeave={e => {
                  if (item.hasDropdown && !('ontouchstart' in window)) {
                    const button = e.currentTarget.querySelector('[data-state]');
                    if (button?.getAttribute('data-state') === 'open') {
                      (button as HTMLElement)?.click();
                    }
                  }
                }}
              >
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-[#42615A] text-white hover:bg-[#A7C9CA] hover:text-black data-[state=open]:bg-[#A7C9CA] data-[state=open]:text-black'
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 top-full z-[70] mt-1 w-[800px] min-w-[800px] origin-top-left rounded-lg border-2 border-red-500 bg-brand-teal-blue shadow-lg data-[state=open]:bg-brand-teal-blue">
                      <div className="grid w-full grid-cols-2 gap-4 p-6">
                        {/* First Column */}
                        <div className="flex flex-col gap-3">
                          {/* All Services - Forest Green, takes most space */}
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services"
                              className="group block flex-1 transform select-none rounded-lg border border-[#42615A] bg-[#42615A] p-6 leading-none text-white no-underline outline-none transition-all duration-200 hover:scale-[1.02] hover:bg-[#42615A]/90 hover:shadow-lg focus:bg-[#42615A]/90"
                            >
                              <div className="text-lg font-bold leading-none text-white transition-colors duration-200">
                                All Services
                              </div>
                              <div className="mt-2 text-sm text-white/90 transition-colors duration-200">
                                Explore our comprehensive range of insurance solutions
                              </div>
                            </Link>
                          </NavigationMenuLink>

                          {/* First 2 services - Dark green buttons */}
                          {FOOTER_LINKS.services.slice(0, 2).map(service => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                href={service.href}
                                className="group block transform select-none rounded-lg border border-[#42615A] bg-[#42615A] p-4 leading-none text-white no-underline outline-none transition-all duration-200 hover:scale-[1.02] hover:bg-[#42615A]/90 hover:shadow-md focus:bg-[#42615A]/90"
                              >
                                <div className="text-base font-medium leading-none text-white transition-colors duration-200">
                                  {service.label}
                                </div>
                                <div className="mt-2 text-sm text-white/80 transition-colors duration-200">
                                  Learn more about {service.label.toLowerCase()}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>

                        {/* Second Column - Remaining services - Dark green buttons */}
                        <div className="flex flex-col gap-3">
                          {FOOTER_LINKS.services.slice(2).map(service => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                href={service.href}
                                className="group block transform select-none rounded-lg border border-[#42615A] bg-[#42615A] p-4 leading-none text-white no-underline outline-none transition-all duration-200 hover:scale-[1.02] hover:bg-[#42615A]/90 hover:shadow-md focus:bg-[#42615A]/90"
                              >
                                <div className="text-base font-medium leading-none text-white transition-colors duration-200">
                                  {service.label}
                                </div>
                                <div className="mt-2 text-sm text-white/80 transition-colors duration-200">
                                  Learn more about {service.label.toLowerCase()}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black focus:bg-brand-teal-blue focus:text-brand-black'
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          {/* This stabilizes layout positioning */}
          <NavigationMenuPrimitive.Viewport className="absolute left-0 top-full z-[65] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-b-md border border-brand-teal-blue-dark bg-brand-teal-blue shadow-lg transition-all duration-300" />
        </NavigationMenuPrimitive.Root>

        <div className="flex items-center gap-x-2">
          <GetQuoteButton
            className="hidden text-sm md:flex md:text-base"
            size="default"
            trackingContext="header"
          >
            Quote Now
          </GetQuoteButton>
          <BookConsultationButton
            className="hidden text-sm md:flex md:text-base"
            size="default"
            trackingContext="header"
            showIcon={false}
          />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 border-brand-teal-blue bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {MAIN_NAVIGATION.map(item => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-2 py-1 text-lg font-semibold transition-colors hover:text-brand-teal-blue"
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {FOOTER_LINKS.services.map(service => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-brand-teal-blue"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 space-y-2">
                  <GetQuoteButton fullWidth={true} trackingContext="mobile_menu">
                    Quote Now
                  </GetQuoteButton>
                  <BookConsultationButton
                    fullWidth={true}
                    trackingContext="mobile_menu"
                    showIcon={false}
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
