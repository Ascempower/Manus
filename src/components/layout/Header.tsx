"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { MAIN_NAVIGATION, FOOTER_LINKS } from '@/constants/navigation';
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-teal-blue/40 bg-brand-deep-forest-green text-brand-white">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center">
          <img src="/assets/logos/main-logo-orange.png" alt="Choice Insurance Agency Logo" className="max-h-10 w-auto object-contain" />
        </Link>
        
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {MAIN_NAVIGATION.map((item) => (
              <NavigationMenuItem key={item.href}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black data-[state=open]:bg-brand-teal-blue data-[state=open]:text-brand-black"
                    )}>
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-brand-teal-blue shadow-lg border border-brand-teal-blue-dark rounded-lg">
                        {/* First Column */}
                        <div className="flex flex-col gap-2">
                          {/* All Services - Forest Green, takes most space */}
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services"
                              className="group block select-none rounded-lg p-6 leading-none no-underline outline-none transition-all duration-200 bg-brand-deep-forest-green text-brand-white hover:bg-brand-deep-forest-green/90 focus:bg-brand-deep-forest-green/90 border border-brand-deep-forest-green hover:shadow-lg transform hover:scale-[1.02] flex-1"
                            >
                              <div className="text-lg font-bold leading-none text-brand-white transition-colors duration-200">
                                All Services
                              </div>
                              <div className="text-sm text-brand-white/90 mt-2 transition-colors duration-200">
                                Explore our comprehensive range of insurance solutions
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          
                          {/* First 2 services - Smaller */}
                          {FOOTER_LINKS.services.slice(0, 2).map((service) => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                href={service.href}
                                className="group block select-none rounded-lg p-2 leading-none no-underline outline-none transition-all duration-200 hover:bg-brand-deep-forest-green hover:text-brand-white focus:bg-brand-deep-forest-green focus:text-brand-white border border-transparent hover:border-brand-deep-forest-green hover:shadow-md transform hover:scale-[1.02]"
                              >
                                <div className="text-xs font-medium leading-none text-brand-black group-hover:text-brand-white transition-colors duration-200">
                                  {service.label}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        
                        {/* Second Column - Remaining services */}
                        <div className="flex flex-col gap-2">
                          {FOOTER_LINKS.services.slice(2).map((service) => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                href={service.href}
                                className="group block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-brand-deep-forest-green hover:text-brand-white focus:bg-brand-deep-forest-green focus:text-brand-white border border-transparent hover:border-brand-deep-forest-green hover:shadow-md transform hover:scale-[1.02]"
                              >
                                <div className="text-sm font-medium leading-none text-brand-black group-hover:text-brand-white transition-colors duration-200">
                                  {service.label}
                                </div>
                                <div className="text-xs text-brand-black/70 mt-1 group-hover:text-brand-white/80 transition-colors duration-200">
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
                        "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black focus:bg-brand-teal-blue focus:text-brand-black"
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
          <Button asChild className="hidden md:flex bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black text-sm md:text-base">
            <a href="https://www.planenroll.com/?purl=kOW7ufSy" target="_blank" rel="noopener noreferrer">
              Quote Now
            </a>
          </Button>
          <Button asChild className="hidden md:flex bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black text-sm md:text-base">
            <a href="https://calendly.com/choiceinsuranceagency/30-minute-meeting" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden shrink-0 bg-brand-deep-forest-green hover:bg-brand-teal-blue text-brand-white border-brand-teal-blue"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {MAIN_NAVIGATION.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-2 py-1 text-lg font-semibold hover:text-brand-teal-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {FOOTER_LINKS.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-2 py-1 text-sm text-muted-foreground hover:text-brand-teal-blue transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 space-y-2">
                  <Button asChild className="w-full bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                    <a href="https://www.planenroll.com/?purl=kOW7ufSy" target="_blank" rel="noopener noreferrer">
                      Quote Now
                    </a>
                  </Button>
                  <Button asChild className="w-full bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
                    <a href="https://calendly.com/choiceinsuranceagency/30-minute-meeting" target="_blank" rel="noopener noreferrer">
                      Book a Free Consultation
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
