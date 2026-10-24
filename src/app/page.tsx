'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

const CHECKLIST_HREF = "mailto:gannon@avalon-iq.com?subject=Opex%20Before%20Exit%20checklist"

function BookReviewButton({ className, label = "Book an exit-readiness review" }: { className: string, label?: string }) {
  return (
    <button
      data-cal-namespace="15min"
      data-cal-link="avalon-iq/15min"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {label}
    </button>
  )
}

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
              <Link href="#costs" className="text-gray-700 hover:text-blue-600 font-medium">What I Cut</Link>
              <Link href="#plan" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</Link>
              <BookReviewButton
                label="Book a Review"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Opex first, sale price as the payoff */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              For owners planning to sell in the next 1 to 3 years
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Cut your operating costs.
              <span className="block text-blue-600">Raise your sale price.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I find the manual work eating your margins and replace it with AI automation,
              before you go to market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookReviewButton
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
              />
              <Link href="#costs" className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                See What I Cut
              </Link>
            </div>
            <p className="text-gray-600 mt-6">
              Selling in 2 or 3 years?{' '}
              <a href={CHECKLIST_HREF} className="text-blue-600 font-semibold hover:underline">
                Get the Opex Before Exit checklist
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Stakes Bar */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">
              Buyers pay for earnings. Every recurring dollar you cut adds to the number they price.
            </div>
          </div>
        </div>
      </section>

      {/* What I Cut */}
      <section id="costs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What I cut
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The manual, owner-dependent work a buyer will spot in diligence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Timekeeping & Payroll</h3>
              <p className="text-gray-600">
                Hours logged and fed into payroll automatically. No one chasing timesheets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Invoices & Documents</h3>
              <p className="text-gray-600">
                Invoices, receipts, and contracts read and entered for you.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Compliance & Reporting</h3>
              <p className="text-gray-600">
                Paperwork that runs on a system, not on you.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Data Entry & Follow-ups</h3>
              <p className="text-gray-600">
                The handoffs and re-keying that eat office hours every week.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Monitoring & Asset Tracking</h3>
              <p className="text-gray-600">
                Cameras you already own watch operations and track equipment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Questions Only You Can Answer</h3>
              <p className="text-gray-600">
                An assistant trained on how you run things, so your team stops calling you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide - Direct Access & Authority */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              You work with me.
            </h2>
            <p className="text-xl text-gray-600">
              I do the site visit, I build the automation, and I answer the phone.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$1M / yr</div>
              <p className="text-gray-600">in projected operating savings for a nationwide managed services provider</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">5x</div>
              <p className="text-gray-600">average return across my builds</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">2x</div>
              <p className="text-gray-600">activation on a beta built in six weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 p-12 rounded-2xl">
            <p className="text-2xl text-gray-700 italic mb-8">
              "We needed a custom timekeeping solution and they delivered exactly what we needed,
              flawlessly. The customer service stood out—clear communication throughout and continued
              support during implementation."
            </p>
            <div className="flex items-center justify-center">
              <div>
                <div className="font-semibold text-gray-900">Joey, Operations Manager</div>
                <div className="text-gray-600">Stone Roofing Co.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan - Three steps */}
      <section id="plan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How it works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find the opex</h3>
              <p className="text-gray-600">
                I come on-site and shadow your team.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cut it with AI</h3>
              <p className="text-gray-600">
                I build automation on the systems you already use.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Show it in the numbers</h3>
              <p className="text-gray-600">
                Savings in your financials before a buyer looks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cut the costs before the buyer finds them.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Savings found after the sale belong to the new owner.
          </p>
          <div className="flex justify-center">
            <BookReviewButton
              className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition"
            />
          </div>
          <p className="text-blue-100 mt-6">
            Selling in 2 or 3 years?{' '}
            <a href={CHECKLIST_HREF} className="text-white font-semibold underline hover:no-underline">
              Get the Opex Before Exit checklist
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-xl font-semibold text-white">Avalon IQ</span>
            </div>
            <p className="text-blue-400 font-semibold mb-4">Lower costs. Higher value.</p>
            <p className="text-gray-400">
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
