"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import { cn } from "@/utils/cn";
import { SERVICES, EXTERNAL_LINKS } from "@/constants/services";
import { MAIN_NAVIGATION } from "@/constants/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-teal-blue/40 bg-brand-deep-forest-green text-brand-white">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center">
          <img 
            src="/assets/logos/main-logo-orange.png" 
            alt="Choice Insurance Agency Logo" 
            className="max-h-10 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue-darker hover:text-brand-white")}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue-darker hover:text-brand-white")}>
                <Link href="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue-darker hover:text-brand-white">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-brand-white text-brand-black">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-teal-blue-darker to-brand-deep-forest-green p-6 text-brand-white no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-bold font-poppins">
                          All Services
                        </div>
                        <p className="text-sm leading-tight text-brand-white/80">
                          Explore our comprehensive range of insurance solutions.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {SERVICES.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className="hover:bg-brand-teal-blue/20"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue-darker hover:text-brand-white")}>
                <Link href="/testimonials">Testimonials</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue-darker hover:text-brand-white")}>
                <Link href="/faq">FAQ</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue-darker hover:text-brand-white")}>
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue-darker hover:text-brand-white")}>
                <Link href="/blog">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-x-2">
          <Button asChild className="hidden md:flex bg-brand-warm-beige-coral-darker hover:bg-brand-warm-beige-coral-dark text-brand-white text-sm md:text-base">
            <Link href={EXTERNAL_LINKS.QUOTE_NOW} target="_blank" rel="noopener noreferrer">Quote Now</Link>
          </Button>
          <Button asChild className="hidden md:flex bg-brand-warm-beige-coral-darker hover:bg-brand-warm-beige-coral-dark text-brand-white text-sm md:text-base">
            <Link href={EXTERNAL_LINKS.CALENDLY} target="_blank" rel="noopener noreferrer">Book a Free Consultation</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="shrink-0 bg-brand-deep-forest-green hover:bg-brand-teal-blue-darker text-brand-white border-brand-teal-blue">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-brand-deep-forest-green text-brand-white">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                  <img 
                    src="/assets/logos/main-logo-orange.png" 
                    alt="Choice Insurance Agency Logo" 
                    className="max-h-8 w-auto object-contain" 
                  />
                </Link>
                <Link
                  href="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-white hover:bg-brand-teal-blue-darker"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-white hover:bg-brand-teal-blue-darker"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-white hover:bg-brand-teal-blue-darker"
                >
                  Services
                </Link>
                <Link
                  href="/testimonials"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-white hover:bg-brand-teal-blue-darker"
                >
                  Testimonials
                </Link>
                <Link
                  href="/faq"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-white hover:bg-brand-teal-blue-darker"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-white hover:bg-brand-teal-blue-darker"
                >
                  Contact Us
                </Link>
                <Link
                  href="/blog"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-white hover:bg-brand-teal-blue-darker"
                >
                  Blog
                </Link>
              </nav>
              <div className="mt-auto">
                <Button size="sm" className="w-full bg-brand-warm-beige-coral-darker hover:bg-brand-warm-beige-coral-dark text-brand-white mb-2" asChild>
                  <Link href={EXTERNAL_LINKS.QUOTE_NOW} target="_blank" rel="noopener noreferrer">Quote Now</Link>
                </Button>
                <Button size="sm" className="w-full bg-brand-warm-beige-coral-darker hover:bg-brand-warm-beige-coral-dark text-brand-white" asChild>
                  <Link href={EXTERNAL_LINKS.CALENDLY} target="_blank" rel="noopener noreferrer">Book a Free Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none font-poppins">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
