import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
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
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-[#9333EA] transition-colors duration-300">
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
                  className="h-5 w-5"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0
                  2 2 0 0 0-2-2
                  2 2 0 0 0-2 2v7h-4v-7a6 6 0
                  0 1 6-6z"
                  />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#9333EA] transition-colors duration-300">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
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
                  href="/security"
                  className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-[#00BFA5] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-gray-600 hover:text-[#00BFA5] transition-colors duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#00BFA5] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-[#00BFA5] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#F5C518] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#F5C518] transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#F5C518] transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#F5C518] transition-colors duration-300">
                  Data Processing Agreement
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
  )
}
