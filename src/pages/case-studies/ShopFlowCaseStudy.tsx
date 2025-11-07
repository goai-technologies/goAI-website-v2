import { ArrowRight, Clock, TrendingUp, Users, DollarSign, Zap, CheckCircle2, Code2, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { NinjaAnimation } from '../../components/NinjaAnimation';
import { SEO } from '../../components/SEO';

export function ShopFlowCaseStudy() {
  const heroSection = useScrollAnimation();
  const challengeSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const techSection = useScrollAnimation();
  const resultsSection = useScrollAnimation();
  const timelineSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="ShopFlow Commerce - Case Study | goAI"
        description="How we built an e-commerce platform that generated $2M GMV in 90 days. Shipped in just 2 weeks with React, Stripe, and AWS."
        keywords="ecommerce case study, rapid ecommerce, mvp success, online store"
        url="https://goai.dev/case-studies/shopflow"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <NinjaAnimation />
        <section className="pt-32 pb-20 px-6 relative overflow-hidden" ref={heroSection.ref}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>
          <div className="fixed top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="fixed bottom-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

          <div className="max-w-7xl mx-auto relative z-10">

            <div className={`max-w-4xl ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">E-COMMERCE</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text from-purple-400 to-pink-500">ShopFlow Commerce</span>
              </h1>

              <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
                From idea to $2M GMV in 90 days. Built a full-featured e-commerce platform in just 2 weeks with zero downtime during Black Friday.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { icon: Clock, label: 'Delivery Time', value: '3 Weeks' },
                  { icon: Users, label: 'Users Month 1', value: '50K' },
                  { icon: DollarSign, label: 'ARR Year 1', value: '$2.5M' },
                  { icon: Zap, label: 'Response Time', value: '<200ms' }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className={`text-center ${heroSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="text-2xl font-bold gradient-text from-cyan-400 to-blue-400 mb-1">{stat.value}</div>
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
                <span className="gradient-text from-cyan-400 to-blue-400">The Challenge</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
                A fintech startup needed to validate their market hypothesis fast. They had 8 weeks of runway and needed a production-ready MVP that could handle real transactions, integrate with banking APIs, and leverage AI for financial insights. Traditional development would take 4-6 months.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Tight Timeline', desc: 'Only 3 weeks to launch before critical investor demo' },
                { title: 'Complex Integrations', desc: 'Plaid API, Stripe, OpenAI GPT-4, multiple data sources' },
                { title: 'Security Critical', desc: 'Financial data requires SOC2-level security from day one' },
                { title: 'AI Accuracy', desc: 'Financial recommendations must be accurate and explainable' }
              ].map((challenge, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 ${challengeSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{challenge.title}</h3>
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
                <span className="gradient-text from-cyan-400 to-blue-400">Our Approach</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'MVP Focus',
                  desc: 'Identified 3 core features that would prove the concept. Everything else was cut.'
                },
                {
                  icon: Zap,
                  title: 'Parallel Sprints',
                  desc: 'Frontend, backend, and AI teams worked in parallel with daily sync points.'
                },
                {
                  icon: Rocket,
                  title: 'Fast Iterations',
                  desc: 'Daily deployments to staging. Client tested features as they were built.'
                }
              ].map((approach, idx) => {
                const Icon = approach.icon;
                return (
                  <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover-lift hover:border-cyan-400/50 transition-all ${solutionSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
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
                <span className="gradient-text from-cyan-400 to-blue-400">Tech Stack</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'Frontend', items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts'] },
                { category: 'Backend', items: ['Python FastAPI', 'PostgreSQL', 'Redis Cache', 'Celery'] },
                { category: 'AI/ML', items: ['OpenAI GPT-4', 'LangChain', 'Vector DB', 'Fine-tuning'] },
                { category: 'Infrastructure', items: ['AWS ECS', 'RDS', 'CloudFront', 'WAF'] }
              ].map((stack, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 ${techSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl font-bold text-cyan-400">{stack.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {stack.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
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
                <span className="gradient-text from-cyan-400 to-blue-400">3-Week Sprint</span>
              </h2>
            </div>

            <div className="space-y-8">
              {[
                { week: 'Week 1', title: 'Foundation & Core', tasks: ['Architecture design', 'Auth & user management', 'Banking API integration', 'Basic dashboard UI'] },
                { week: 'Week 2', title: 'AI & Features', tasks: ['GPT-4 integration', 'Financial analysis engine', 'Real-time data pipeline', 'Advanced visualizations'] },
                { week: 'Week 3', title: 'Polish & Launch', tasks: ['Security hardening', 'Performance optimization', 'User onboarding flow', 'Production deployment'] }
              ].map((phase, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover-lift hover:border-cyan-400/50 transition-all ${timelineSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold">{phase.week}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.tasks.map((task, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
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
                <span className="gradient-text from-cyan-400 to-blue-400">Results</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { value: 50, suffix: 'K', label: 'Users in Month 1', color: 'cyan' },
                { value: 2.5, suffix: 'M', label: 'ARR Year 1', color: 'blue' },
                { value: 95, suffix: '%', label: 'User Satisfaction', color: 'cyan' }
              ].map((metric, idx) => (
                <div key={idx} className={`text-center ${resultsSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className={`text-6xl font-bold gradient-text from-${metric.color}-400 to-blue-500 mb-2`}>
                    <AnimatedCounter end={metric.value} duration={2000} suffix={metric.suffix} isVisible={resultsSection.isVisible} />
                  </div>
                  <div className="text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 ${resultsSection.isVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
              <blockquote className="text-2xl text-slate-300 italic mb-6">
                "goAI turned our ambitious vision into reality in just 3 weeks. They didn't just build software—they became an extension of our team. The quality and speed were beyond anything we expected."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-lg">Sarah Chen</div>
                  <div className="text-slate-400">Co-founder & CEO, FinanceAI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 animate-gradient"></div>
              <div className="relative z-10 space-y-6">
                <h2 className="text-5xl font-bold">
                  <span className="gradient-text from-cyan-400 to-blue-400">Ready to Ship Fast?</span>
                </h2>
                <p className="text-xl text-slate-300">
                  Let's build your MVP at breakneck speed
                </p>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105">
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
