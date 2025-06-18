'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Menu } from 'lucide-react';

// import { trackInsuranceEvents } from '@/lib/analytics';
import { BookConsultationButton, GetQuoteButton } from '@/components/ui/CTAButton';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
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
            src="/assets/logos/main-logo-orange.png"
            alt="Choice Insurance Hub Logo"
            width={120}
            height={40}
            className="max-h-10 w-auto object-contain"
            priority
          />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {MAIN_NAVIGATION.map(item => (
              <NavigationMenuItem key={item.href}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black data-[state=open]:bg-brand-teal-blue data-[state=open]:text-brand-black'
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-50">
                      <div className="z-50 grid w-[400px] gap-2 rounded-lg border border-brand-teal-blue-dark bg-brand-teal-blue p-4 shadow-lg md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {/* First Column */}
                        <div className="flex flex-col gap-2">
                          {/* All Services - Forest Green, takes most space */}
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services"
                              className="group block flex-1 transform select-none rounded-lg border border-brand-deep-forest-green bg-brand-deep-forest-green p-6 leading-none text-brand-white no-underline outline-none transition-all duration-200 hover:scale-[1.02] hover:bg-brand-deep-forest-green/90 hover:shadow-lg focus:bg-brand-deep-forest-green/90"
                            >
                              <div className="text-lg font-bold leading-none text-brand-white transition-colors duration-200">
                                All Services
                              </div>
                              <div className="mt-2 text-sm text-brand-white/90 transition-colors duration-200">
                                Explore our comprehensive range of insurance solutions
                              </div>
                            </Link>
                          </NavigationMenuLink>

                          {/* First 2 services - Matching second column style */}
                          {FOOTER_LINKS.services.slice(0, 2).map(service => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                href={service.href}
                                className="group block transform select-none rounded-lg border border-transparent p-3 leading-none no-underline outline-none transition-all duration-200 hover:scale-[1.02] hover:border-brand-deep-forest-green hover:bg-brand-deep-forest-green hover:text-brand-white hover:shadow-md focus:bg-brand-deep-forest-green focus:text-brand-white"
                              >
                                <div className="text-sm font-medium leading-none text-brand-black transition-colors duration-200 group-hover:text-brand-white">
                                  {service.label}
                                </div>
                                <div className="mt-1 text-xs text-brand-black/70 transition-colors duration-200 group-hover:text-brand-white/80">
                                  Learn more about {service.label.toLowerCase()}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>

                        {/* Second Column - Remaining services */}
                        <div className="flex flex-col gap-2">
                          {FOOTER_LINKS.services.slice(2).map(service => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                href={service.href}
                                className="group block transform select-none rounded-lg border border-transparent p-3 leading-none no-underline outline-none transition-all duration-200 hover:scale-[1.02] hover:border-brand-deep-forest-green hover:bg-brand-deep-forest-green hover:text-brand-white hover:shadow-md focus:bg-brand-deep-forest-green focus:text-brand-white"
                              >
                                <div className="text-sm font-medium leading-none text-brand-black transition-colors duration-200 group-hover:text-brand-white">
                                  {service.label}
                                </div>
                                <div className="mt-1 text-xs text-brand-black/70 transition-colors duration-200 group-hover:text-brand-white/80">
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
        </NavigationMenu>

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
