'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Mail, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Header from "@/components/header"
import { useState } from "react"

export default function Contact() {
  const pathname = usePathname();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('https://hook.eu2.make.com/8exvmjey7eqh6slpasxg8bo1pib7i5zd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      // Success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header/Navigation */}
      <Header currentPath={`${pathname}`} includeSecurityLink={true} />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="py-20 w-full bg-gradient-to-r from-[#9333EA]/10 via-[#9333EA]/5 to-[#9333EA]/10 flex flex-col items-center justify-center">

          <div className="container">
            <div className="max-w-4xl mx-auto text-center item-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">👋 Get in Touch. If You're Ready.</h1>
              <p className="text-xl text-gray-700 mb-4">We don't work with everyone.</p>
              <p className="text-lg text-gray-600 mb-8">
                PeopleManager.ai is used by businesses that care about outcomes, not opinions. If you're scaling,
                managing teams, or want humans to perform like machines (but still be human)… you're in the right place.
              </p>
              <p className="text-xl font-bold text-[#9333EA] mb-4">That said, there's a waitlist.</p>
              <p className="text-lg text-gray-600 mb-8">We're growing fast — and onboarding is white-glove.</p>
              <p className="text-xl font-bold mb-4">Want in?</p>
              <p className="text-lg text-gray-600 mb-8">
                👇 Fill in the form. We'll review it personally and reach out if it's a fit.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-8 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-full min-h-[600px] min-w-[700px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/apply-access-neon.png" 
                  alt="Apply for Access" 
                  fill 
                  className="object-cover object-right" 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-bold">Exclusive access</p>
                    <p>For businesses ready to transform their teams</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Apply for Access</h3>
                  
                  {/* Form Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-md flex items-center text-green-700">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <p>Application submitted successfully! We'll be in touch soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-700">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <p>{errorMessage}</p>
                    </div>
                  )}
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        placeholder="John Smith"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] focus-visible:ring-offset-2"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] focus-visible:ring-offset-2"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company"
                        placeholder="Acme Inc."
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] focus-visible:ring-offset-2"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        What makes this a fit for you? (Optional — but it helps)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] focus-visible:ring-offset-2"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <Button
                      className="w-full bg-[#9333EA] hover:bg-[#7E22CE] transition-all duration-300 transform hover:scale-105"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'} 
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </div>

                <div className="space-y-6 mt-8">
                  <h3 className="text-xl font-bold">📬 Contact Details</h3>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#9333EA] mt-1" />
                    <div>
                      <p className="font-medium">Email:</p>
                      <a href="mailto:info@peoplemanager.ai" className="text-[#9333EA] hover:underline">
                        info@peoplemanager.ai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#9333EA] mt-1" />
                    <div>
                      <p className="font-medium">Registered Address:</p>
                      <p className="text-gray-600">
                        PeopleManager.ai
                        <br />
                        FDRK1704, Compass Building
                        <br />
                        Al Shohada Road, Al Hamra Industrial Zone-FZ
                        <br />
                        Ras Al Khaimah, United Arab Emirates
                      </p>
                    </div>
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

