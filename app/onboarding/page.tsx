'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Rocket, Search, Cog, BookOpen, FlaskRoundIcon as Flask, Brain, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { usePathname } from "next/navigation"

export default function Onboarding() {
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
                <Rocket className="h-3 w-3" />
                CLIENT SUCCESS
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                🚀 Onboarding: Built to Make You Bulletproof
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We don't waste your time.
                <br />
                We extract what works, build what's missing, and hand you back a performance machine that runs like you
                always imagined.
              </p>
              <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl mb-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7a15dbe2-4eef-44ee-9be1-51be9aa11da8-rDxgDWT4QKp7PQUKdzd9oUWloKpofh.png"
                  alt="Team analyzing performance data"
                  fill
                  className="object-cover"
                  priority
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">Transform your team's performance</p>
                    <p>From day one to excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#00BFA5] text-white flex items-center justify-center font-bold shadow-md">
                    <Search className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🔍 Step 1: Discovery Call</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">We get under the hood of your business.</p>
                <p className="text-lg text-gray-600">
                  What are you trying to scale? What's broken? What's brilliant but undocumented?
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-lg mb-4">
                    We'll ask the right questions, listen hard, and map out your exact transformation roadmap.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold">•</span>
                      <span>If you've got top performers—we clone them.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] font-bold">•</span>
                      <span>If you've got no system—we create one.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d4a68551-160f-4160-a700-66702ce652c5-9rbcKOxf5pMgTA01oneauvuke80JDi.png"
                  alt="Discovery Call Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#3B82F6]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  DISCOVERY PHASE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e1d2d02b-bdb4-4bdb-afc1-5afc91b9d0fd-pPJhyxWpA6aQvzNQlmPOAYptL6tWMG.png"
                  alt="System Setup"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#9333EA]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  SYSTEM CONFIGURATION
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                    <Cog className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">⚙️ Step 2: System Setup</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  Next, we configure PeopleManager.ai around your needs—not the other way around.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">We:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Set up your branded dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Build user profiles for every team member</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Lock in the roles, targets, and core KPIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Assign your dedicated Success Lead</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-medium">Think of this as onboarding your dream team's control panel.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center font-bold shadow-md">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🛠 Step 3: Training Materials Engineered</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">You don't have manuals? No problem. We build them.</p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">We:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Interview your team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Audit your current processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Write your bespoke playbooks from scratch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Ensure everything is legally compliant and on-brand</span>
                    </li>
                  </ul>

                  <p className="font-bold mt-6 mb-4">From these, we craft:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Interactive training modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Audio lessons + micro podcasts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Step-by-step walkthroughs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Exams, exercises, and "checkpoints"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>AI role-play scripts based on real client scenarios</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b4aecb7d-c7c2-4c7c-a92b-2a92439ada5e-VFHPJoyDN3LnimL6pxev90tLslbvFe.png"
                  alt="AI Training Materials"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#F5C518]/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  AI POWERED TRAINING
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/136ece08-0d1b-40d1-98e9-958ededa7c5b-dbQe4RdWxTaDLxEMThydcQeSiJDiDw.png"
                  alt="Agent Testing"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00BFA5]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  AI ROLE-PLAY
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                    <Flask className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🧪 Step 4: Agent Testing & AI Calibration</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">Now we train your team.</p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">Each agent:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Enters the training flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Takes exams to prove understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Completes role-play sessions with our AI avatar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Gets real-time feedback and coaching</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-medium">
                  This isn't a 'watch a video' vibe. It's high-stakes, interactive, and sticky.
                </p>
                <p className="text-lg text-gray-600">
                  Meanwhile, your AI engine learns how to grade calls, flag issues, and support every rep automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🧠 Step 5: Live Monitoring + Optimisation</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">Once we go live, the real magic begins.</p>
                <p className="text-lg text-gray-600 mb-4">Every call. Every Zoom. Every touchpoint.</p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">We:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Record and transcribe interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Compare them to your exact standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Flag anything that's off</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Deliver next-day performance breakdowns</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold">
                  Your managers get a live dashboard. Your reps get 24/7 coaching.
                  <br />
                  You get a team that finally does what you said.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7a15dbe2-4eef-44ee-9be1-51be9aa11da8-rDxgDWT4QKp7PQUKdzd9oUWloKpofh.png"
                  alt="Live Monitoring Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#9333EA]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  LIVE MONITORING
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Success */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d4a68551-160f-4160-a700-66702ce652c5-9rbcKOxf5pMgTA01oneauvuke80JDi.png"
                  alt="Ongoing Success"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00BFA5]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  CONTINUOUS IMPROVEMENT
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🔁 Ongoing Success</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">You'll never ask, "How's onboarding going?" again.</p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">Because:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>You can see the progress of every new hire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>The system self-corrects in real time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>You get monthly strategic check-ins with us</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Training evolves as your business grows</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#00BFA5]/5 p-6 rounded-lg border border-[#00BFA5]/20">
                  <p className="text-xl font-bold text-[#00BFA5] mb-2">This isn't software.</p>
                  <p className="text-lg">It's a full-stack onboarding revolution.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-black mb-6">Let's Make Your First Hire Feel Like Your 100th</h2>
              <p className="text-xl mb-8">
                It's time to scale precision—not chaos.
                <br />
                Plug in PeopleManager.ai and onboard like a billion-dollar company, no matter your size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="font-medium bg-[#9333EA] hover:bg-[#7E22CE] group transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">
                      Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" className="font-medium group transition-all duration-300">
                  Talk to the Founder{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium group transition-all duration-300">
                  See Example Training Plan{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#00BFA5] transition-colors duration-300">
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
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#00BFA5] transition-colors duration-300">
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

