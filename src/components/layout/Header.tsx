'use client';

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
          className="relative z-10 hidden max-w-max flex-1 items-center justify-start lg:flex"
          delayDuration={200}
          skipDelayDuration={300}
        >
          <NavigationMenuList>
            {MAIN_NAVIGATION.map(item => (
              <NavigationMenuItem
                key={item.href}
                className="relative"
                onMouseEnter={e => {
                  if (
                    item.hasDropdown &&
                    typeof window !== 'undefined' &&
                    !('ontouchstart' in window)
                  ) {
                    const button = e.currentTarget.querySelector('[data-state]');
                    if (
                      button?.getAttribute('data-state') !== 'open' &&
                      button instanceof HTMLElement
                    ) {
                      button.click();
                    }
                  }
                }}
                onMouseLeave={e => {
                  if (
                    item.hasDropdown &&
                    typeof window !== 'undefined' &&
                    !('ontouchstart' in window)
                  ) {
                    const button = e.currentTarget.querySelector('[data-state]');
                    if (
                      button?.getAttribute('data-state') === 'open' &&
                      button instanceof HTMLElement
                    ) {
                      button.click();
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
                    <NavigationMenuContent className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 left-0 top-0 w-full md:absolute md:w-[800px]">
                      <div className="rounded-lg border border-brand-teal-blue-dark bg-brand-teal-blue text-white shadow-lg">
                        <div className="grid w-full grid-cols-2 gap-4 p-6">
                          {/* First Column */}
                          <div className="flex flex-col gap-3">
                            {/* All Services - Large prominent button taking most of first column */}
                            <NavigationMenuLink asChild>
                              <Link
                                href="/services"
                                className="mb-2 block select-none rounded-lg bg-[#42615A] p-8 leading-none text-white no-underline outline-none"
                              >
                                <div className="text-xl font-bold leading-none text-white">
                                  All Services
                                </div>
                                <div className="mt-3 text-base text-white/90">
                                  Explore our comprehensive range of insurance solutions
                                </div>
                              </Link>
                            </NavigationMenuLink>

                            {/* First 2 services - Dark green buttons */}
                            {FOOTER_LINKS.services.slice(0, 2).map(service => (
                              <NavigationMenuLink key={service.href} asChild>
                                <Link
                                  href={service.href}
                                  className="block select-none rounded-lg bg-[#42615A] p-4 leading-none text-white no-underline outline-none"
                                >
                                  <div className="text-base font-medium leading-none text-white">
                                    {service.label}
                                  </div>
                                  <div className="mt-2 text-sm text-white/80">
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
                                  className="block select-none rounded-lg bg-[#42615A] p-4 leading-none text-white no-underline outline-none"
                                >
                                  <div className="text-base font-medium leading-none text-white">
                                    {service.label}
                                  </div>
                                  <div className="mt-2 text-sm text-white/80">
                                    Learn more about {service.label.toLowerCase()}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
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
          <NavigationMenuPrimitive.Viewport className="origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 absolute left-0 top-full z-[65] flex h-[var(--radix-navigation-menu-viewport-height)] w-full justify-center overflow-hidden md:w-[var(--radix-navigation-menu-viewport-width)]" />
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
