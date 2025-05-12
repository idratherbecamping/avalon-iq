import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
        <Image
                  src="/white_logo.png"
                  alt="Avalon IQ Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
          priority
        />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Avalon IQ
                </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <Link href="#services" className="text-secondary-600 hover:text-primary-600 px-3 py-2 transition-all duration-300">Services</Link>
                <Link href="#about" className="text-secondary-600 hover:text-primary-600 px-3 py-2 transition-all duration-300">About</Link>
                <Link href="#contact" className="text-secondary-600 hover:text-primary-600 px-3 py-2 transition-all duration-300">Contact</Link>
                <Link href="#contact" className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary-100 transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent animate-gradient-x"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-secondary-900 mb-8 leading-tight">
              We Are Your{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent font-extrabold">
              AI Innovation Engine
              </span>
            </h1>
            <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Avalon IQ helps you navigate the AI landscape and implement solutions that drive <span className="font-semibold text-primary-600">real business value</span>.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="#contact" className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-primary-100 transition-all duration-300">
                Start Your AI Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">1:1</span> Bespoke AI Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              At Avalon IQ, we deliver <span className="font-bold text-primary-600">1:1 customized AI solutions</span> to help businesses discover and harness AI's potential. 
              We work closely with you to understand your unique goals, challenges, and operations, cutting through the noise 
              of the crowded AI market to identify where AI can truly fuel your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Expertise Areas */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100">
              <h3 className="text-2xl font-semibold mb-6 text-secondary-900">
                <span className="text-primary-600">Personalized</span> AI Discovery & Impact
              </h3>
              <p className="text-secondary-600 mb-8">
                With expertise in Large Language Models (LLM), Generative AI, Computer Vision (CV), and Automation, 
                we craft tailored strategies that align with your specific needs.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Custom AI Assistants</h4>
                    <p className="text-secondary-600">Develop tailored AI agents, including voice assistants and chatbots, to meet specific business needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">AI-Powered Data Interaction</h4>
                    <p className="text-secondary-600">Enable precise question-and-answer capabilities using your company's unique knowledge base and documents.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">AI Vision Solutions</h4>
                    <p className="text-secondary-600">Automate visual tasks such as inspection, monitoring, and data extraction from images and videos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Seamless AI Tool Integration</h4>
                    <p className="text-secondary-600">Create user-friendly, custom AI tools that integrate effortlessly into existing workflows.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">Intelligent Workflow Automation</h4>
                    <p className="text-secondary-600">Optimize and streamline business processes with AI-driven automation.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Work With Us */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100">
              <h3 className="text-2xl font-semibold mb-6 text-secondary-900">
                Why Work with <span className="text-primary-600">Us</span>?
              </h3>
              <p className="text-secondary-600 mb-8">
                The AI landscape is overwhelming, with countless tools and options. If you're unsure how AI can drive value 
                for your business or struggling to prioritize the right solutions, we provide:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600">•</span>
                  </div>
                  <p className="text-secondary-600">A deep dive into your operations to pinpoint high-impact AI opportunities</p>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600">•</span>
                  </div>
                  <p className="text-secondary-600">Custom-built systems that integrate seamlessly with your workflow</p>
          </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600">•</span>
                  </div>
                  <p className="text-secondary-600">Clear, actionable guidance to navigate the AI market and avoid costly missteps</p>
          </li>
              </ul>
              <div className="mt-8">
                <Link href="#contact" className="inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-primary-100 transition-all duration-300">
                  Start Your AI Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Navigate AI with <span className="text-primary-600">Confidence</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We help executives identify where AI will create the most immediate impact for their business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 hover:border-primary-100 group">
              <div className="h-12 w-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <span className="text-2xl text-primary-600">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Practical Implementation</h3>
              <ul className="space-y-4 text-secondary-600">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-3">•</span>
                  Maximize team effectiveness with AI tools
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-3">•</span>
                  Unlock AI capabilities in existing software
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-3">•</span>
                  Create custom AI solutions
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 hover:border-primary-100 group">
              <div className="h-12 w-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <span className="text-2xl text-primary-600">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Scale with Control</h3>
              <p className="text-secondary-600 mb-6 italic">
                We believe AI implementation should pay for itself. Our approach emphasizes:
              </p>
              <ul className="space-y-4 text-secondary-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <span>Quick validation through rapid deployment to production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <span>Cost-effective solutions using open-source models and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <span>Flexible integration with your existing cloud infrastructure (AWS, Azure, or GCP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <span>Incremental scaling based on validated results</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 hover:border-primary-100 group">
              <div className="h-12 w-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <span className="text-2xl text-primary-600">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900">Business Impact</h3>
              <ul className="space-y-4 text-secondary-600">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-3">•</span>
                  Drive real business value
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-3">•</span>
                  Sustainable competitive advantages
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-3">•</span>
                  Measurable ROI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-secondary-900 mb-8">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto">
              Let's discuss how we can help you leverage AI to drive growth and efficiency in your organization.
            </p>
            <Link href="mailto:contact@avalon-iq.com" className="inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-primary-100 transition-all duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-secondary-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-4">
              Avalon IQ
            </h2>
            <p className="text-secondary-600 mb-6">Your partner in AI transformation</p>
            <a 
              href="mailto:contact@avalon-iq.com" 
              className="text-primary-600 hover:text-primary-500 transition-colors duration-300 mb-6 inline-block"
            >
              contact@avalon-iq.com
            </a>
            <div className="text-sm text-secondary-500">
              © {new Date().getFullYear()} Avalon IQ. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
