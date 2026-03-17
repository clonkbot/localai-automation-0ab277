import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CircuitPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M0 50h40M60 50h40M50 0v40M50 60v40" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
        <circle cx="0" cy="50" r="2" fill="currentColor" />
        <circle cx="100" cy="50" r="2" fill="currentColor" />
        <circle cx="50" cy="0" r="2" fill="currentColor" />
        <circle cx="50" cy="100" r="2" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
)

const PulsingDot = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-amber-400"
    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 2, delay, repeat: Infinity }}
  />
)

const transformations = [
  { before: "Hours of manual booking", after: "24/7 AI receptionist", icon: "calendar" },
  { before: "Missed customer calls", after: "Instant AI responses", icon: "phone" },
  { before: "Manual inventory tracking", after: "Predictive AI ordering", icon: "package" },
  { before: "Generic marketing", after: "AI-personalized outreach", icon: "target" },
]

const features = [
  { title: "Smart Scheduling", desc: "AI manages appointments, handles cancellations, and optimizes your calendar automatically.", stat: "3hrs saved/day" },
  { title: "Customer Insights", desc: "Understand buying patterns and predict what customers want before they ask.", stat: "40% more sales" },
  { title: "Automated Outreach", desc: "Personalized emails and SMS that feel human, sent at the perfect moment.", stat: "5x engagement" },
  { title: "Voice Assistant", desc: "Never miss a call. AI answers, books, and handles common questions 24/7.", stat: "100% coverage" },
]

const testimonials = [
  { name: "Maria's Bakery", quote: "We went from chaos to calm. The AI handles everything now.", location: "Austin, TX" },
  { name: "Joe's Auto Shop", quote: "Customer calls used to interrupt work constantly. Not anymore.", location: "Denver, CO" },
  { name: "Bloom Florist", quote: "Sales up 60% since the AI started doing personalized follow-ups.", location: "Seattle, WA" },
]

function App() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-body overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 md:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-400 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg md:text-xl">LocalAI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zinc-400 hover:text-amber-400 transition-colors">Features</a>
            <a href="#transform" className="text-zinc-400 hover:text-amber-400 transition-colors">Transform</a>
            <a href="#testimonials" className="text-zinc-400 hover:text-amber-400 transition-colors">Stories</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-400 text-zinc-950 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-300 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-b border-zinc-800"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                <a href="#features" className="text-zinc-300 py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
                <a href="#transform" className="text-zinc-300 py-2" onClick={() => setMobileMenuOpen(false)}>Transform</a>
                <a href="#testimonials" className="text-zinc-300 py-2" onClick={() => setMobileMenuOpen(false)}>Stories</a>
                <button className="bg-amber-400 text-zinc-950 font-semibold px-6 py-3 rounded-full w-full">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <CircuitPattern />

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-1/3 md:w-1/2 h-full bg-gradient-to-bl from-amber-400/10 to-transparent transform skew-x-[-12deg] origin-top-right" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <PulsingDot />
                <span className="text-amber-400 font-medium text-sm md:text-base">AI-Powered Transformation</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 md:mb-6">
                Transform Your
                <span className="block text-amber-400">Local Business</span>
                <span className="block text-zinc-500">In Days, Not Years</span>
              </h1>

              <p className="text-base md:text-xl text-zinc-400 mb-6 md:mb-8 max-w-lg">
                Harness the power of AI automation tailored for local businesses.
                No tech expertise needed. Just results.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-400 text-zinc-950 font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-amber-300 transition-colors"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-zinc-700 text-zinc-300 font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:border-amber-400 hover:text-amber-400 transition-colors"
                >
                  Watch Demo
                </motion.button>
              </div>

              <div className="flex items-center gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-zinc-800">
                <div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-amber-400">500+</div>
                  <div className="text-xs md:text-sm text-zinc-500">Businesses Transformed</div>
                </div>
                <div className="w-px h-10 md:h-12 bg-zinc-800" />
                <div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-amber-400">10hrs</div>
                  <div className="text-xs md:text-sm text-zinc-500">Saved Weekly Avg</div>
                </div>
                <div className="w-px h-10 md:h-12 bg-zinc-800" />
                <div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-amber-400">48hr</div>
                  <div className="text-xs md:text-sm text-zinc-500">Setup Time</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Orbiting Elements */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-2xl">📱</span>
                  </div>
                </motion.div>

                {/* Center Element */}
                <div className="absolute inset-1/4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-400/20">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl"
                  >
                    🤖
                  </motion.div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(251,191,36,0.2)" strokeWidth="1" strokeDasharray="10 5" />
                  <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="1" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="transform" className="relative py-16 md:py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Before <span className="text-zinc-600">→</span> <span className="text-amber-400">After</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400">See how AI transforms everyday business challenges</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {transformations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-zinc-950 border border-zinc-800 rounded-2xl md:rounded-3xl p-5 md:p-6 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-colors" />

                <div className="relative">
                  <div className="text-zinc-600 text-xs md:text-sm font-medium mb-2 md:mb-3 line-through">{item.before}</div>
                  <div className="w-6 md:w-8 h-px bg-gradient-to-r from-amber-400 to-transparent mb-2 md:mb-3" />
                  <div className="text-amber-400 font-display font-bold text-base md:text-lg">{item.after}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-16 md:py-32">
        <CircuitPattern />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                  Powerful AI,
                  <span className="block text-amber-400">Simple for You</span>
                </h2>
                <p className="text-lg md:text-xl text-zinc-400 mb-6 md:mb-8">
                  Enterprise-grade automation designed for local businesses.
                  No coding required. Results in days.
                </p>
              </motion.div>

              <div className="space-y-3 md:space-y-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveFeature(i)}
                    className={`p-4 md:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-all ${
                      activeFeature === i
                        ? 'bg-amber-400/10 border-2 border-amber-400'
                        : 'bg-zinc-900/50 border-2 border-transparent hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <h3 className="font-display font-bold text-base md:text-lg">{feature.title}</h3>
                      <span className={`text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full ${
                        activeFeature === i ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {feature.stat}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-zinc-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Feature Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-amber-400/20 rounded-full blur-3xl" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-400 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-display font-bold text-lg md:text-xl">{features[activeFeature].title}</div>
                        <div className="text-xs md:text-sm text-amber-400">Active & Learning</div>
                      </div>
                    </div>

                    {/* Simulated Dashboard */}
                    <div className="space-y-3 md:space-y-4">
                      <div className="h-6 md:h-8 bg-zinc-800 rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2 md:gap-4">
                        {[85, 92, 78].map((val, i) => (
                          <div key={i} className="bg-zinc-800 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                            <div className="text-xl md:text-2xl font-display font-bold text-amber-400">{val}%</div>
                            <div className="text-[10px] md:text-xs text-zinc-500">Metric {i + 1}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500">
                        <PulsingDot />
                        <span>AI processing 24 tasks in background...</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-16 md:py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Local Success <span className="text-amber-400">Stories</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400">Real businesses, real results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-amber-400/50 transition-colors"
              >
                <div className="absolute -top-4 -right-4 text-6xl md:text-8xl text-amber-400/10 font-display font-bold">"</div>
                <p className="text-base md:text-lg text-zinc-300 mb-4 md:mb-6 relative z-10">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-400/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-400 font-display font-bold text-sm md:text-base">{item.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm md:text-base">{item.name}</div>
                    <div className="text-xs md:text-sm text-zinc-500">{item.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-amber-600/10" />
        <CircuitPattern />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Ready to <span className="text-amber-400">Transform</span>?
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join 500+ local businesses already saving time and growing with AI automation.
              Start your free trial today — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-5 md:px-6 py-3 md:py-4 bg-zinc-900 border border-zinc-700 rounded-full text-base md:text-lg focus:outline-none focus:border-amber-400 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-amber-400 text-zinc-950 font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-amber-300 transition-colors whitespace-nowrap"
              >
                Start Free Trial
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-zinc-500">
              <span className="flex items-center gap-1 md:gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card
              </span>
              <span className="flex items-center gap-1 md:gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Setup in 48 hours
              </span>
              <span className="flex items-center gap-1 md:gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs md:text-sm text-zinc-600">
            Requested by @web-user · Built by @clonkbot
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
