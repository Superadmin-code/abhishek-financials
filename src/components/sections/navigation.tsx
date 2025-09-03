"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle } from
"@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose } from
"@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

interface NavItem {
  label: string;
  href: string;
  subItems?: Omit<NavItem, 'subItems'>[];
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "LOAN",
    href: "#",
    subItems: [
      { label: "Home Loan", href: "/home-loan" },
      { label: "Personal Loan", href: "/personal-loan" },
      { label: "Loan Eligibility Calculator", href: "/loan-eligibility-calculator" },
      { label: "FAQ", href: "/frequntly-ask-question" }
    ]
  },
  {
    label: "INSURANCE",
    href: "#",
    subItems: [
      { label: "Life Insurance", href: "/life-insurance" },
      { label: "Health Insurance", href: "/health-insurance" },
      { label: "Vehicle Insurance", href: "/vehicle-insurance" }
    ]
  },
  {
    label: "ABOUT US",
    href: "#",
    subItems: [
      { label: "About Us", href: "/about-us" },
      { label: "Team", href: "/teams" }
    ]
  },
  { label: "BLOG", href: "/blog" },
  { label: "LOAN CALCULATOR", href: "/loan-calculator" },
  { label: "CONTACT US", href: "/contact-us" }
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, ...props }, ref) => {
    return (
      <li>
      <NavigationMenuLink asChild>
        <a
            ref={ref}
            className={cn(
              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10 text-primary hover:text-accent",
              className
            )}
            {...props}>

          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>);

  });
ListItem.displayName = "ListItem";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-24 max-w-[1200px] items-center justify-between px-5">
        <Link href="/" className="flex items-center">
          <Image
            src="https://rvfinserve.in/wp-content/uploads/2025/02/logo-dark.png"
            alt="RV Finserve"
            width={180}
            height={48}
            priority />

        </Link>

        <nav className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) =>
              <NavigationMenuItem key={item.label}>
                  {item.subItems ?
                <>
                      <NavigationMenuTrigger className="bg-transparent text-base font-medium uppercase text-primary hover:text-accent focus:text-accent data-[active]:text-accent">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[250px] gap-1 p-4">
                          {item.subItems.map((subItem) =>
                      <ListItem key={subItem.label} href={subItem.href} title={subItem.label} />
                      )}
                        </ul>
                      </NavigationMenuContent>
                    </> :

                <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                }
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6 text-primary" />
                        <span className="sr-only">Open navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-[320px] bg-white p-0">
                    <SheetHeader className="border-b p-4">
                        <SheetTitle className="flex items-center justify-between">
                            <SheetClose asChild>
                                <Link href="/">
                                    <Image
                        src="https://rvfinserve.in/wp-content/uploads/2025/02/logo-dark.png"
                        alt="RV Finserve"
                        width={150}
                        height={40} />

                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="h-6 w-6" />
                                </Button>
                            </SheetClose>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="p-4">
                        <Accordion type="single" collapsible className="w-full">
                            {navItems.map((item) =>
                  item.subItems ?
                  <AccordionItem value={item.label} key={item.label} className="border-b-0">
                                        <AccordionTrigger className="py-3 text-base font-medium uppercase text-primary hover:no-underline hover:text-accent border-b">
                                            {item.label}
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2 pb-1 pl-4">
                                            <ul>
                                                {item.subItems.map((subItem) =>
                        <li key={subItem.label} className="py-2">
                                                        <SheetClose asChild>
                                                            <Link href={subItem.href} className="text-sm text-foreground hover:text-accent">
                                                                {subItem.label}
                                                            </Link>
                                                        </SheetClose>
                                                    </li>
                        )}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem> :

                  <div key={item.label} className="border-b">
                                        <SheetClose asChild>
                                            <Link href={item.href} className={cn(
                        "flex w-full items-center py-3 text-base font-medium uppercase text-primary hover:text-accent",
                        item.label === 'HOME' && 'text-accent'
                      )}>
                                                {item.label}
                                            </Link>
                                        </SheetClose>
                                    </div>

                  )}
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>);

}