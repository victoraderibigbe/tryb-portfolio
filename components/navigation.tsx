"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/courses", label: "Courses" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container-max flex items-center justify-between h-20 px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/tryb-logo2.png"
            alt="Tryb Logo"
            width={100}
            height={100}
            className="dark:hidden"
          />
          <Image
            src="/images/tryb-logo1.png"
            alt="Tryb Logo"
            width={100}
            height={100}
            className="hidden dark:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hover:text-teal dark:hover:text-teal-light font-medium transition-colors duration-300",
                  isActive
                    ? "text-orange  hover:underline hover:underline-offset-4"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="btn-secondary">
            Book a Design
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "hover:text-teal dark:hover:text-teal-light font-medium transition-colors duration-300",
                    isActive
                      ? "text-orange  hover:underline hover:underline-offset-4"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-secondary w-full text-center">
              Book a Design
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
