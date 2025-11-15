import { Target, ArrowRight, CheckCircle2, Zap, Clock, TrendingUp, Code2, Rocket, Users, DollarSign, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NinjaAnimation } from '../components/NinjaAnimation';
import { SEO } from '../components/SEO';
import { LogoScroller } from '../components/LogoScroller';
import { companyLogos } from '../constants/logos';

export function MVPBuildersPage() {
  const heroSection = useScrollAnimation();
  const challengeSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const caseStudySection = useScrollAnimation();
  const resultsSection = useScrollAnimation();
  const pricingSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="MVP Builders - Launch in 2-4 Weeks"
        description="Get your product to market before your runway ends. We build functional MVPs in 2-4 weeks. Fixed price, guaranteed delivery."
        keywords="mvp development, minimum viable product, rapid prototyping, startup mvp, fast mvp"
        url="https://goai.dev/mvp-builders"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <NinjaAnimation />
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" ref={heroSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)] animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className={`max-w-4xl ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <Target className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">MVP BUILDERS</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Launch Your <span className="gradient-text from-cyan-400 to-blue-500">MVP in 2-4 Weeks</span>
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              Time is your most valuable resource as a founder. We build production-ready MVPs that get you to market before your runway ends. No fluff, no delays—just shipping.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Start Building Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border-2 border-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all hover:scale-105">
                See Our MVPs
              </button>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 mt-16 ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {[
              { label: 'Average Launch Time', value: '3', suffix: ' weeks' },
              { label: 'Features Shipped', value: '15', suffix: '-25' },
              { label: 'Client Success Rate', value: '100', suffix: '%' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <div className="text-4xl font-bold gradient-text from-cyan-400 to-blue-400 mb-2">
                  <AnimatedCounter end={parseInt(stat.value)} duration={1500} suffix={stat.suffix} isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-900/80 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-400 text-sm font-semibold mb-8 tracking-wider">
            TRUSTED BY COMPANIES MOVING AT VELOCITY
          </p>
          <LogoScroller logos={companyLogos} speed="normal" />
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={challengeSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${challengeSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              The <span className="gradient-text from-cyan-400 to-blue-400">Founder's Dilemma</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              You have a vision, a limited runway, and fierce competition. Traditional development is too slow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Running Out of Runway',
                desc: 'Every week in development is a week of burn. Traditional agencies quote 3-6 months. You don\'t have that time.',
                icon: Clock,
                color: 'red'
              },
              {
                title: 'Market Validation Needed',
                desc: 'You need real users testing your product, not endless planning docs. Get to market, get feedback, iterate.',
                icon: Users,
                color: 'orange'
              },
              {
                title: 'Technical Co-Founder Hunt',
                desc: 'Finding the right technical co-founder takes months. Meanwhile, your competitors are shipping.',
                icon: Target,
                color: 'yellow'
              },
              {
                title: 'Feature Creep Paralysis',
                desc: 'Everyone has opinions on what features to build. You need someone to cut through the noise and ship the core.',
                icon: Zap,
                color: 'cyan'
              }
            ].map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 transition-all ${challengeSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className={`w-12 h-12 text-${challenge.color}-400 mb-4`} />
                  <h3 className="text-2xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{challenge.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={solutionSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${solutionSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              Our <span className="gradient-text from-cyan-400 to-blue-400">MVP Formula</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We've built dozens of MVPs. Here's the exact process that gets founders from idea to launch in weeks, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ruthless Prioritization',
                desc: 'We identify the 3-5 core features that validate your business model. Everything else is noise. No feature creep, no scope bloat.',
                icon: Target,
                benefits: ['Core value prop only', 'User journey mapping', 'MVP scope lock']
              },
              {
                title: 'Rapid Prototyping',
                desc: 'Working prototype in 48 hours. See your product come to life before the first week ends. Iterate fast based on real usage.',
                icon: Zap,
                benefits: ['Clickable prototype day 2', 'Weekly demos', 'Real-time feedback loops']
              },
              {
                title: 'Launch-Ready Code',
                desc: 'Not a throwaway prototype. Production-grade architecture that scales. Your MVP is the foundation, not technical debt.',
                icon: Rocket,
                benefits: ['Scalable architecture', 'Security best practices', 'CI/CD from day one']
              }
            ].map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-700/50 hover:border-cyan-400/50 transition-all hover:-translate-y-2 ${solutionSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{solution.desc}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-cyan-400">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={processSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${processSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              Week-by-Week <span className="gradient-text from-cyan-400 to-blue-400">Timeline</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Here's exactly what happens from kickoff to launch
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                week: 'Week 1',
                title: 'Sprint Zero & Foundation',
                tasks: [
                  'Day 1: Kickoff call, requirements refinement, tech stack finalization',
                  'Day 2: Architecture design, database schema, clickable prototype',
                  'Day 3-5: Core authentication, API setup, first feature implementation',
                  'Day 7: Demo 1 - Working prototype with auth and one core feature'
                ]
              },
              {
                week: 'Week 2',
                title: 'Feature Development Sprint',
                tasks: [
                  'Day 8-10: Core features 2-4 implementation',
                  'Day 11-12: Third-party integrations (payments, email, etc)',
                  'Day 13-14: UI polish, responsive design, edge case handling',
                  'Day 14: Demo 2 - All core features functional'
                ]
              },
              {
                week: 'Week 3',
                title: 'Polish & Pre-Launch',
                tasks: [
                  'Day 15-17: Bug fixes, performance optimization, security hardening',
                  'Day 18-19: User testing, feedback implementation, final tweaks',
                  'Day 20-21: Production deployment, monitoring setup, documentation',
                  'Day 21: Demo 3 - Production-ready MVP'
                ]
              },
              {
                week: 'Week 4',
                title: 'Launch & Handoff (Optional)',
                tasks: [
                  'Day 22-23: Launch support, real user monitoring',
                  'Day 24-25: Post-launch optimization based on metrics',
                  'Day 26-28: Knowledge transfer, documentation, ongoing support setup'
                ]
              }
            ].map((phase, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all ${processSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold">{phase.week}</h3>
                      <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent flex-grow"></div>
                    </div>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={caseStudySection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${caseStudySection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              Real MVPs, <span className="gradient-text from-cyan-400 to-blue-400">Real Results</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Founders who launched fast and validated their ideas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: 'FinanceAI',
                founder: 'Sarah Chen',
                industry: 'FinTech SaaS',
                timeline: '3 weeks',
                result: '50k users in month 1',
                story: 'Sarah had a vision for an AI-powered financial dashboard but zero technical background. We built her MVP in 3 weeks with real-time market data, AI insights, and payment integration. She launched, got 50k signups in the first month, and raised her seed round.',
                metrics: [
                  { label: 'Time to Launch', value: '21 days' },
                  { label: 'Initial Users', value: '50,000+' },
                  { label: 'Funding Raised', value: '$2M' }
                ]
              },
              {
                company: 'ShopFlow',
                founder: 'Marcus Kim',
                industry: 'E-Commerce',
                timeline: '2 weeks',
                result: '$2M GMV in 90 days',
                story: 'Marcus needed to validate his niche e-commerce idea fast. We shipped a complete storefront with Stripe, inventory management, and admin dashboard in 2 weeks. He processed $2M in sales within 90 days and scaled to a full team.',
                metrics: [
                  { label: 'Time to Launch', value: '14 days' },
                  { label: '90-Day GMV', value: '$2M+' },
                  { label: 'Conversion Rate', value: '8.5%' }
                ]
              }
            ].map((study, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-2 ${caseStudySection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold gradient-text from-cyan-400 to-blue-400">{study.company}</h3>
                    <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400 font-semibold">
                      {study.timeline}
                    </span>
                  </div>
                  <div className="text-slate-400 mb-1">{study.founder} · {study.industry}</div>
                  <div className="text-2xl font-bold text-cyan-400">{study.result}</div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{study.story}</p>

                <div className="grid grid-cols-3 gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="font-bold text-cyan-400 mb-1">{metric.value}</div>
                      <div className="text-xs text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={resultsSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${resultsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              Why Founders <span className="gradient-text from-cyan-400 to-blue-400">Choose Us</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The goAI advantage for MVP development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: '3x Faster', desc: 'Launch in weeks, not months. Speed is your competitive advantage.' },
              { icon: DollarSign, title: 'Fixed Pricing', desc: 'No hourly surprises. Know exactly what you\'re paying upfront.' },
              { icon: Code2, title: 'Your Codebase', desc: 'You own everything. Full code handoff with documentation.' },
              { icon: BarChart3, title: 'Launch Support', desc: 'We don\'t disappear. 30 days of post-launch support included.' }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-2 ${resultsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={pricingSection.ref}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${pricingSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              Simple, <span className="gradient-text from-cyan-400 to-blue-400">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-slate-300">
              One price, everything included. No hourly billing surprises.
            </p>
          </div>

          <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border-2 border-cyan-400/50 relative overflow-hidden ${pricingSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute top-4 right-4 px-4 py-2 bg-cyan-400 text-slate-900 rounded-full font-bold text-sm">
              MOST POPULAR
            </div>

            <h3 className="text-3xl font-bold mb-2">MVP Launch Package</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-6xl font-bold gradient-text from-cyan-400 to-blue-400">$24k</span>
              <span className="text-slate-400">fixed price</span>
            </div>

            <p className="text-slate-300 mb-8 text-lg">
              Complete MVP development from idea to production launch in 3-4 weeks.
            </p>

            <div className="space-y-3 mb-8">
              {[
                '3-5 core features fully implemented',
                'User authentication & authorization',
                'Database design & API development',
                'Responsive web app (mobile-ready)',
                'Payment integration (Stripe/PayPal)',
                'Admin dashboard & analytics',
                'Production deployment & hosting setup',
                'Security & performance optimization',
                '30 days post-launch support',
                'Full code ownership & documentation'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              Start Your MVP
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={ctaSection.ref}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              Stop <span className="gradient-text from-cyan-400 to-blue-400">Planning</span>. Start <span className="gradient-text from-cyan-400 to-blue-400">Building</span>.
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Your competitors are shipping. Your investors want to see traction. Your users are waiting. Let's launch your MVP in 3 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <Link to="/" className="border-2 border-cyan-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all hover:scale-105 inline-flex items-center justify-center">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
