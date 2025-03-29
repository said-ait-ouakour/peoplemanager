import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Wrench, BookOpen, Bot, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header/Navigation */}
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
            <Link href="/how-it-works" className="text-sm font-medium text-[#9333EA] transition-colors duration-300">
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
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
            <Button variant="outline" className="ml-2 transition-all duration-300 hover:border-[#9333EA]/70">
              Login
            </Button>
            <Button className="bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300 transform hover:scale-105">
              Book a Demo
            </Button>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
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
      </header>

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9333EA]/10 rounded-full text-[#9333EA] text-xs font-bold tracking-wider mb-4">
                THE PROCESS
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">From Chaos to Clarity—In 5 Steps.</h1>
              <p className="text-xl text-gray-700 mb-8">
                Let's make this simple: you give us your brain. We give you back a system that makes every team member a
                weapon.
              </p>
              <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl mb-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6110aa6d-6654-4665-873c-d8737c72a827-YQADapGWUgWTkzsr71bospPJZLZXM5.png"
                  alt="5-Step Process"
                  fill
                  className="object-cover object-center"
                  priority
                />
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
                    <Brain className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Step 1 – Discovery Call</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">We jump on a call and unpack your genius.</p>
                <p className="text-lg text-gray-600">
                  Whether you have training manuals or just vibes and results—we extract the method behind the madness.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-2">What we ask:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>What works now?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>What's broken?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>What's the dream outcome?</span>
                    </li>
                  </ul>
                  <p className="mt-4">You talk. We build.</p>
                </div>
                <div className="bg-[#9333EA]/5 p-6 rounded-lg border border-[#9333EA]/20 italic">
                  "I didn't even realise we had a system until they mapped it out." – Actual Client
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1e89d3b9-5fbe-45fb-8b70-58b7b56f3503-MYDNGwVApkxWZQ89xMVPjqmPMAtWyc.png" alt="Discovery Process" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">We extract your winning formula</p>
                    <p>And turn it into a repeatable system</p>
                  </div>
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
                <Image src="/monitoring-dashboard.png" alt="System Setup" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">Seamless Integration</p>
                    <p>With your existing tools and workflows</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Step 2 – System Setup</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  We don't duct tape onto your business—we build into it.
                </p>
                <p className="text-lg text-gray-600">
                  From CRM connections to Zoom call syncing, we integrate with your tools so that the training,
                  tracking, and transformation happens automatically.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-2 text-xl">No tech headaches. No clunky interfaces.</p>
                  <p className="text-lg">Just a seamless backend engine doing all the heavy lifting.</p>
                </div>
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
                  <h2 className="text-3xl font-black">Step 3 – Training Materials Created</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">This is where the magic happens.</p>
                <p className="text-lg text-gray-600">
                  We build your entire training system from scratch—or clone and enhance your existing one.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">You get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Your big manual (written, designed, branded)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Micro-training books and playbooks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>AI-led walkthroughs, video lessons, and exams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Interactive tests with auto-marking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Real-life scenarios and exercises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F5C518] font-bold">•</span>
                      <span>Role-play agents for objection handling, angry clients, coaching mode, and more</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold text-[#F5C518]">
                  Every lesson ends with action. Every action builds a habit.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/training-materials-created.png" alt="Training Materials" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-[#F5C518]/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  CUSTOM TRAINING
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
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ecd5159-92d1-492d-9e0a-b1e03654808d-HBOTMwL1xRPMbjjbNoIyySq7tpin4e.png" alt="Agent Testing" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-[#00BFA5]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  AI ROLE-PLAY
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Step 4 – Agent Testing</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">Now we launch your digital training ground.</p>
                <p className="text-lg text-gray-600">
                  Staff log in and train just like they would in real life—except it's faster, smarter, and relentless.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">They get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Role-plays with AI agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Real-time coaching prompts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Performance scores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00BFA5] font-bold">•</span>
                      <span>Customised retake challenges</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold">No skipped steps. No "faking it."</p>
                <p className="text-lg text-gray-600">
                  They're not just trained—they're tested, coached, and perfected.
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
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Step 5 – Live Monitoring Activated</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  Here's where most platforms stop. We're just getting started.
                </p>
                <p className="text-lg text-gray-600">
                  Every Zoom, every phone call, every sentence—they're tracked. We compare it against the script, the
                  training, the plan.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-2">If they go off-script?</p>
                  <p className="mb-4">We flag it. Fix it. Coach it.</p>

                  <p className="font-bold mb-2">Managers receive:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Real-time performance dashboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Call & screen recordings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>AI-suggested improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Team & individual progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9333EA] font-bold">•</span>
                      <span>Gamified leaderboards</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold text-[#9333EA]">
                  You see everything. And your team improves—automatically.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2028%2C%202025%2C%2010_30_30%20PM-wcjItZ9n5UZAh9SZxSv39AY9aKGA2E.png"
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

        {/* Final Result */}
        <section className="py-20 bg-gradient-to-r from-[#9333EA]/20 via-[#9333EA]/10 to-[#9333EA]/5 w-full flex items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-black mb-6">What You End Up With</h2>
              <p className="text-xl mb-8">
                You don't just "train" anymore.
                <br />
                You engineer excellence.
                <br />
                You systemise your standards.
                <br />
                You scale without fear.
              </p>
              <p className="text-2xl font-bold text-[#9333EA] mb-12">This is how you get a dream team—on demand.</p>
              <p className="text-xl mb-8">Want us to show you your version of this?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="font-medium bg-[#9333EA] hover:bg-[#7E22CE] group transition-all duration-300 transform hover:scale-105"
                >
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium group transition-all duration-300">
                  Talk to the Founder{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium group transition-all duration-300">
                  Download Overview{" "}
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

