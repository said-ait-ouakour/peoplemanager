import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Lock, FileText, Eye, Bell, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Security() {
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
            <Link href="/security" className="text-sm font-medium text-[#9333EA] transition-colors duration-300">
              Security
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
                ENTERPRISE-GRADE
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                🔒 Enterprise-Grade Security. Compliance? Handled.
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                If you're scaling precision, you need more than performance—you need protection.
                <br />
                We've engineered PeopleManager.ai to meet the demands of industries where the cost of error is
                catastrophic and compliance isn't optional.
              </p>
              <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl mb-12">
                <Image
                  src="/security-ai-controls.png"
                  alt="AI Security Controls"
                  fill
                  className="object-contain bg-[#1a1a1a]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bank-Grade Encryption */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Bank-Grade Encryption</h2>
                </div>
                <p className="text-xl text-gray-700">
                  Every piece of data—whether it's a call recording, transcript, training module, or user score—is
                  protected with AES-256 encryption both in transit and at rest.
                </p>
                <p className="text-lg font-bold text-[#9333EA]">We don't just lock the doors. We triple-bolt them.</p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold mb-3">Security Features:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>AES-256 encryption for all data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>Secure data transmission protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>Multi-factor authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <span>Regular security audits and penetration testing</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/security-encryption.png" alt="256-bit AES encryption" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Audit Trails */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/security-transparency.png" alt="Real-Time Audit Trails" fill className="object-cover" />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00A896] text-white flex items-center justify-center font-bold shadow-md">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Real-Time Audit Trails</h2>
                </div>
                <p className="text-xl text-gray-700">
                  Everything's tracked. Every login. Every score. Every keystroke.
                </p>
                <p className="text-lg font-bold mb-4">Why?</p>
                <p className="text-lg text-gray-700">
                  Because the first step to controlling outcomes is knowing what happened—and when.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold mb-3">Audit Features:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Complete user activity logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Timestamped event tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Exportable audit reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-[#00BFA5] mt-0.5 flex-shrink-0" />
                      <span>Immutable audit trail</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy-First Design */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F5C518] to-[#F0B400] text-white flex items-center justify-center font-bold shadow-md">
                    <Database className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-black">Privacy-First Design</h2>
                </div>
                <p className="text-xl font-bold text-gray-800">Your data stays yours.</p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                      <span>We don't train our models on your conversations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                      <span>We don't sell your insights.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-[#F5C518] mt-0.5 flex-shrink-0" />
                      <span>We don't touch what isn't ours.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F5C518]/5 p-6 rounded-lg border border-[#F5C518]/20">
                  <h3 className="text-xl font-bold text-[#F5C518] mb-2">GDPR, CCPA, and SOC2? Yes.</h3>
                  <p className="text-lg">
                    Our platform is built with global compliance frameworks in mind—from GDPR and CCPA to SOC2-readiness
                    and DPA standards.
                  </p>
                  <p className="text-lg mt-4">If your legal team has questions, we've got answers.</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/security-vault.png" alt="Privacy-First Design" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Human + AI Monitoring */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center font-bold shadow-md">
                  <Bell className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black">Human + AI Monitoring</h2>
              </div>
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700">
                  Our AI flags anomalies. But so does your security dashboard.
                  <br />
                  Because sometimes, it takes both.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  You get visibility, alerts, and full control—without lifting a finger.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-lg font-bold mb-3">Anomaly Detection</h3>
                  <p className="text-gray-700">
                    AI-powered monitoring identifies unusual patterns and potential security threats in real-time.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-lg font-bold mb-3">Intelligent Alerts</h3>
                  <p className="text-gray-700">
                    Receive notifications about potential security issues before they become problems.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-lg font-bold mb-3">Human Oversight</h3>
                  <p className="text-gray-700">
                    Our security team works alongside AI to ensure comprehensive protection of your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
<section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-6">
                You've locked down your product.
                <br />
                Now lock down your people training.
              </h2>
              <p className="text-xl mb-8">
                Precision without protection is just risk.
                <br />
                <span className="font-bold">PeopleManager.ai is both.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="font-medium bg-[#9333EA] hover:bg-[#7E22CE] group transition-all duration-300 transform hover:scale-105"
                >
                  Book a Security Demo{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium group transition-all duration-300">
                  Download Security Whitepaper{" "}
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

