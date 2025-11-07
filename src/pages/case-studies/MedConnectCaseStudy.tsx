import { ArrowRight, Clock, TrendingUp, Building2, Shield, Zap, CheckCircle2, Code2, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { NinjaAnimation } from '../../components/NinjaAnimation';
import { SEO } from '../../components/SEO';

export function MedConnectCaseStudy() {
  const heroSection = useScrollAnimation();
  const challengeSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const techSection = useScrollAnimation();
  const resultsSection = useScrollAnimation();
  const timelineSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="MedConnect Platform - Case Study | goAI"
        description="How we built a HIPAA-compliant healthcare platform that connected 15 hospitals in 4 weeks. Built with Next.js, Node.js, and PostgreSQL."
        keywords="healthcare tech case study, hipaa compliant, rapid development, health tech mvp"
        url="https://goai.dev/case-studies/medconnect"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <NinjaAnimation />
        <section className="pt-32 pb-20 px-6 relative overflow-hidden" ref={heroSection.ref}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
          <div className="fixed top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="fixed bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

          <div className="max-w-7xl mx-auto relative z-10">

            <div className={`max-w-4xl ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">HEALTHCARE TECH</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text from-blue-400 to-purple-500">MedConnect Platform</span>
              </h1>

              <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
                HIPAA-compliant platform connecting hospitals, doctors, and patients. From zero to 15 hospitals onboarded in 4 weeks with enterprise-grade security.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { icon: Clock, label: 'Delivery Time', value: '4 Weeks' },
                  { icon: Building2, label: 'Hospitals', value: '15' },
                  { icon: Shield, label: 'Compliance', value: 'HIPAA' },
                  { icon: TrendingUp, label: 'Uptime SLA', value: '99.9%' }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className={`text-center ${heroSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold gradient-text from-blue-400 to-purple-400 mb-1">{stat.value}</div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50" ref={challengeSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`mb-16 ${challengeSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text from-blue-400 to-purple-400">The Challenge</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
                A healthcare network needed to digitize patient referrals between hospitals. Manual processes were causing 48-hour delays. They needed a HIPAA-compliant platform that could handle sensitive medical data while integrating with legacy hospital systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'HIPAA Compliance', desc: 'Must meet strict healthcare regulations from day one. No shortcuts allowed.' },
                { title: 'Legacy Integration', desc: 'Connect to 15 different hospital EMR systems with varying APIs and protocols.' },
                { title: 'Real-Time Critical', desc: 'Patient referrals need instant routing. Lives depend on it.' },
                { title: 'Enterprise Security', desc: 'Multi-factor auth, audit logs, encryption at rest and in transit.' }
              ].map((challenge, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 ${challengeSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">{challenge.title}</h3>
                  <p className="text-slate-400">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" ref={solutionSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`mb-16 ${solutionSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text from-blue-400 to-purple-400">Our Approach</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Security First',
                  desc: 'Built with HIPAA compliance from the ground up. Encrypted everything, comprehensive audit trails.'
                },
                {
                  icon: Target,
                  title: 'API Gateway',
                  desc: 'Created unified API layer to standardize communication with diverse hospital systems.'
                },
                {
                  icon: Rocket,
                  title: 'Phased Rollout',
                  desc: 'Started with 3 pilot hospitals, proved the model, then scaled to 15 in weeks 3-4.'
                }
              ].map((approach, idx) => {
                const Icon = approach.icon;
                return (
                  <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover-lift hover:border-blue-400/50 transition-all ${solutionSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{approach.title}</h3>
                    <p className="text-slate-400">{approach.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50" ref={techSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`mb-16 ${techSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text from-blue-400 to-purple-400">Tech Stack</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'Frontend', items: ['Next.js 14', 'TypeScript', 'React Query', 'Shadcn UI'] },
                { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
                { category: 'Security', items: ['OAuth 2.0', 'JWT', 'AES-256', 'WAF'] },
                { category: 'Infrastructure', items: ['AWS VPC', 'RDS', 'ECS Fargate', 'CloudWatch'] }
              ].map((stack, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 ${techSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl font-bold text-blue-400">{stack.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {stack.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" ref={timelineSection.ref}>
          <div className="max-w-5xl mx-auto">
            <div className={`mb-16 text-center ${timelineSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text from-blue-400 to-purple-400">4-Week Timeline</span>
              </h2>
            </div>

            <div className="space-y-8">
              {[
                { week: 'Week 1', title: 'Foundation', tasks: ['HIPAA compliance setup', 'Core auth system', 'Database schema', 'API gateway design'] },
                { week: 'Week 2', title: 'Core Features', tasks: ['Referral workflow', 'Hospital integrations', 'Real-time notifications', 'Admin dashboard'] },
                { week: 'Week 3', title: 'Pilot Launch', tasks: ['3 hospital pilot', 'Integration testing', 'Security audit', 'Performance tuning'] },
                { week: 'Week 4', title: 'Scale & Deploy', tasks: ['12 more hospitals', 'Load testing', 'Training docs', 'Production go-live'] }
              ].map((phase, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover-lift hover:border-blue-400/50 transition-all ${timelineSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold">{phase.week}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.tasks.map((task, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50" ref={resultsSection.ref}>
          <div className="max-w-5xl mx-auto">
            <div className={`mb-16 text-center ${resultsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text from-blue-400 to-purple-400">Results</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { value: 15, suffix: '', label: 'Hospitals Onboarded', color: 'blue' },
                { value: 90, suffix: '%', label: 'Faster Referrals', color: 'purple' },
                { value: 99.9, suffix: '%', label: 'Uptime Achieved', color: 'blue' }
              ].map((metric, idx) => (
                <div key={idx} className={`text-center ${resultsSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className={`text-6xl font-bold gradient-text from-${metric.color}-400 to-purple-500 mb-2`}>
                    <AnimatedCounter end={metric.value} duration={2000} suffix={metric.suffix} isVisible={resultsSection.isVisible} />
                  </div>
                  <div className="text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 ${resultsSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
              <blockquote className="text-2xl text-slate-300 italic mb-6">
                "goAI delivered a production-ready, HIPAA-compliant platform in 4 weeks. What impressed us most was their deep understanding of healthcare regulations and ability to navigate complex hospital systems."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-lg">Dr. Michael Torres</div>
                  <div className="text-slate-400">Chief Medical Officer, MedConnect</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 animate-gradient"></div>
              <div className="relative z-10 space-y-6">
                <h2 className="text-5xl font-bold">
                  <span className="gradient-text from-blue-400 to-purple-400">Build Your Healthcare Platform</span>
                </h2>
                <p className="text-xl text-slate-300">
                  Let's create something amazing together
                </p>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105">
                  Start Your Project
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
