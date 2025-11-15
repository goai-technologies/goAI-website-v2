import { RefreshCw, Shield, Zap, Target, TrendingUp, CheckCircle2, Clock, Layers, Code, Database, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { CalendarBooking } from '../../components/CalendarBooking';
import { SEO } from '../../components/SEO';
import { LogoScroller } from '../../components/LogoScroller';
import { companyLogos } from '../../constants/logos';

export function LegacyMigrationPage() {
  const heroSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const useCasesSection = useScrollAnimation();
  const techStackSection = useScrollAnimation();
  const benefitsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const migrationProcess = [
    {
      num: '1',
      title: 'Legacy Code Analysis',
      desc: 'Comprehensive codebase assessment to identify modernization opportunities and dependencies.',
      icon: Database,
      color: 'cyan'
    },
    {
      num: '2',
      title: 'Migration Strategy',
      desc: 'Detailed roadmap with risk assessment, timeline, and incremental migration plan.',
      icon: Target,
      color: 'blue'
    },
    {
      num: '3',
      title: 'Automated Transformation',
      desc: 'GenAI-powered code modernization with quality assurance and validation.',
      icon: Zap,
      color: 'purple'
    },
    {
      num: '4',
      title: 'Testing & Validation',
      desc: 'Comprehensive testing, performance analysis, and production deployment.',
      icon: CheckCircle2,
      color: 'pink'
    }
  ];

  const useCases = [
    {
      title: 'COBOL to Java Migration',
      desc: 'Transform mainframe applications to modern cloud-native Java services.',
      impact: '90% cost reduction'
    },
    {
      title: '.NET Framework to .NET Core',
      desc: 'Upgrade legacy .NET apps to modern, cross-platform .NET Core.',
      impact: '3x performance boost'
    },
    {
      title: 'REST API Modernization',
      desc: 'Convert legacy SOAP services to modern RESTful APIs with GraphQL.',
      impact: '50% faster response'
    },
    {
      title: 'Monolith to Microservices',
      desc: 'Break down monolithic architectures into scalable microservices.',
      impact: '5x deployment speed'
    },
    {
      title: 'Legacy UI Modernization',
      desc: 'Transform outdated interfaces to modern React/Next.js applications.',
      impact: '80% better UX'
    },
    {
      title: 'Database Migration',
      desc: 'Migrate from legacy databases to modern cloud-native solutions.',
      impact: 'Zero downtime'
    }
  ];

  const techStack = [
    { category: 'AI/LLM', techs: ['OpenAI', 'Gemini', 'Claude', 'Perplexity'], color: 'cyan' },
    { category: 'Frameworks', techs: ['FastAPI', 'Node.js', 'Next.js', 'Spring Boot'], color: 'blue' },
    { category: 'Cloud', techs: ['AWS', 'Azure', 'GCP', 'Kubernetes'], color: 'purple' },
    { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DBs'], color: 'pink' }
  ];

  return (
    <>
      <SEO
        title="Legacy System Migration | AI-Powered Modernization Services"
        description="Transform outdated systems into modern, AI-powered solutions. COBOL to Java, .NET upgrades, microservices migration with zero downtime."
        keywords="legacy migration, system modernization, COBOL to Java, .NET migration, microservices, legacy code transformation, cloud migration, AI-powered migration"
        url="https://goai.dev/services/legacy-migration"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
        <div className="fixed top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>

          <div className="max-w-7xl mx-auto relative z-10" ref={heroSection.ref}>
            <div className={`text-center space-y-8 ${heroSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/30 rounded-full px-6 py-2 mb-4 animate-pulse-glow">
                <RefreshCw className="w-5 h-5 text-blue-400 animate-spin-slow" />
                <span className="text-blue-400 font-semibold">LEGACY SYSTEM MIGRATION</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text from-blue-400 via-purple-400 to-pink-500 animate-gradient">
                  Modernize Legacy Systems
                </span>
                <br />
                <span className="text-white">with AI-Powered Migration</span>
              </h1>

              <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto">
                Transform outdated systems into modern, cloud-native solutions with comprehensive migration tools and expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <CalendarBooking
                  buttonText="Get Migration Assessment"
                  className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2"
                />
                <a href="#process" className="border-2 border-blue-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400/10 transition-all hover:scale-105 text-white">
                  See How It Works
                </a>
              </div>
            </div>

            <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-blue-400 to-purple-400">
                  <AnimatedCounter end={90} duration={1500} suffix="%" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Cost Reduction</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-purple-400 to-pink-400">
                  <AnimatedCounter end={50} duration={1500} suffix="%" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Faster Processing</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-pink-400 to-blue-400">
                  <AnimatedCounter end={0} duration={1500} suffix="" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Downtime Required</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-cyan-400 to-blue-400">
                  <AnimatedCounter end={100} duration={1500} suffix="+" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Systems Migrated</div>
              </div>
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

        <section id="process" className="py-20 px-6 bg-slate-900/50" ref={processSection.ref}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-5xl font-bold mb-6 ${processSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="gradient-text from-blue-400 to-purple-400">AI-Powered Migration Process</span>
            </h2>
            <p className={`text-xl text-slate-300 mb-16 max-w-3xl mx-auto ${processSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Strategic, automated approach to legacy system transformation
            </p>

            <div className="relative">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-slate-700/30">
                <div
                  className={`h-full bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 transition-all duration-2000 ease-out`}
                  style={{
                    width: processSection.isVisible ? '100%' : '0%',
                    transitionDelay: '0.2s'
                  }}
                ></div>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {migrationProcess.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className={`space-y-4 relative ${processSection.isVisible ? 'animate-scale-in' : 'opacity-0'} hover:-translate-y-2 transition-transform`} style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className={`relative w-20 h-20 bg-gradient-to-br from-${step.color}-400 to-${step.color}-500 rounded-2xl flex items-center justify-center mx-auto hover:rotate-12 transition-transform hover:scale-110 z-10 ring-4 ring-slate-900`}>
                        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold">{step.num}</span>
                        <Icon className="w-8 h-8 opacity-20" />
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-800/50" ref={useCasesSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${useCasesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-blue-400 to-purple-400">Migration Use Cases</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Proven expertise across diverse legacy modernization scenarios
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-blue-400/50 transition-all hover:-translate-y-2 ${useCasesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Code className="w-8 h-8 text-blue-400" />
                    <span className="text-sm font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                      {useCase.impact}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-slate-400">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50" ref={techStackSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${techStackSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-blue-400 to-purple-400">Migration Technology Stack</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Cutting-edge tools for seamless legacy transformation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {techStack.map((stack, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-blue-400/50 transition-all ${techStackSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h3 className={`text-xl font-bold mb-4 text-${stack.color}-400`}>{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.techs.map((tech, tidx) => (
                      <li key={tidx} className="text-slate-300 flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 bg-${stack.color}-400 rounded-full`}></div>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-800/50" ref={benefitsSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${benefitsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-blue-400 to-purple-400">Migration Benefits</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: TrendingUp, title: 'Reduced Costs', desc: 'Up to 90% reduction in maintenance costs through modern, efficient architectures.' },
                { icon: Zap, title: 'Enhanced Performance', desc: '50% faster processing with optimized code and cloud-native infrastructure.' },
                { icon: Shield, title: 'Zero Downtime', desc: 'Incremental migration strategies ensure continuous operations during transformation.' },
                { icon: Layers, title: 'Future-Proof', desc: 'Modern tech stacks and architectures ready for AI integration and scaling.' }
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-blue-400/50 transition-all ${benefitsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-slate-400">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`mt-16 bg-gradient-to-r from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 text-center ${benefitsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-3xl font-bold mb-6 gradient-text from-blue-400 to-purple-400">
                Banking System Case Study
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
                  <div className="text-slate-400">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                  <div className="text-slate-400">Faster Transactions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-400 mb-2">Zero</div>
                  <div className="text-slate-400">Downtime Migration</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6" ref={ctaSection.ref}>
          <div className="max-w-4xl mx-auto text-center">
            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden ${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-10 animate-gradient"></div>
              <div className="relative z-10 space-y-6">
                <Clock className="w-16 h-16 text-blue-400 mx-auto" />
                <h2 className="text-5xl font-bold">
                  <span className="gradient-text from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                    Ready to Modernize Your Legacy Systems?
                  </span>
                </h2>
                <p className="text-xl text-slate-300">
                  Get a free migration assessment and roadmap for your legacy transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <CalendarBooking
                    buttonText="Get Free Assessment"
                    className="group bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 inline-flex items-center gap-3"
                    icon={<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
