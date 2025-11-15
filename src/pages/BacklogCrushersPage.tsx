import { Layers, ArrowRight, CheckCircle2, Zap, BarChart3, TrendingUp, Users, Clock, Code2, GitBranch, PlayCircle, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NinjaAnimation } from '../components/NinjaAnimation';
import { SEO } from '../components/SEO';
import { LogoScroller } from '../components/LogoScroller';
import { companyLogos } from '../constants/logos';

export function BacklogCrushersPage() {
  const heroSection = useScrollAnimation();
  const problemSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const caseStudySection = useScrollAnimation();
  const integrationSection = useScrollAnimation();
  const pricingSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Backlog Crushers - Clear Your Backlog in Weeks"
        description="Your backlog is growing faster than you can build. We augment your sprints and crush features at 3x velocity. Sprint augmentation starting at $18k/month."
        keywords="backlog clearing, sprint augmentation, team augmentation, engineering help, clear backlog"
        url="https://goai.dev/backlog-crushers"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <NinjaAnimation />
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" ref={heroSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className={`max-w-4xl ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
              <Layers className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">BACKLOG CRUSHERS</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Clear Your <span className="gradient-text from-blue-400 to-purple-500">Backlog in Weeks</span>
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              Your backlog is growing faster than your team can handle. We augment your sprints and crush through features at 3x velocity. No ramp-up time, no overhead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Clear Your Backlog
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 mt-16 ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {[
              { label: 'Average Sprint Velocity', value: '3', suffix: 'x faster' },
              { label: 'Backlog Items Cleared', value: '50', suffix: '+' },
              { label: 'Team Integration', value: '24', suffix: ' hours' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <div className="text-4xl font-bold gradient-text from-blue-400 to-purple-400 mb-2">
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

      <section className="py-20 px-6 bg-slate-900/50" ref={problemSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${problemSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              The <span className="gradient-text from-blue-400 to-purple-400">Backlog Crisis</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your team is maxed out. Features are piling up. Velocity is stalling. Sound familiar?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Growing Faster Than You Can Build',
                desc: 'User requests flood in. Each sprint, the backlog grows instead of shrinking. Your team is working hard but falling behind.',
                icon: TrendingUp
              },
              {
                title: 'Hiring Takes Too Long',
                desc: 'Finding, interviewing, and onboarding takes 3-6 months. By then, your market window might close.',
                icon: Users
              },
              {
                title: 'Critical Features Delayed',
                desc: 'High-impact features sit in the backlog for quarters. Competitors ship while you\'re stuck in planning.',
                icon: Clock
              },
              {
                title: 'Technical Debt Mounting',
                desc: 'Rushing through sprints creates shortcuts. The codebase becomes harder to maintain with each release.',
                icon: BarChart3
              }
            ].map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 transition-all ${problemSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{problem.desc}</p>
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
              Sprint <span className="gradient-text from-blue-400 to-purple-400">Augmentation</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We integrate with your team like we're already on payroll. Your workflow, your tools, zero ramp-up time.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'Week 1: Seamless Integration',
                items: [
                  'Day 1: Access to your repos, tools, and documentation',
                  'Day 2-3: Sync with your team, understand architecture and patterns',
                  'Day 4-5: Pick up first backlog items, submit initial PRs',
                  'Week 1 Output: 3-5 backlog items completed'
                ]
              },
              {
                title: 'Week 2-4: Full Velocity',
                items: [
                  'Parallel feature development with your team',
                  'Daily standups and sprint planning participation',
                  'Code reviews and quality assurance',
                  'Weekly Output: 8-12 backlog items per week'
                ]
              }
            ].map((phase, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-400/50 transition-all ${solutionSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-400">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={caseStudySection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${caseStudySection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              Real Teams, <span className="gradient-text from-blue-400 to-purple-400">Real Results</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              CTOs who crushed their backlog without hiring
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: 'ShopFlow',
                cto: 'Emily Zhang',
                industry: 'E-Commerce',
                result: '47 items cleared in 8 weeks',
                story: 'Emily had a 6-month backlog with an 8-person team. Hiring would take months. We integrated in 24 hours and started shipping. In 8 weeks: payment v2, admin redesign, mobile features all shipped. Team velocity tripled.',
                metrics: [
                  { label: 'Backlog Items', value: '47' },
                  { label: 'Velocity Boost', value: '3x' },
                  { label: 'Time Saved', value: '4mo' }
                ]
              },
              {
                company: 'DataPulse',
                cto: 'James Wilson',
                industry: 'Analytics SaaS',
                result: '3 major features launched',
                story: 'Pre-Series A crunch. Dashboard v2, API integrations, and pricing model all needed before fundraise. We took dashboard rebuild, his team focused on APIs. Parallel execution = both shipped on time. Round closed.',
                metrics: [
                  { label: 'Features Shipped', value: '3' },
                  { label: 'On-Time', value: '100%' },
                  { label: 'Raised', value: '$5M' }
                ]
              }
            ].map((study, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-blue-400/50 transition-all ${caseStudySection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-3xl font-bold gradient-text from-blue-400 to-purple-400 mb-2">{study.company}</h3>
                <div className="text-slate-400 mb-1">{study.cto} · {study.industry}</div>
                <div className="text-2xl font-bold text-blue-400 mb-6">{study.result}</div>
                <p className="text-slate-300 mb-6 leading-relaxed">{study.story}</p>
                <div className="grid grid-cols-3 gap-4 p-4 bg-slate-900/50 rounded-xl">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="font-bold text-blue-400">{m.value}</div>
                      <div className="text-xs text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={integrationSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${integrationSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text from-blue-400 to-purple-400">Tech Stack Agnostic</span>
            </h2>
            <p className="text-xl text-slate-300">Your stack, your way. We adapt.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { cat: 'Frontend', tech: ['React', 'Vue', 'Angular', 'Svelte'] },
              { cat: 'Backend', tech: ['Node.js', 'Python', 'Go', 'Ruby'] },
              { cat: 'Mobile', tech: ['React Native', 'Flutter', 'Swift'] },
              { cat: 'DevOps', tech: ['AWS', 'GCP', 'Azure', 'K8s'] }
            ].map((s, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 ${integrationSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-4 text-blue-400">{s.cat}</h3>
                <ul className="space-y-2">
                  {s.tech.map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={pricingSection.ref}>
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 ${pricingSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              Flexible <span className="gradient-text from-blue-400 to-purple-400">Pricing</span>
            </h2>
            <p className="text-xl text-slate-300">Monthly engagements, cancel anytime</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border-2 border-blue-400/50 ${pricingSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-2">Sprint Boost</h3>
              <div className="text-5xl font-bold gradient-text from-blue-400 to-purple-400 mb-1">$18k</div>
              <div className="text-slate-400 mb-6">/month</div>
              <div className="space-y-3">
                {['1 senior engineer', '10-15 items/month', 'Daily standups', 'Your tools & process', '1 month minimum'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span className="text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border-2 border-purple-400/50 relative ${pricingSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-4 right-4 px-4 py-2 bg-purple-400 text-slate-900 rounded-full font-bold text-sm">POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Team Aug</h3>
              <div className="text-5xl font-bold gradient-text from-purple-400 to-pink-400 mb-1">$45k</div>
              <div className="text-slate-400 mb-6">/month</div>
              <div className="space-y-3">
                {['3 senior engineers', '40-50 items/month', 'Sprint planning', 'Code review & mentoring', 'Quarterly commitment', 'Priority support'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={ctaSection.ref}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              Stop <span className="gradient-text from-blue-400 to-purple-400">Growing</span> Your Backlog
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Start crushing it this week. No hiring delays, no onboarding overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Start This Week
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <Link to="/" className="border-2 border-blue-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-400/10 transition-all hover:scale-105 inline-flex items-center justify-center">
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
