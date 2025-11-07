import { Code, Zap, Database, Cloud, Smartphone, Rocket, CheckCircle2, TrendingUp, Layers, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { CalendarBooking } from '../../components/CalendarBooking';
import { SEO } from '../../components/SEO';

export function FullStackDevelopmentPage() {
  const heroSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const techStackSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const benefitsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const services = [
    {
      icon: Zap,
      title: 'AI-Powered Web Applications',
      desc: 'Custom web apps with integrated AI capabilities for personalized recommendations, automated content generation, and smart data analysis.',
      features: ['Custom AI model integration', 'Real-time data processing', 'Responsive web design', 'API development', 'Performance optimization']
    },
    {
      icon: Database,
      title: 'Machine Learning API Development',
      desc: 'Scalable ML APIs for real-time predictions and intelligent data processing.',
      features: ['RESTful API design', 'Model deployment & scaling', 'Real-time inference', 'Data validation', 'Comprehensive documentation']
    },
    {
      icon: Smartphone,
      title: 'AI Mobile Applications',
      desc: 'Native and cross-platform mobile apps with cutting-edge AI features.',
      features: ['Cross-platform development', 'On-device AI processing', 'Cloud integration', 'UX optimization', 'App store deployment']
    }
  ];

  const techStack = [
    { category: 'AI/ML', techs: ['TensorFlow', 'OpenAI API', 'PyTorch', 'Hugging Face'], color: 'cyan' },
    { category: 'Backend', techs: ['Node.js', 'Python', 'FastAPI', 'Express'], color: 'blue' },
    { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind'], color: 'purple' },
    { category: 'Cloud & DevOps', techs: ['Kubernetes', 'AWS', 'Docker', 'CI/CD'], color: 'pink' },
    { category: 'Databases', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DBs'], color: 'green' }
  ];

  const process = [
    { num: '1', title: 'Discovery & Planning', desc: 'Deep dive into requirements, AI capabilities, and technical architecture.', icon: Layers },
    { num: '2', title: 'AI Model Selection', desc: 'Choose and configure optimal AI models for your use case.', icon: Zap },
    { num: '3', title: 'Full-Stack Development', desc: 'Build scalable frontend, backend, and AI integration layers.', icon: Code },
    { num: '4', title: 'Testing & Deployment', desc: 'Comprehensive QA, performance optimization, and production launch.', icon: Rocket }
  ];

  return (
    <>
      <SEO
        title="Full-Stack AI Development | Custom Web & Mobile Apps with AI"
        description="Build intelligent web and mobile applications with integrated AI capabilities. Custom ML APIs, AI-powered features, and modern full-stack development."
        keywords="full-stack development, AI web applications, machine learning API, AI mobile apps, custom AI development, ML integration, intelligent applications"
        url="https://goai.dev/services/fullstack-development"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
        <div className="fixed top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)] animate-pulse"></div>

          <div className="max-w-7xl mx-auto relative z-10" ref={heroSection.ref}>
            <div className={`text-center space-y-8 ${heroSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2 mb-4 animate-pulse-glow">
                <Code className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">FULL-STACK AI DEVELOPMENT</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text from-cyan-400 via-blue-400 to-purple-500 animate-gradient">
                  Build the Future
                </span>
                <br />
                <span className="text-white">with AI-Powered Apps</span>
              </h1>

              <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto">
                Comprehensive full-stack solutions leveraging cutting-edge AI, modern frameworks, and proven methodologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <CalendarBooking
                  buttonText="Start Your Project"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2"
                />
                <a href="#services" className="border-2 border-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all hover:scale-105 text-white">
                  Explore Services
                </a>
              </div>
            </div>

            <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-cyan-400 to-blue-400">
                  <AnimatedCounter end={100} duration={1500} suffix="+" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">AI Apps Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-blue-400 to-purple-400">
                  <AnimatedCounter end={5} duration={1500} suffix="x" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Faster Development</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-purple-400 to-pink-400">
                  <AnimatedCounter end={99} duration={1500} suffix="%" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Code Quality Score</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-pink-400 to-cyan-400">
                  <AnimatedCounter end={24} duration={1500} suffix="/7" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-slate-900/50" ref={servicesSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${servicesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-cyan-400 to-blue-400">Full-Stack AI Services</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                End-to-end development with integrated AI capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-2 ${servicesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-400 mb-6">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-800/50" ref={techStackSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${techStackSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-cyan-400 to-purple-400">Modern Technology Stack</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Industry-leading tools and frameworks for scalable AI applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {techStack.map((stack, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all ${techStackSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
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

        <section className="py-20 px-6 bg-slate-900/50" ref={processSection.ref}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-5xl font-bold mb-6 ${processSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="gradient-text from-cyan-400 to-purple-400">Our Development Process</span>
            </h2>
            <p className={`text-xl text-slate-300 mb-16 max-w-3xl mx-auto ${processSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Proven methodology for delivering AI-powered applications at velocity
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
                {process.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className={`space-y-4 relative ${processSection.isVisible ? 'animate-scale-in' : 'opacity-0'} hover:-translate-y-2 transition-transform`} style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto hover:rotate-12 transition-transform hover:scale-110 z-10 ring-4 ring-slate-900">
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

        <section className="py-20 px-6 bg-slate-800/50" ref={benefitsSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${benefitsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-cyan-400 to-blue-400">Why Choose Our Full-Stack Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Zap, title: 'Rapid Development', desc: 'AI-accelerated coding and modern frameworks cut development time by 50%.' },
                { icon: TrendingUp, title: 'Scalable Architecture', desc: 'Cloud-native designs that scale seamlessly from MVP to millions of users.' },
                { icon: CheckCircle2, title: 'Production Quality', desc: 'Enterprise-grade code with comprehensive testing and documentation.' },
                { icon: Cloud, title: 'AI-First Approach', desc: 'Deep expertise in integrating LLMs, ML models, and intelligent features.' }
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400/50 transition-all ${benefitsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-slate-400">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" ref={ctaSection.ref}>
          <div className="max-w-4xl mx-auto text-center">
            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden ${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-10 animate-gradient"></div>
              <div className="relative z-10 space-y-6">
                <h2 className="text-5xl font-bold">
                  <span className="gradient-text from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                    Ready to Build Your AI Application?
                  </span>
                </h2>
                <p className="text-xl text-slate-300">
                  Let's transform your vision into a production-ready AI-powered application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <CalendarBooking
                    buttonText="Schedule Consultation"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 inline-flex items-center gap-3"
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
