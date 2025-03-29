'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Flame, Target, Brain, Users, Zap, Rocket, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Header from "@/components/header"

export default function About() {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header/Navigation */}
      <Header currentPath={`${pathname}`} />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-[#9333EA]/20 via-[#9333EA]/10 to-[#9333EA]/5 w-full flex items-center justify-center">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9333EA]/10 rounded-full text-[#9333EA] text-xs font-bold tracking-wider mb-4">
                <Flame className="h-3 w-3" />
                OUR STORY
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Who Built This Beast?</h1>
              <p className="text-xl text-gray-700 mb-8">
                Not just coders. Not just trainers. Operators. Closers. Business owners who've felt the pain of
                "underperforming staff" firsthand—and built a weapon to destroy it.
              </p>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl mb-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/417a5115-7aae-47aa-8c47-6cc4f06687a6-wpWlaPwaxg10V5MVnsqvoJZCl2Uwya.png"
                  alt="Business executive looking at Train. Track. Transform."
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">Building the future of performance management</p>
                    <p>From vision to execution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Mission Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">This Isn't Just Software. It's a Standard.</h2>
                </div>
                <p className="text-xl text-gray-700">We built PeopleManager.ai because we got tired of:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mt-1 shadow-sm">
                      <Shield className="h-3 w-3" />
                    </div>
                    <p className="text-lg">Training being ignored</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mt-1 shadow-sm">
                      <Shield className="h-3 w-3" />
                    </div>
                    <p className="text-lg">Scripts going unfollowed</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mt-1 shadow-sm">
                      <Shield className="h-3 w-3" />
                    </div>
                    <p className="text-lg">Managers firefighting instead of leading</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mt-1 shadow-sm">
                      <Shield className="h-3 w-3" />
                    </div>
                    <p className="text-lg">Losing deals because someone "forgot the pitch"</p>
                  </li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
                  <p className="text-lg font-bold mb-2">So we built the thing we wished we had:</p>
                  <p className="text-lg">
                    An AI-powered, always-on training and tracking machine that doesn't miss, doesn't sleep, and doesn't
                    sugarcoat results.
                  </p>
                </div>
                <p className="text-xl font-bold text-[#9333EA]">
                  This isn't about micromanagement.
                  <br />
                  It's about precision at scale.
                </p>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c7067c37-d9aa-4d9a-a6a3-e26a9019dbbf-0uuHFyMQ2y7snI967jWO5cU8jKWh1J.png"
                  alt="Performance dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#9333EA]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  MISSION CONTROL
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Founders Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1fc326d9-4ad9-44ad-a1c6-321c03a6f386-Z5H7s1dahXvbPw0I4rZnvl8TXDByaB.png"
                  alt="Built by Operators"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00BFA5]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  REAL EXPERIENCE
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Built by People Who Actually Run Businesses.</h2>
                </div>
                <p className="text-xl text-gray-700 mb-4">
                  We're not some Silicon Valley think-tank with a theory.
                  <br />
                  We're business owners who've managed teams, closed sales, and felt the cost of mistakes.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-lg">
                    PeopleManager was forged on the frontline—on Zoom calls, sales floors, and high-stakes client
                    conversations.
                  </p>
                </div>
                <div className="bg-[#00BFA5]/5 p-6 rounded-lg border border-[#00BFA5]/20">
                  <p className="text-xl font-bold text-[#00BFA5] mb-2">We tested it on our own companies first.</p>
                  <p className="text-lg">Now it's yours.</p>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mt-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/193c2836-3cbd-43cb-90ab-b10ae737b7af-3fW4To5zofVVWIFo8vLs0tiygPtkJr.png"
                    alt="Real work being done"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center font-bold shadow-md">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">What We Believe</h2>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Our core principles guide everything we do at PeopleManager.ai.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#9333EA]/5 p-6 rounded-lg border border-[#9333EA]/20">
                    <p className="text-lg font-bold">Clarity Beats Talent</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Clear processes and expectations outperform raw talent every time.
                    </p>
                  </div>
                  <div className="bg-[#00BFA5]/5 p-6 rounded-lg border border-[#00BFA5]/20">
                    <p className="text-lg font-bold">No More Guesswork</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Data-driven decisions eliminate the need for assumptions.
                    </p>
                  </div>
                  <div className="bg-[#F5C518]/5 p-6 rounded-lg border border-[#F5C518]/20">
                    <p className="text-lg font-bold">Data Over Drama</p>
                    <p className="text-sm text-gray-600 mt-2">
                      We let metrics tell the story, not opinions or politics.
                    </p>
                  </div>
                  <div className="bg-[#3B82F6]/5 p-6 rounded-lg border border-[#3B82F6]/20">
                    <p className="text-lg font-bold">Train Daily</p>
                    <p className="text-sm text-gray-600 mt-2">Excellence isn't an event—it's a consistent practice.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#9333EA]/10 to-white p-6 rounded-lg">
                  <p className="text-xl font-bold text-[#9333EA]">
                    AI won't replace your people. It'll make them unmissable.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c9c2547e-e000-4e00-8fc8-64fc3d042c43-8kRGA6ELBBk6Lkca9BLgQef3qWnkr4.png"
                  alt="PeopleManager.ai Values Wall"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#F5C518]/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  OUR VALUES
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9333EA]/10 rounded-full text-[#9333EA] text-xs font-bold tracking-wider mb-4">
                THE TEAM
              </div>
              <h2 className="text-3xl font-black mb-6">Meet the Operators Behind the Machine</h2>
              <p className="text-lg text-gray-600">
                A team of business owners, sales leaders, and tech innovators who've been in your shoes.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl mb-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/56960afd-1fe6-41fe-b9a4-cb9a050aea35-3bMvGVFNONi9zOq97V0JSbP8SjzZ55.png"
                alt="The PeopleManager.ai Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-bold">The team that's revolutionizing training and performance</p>
                  <p>With AI that amplifies human potential</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-md">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Our Mission</p>
                  </div>
                </div>
                <p className="text-lg mb-4">
                  "We're on a mission to eliminate the gap between your best performer and your worst. Not by lowering
                  standards, but by raising everyone to elite."
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center shadow-md">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Our Promise</p>
                  </div>
                </div>
                <p className="text-lg mb-4">
                  "If you're serious about scaling excellence, we'll give you the machine to do it. No fluff. No theory.
                  Just results you can measure in days, not years."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Want In Section */}
        <section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-black mb-6">Want In?</h2>
              <p className="text-xl mb-8">
                This isn't a tool. It's a transformation.
                <br />
                If you're ready to build a team that never misses, let's talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="font-medium bg-[#9333EA] hover:bg-[#7E22CE] group transition-all duration-300 transform hover:scale-105"
                >
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium group transition-all duration-300">
                  Join Our Community{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mt-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/81ddc96f-9132-4913-a4b4-9e4b29a8a79f-OIYH4hQibRDHN4rggPl5pj0vfNlp7A.png"
                  alt="What We Believe"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">Join us in revolutionizing how teams perform</p>
                    <p>Train. Track. Transform.</p>
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
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#00BFA5] transition-colors duration-300">
                    Careers
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

