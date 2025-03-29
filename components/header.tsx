"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

type NavItem = {
  href: string
  label: string
}

interface HeaderProps {
  currentPath?: string
  includeSecurityLink?: boolean
}

export default function Header({ currentPath = "", includeSecurityLink = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [currentPath])

  const baseNavItems: NavItem[] = [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/onboarding", label: "Onboarding" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ]

  // Add security link if specified
  const navItems = includeSecurityLink ? [...baseNavItems, { href: "/security", label: "Security" }] : baseNavItems

  // Special case for contact page
  if (currentPath === "/contact") {
    return (
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm flex justify-center">
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo-full.png"
                alt="PeopleManager.ai Logo"
                width={300}
                height={300}
                className="h-16 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/onboarding"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Onboarding
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Case Studies
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#9333EA] transition-colors duration-300">
              Contact
            </Link>
            <Button variant="outline" className="ml-2 transition-all duration-300 hover:border-[#9333EA]/70">
              Login
            </Button>
            <Button className="bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300 transform hover:scale-105">
              Book a Demo
            </Button>
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-24 left-0 right-0 md:hidden bg-white border-t border-gray-200 py-4 shadow-md z-50">
            <div className="container flex flex-col space-y-4">
              <Link
                href="/features"
                className="text-sm font-medium px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-medium px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/onboarding"
                className="text-sm font-medium px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Onboarding
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-medium px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium px-4 py-2 text-[#9333EA] bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-2">
                <Button variant="outline" className="w-full transition-all duration-300 hover:border-[#9333EA]/70">
                  Login
                </Button>
                <Button className="w-full bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }

  // Regular header for other pages
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm flex justify-center">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/logo-full.png" alt="PeopleManager.ai Logo" width={300} height={300} className="h-16 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${currentPath === item.href ? "text-[#9333EA]" : "text-gray-600 hover:text-primary"
                } transition-colors duration-300`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" className="ml-2 transition-all duration-300 hover:border-[#9333EA]/70">
            Login
          </Button>
          <Button className="bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300 transform hover:scale-105">
            Book a Demo
          </Button>
        </nav>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-0 right-0 md:hidden bg-white border-t border-gray-200 py-4 shadow-md z-50">
          <div className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium px-4 py-2 ${currentPath === item.href ? "text-[#9333EA] bg-gray-50" : "text-gray-600 hover:bg-gray-50"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-2">
              <Button variant="outline" className="w-full transition-all duration-300 hover:border-[#9333EA]/70">
                Login
              </Button>
              <Button className="w-full bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}