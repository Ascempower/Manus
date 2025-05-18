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
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Medicare Supplement Plans",
    href: "/services/medicare-supplement",
    description: "Explore options for Medicare Supplement (Medigap) plans.",
  },
  {
    title: "Hospital Indemnity Plans",
    href: "/services/hospital-indemnity",
    description: "Get coverage for hospital stays and related expenses.",
  },
  {
    title: "Cancer & Illness Plans",
    href: "/services/cancer-illness",
    description: "Specialized plans for critical illnesses like cancer.",
  },
  {
    title: "Medicare Advantage Plan",
    href: "/services/medicare-advantage",
    description: "All-in-one alternatives to Original Medicare with additional benefits.",
  },
  {
    title: "Life Insurance",
    href: "/services/life-insurance",
    description: "Secure your family's future with various life insurance policies.",
  },
  {
    title: "Final Expense Plans",
    href: "/services/final-expense",
    description: "Cover end-of-life expenses and protect your loved ones.",
  },
  {
    title: "Annuities",
    href: "/services/annuities",
    description: "Plan for retirement with our annuity options.",
  },
];

export default function Header() {
  const quoteNowUrl = "https://www.planenroll.com/?purl=kOW7ufSy";
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-teal-blue/40 bg-brand-deep-forest-green text-brand-white">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img src="/assets/logos/main-logo-orange.png" alt="Choice Insurance Agency Logo" style={{ width: '180px', height: 'auto' }} />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black")}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black")}>
                <Link href="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-brand-white text-brand-black">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-teal-blue to-brand-deep-forest-green p-6 text-brand-white no-underline outline-none focus:shadow-md"
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
                  {services.map((component) => (
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
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black")}>
                <Link href="/testimonials">Testimonials</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black")}>
                <Link href="/faq">FAQ</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black")}>
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-brand-deep-forest-green text-brand-white hover:bg-brand-teal-blue hover:text-brand-black")}>
                <Link href="/blog">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-x-2">
          <Button asChild className="hidden lg:flex bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
            <Link href={quoteNowUrl} target="_blank" rel="noopener noreferrer">Quote Now</Link>
          </Button>
          <Button asChild className="hidden lg:flex bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black">
            <Link href="https://calendly.com/choiceinsuranceagency/30-minute-meeting" target="_blank" rel="noopener noreferrer">Book a Free Consultation</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="shrink-0 bg-brand-deep-forest-green hover:bg-brand-teal-blue text-brand-white border-brand-teal-blue">
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
                  <img src="/assets/logos/main-logo-orange.png" alt="Choice Insurance Agency Logo" style={{ width: '140px', height: 'auto' }} />
                </Link>
                <Link
                  href="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-black hover:bg-brand-teal-blue"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-black hover:bg-brand-teal-blue"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-black hover:bg-brand-teal-blue"
                >
                  Services
                </Link>
                <Link
                  href="/testimonials"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-black hover:bg-brand-teal-blue"
                >
                  Testimonials
                </Link>
                <Link
                  href="/faq"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-black hover:bg-brand-teal-blue"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-black hover:bg-brand-teal-blue"
                >
                  Contact Us
                </Link>
                <Link
                  href="/blog"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-white hover:text-brand-black hover:bg-brand-teal-blue"
                >
                  Blog
                </Link>
              </nav>
              <div className="mt-auto">
                <Button size="sm" className="w-full bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black mb-2" asChild>
                  <Link href={quoteNowUrl} target="_blank" rel="noopener noreferrer">Quote Now</Link>
                </Button>
                <Button size="sm" className="w-full bg-brand-warm-beige-coral hover:bg-brand-warm-beige-coral/80 text-brand-black" asChild>
                  <Link href="https://calendly.com/choiceinsuranceagency/30-minute-meeting" target="_blank" rel="noopener noreferrer">Book a Free Consultation</Link>
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
