import Link from 'next/link'
import CalSetup from '@/components/CalSetup'
import {
  BookButton,
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

      {/* Hero Section - Opex for operations-heavy businesses */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              For operations-heavy businesses: trades, distribution, field service
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Cut your
              <span className="block text-blue-600">operating costs.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Freight, logistics, and back-office work, cut with AI. I find where your
              margin leaks and fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookButton
                label="Book a cost review"
                className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
              />
              <Link href="#costs" className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                See What I Cut
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StakesBar>
        Every dollar of operating cost you cut is a dollar of profit.
      </StakesBar>

      <CostSection subtitle="Where operating costs hide in an operations business." />

      <GuideSection />

      <PlanSection resultLine="Savings that show up in your monthly financials." />

      {/* Exit band */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Planning to sell in the next 1 to 3 years?
            </h2>
            <p className="text-gray-600">
              Buyers pay for earnings. Costs you cut before you go to market raise your sale price.
            </p>
          </div>
          <Link href="/exit" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold border-2 border-blue-600 hover:bg-blue-50 transition text-center">
            Get exit-ready
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Find the costs eating your margin.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a cost review and I will show you where to start.
          </p>
          <div className="flex justify-center">
            <BookButton
              label="Book a cost review"
              className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
