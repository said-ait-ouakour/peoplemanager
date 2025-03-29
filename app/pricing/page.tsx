'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Briefcase, CreditCard, Brain, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { usePathname } from "next/navigation"

export default function Pricing() {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header/Navigation */}
      <Header currentPath={`${pathname}`} />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Pricing</h1>
              <p className="text-xl text-gray-700 mb-8">
                No Fluff. No Bloat.
                <br />
                Just scalable, repeatable performance — cloned into every rep.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SME Package */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#9333EA]/20 text-[#9333EA] flex items-center justify-center font-bold">
                      🔹
                    </div>
                    <h3 className="text-2xl font-bold">SME Package</h3>
                  </div>
                  <p className="text-gray-600 mb-6">For teams up to 20 staff.</p>

                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-[#9333EA]" />
                    <p className="font-bold">Setup Fee:</p>
                    <p className="text-xl font-black">£35,000</p>
                    <span className="text-gray-500">(one-time)</span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="h-5 w-5 text-[#9333EA]" />
                    <p className="font-bold">Monthly Subscription:</p>
                    <p className="text-xl font-black">£2450</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                    <p className="mb-2">Includes 10 users</p>
                    <p className="mb-2">£45/month per additional user (max 20 total)</p>
                  </div>

                  <Button className="w-full bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300">
                    <Link href="/contact">
                      Book a Demo
                    </Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  <p className="font-medium text-gray-800 mb-2">Includes:</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>2 fully written & designed training books</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>2 tailored training guides (approx. 15 pages each)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>Core "Want-Got-Gap" sales method</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>Basic appointment booking script</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>2 role-specific exams</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>1 role-play module</span>
                  </div>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white p-8 rounded-xl border-2 border-[#9333EA] shadow-xl relative transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#9333EA]/20 text-[#9333EA] flex items-center justify-center font-bold">
                      🔷
                    </div>
                    <h3 className="text-2xl font-bold">Enterprise Package</h3>
                  </div>
                  <p className="text-gray-600 mb-6">For 21+ staff. Built around you.</p>

                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-[#9333EA]" />
                    <p className="font-bold">Setup Fee:</p>
                    <p className="text-xl font-black">Starts at £50,000</p>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="h-5 w-5 text-[#9333EA]" />
                    <p className="font-bold">Annual License:</p>
                    <p className="text-xl font-black">£50,000 – £150,000+</p>
                  </div>
                  <p className="text-gray-500 mb-6">(for organizations with 21-500 staff)</p>

                  <Button className="w-full bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300">
                    <Link href="/contact">
                      Book a Demo
                    </Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  <p className="font-medium text-gray-800 mb-2">Includes:</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>Multiple custom training books</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>6 fully personalised training guides</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>Custom sales methodology</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>Advanced objection-handling & questioning frameworks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>Stakeholder-informed call scripts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>Roleplay simulations & AI-led walk-throughs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                    <span>Enterprise onboarding & change management plan</span>
                  </div>
                </div>
              </div>

              {/* Legacy Package */}
              <div className="bg-white p-8 rounded-xl border-2 border-[#F5C518] shadow-xl relative transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
                <div className="absolute -top-3 right-4 bg-[#F5C518] text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  PREMIUM
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#F5C518]/20 text-[#F5C518] flex items-center justify-center font-bold">
                      🛡️
                    </div>
                    <h3 className="text-2xl font-bold">Legacy Package</h3>
                  </div>
                  <p className="text-gray-600 mb-6">For visionaries. For builders of billion-pound systems.</p>

                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-[#F5C518]" />
                    <p className="font-bold">Setup Fee:</p>
                    <p className="text-xl font-black">Starts at £250,000</p>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="h-5 w-5 text-[#F5C518]" />
                    <p className="font-bold">Annual License:</p>
                    <p className="text-xl font-black">Custom quoted</p>
                  </div>
                  <p className="text-gray-500 mb-6">(based on scale and goals)</p>
                  <p className="text-gray-500 mb-6">(unlimited staff, unlimited scale, infinite ambition)</p>

                  <Button className="w-full bg-[#F5C518] hover:bg-[#E0B000] text-black transition-all duration-300">
                    <Link href="/contact">
                      Book a Demo
                    </Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  <p className="font-medium text-gray-800 mb-2">Includes:</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>Unlimited written, designed, and branded training manuals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>Unlimited personalised training guides, walkthroughs, and assets</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>Unlimited exams, modules, AI feedback, and role-play scenarios</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>Fully tailored sales, service, compliance, and operations scripts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>End-to-end automation of training, QA, hiring, onboarding, coaching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>Partner access to our internal team for white-glove rollout</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>Cloned digital version of your company—ready to scale, license, or sell</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                    <span>Full IP rights over your cloneable, automated company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You're Really Paying For */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                  <Brain className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black">🧠 What You're Really Paying For</h2>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg mb-12">
                <p className="text-xl font-bold mb-4">You're not buying training.</p>
                <p className="text-lg">
                  You're buying control. Scale. A team that behaves like your top 1%.
                  <br />
                  Every day. Without you breathing down their neck.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Lock className="h-6 w-6 text-[#9333EA]" />
                  <h3 className="text-2xl font-bold">🔐 Ready to lock in your standard?</h3>
                </div>
                <Button
                  size="lg"
                  className="font-medium bg-[#9333EA] hover:bg-[#7E22CE] group transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">
                    Book a Demo
                  </Link> <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    </div>
  )
}

