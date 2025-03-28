import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  Briefcase,
  BarChart3,
  Headphones,
  Trophy,
  Shield,
  ArrowRight,
  Award,
  FileCheck,
  BarChart2,
  MessageSquare,
  Cpu,
  Dna,
  Flame,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 pl-3">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-full.png" alt="PeopleManager.ai Logo" width={300} height={300} className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              How It Works
            </Link>
            <Link
              href="#industries"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Industries
            </Link>
            <Link
              href="#dashboard"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Dashboard
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

      <main className="flex-1 p-5">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[#9333EA] font-bold text-xl">
                  <Flame className="h-6 w-6" />
                  <span className="tracking-wide">TRAIN. TRACK. TRANSFORM.</span>
                </div>
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl leading-tight">
                  AI Agents That Turn Your Team Into the Dream Team—
                  <span className="text-[#9333EA]">Your Way.</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-[600px]">
                  Automated training, real-time monitoring, and AI-powered coaching that creates consistent excellence
                  across your entire organization.
                </p>
                <div className="space-y-2 text-xl text-gray-600 max-w-[600px]">
                  <p>Let's be blunt: most training platforms are cute.</p>
                  <p>Videos? Everyone skips them.</p>
                  <p>Scripts? No one follows them.</p>
                  <p>Managers? Swamped, stressed, reactive.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="font-medium bg-[#9333EA] hover:bg-[#7E22CE] group transition-all duration-300 transform hover:scale-105"
                  >
                    Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="font-medium group transition-all duration-300">
                    See How It Works{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/sales-dashboard.png"
                  alt="PeopleManager.ai Dashboard"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute top-4 right-4 bg-[#9333EA]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  LIVE DASHBOARD
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9333EA]/10 rounded-full text-[#9333EA] text-xs font-bold tracking-wider mb-2">
                  BUSINESS CONTROL
                </div>
                <h2 className="text-4xl font-black tracking-wide">
                  You didn't build your business to hope people do things right.
                </h2>
                <p className="text-lg text-gray-500">Control outcomes. Scale precision. Make millions.</p>
                <p className="text-xl font-bold text-[#9333EA]">That's where PeopleManager.ai comes in.</p>
              </div>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/command-center.png"
                  alt="Command Center for Business Control"
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

        {/* Clone Your Best Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl order-2 lg:order-1">
                <Image src="/director-dashboard.png" alt="Director Dashboard" fill className="object-contain" />
                <div className="absolute top-4 right-4 bg-[#9333EA]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  CLONE MODE ACTIVE
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gradient-to-r from-[#9333EA] to-[#7E22CE] p-3 rounded-full shadow-md">
                    <Dna className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-black tracking-wide">We Don't Just Train. We Clone Your Best.</h2>
                </div>
                <p className="text-lg text-gray-500 mb-12 max-w-3xl ml-14">
                  Extract your winning formula and rebuild it into a system that's repeatable, scalable, and
                  unbreakable.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#9333EA]/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                        1
                      </div>
                      <h3 className="text-2xl font-bold">We extract your entire sales/training process.</h3>
                    </div>
                    <p className="text-gray-600 ml-14">Don't have it written down? No problem. We do the digging.</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#9333EA]/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                        2
                      </div>
                      <h3 className="text-2xl font-bold">We turn it into a living, breathing training engine.</h3>
                    </div>
                    <p className="text-gray-600 ml-14">
                      Manuals. Podcasts. AI-led walkthroughs. Custom exercises. Timed exams. No shortcuts. No skipping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monitor Every Day Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
                <Image src="/call-monitoring.png" alt="Call Monitoring Dashboard" fill className="object-contain" />
                <div className="absolute top-4 right-4 bg-[#00BFA5]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  LIVE MONITORING
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00BFA5]/10 rounded-full text-[#00BFA5] text-xs font-bold tracking-wider mb-2">
                  REAL-TIME FEEDBACK
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-[#00BFA5] to-[#00A896] p-3 rounded-full shadow-md">
                    <Headphones className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-black tracking-wide">
                    Training Isn't One and Done. We Monitor Every Day.
                  </h2>
                </div>
                <p className="text-lg text-gray-500 ml-14">
                  Most companies "train" someone and then check back six months later wondering what went wrong.
                  PeopleManager doesn't work like that.
                </p>
                <ul className="space-y-4 ml-14">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center mt-1 shadow-sm">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">Every they did well</p>
                      <p className="text-sm text-gray-500">Positive reinforcement of successful behaviors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center mt-1 shadow-sm">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">Where they messed up</p>
                      <p className="text-sm text-gray-500">Specific identification of improvement areas</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center mt-1 shadow-sm">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">When-module they need to revisit</p>
                      <p className="text-sm text-gray-500">Targeted retraining recommendations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center mt-1 shadow-sm">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">How to fix it before the next call</p>
                      <p className="text-sm text-gray-500">Actionable improvement steps</p>
                    </div>
                  </li>
                </ul>
                <p className="text-lg font-medium ml-14">If you're know tomorrow morning if someone is off.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Correcting Staff Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5C518]/10 rounded-full text-[#F5C518] text-xs font-bold tracking-wider mb-2">
                  AI COACHING
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-[#F5C518] to-[#F0B400] p-3 rounded-full shadow-md">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-black tracking-wide">Self-Correcting Staff. 24/7 Accountability.</h2>
                </div>
                <p className="text-lg text-gray-500 ml-14">Our AI doesn't just score—it coaches.</p>
                <p className="text-lg ml-14">Reps log in, see their results, and get real-time feedback:</p>
                <ul className="space-y-4 ml-14">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center mt-1 shadow-sm">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">What they did well</p>
                      <p className="text-sm text-gray-500">Reinforces successful behaviors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center mt-1 shadow-sm">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">Where they messed up</p>
                      <p className="text-sm text-gray-500">Identifies specific improvement areas</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center mt-1 shadow-sm">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">Which module they need to revisit</p>
                      <p className="text-sm text-gray-500">Recommends targeted retraining</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center mt-1 shadow-sm">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">How to fix it before the next call</p>
                      <p className="text-sm text-gray-500">Provides actionable improvement steps</p>
                    </div>
                  </li>
                </ul>
                <p className="text-lg font-medium italic ml-14">
                  It's like having a personal trainer… but for performance, compliance, and profit.
                </p>
              </div>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
                <Image src="/role-play-new.png" alt="AI Role Play Training" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-[#F5C518]/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  AI POWERED
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9333EA]/10 rounded-full text-[#9333EA] text-xs font-bold tracking-wider mb-2">
                UNIVERSAL APPLICATION
              </div>
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="bg-gradient-to-r from-[#9333EA] to-[#7E22CE] p-3 rounded-full shadow-md">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-black tracking-wide">This Works In Every Industry Where Humans Talk.</h2>
              </div>
              <p className="text-lg text-gray-500 mb-6">If your staff speak to customers, this works. Simple.</p>
              <p className="text-xl font-bold">Industries we dominate:</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Real estate</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Financial advice</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Mortgage brokers</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Car sales</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Call centres</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Front-of-house</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Healthcare teams</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Education staff</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Recruitment</span>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:border-[#9333EA]/30 group">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-3 w-3" />
                </div>
                <span className="font-medium">Hospitality</span>
              </div>
            </div>
            <div className="mt-12 text-center text-xl font-bold">
              If they talk, we train. If they drift, we catch it. If they're great, we clone it.
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section id="dashboard" className="py-20 bg-[#E6F7F5]">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)]">
                <Image src="/director-dashboard.png" alt="Director Hub Dashboard" fill className="object-contain" />
                <div className="absolute top-4 right-4 bg-[#9333EA]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  LIVE DASHBOARD
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9333EA]/10 rounded-full text-[#9333EA] text-xs font-bold tracking-wider mb-2">
                  MISSION CONTROL
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-[#9333EA] to-[#7E22CE] p-3 rounded-full shadow-md">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-black tracking-wide">Your Director Hub Dashboard</h2>
                </div>
                <p className="text-lg text-gray-500 ml-14">Complete visibility into your team's training progress.</p>
                <ul className="space-y-4 ml-14">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mt-1 shadow-sm">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">Track completion rates across all training modules</p>
                      <p className="text-sm text-gray-500">See who's on track and who needs a nudge</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mt-1 shadow-sm">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">
                        Monitor individual performance in product knowledge, sales techniques, and role plays
                      </p>
                      <p className="text-sm text-gray-500">Detailed metrics on every aspect of performance</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mt-1 shadow-sm">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">See who's actively engaged and who needs attention</p>
                      <p className="text-sm text-gray-500">Engagement scores updated in real-time</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mt-1 shadow-sm">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold">Get real-time updates on team and individual progress</p>
                      <p className="text-sm text-gray-500">Automated alerts when someone falls behind</p>
                    </div>
                  </li>
                </ul>
                <div className="pt-4 ml-14">
                  <p className="text-xl font-bold">This is your mission control.</p>
                  <p className="text-lg text-gray-600">No more guesswork about training effectiveness.</p>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#9333EA] to-[#7E22CE] rounded-full my-3"></div>
                  <p className="text-xl font-extrabold text-[#9333EA]">Now, you've got the data to drive decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Legend Section */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">The PeopleManager.ai Advantage</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-[#9333EA] to-[#7E22CE] rounded-full mx-auto my-3"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              <div className="flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-md">
                  <Cpu className="h-6 w-6" />
                </div>
                <p className="font-bold">AI Monitoring</p>
                <p className="text-sm text-gray-500">24/7 performance tracking</p>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center shadow-md">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <p className="font-bold">Real-Time Coaching</p>
                <p className="text-sm text-gray-500">Instant feedback and guidance</p>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-md">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <p className="font-bold">Director Dashboard</p>
                <p className="text-sm text-gray-500">Complete visibility and control</p>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center shadow-md">
                  <Award className="h-6 w-6" />
                </div>
                <p className="font-bold">Performance Leaderboard</p>
                <p className="text-sm text-gray-500">Gamified excellence tracking</p>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center shadow-md">
                  <FileCheck className="h-6 w-6" />
                </div>
                <p className="font-bold">Compliance Guard</p>
                <p className="text-sm text-gray-500">Ensures perfect adherence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#9333EA]/10 to-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-black tracking-wide sm:text-5xl">
                Ready to Clone Your Best and Scale Your Success?
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#9333EA] to-[#7E22CE] rounded-full mx-auto my-6"></div>
              <p className="mt-6 text-xl text-gray-600">
                Stop hoping your team gets it right. Start knowing they will.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Book a Demo</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Let us show you how to lock in your standards—and scale them forever.
                </p>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      placeholder="John Smith"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      placeholder="Acme Inc."
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] focus-visible:ring-offset-2"
                    />
                  </div>
                  <Button
                    className="w-full bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    Schedule My Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
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
                    href="#features"
                    className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#9333EA] transition-colors duration-300">
                    Case Studies
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

