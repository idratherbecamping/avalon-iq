'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation - Clean & Minimal */}
      <nav className="fixed w-full bg-white z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/white_logo.png"
                  alt="Avalon IQ Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
                <span className="text-xl font-semibold text-gray-900">Avalon IQ</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#process" className="text-gray-700 hover:text-blue-600 font-medium">Our Process</Link>
              <Link href="#solutions" className="text-gray-700 hover:text-blue-600 font-medium">Solutions</Link>
              <button 
                data-cal-namespace="15min"
                data-cal-link="avalon-iq/15min"
                data-cal-config='{"layout":"month_view"}'
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean, Bold, Construction-Focused */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Custom AI Solutions for
              <span className="block text-blue-600">Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We come to you. We learn your processes. We build AI that saves you 20+ hours* every week.
              No generic software, no one-size-fits-all. Just custom automation designed specifically 
              for how your business works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                data-cal-namespace="15min"
                data-cal-link="avalon-iq/15min"
                data-cal-config='{"layout":"month_view"}'
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
              >
                Schedule Consultation
              </button>
              <Link href="#process" className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Bar */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">On Average We Save Our Customers 20+ Hours a Week</div>
          </div>
        </div>
      </section>

      {/* Our Process - Bespoke Consulting */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't sell software. We embed ourselves in your business, 
              understand your unique challenges, and build custom AI solutions that actually work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Site Discovery</h3>
              <p className="text-gray-600">
                We visit your workplace and shadow your team. We learn your 
                workflows and identify where AI can save the most time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600">
                We build AI solutions tailored to your exact processes. No generic 
                templates - everything is designed for how you work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                We deploy and train your team. We stick around to ensure everything 
                works perfectly with your existing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions - What We Automate */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Personalized AI Discovery & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop losing money to inefficiency. We identify where you're wasting time and build 
              custom AI solutions that save you 20+ hours* every week on tasks that don't make you money.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Intelligent Workflow Automation</h3>
              <p className="text-gray-600">
                Streamline your entire operation from start to finish. AI that learns 
                your processes and automates repetitive tasks across all departments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Compliance & Documentation</h3>
              <p className="text-gray-600">
                Automated documentation, incident reporting, and compliance tracking. 
                AI ensures nothing falls through the cracks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Time Tracking & Payroll</h3>
              <p className="text-gray-600">
                AI-powered time tracking that automatically logs hours from multiple data sources 
                and integrates with your payroll system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Invoice & Document Processing</h3>
              <p className="text-gray-600">
                Extract data from invoices, receipts, and contracts automatically. 
                AI that matches your exact accounting procedures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">AI Vision Solutions</h3>
              <p className="text-gray-600">
                Computer vision that monitors operations, identifies issues, 
                and tracks assets from your existing camera systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Custom AI Assistants</h3>
              <p className="text-gray-600">
                Voice and chat assistants that answer questions using your company's 
                knowledge base, handle requests, and guide your teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 p-12 rounded-2xl">
            <p className="text-2xl text-gray-700 italic mb-8">
              "Avalon IQ cut our estimating time by 85%. What used to take me 
              all Friday afternoon now takes 30 minutes. It's like having a 
              full-time assistant who knows construction inside out."
            </p>
            <div className="flex items-center justify-center">
              <div>
                <div className="font-semibold text-gray-900">Construction Company Owner</div>
                <div className="text-gray-600">Toronto, ON</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Save 20+ Hours Every Week?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start using AI to work smarter, not harder.
          </p>
          <div className="flex justify-center">
            <button 
              data-cal-namespace="15min"
              data-cal-link="avalon-iq/15min"
              data-cal-config='{"layout":"month_view"}'
              className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-xl font-semibold text-white">Avalon IQ</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Custom AI solutions for businesses that want to work smarter. 
              We come to you, learn your processes, and build automation that saves you 20+ hours* every week.
            </p>
            <p className="text-gray-400 mt-4">
              <a href="mailto:gannon@avalon-iq.com" className="hover:text-white">gannon@avalon-iq.com</a>
            </p>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>© {new Date().getFullYear()} Avalon IQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}