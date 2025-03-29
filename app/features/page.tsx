'use client'
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  BotIcon as Robot,
  BarChart3,
  Brain,
  Trophy,
  LayoutDashboard,
  CheckCircle,
  Shield,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Header from "@/components/header"

export default function Features() {
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
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Features That Make PeopleManager.ai Unstoppable
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We don't just train your team. We transform them into a precision performance machine.
              </p>
              <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl mb-12 border border-gray-100">                <Image
                src="/features-hero-banner.png"
                alt="PeopleManager.ai Features"
                fill
                className="object-cover object-center"
                priority
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">A complete system for excellence</p>
                    <p>From training to monitoring to optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">📚 1. Your Entire Training System, Built for You</h2>
                </div>
                <p className="text-xl text-gray-700">
                  We clone your best performer and your secret sauce—manuals, podcasts, walk-throughs, exercises, exams.
                </p>
                <p className="text-lg text-gray-600">
                  Don't have anything written down? We'll extract it straight from your team, your calls, your head.
                </p>
                <p className="text-lg text-gray-600 mb-4">We do the heavy lifting. You get the glory.</p>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">Included:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>Fully branded manuals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>Interactive training videos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>AI-led walkthroughs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>Scenario-based exams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>Role-play prep</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg font-bold text-[#9333EA]">
                  It's like handing your team a playbook... then training them to execute it in their sleep.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e2fd677f-1b4b-41b4-85d2-145dfa84369e-rWt5ioPSZLZ1Zjmh60g1OJ72QNKWWA.png"
                  alt="Training System"
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

        {/* Feature 2 */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
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
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                    <Robot className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🤖 2. Role-Play With Real-Time AI Feedback</h2>
                </div>
                <p className="text-xl text-gray-700">Staff don't just watch—they do.</p>
                <p className="text-lg text-gray-600 mb-4">
                  They talk to our AI like it's a real client. It listens. It pushes. It scores.
                </p>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">Key abilities:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Ask the AI for help mid-conversation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Get hit with real objections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Practice rebuttals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Discover the psychology behind perfect delivery</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg font-bold text-[#00BFA5]">
                  Our agents don't blink. Don't get tired. And don't let you fake it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white flex items-center justify-center font-bold shadow-md">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">📈 3. Real-Time Monitoring That Actually Works</h2>
                </div>
                <p className="text-xl text-gray-700">
                  Every call. Every Zoom. Every line spoken is captured, transcribed, and compared against your
                  standard.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-2">If they go off script?</p>
                  <p className="mb-4">We flag it.</p>

                  <p className="font-bold mb-2">If they smash it?</p>
                  <p className="mb-4">We log it, score it, and learn from it.</p>

                  <p className="font-bold mb-4">Delivered Daily:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                      <span>Performance reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                      <span>Drift detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                      <span>Compliance checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                      <span>Re-training alerts</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold text-[#3B82F6]">
                  You're not guessing anymore—you're steering the ship.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71cfb485-2e4e-42e4-b5b5-a75b70e4ec69-K0uS3Olcht2I5XUgzwa84kw37DedcK.png"
                  alt="Real-Time Monitoring"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#3B82F6]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  LIVE MONITORING
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 4 */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c5151721-13b7-413b-b037-3303c2198022-Jhas4DXjLgli8h5zcA5TcCrEbVFQQP.png"
                  alt="Self-Correcting Staff"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#F5C518]/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  AI COACHING
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center font-bold shadow-md">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🧠 4. Self-Correcting Staff, 24/7</h2>
                </div>
                <p className="text-xl text-gray-700">
                  We don't just tell them they messed up—we show them exactly where, why, and how to fix it.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Staff log in, see their score, watch the replay, and retake the module.
                </p>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">Coaching Includes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                      <span>What they did right</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                      <span>What they missed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                      <span>The impact it had</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                      <span>How to improve by tomorrow</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg font-bold text-[#F5C518]">
                  They start learning for you... and correcting themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 5 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">💬 5. Leaderboards, Forums & Instant Manager Nudges</h2>
                </div>
                <p className="text-xl text-gray-700">PeopleManager creates culture, not just compliance.</p>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                        💥
                      </div>
                      <div className="pt-1">
                        <p className="font-bold">Live leaderboards fire up healthy competition</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                        🗣
                      </div>
                      <div className="pt-1">
                        <p className="font-bold">Internal forums spark conversation and collaboration</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                        📅
                      </div>
                      <div className="pt-1">
                        <p className="font-bold">Auto-121 prompts keep managers engaged with their people</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-bold">Motivation: Managed.</p>
                  <p className="text-lg font-bold">Momentum: Measurable.</p>
                  <p className="text-lg font-bold text-[#9333EA]">Culture: Magnetic.</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0370d624-39c2-439c-a754-3e757fa1eff9-CyNh9MCLfoCISxqRRizNsMQJB4aw0x.png"
                  alt="Leaderboards"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#9333EA]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  TEAM PERFORMANCE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 6 */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/023e79b0-7e32-47e3-862e-b46276fa147f-P4TUEnaPaHR6NYMUQwzWVIJZO4RPaY.png"
                  alt="Mission Control Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00BFA5]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  LIVE DASHBOARD
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                    <LayoutDashboard className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">📊 6. Your Mission Control Dashboard</h2>
                </div>
                <p className="text-xl text-gray-700">Everything in one place. One login. One view.</p>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Training completion rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Agent activity tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Compliance & risk flags</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Coaching needs by individual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Top performers and weak links</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg font-bold">No more "he said, she said."</p>
                <p className="text-lg font-bold text-[#00BFA5]">You've got the data. You've got the control.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Feature 7 */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3B82F6]/10 rounded-full text-[#3B82F6] text-xs font-bold tracking-wider mb-2">
                  LEGAL PROTECTION
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white flex items-center justify-center font-bold shadow-md">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🔒 7. Compliance Intelligence – Always On, Always Accurate</h2>
                </div>
                <p className="text-xl text-gray-700">
                  We don't just monitor calls—we monitor the law. Every conversation is auto-audited against your
                  industry's compliance standards.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">Included:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                      <span>Script & Disclosure Checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#3B82F6] mt-0.5 flex-shrink-0 font-bold">
                        ⚖️
                      </div>
                      <span>Legal Phrasing Detection (e.g. "advice", "guarantee", "authorised")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#3B82F6] mt-0.5 flex-shrink-0 font-bold">
                        🔍
                      </div>
                      <span>Compliance Scores in Daily Reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#3B82F6] mt-0.5 flex-shrink-0 font-bold">
                        🔔
                      </div>
                      <span>Auto-alerts for breaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#3B82F6] mt-0.5 flex-shrink-0 font-bold">
                        📂
                      </div>
                      <span>Audit-ready logs for any call, anytime</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg font-bold text-[#3B82F6]">It's your legal safety net—on autopilot.</p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/392d0484-c9c2-4c9c-8ea9-f8ea212988a6-sB3ihezJ3gMoFEJVgM9AWgZHjXVvb3.png"
                  alt="Compliance Intelligence"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#3B82F6]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  COMPLIANCE GUARD
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 8 */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f2508f33-749a-4749-acf9-42cf1b076b0a-kI85rIu7aRdoNQzYB4I1I4hvVG3w1M.png"
                  alt="Modular Business Scaling"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#F5C518]/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  FRANCHISE READY
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5C518]/10 rounded-full text-[#F5C518] text-xs font-bold tracking-wider mb-2">
                  SCALE WITHOUT LIMITS
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center font-bold shadow-md">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">🧱 8. Modular Business Scaling – Your Company, Packaged</h2>
                </div>
                <p className="text-xl text-gray-700">
                  For an additional fee, we can build your entire business system into a scalable AI training module.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-bold mb-4">We extract:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#F5C518] mt-0.5 flex-shrink-0 font-bold">
                        🧠
                      </div>
                      <span>Your processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#F5C518] mt-0.5 flex-shrink-0 font-bold">
                        📚
                      </div>
                      <span>Your knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#F5C518] mt-0.5 flex-shrink-0 font-bold">
                        🎯
                      </div>
                      <span>Your best performers' methods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#F5C518] mt-0.5 flex-shrink-0 font-bold">
                        📞
                      </div>
                      <span>Your calls & scripts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-[#F5C518] mt-0.5 flex-shrink-0 font-bold">
                        🔁
                      </div>
                      <span>Your client journey</span>
                    </li>
                  </ul>
                  <p className="mt-6 mb-2">
                    Then we turn it into a scalable, repeatable AI-driven system—ready to plug into new hires, new
                    locations, or new companies.
                  </p>
                </div>
                <div className="bg-[#F5C518]/5 p-6 rounded-lg border border-[#F5C518]/20">
                  <p className="text-lg font-bold mb-2">💡 Want to franchise without the headache?</p>
                  <p className="text-lg">Just duplicate your module—and scale.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Summary */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-8">Your 8 Unstoppable Features</h2>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-lg">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                      1
                    </div>
                    <div className="pt-1">
                      <p className="font-bold">Training System – Command Center</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                      2
                    </div>
                    <div className="pt-1">
                      <p className="font-bold">Role-Play With Real-Time AI Feedback</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white flex items-center justify-center font-bold shadow-md">
                      3
                    </div>
                    <div className="pt-1">
                      <p className="font-bold">Real-Time Monitoring – Live Monitoring</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center font-bold shadow-md">
                      4
                    </div>
                    <div className="pt-1">
                      <p className="font-bold">Self-Correcting Staff – 24/7 AI Coaching</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                      5
                    </div>
                    <div className="pt-1">
                      <p className="font-bold">Leaderboards, Forums & Instant Manager Nudges</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                      6
                    </div>
                    <div className="pt-1">
                      <p className="font-bold">Mission Control Dashboard</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white flex items-center justify-center font-bold shadow-md">
                      7
                    </div>
                    <div className="pt-1">
                      <p className="font-bold">Compliance Intelligence – Always On, Always Accurate</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center font-bold shadow-md">
                      8
                    </div>
                    <div className="pt-1">
                      <p className="font-bold">Modular Business Scaling – Your Company, Packaged</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-black mb-6">Ready to scale precision and print results on repeat?</h2>
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
                  <Link href="/how-it-works">
                    See How It Works{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

