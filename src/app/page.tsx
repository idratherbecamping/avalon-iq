import Link from 'next/link'
import CalSetup from '@/components/CalSetup'
import {
  BookButton,
  CHECKLIST_HREF,
  CostSection,
  GuideSection,
  PlanSection,
  SiteFooter,
  SiteNav,
  StakesBar,
} from '@/components/site'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CalSetup />
      <SiteNav />

      {/* Hero Section - Owner planning to sell */}
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
              I find the costs eating your margins, from freight and logistics to back-office
              paperwork, and cut them with AI before you go to market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookButton
                label="Book an exit-readiness review"
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

      <StakesBar>
        Buyers pay for earnings. Every dollar of waste you carry into a sale comes off your price.
      </StakesBar>

      <CostSection subtitle="The costs a buyer will spot in diligence." />

      <GuideSection empathy="You built this business. You want the sale price to reflect it." />

      <PlanSection resultLine="Savings in your financials before a buyer looks." />

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
            <BookButton
              label="Book an exit-readiness review"
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

      <SiteFooter />
    </div>
  )
}
