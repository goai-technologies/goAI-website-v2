import { Clock, ArrowRight, CheckCircle2, Shield, Zap, Award, Lock, TrendingUp, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NinjaAnimation } from '../components/NinjaAnimation';
import { SEO } from '../components/SEO';

export function EnterpriseFastTrackPage() {
  const heroSection = useScrollAnimation();
  const challengeSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const resultsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Enterprise Fast-Track - Critical Projects at Startup Speed"
        description="Need critical projects done yesterday? We handle urgent enterprise initiatives with enterprise-grade quality at startup speed. Security-first, compliance-ready."
        keywords="enterprise development, rapid enterprise projects, compliant development, secure development, critical projects"
        url="https://goai.dev/enterprise-fast-track"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <NinjaAnimation />
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" ref={heroSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className={`max-w-4xl ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-semibold">ENTERPRISE FAST-TRACK</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Enterprise Quality at <span className="gradient-text from-purple-400 to-pink-500">Startup Speed</span>
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              Critical projects that need to ship yesterday. We deliver enterprise-grade solutions without the enterprise timeline. Security, compliance, and velocity—all three.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Start Urgent Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <Link to="/contact" className="border-2 border-purple-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-400/10 transition-all hover:scale-105 inline-flex items-center justify-center">
                Schedule Consultation
              </Link>
            </div>
          </div>

          <div ref={heroSection.ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '1-2', suffix: ' Weeks', label: 'Fast-Track Delivery' },
              { value: 'SOC2', suffix: '', label: 'Compliance Ready' },
              { value: '99.9', suffix: '%', label: 'Uptime SLA' },
              { value: '24', suffix: '/7', label: 'Critical Support' }
            ].map((stat, idx) => (
              <div key={idx} className={`text-center ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-3xl font-bold gradient-text from-purple-400 to-pink-400 mb-2">
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
              <span className="gradient-text from-purple-400 to-pink-400">Enterprise Challenges</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Big company projects with impossible deadlines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Clock, title: 'Time-Critical Initiatives', desc: 'Board-level pressure to deliver critical projects on impossible timelines' },
              { icon: Shield, title: 'Security & Compliance', desc: 'Must meet SOC2, HIPAA, or other regulatory requirements without shortcuts' },
              { icon: Users, title: 'Cross-Team Dependencies', desc: 'Internal teams are maxed out and can\'t take on another critical project' },
              { icon: Lock, title: 'Risk Mitigation', desc: 'Failure is not an option—reputation and revenue are on the line' }
            ].map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 ${challengeSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
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
              <span className="gradient-text from-purple-400 to-pink-400">Our Fast-Track Approach</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Enterprise quality without the enterprise timeline
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Security-First', desc: 'Built-in security from day one. Pen-testing, code audits, compliance reviews' },
              { icon: Rocket, title: 'Rapid Deployment', desc: 'Weekly releases with CI/CD pipelines, automated testing, zero-downtime deploys' },
              { icon: Award, title: 'Enterprise Grade', desc: 'Production-ready code, comprehensive documentation, knowledge transfer included' }
            ].map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-400/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 ${solutionSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-slate-400">{solution.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-purple-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Included</span>
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
              <span className="gradient-text from-purple-400 to-pink-400">Fast-Track Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Emergency Kickoff', desc: '24-hour mobilization. Requirements locked. Architecture approved.' },
              { num: '2', title: 'Sprint Zero', desc: 'Security baseline. Compliance checklist. First deployment in 48 hours.' },
              { num: '3', title: 'Rapid Iterations', desc: 'Weekly releases. Daily standups. Continuous security scanning.' },
              { num: '4', title: 'Production Launch', desc: 'Full documentation. Knowledge transfer. Post-launch support.' }
            ].map((step, idx) => (
              <div key={idx} className={`text-center ${processSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6">
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
            <h3 className="text-3xl font-bold mb-8 text-center">Enterprise Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: 85, suffix: '%', label: 'Faster Than Internal', color: 'purple' },
                { value: 100, suffix: '%', label: 'Compliance Pass Rate', color: 'pink' },
                { value: 15, suffix: '+', label: 'Fortune 500 Clients', color: 'purple' }
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className={`text-5xl font-bold gradient-text from-${metric.color}-400 to-pink-500 mb-2`}>
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-10 animate-gradient"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl font-bold">
                <span className="gradient-text from-purple-400 to-pink-400">Ship Your Critical Project</span>
              </h2>
              <p className="text-xl text-slate-300">
                Don't let deadlines slip. Let's fast-track your enterprise initiative.
              </p>
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 inline-flex items-center gap-3">
                Start Emergency Project
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
