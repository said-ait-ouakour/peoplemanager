'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Clock, DollarSign, CheckCircle, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Header from "@/components/header"

export default function CaseStudies() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9333EA]/10 rounded-full text-[#9333EA] text-xs font-bold tracking-wider mb-4">
                PROVEN RESULTS
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Real Businesses. Real Results.</h1>
              <p className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
                Built for scale. Proven at the frontlines.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We don't trade in theory. Every system we build is battle-tested in live businesses—where missing the
                mark costs money.
                <br />
                Here's what happened when operators like you plugged in PeopleManager.ai.
              </p>
              <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl mb-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/023e79b0-7e32-47e3-862e-b46276fa147f-KGEce2PrUoTEtUGtn12BazZPJO9F6B.png"
                  alt="Business executive with client success wall"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">Measurable performance improvements</p>
                    <p>From day one to excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 1 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9333EA]/10 rounded-full text-[#9333EA] text-xs font-bold tracking-wider mb-2">
                  FINANCIAL SERVICES
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">From 42% to 91% Conversion</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold text-lg mb-2">Problem:</p>
                  <p className="text-gray-700 mb-4">Team kept missing steps. Scripts ignored. Sales stalled.</p>

                  <p className="font-bold text-lg mb-2">Solution:</p>
                  <p className="text-gray-700">
                    We cloned their top rep into an AI training engine. Every agent now trains daily with real-time
                    role-play. Compliance tracking? Instant. No more mystery.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-[#9333EA]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-[#9333EA]" />
                      <p className="font-bold">Average conversion</p>
                    </div>
                    <p className="text-2xl font-black text-[#9333EA]">+49%</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#9333EA]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-[#9333EA]" />
                      <p className="font-bold">Script compliance</p>
                    </div>
                    <p className="text-2xl font-black text-[#9333EA]">38% → 97%</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#9333EA]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-[#9333EA]" />
                      <p className="font-bold">Self-correction</p>
                    </div>
                    <p className="text-lg font-bold text-[#9333EA]">Immediate</p>
                  </div>
                </div>

                <div className="bg-[#9333EA]/5 p-6 rounded-lg border border-[#9333EA]/20 italic">
                  <p className="text-lg">
                    "It was like plugging in a sales floor brain upgrade. The team just… got better. Fast."
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5QaF1Emrw6sqJRxTQ0Ukx3Pg59r7ds.png"
                  alt="Command center with performance monitoring"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#9333EA]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  COMMAND CENTER
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 2 */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/366f095f-83da-483d-8bbb-f0bba47bb810-hyGinlpxmgVqkFFK0MsTYd4Phq2mHJ.png"
                  alt="New hire completing onboarding in 4 days"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00BFA5]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  RAPID ONBOARDING
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00BFA5]/10 rounded-full text-[#00BFA5] text-xs font-bold tracking-wider mb-2">
                  SAAS / TECH
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">New Hires Ramping in 4 Days, Not 4 Weeks</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold text-lg mb-2">Problem:</p>
                  <p className="text-gray-700 mb-4">
                    New starters took too long to ramp. Too much shadowing, no real feedback.
                  </p>

                  <p className="font-bold text-lg mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Built a guided onboarding engine. Each new hire got daily micro-feedback, AI role-play scenarios,
                    and an automated pass/fail scorecard.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-[#00BFA5]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-[#00BFA5]" />
                      <p className="font-bold">Ramp time cut</p>
                    </div>
                    <p className="text-2xl font-black text-[#00BFA5]">76%</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#00BFA5]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-[#00BFA5]" />
                      <p className="font-bold">Performance</p>
                    </div>
                    <p className="text-md font-bold text-[#00BFA5]">Outperformed veterans</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#00BFA5]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-[#00BFA5]" />
                      <p className="font-bold">Manager time</p>
                    </div>
                    <p className="text-lg font-bold text-[#00BFA5]">Freed up</p>
                  </div>
                </div>

                <div className="bg-[#00BFA5]/5 p-6 rounded-lg border border-[#00BFA5]/20 italic">
                  <p className="text-lg">"We don't just hire faster—we train in parallel. Game-changer."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 3 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5C518]/10 rounded-full text-[#F5C518] text-xs font-bold tracking-wider mb-2">
                  LEGAL SERVICES
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center font-bold shadow-md">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Saved £250K in Lost Leads in 60 Days</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold text-lg mb-2">Problem:</p>
                  <p className="text-gray-700 mb-4">
                    Lost leads weren't followed up. No visibility into rep behaviour.
                  </p>

                  <p className="font-bold text-lg mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Introduced live AI call monitoring. Every missed opportunity flagged, coached, and reactivated. Reps
                    couldn't hide behind "I left a message."
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-[#F5C518]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-[#F5C518]" />
                      <p className="font-bold">Leads reactivated</p>
                    </div>
                    <p className="text-2xl font-black text-[#F5C518]">63%</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#F5C518]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-[#F5C518]" />
                      <p className="font-bold">Manager visibility</p>
                    </div>
                    <p className="text-2xl font-black text-[#F5C518]">+300%</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#F5C518]/20 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-[#F5C518]" />
                      <p className="font-bold">Recovered</p>
                    </div>
                    <p className="text-lg font-bold text-[#F5C518]">£250K in 8 weeks</p>
                  </div>
                </div>

                <div className="bg-[#F5C518]/5 p-6 rounded-lg border border-[#F5C518]/20 italic">
                  <p className="text-lg">"We had the leads. Now we have the performance."</p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3330f124-4c63-44c6-bd10-93d1141da80b-zUE3MMDMhFYLHQyYVA4znsnW6woxEx.png"
                  alt="Business executive with recovered leads dashboard showing £250K"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#F5C518]/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  REVENUE RECOVERY
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-black mb-6">Want Your Name on This List?</h2>
              <p className="text-xl mb-8">
                If your team talks to customers, you're sitting on hidden scale.
                <br />
                <span className="font-bold">Let's unlock it.</span>
              </p>
              <Button
                size="lg"
                className="font-medium bg-[#9333EA] hover:bg-[#7E22CE] group transition-all duration-300 transform hover:scale-105"
              >
                Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mt-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1e89d3b9-5fbe-45fb-8b70-58b7b56f3503-hbbSAcUHTcytQZBFoqvnRuXSOzTc5D.png"
                  alt="Business executive using PeopleManager.ai dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">Join these success stories</p>
                    <p>Transform your team's performance today</p>
                  </div>
                </div>
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
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/onboarding"
                    className="text-sm text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    Onboarding
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

