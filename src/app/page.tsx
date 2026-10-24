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
              <Link href="#costs" className="text-gray-700 hover:text-blue-600 font-medium">Where Costs Hide</Link>
              <Link href="#plan" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</Link>
              <BookReviewButton
                label="Book a Review"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Owner planning to sell */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              For owners planning to sell in the next 1 to 3 years
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Sell your business for
              <span className="block text-blue-600">what it is worth.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I cut your operating costs with AI automation before you go to market,
              so your margins, EBITDA, and sale price go up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookReviewButton
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
              />
              <Link href="#plan" className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                See How It Works
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
              Buyers pay for earnings. Every dollar lost to manual work, extra hours, and paperwork
              comes off your margin, and off your sale price with it.
            </div>
          </div>
        </div>
      </section>

      {/* Value - What the owner gets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Lower operating costs</h3>
              <p className="text-gray-600">
                AI takes over timekeeping, payroll, invoices, and compliance paperwork.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Higher EBITDA</h3>
              <p className="text-gray-600">
                Recurring savings go straight to the number buyers price.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">A business that runs without you</h3>
              <p className="text-gray-600">
                Documented, automated processes that transfer with the sale.
              </p>
            </div>
          </div>

          {/* How opex savings raise the sale price */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              How lower costs raise your sale price
            </h2>
            <p className="text-lg text-gray-600">
              Every dollar of recurring operating cost removed adds a dollar to EBITDA. Buyers often
              price a business as a multiple of EBITDA, so each recurring dollar saved can add that
              multiple to the sale price. The multiple depends on your industry, size, and buyer.
              In a review, I will show you where your savings are and what they can mean for your numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Where Opex Hides */}
      <section id="costs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Where operating costs hide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hidden operating costs are the manual, owner-dependent work that eats margin and
              drags down the price a buyer will pay. These are the places I find them, and the
              automation I build to remove them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Timekeeping & Payroll</h3>
              <p className="text-gray-600">
                Hours logged automatically from the data sources you already have and fed straight
                into payroll. No more office time spent chasing and correcting timesheets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Invoices & Documents</h3>
              <p className="text-gray-600">
                Data pulled from invoices, receipts, and contracts and matched to your exact
                accounting procedures, instead of keyed in by hand.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Compliance & Documentation</h3>
              <p className="text-gray-600">
                Documentation, incident reporting, and compliance tracking that run on a system,
                not on you. A buyer sees a business that runs without its owner.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Repetitive Workflows</h3>
              <p className="text-gray-600">
                The handoffs, data entry, and follow-ups that eat hours across every department,
                automated around how your team actually works.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Monitoring & Asset Tracking</h3>
              <p className="text-gray-600">
                Computer vision on your existing cameras that watches operations, flags issues,
                and tracks assets, so no one has to do it by hand.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Questions Only You Can Answer</h3>
              <p className="text-gray-600">
                Voice and chat assistants built on your company knowledge, so your team stops
                routing every question through you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide - Empathy, Direct Access, Authority */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                I will find them first.
              </h2>
              <p className="text-xl text-gray-600">
                You spent years building this. You should not lose part of the price to costs
                a buyer will spot in a week. I will find them first, and I will be the one who fixes them.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                You work with me.
              </h2>
              <p className="text-xl text-gray-600">
                Not a team of account managers. I do the site visit, I build the automation, and I
                answer the phone. The person who finds the savings is the person who builds them.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">5x</div>
              <p className="text-gray-600">average return across my builds</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$1M / yr</div>
              <p className="text-gray-600">in projected operating savings for a nationwide managed services provider</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three steps between you and numbers that support a stronger price.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find the opex</h3>
              <p className="text-gray-600">
                I come on-site and shadow your team, and find the costs AI can remove
                before a buyer looks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cut it with AI</h3>
              <p className="text-gray-600">
                I build automation around your exact processes and the systems you already use.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Show it in the numbers</h3>
              <p className="text-gray-600">
                Savings that run long enough to appear in your financials, documented so
                they go with the sale.
              </p>
            </div>
          </div>
          <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">My commitment to you</h3>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>You deal with me, start to finish.</li>
              <li>I build on the systems you already use.</li>
              <li>I document every automation and hand it over so it goes with the sale.</li>
              <li>I will tell you straight which savings can land before your sale date and which cannot.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            You have spent years building your business, and when it is time to sell, buyers will
            price it on its earnings. Every manual process and extra hour of paperwork is a cost that
            comes off your margin and off your sale price. I believe you should be paid for what you
            built, not discounted for work a machine could do. That is why I come on-site, find the
            operating costs AI can remove, and build the automation that lowers them before you go to
            market. You work with me from the first visit to the handover. Book an exit-readiness
            review, and walk into your sale with numbers that support a stronger price.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Do not leave money on the table.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Thin margins sell for less, and savings found after the sale belong to the new owner.
            Find them now, and go to market with numbers that support a stronger price.
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
            <p className="text-gray-400 max-w-2xl mx-auto">
              Owners planning to sell often leave money on the table because costly, manual operations
              shrink their margins. I cut your operating expenses with AI automation before you go to
              market, so your EBITDA rises and buyers pay more.
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
