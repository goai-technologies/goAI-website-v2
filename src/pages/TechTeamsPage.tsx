import { Users, ArrowRight, CheckCircle2, Zap, Code2, GitBranch, Clock, TrendingUp, Rocket, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NinjaAnimation } from '../components/NinjaAnimation';
import { SEO } from '../components/SEO';

export function TechTeamsPage() {
  const heroSection = useScrollAnimation();
  const challengeSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const resultsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Tech-First Teams - Instant Team Augmentation"
        description="Need extra horsepower? We integrate with your team like we're already on payroll. Zero ramp-up time. Your stack, your way, your velocity multiplied."
        keywords="team augmentation, staff augmentation, tech team scaling, developer augmentation, engineering help"
        url="https://goai.dev/tech-teams"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <NinjaAnimation />
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" ref={heroSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className={`max-w-4xl ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">TECH-FIRST TEAMS</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Instant Team <span className="gradient-text from-green-400 to-emerald-500">Augmentation</span>
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              Need extra horsepower? We integrate with your team like we're already on payroll. Zero ramp-up time. Your stack, your way, your velocity—multiplied.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Augment My Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <Link to="/contact" className="border-2 border-green-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400/10 transition-all hover:scale-105 inline-flex items-center justify-center">
                Discuss Requirements
              </Link>
            </div>
          </div>

          <div ref={heroSection.ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '0', suffix: ' Days', label: 'Onboarding Time' },
              { value: '100', suffix: '+', label: 'Tech Stacks Supported' },
              { value: '3', suffix: 'x', label: 'Team Velocity Increase' },
              { value: '24', suffix: '/7', label: 'Collaboration' }
            ].map((stat, idx) => (
              <div key={idx} className={`text-center ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-3xl font-bold gradient-text from-green-400 to-emerald-400 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={challengeSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${challengeSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text from-green-400 to-emerald-400">Team Scaling Challenges</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              When hiring and training just takes too long
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Clock, title: 'Hiring Takes Forever', desc: 'Months to hire, months to onboard. Your backlog grows while you search for talent.' },
              { icon: Code2, title: 'Specific Skill Gaps', desc: 'Need React expert for 2 months? Microservices guru for a quarter? Hard to hire.' },
              { icon: TrendingUp, title: 'Velocity Bottlenecks', desc: 'Your roadmap is ambitious but your team is maxed out. Speed is everything.' },
              { icon: GitBranch, title: 'Temporary Surges', desc: 'Product launch sprint, major feature push, technical debt cleanup—need help fast.' }
            ].map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 ${challengeSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{challenge.title}</h3>
                  <p className="text-slate-400">{challenge.desc}</p>
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
              <span className="gradient-text from-green-400 to-emerald-400">How We Integrate</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Seamless extension of your existing team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Instant Start', desc: 'Same day access to your repos, tools, and workflows. We adapt to you, not vice versa.' },
              { icon: Users, title: 'Your Stack', desc: 'React, Vue, Angular, Python, Go, Rust—whatever you use, we know it. No learning curve.' },
              { icon: Award, title: 'Team Players', desc: 'Daily standups, sprint planning, code reviews. We work like we\'re on your payroll.' }
            ].map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-400/50 transition-all hover:shadow-xl hover:shadow-green-500/20 ${solutionSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-slate-400">{solution.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Day One Ready</span>
                  </div>
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
              <span className="gradient-text from-green-400 to-emerald-400">Integration Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Skills Assessment', desc: 'Tell us what you need. We match the right engineers to your requirements.' },
              { num: '2', title: 'Instant Access', desc: 'Same day onboarding. Repo access, tool setup, team introductions—done.' },
              { num: '3', title: 'Sprint Together', desc: 'We join your sprints, attend your standups, ship with your team.' },
              { num: '4', title: 'Scale Flexibly', desc: 'Ramp up for launches. Scale down after. Pay only for what you need.' }
            ].map((step, idx) => (
              <div key={idx} className={`text-center ${processSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={resultsSection.ref}>
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 ${resultsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-8 text-center">Team Augmentation Impact</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: 200, suffix: '+', label: 'Teams Augmented', color: 'green' },
                { value: 85, suffix: '%', label: 'Faster Delivery', color: 'emerald' },
                { value: 95, suffix: '%', label: 'Retention Rate', color: 'green' }
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className={`text-5xl font-bold gradient-text from-${metric.color}-400 to-emerald-500 mb-2`}>
                    <AnimatedCounter end={metric.value} duration={2000} suffix={metric.suffix} isVisible={resultsSection.isVisible} />
                  </div>
                  <div className="text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={ctaSection.ref}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden ${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-10 animate-gradient"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl font-bold">
                <span className="gradient-text from-green-400 to-emerald-400">Scale Your Team Today</span>
              </h2>
              <p className="text-xl text-slate-300">
                Stop waiting to hire. Start shipping faster. Let's multiply your team's velocity.
              </p>
              <button className="group bg-gradient-to-r from-green-500 to-emerald-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105 inline-flex items-center gap-3">
                Augment My Team Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
