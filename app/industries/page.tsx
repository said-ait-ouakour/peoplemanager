'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Header from "@/components/header"

export default function Industries() {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header/Navigation */}
      <Header currentPath={`${pathname}`} />

      <main className="flex-1 flex flex-col items-center">
<section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Industries</h1>
              <p className="text-xl text-gray-700 mb-8">Coming Soon</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="font-medium bg-[#9333EA] hover:bg-[#7E22CE] group transition-all duration-300 transform hover:scale-105"
                >
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium group transition-all duration-300">
                  <Link href="/">
                    Back to Home <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 w-full flex justify-center">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-full.png"
                  alt="PeopleManager.ai Logo"
                  width={300}
                  height={300}
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">Train. Track. Transform.</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/onboarding"
                    className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300"
                  >
                    Onboarding
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} PeopleManager.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

