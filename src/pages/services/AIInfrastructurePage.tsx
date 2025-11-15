import { Server, Cloud, Shield, TrendingUp, Zap, Database, Activity, Lock, Gauge, CheckCircle2, Layers, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { CalendarBooking } from '../../components/CalendarBooking';
import { SEO } from '../../components/SEO';
import { LogoScroller } from '../../components/LogoScroller';
import { companyLogos } from '../../constants/logos';

export function AIInfrastructurePage() {
  const heroSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const benefitsSection = useScrollAnimation();
  const techStackSection = useScrollAnimation();
  const featuresSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const services = [
    {
      icon: Cloud,
      title: 'Infrastructure Provisioning',
      desc: 'Cloud setup across AWS, GCP, Azure with containerization, GPU/TPU management, and MLOps CI/CD pipelines.',
      features: ['Multi-cloud deployment', 'Container orchestration', 'Auto-scaling infrastructure', 'Resource optimization']
    },
    {
      icon: Server,
      title: 'Model Lifecycle Management',
      desc: 'Scalable model training infrastructure, deployment platforms, and comprehensive performance monitoring.',
      features: ['Model training at scale', 'Version control', 'A/B testing', 'Performance tracking']
    },
    {
      icon: Database,
      title: 'Data Infrastructure',
      desc: 'Data lake and pipeline management, feature stores, and data versioning for ML operations.',
      features: ['Data pipeline automation', 'Feature engineering', 'Data versioning', 'Real-time processing']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      desc: 'Enterprise-grade access controls, data privacy compliance, audit trails, and governance frameworks.',
      features: ['Access management', 'GDPR compliance', 'Audit logging', 'Security monitoring']
    },
    {
      icon: Activity,
      title: 'Monitoring & Optimization',
      desc: 'Resource usage tracking, autoscaling, performance alerting, and energy efficiency optimization.',
      features: ['Real-time monitoring', 'Cost optimization', 'Performance alerts', 'Resource analytics']
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Automated Scaling', desc: 'AI workloads scale automatically based on demand, ensuring optimal resource utilization.' },
    { icon: Cloud, title: 'Multi-Cloud Ready', desc: 'Deploy across AWS, Azure, GCP with unified management and orchestration.' },
    { icon: Gauge, title: 'Real-Time Monitoring', desc: 'Comprehensive observability with performance tracking and alerting systems.' },
    { icon: TrendingUp, title: 'Cost Optimization', desc: 'Intelligent resource allocation reduces cloud costs by up to 60%.' },
    { icon: Lock, title: 'Enterprise Security', desc: 'Bank-grade security with compliance frameworks and audit trails.' },
    { icon: Layers, title: 'MLOps Integration', desc: 'Complete CI/CD pipelines for seamless model deployment and updates.' }
  ];

  const techStack = [
    { category: 'AI Models', techs: ['OpenAI', 'Gemini', 'Claude', 'Hugging Face'], color: 'cyan' },
    { category: 'Frameworks', techs: ['LangChain', 'TensorFlow', 'PyTorch', 'FastAPI'], color: 'blue' },
    { category: 'Vector DBs', techs: ['Pinecone', 'Milvus', 'Weaviate', 'Qdrant'], color: 'purple' },
    { category: 'Cloud', techs: ['AWS', 'Azure', 'GCP', 'Oracle'], color: 'pink' },
    { category: 'Orchestration', techs: ['Kubernetes', 'Docker', 'Istio', 'Terraform'], color: 'green' }
  ];

  return (
    <>
      <SEO
        title="AI Infrastructure Services | Enterprise MLOps & Cloud Management"
        description="Enterprise-grade AI infrastructure with automated scaling, multi-cloud deployment, and MLOps pipelines. Build scalable AI systems with expert infrastructure management."
        keywords="AI infrastructure, MLOps, cloud infrastructure, model deployment, Kubernetes AI, GPU management, AI scaling, enterprise AI, cloud ML infrastructure"
        url="https://goai.dev/services/ai-infrastructure"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
        <div className="fixed top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>

          <div className="max-w-7xl mx-auto relative z-10" ref={heroSection.ref}>
            <div className={`text-center space-y-8 ${heroSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/30 rounded-full px-6 py-2 mb-4 animate-pulse-glow">
                <Server className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">AI INFRASTRUCTURE</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text from-purple-400 via-pink-400 to-cyan-500 animate-gradient">
                  Enterprise AI Infrastructure
                </span>
                <br />
                <span className="text-white">Built to Scale</span>
              </h1>

              <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto">
                Enterprise-grade cloud infrastructure management for AI applications with automated scaling, monitoring, and optimization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <CalendarBooking
                  buttonText="Discuss Infrastructure"
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
                />
                <a href="#services" className="border-2 border-purple-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-400/10 transition-all hover:scale-105 text-white">
                  Explore Services
                </a>
              </div>
            </div>

            <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-purple-400 to-pink-400">
                  <AnimatedCounter end={99} duration={1500} suffix=".9%" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Uptime SLA</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-pink-400 to-cyan-400">
                  <AnimatedCounter end={60} duration={1500} suffix="%" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Cost Reduction</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-cyan-400 to-blue-400">
                  <AnimatedCounter end={10} duration={1500} suffix="x" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Auto-Scaling Speed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-blue-400 to-purple-400">
                  <AnimatedCounter end={24} duration={1500} suffix="/7" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Monitoring</div>
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

        <section id="services" className="py-20 px-6 bg-slate-900/50" ref={servicesSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${servicesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-purple-400 to-pink-400">Infrastructure Services</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive AI infrastructure management and optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-purple-400/50 transition-all hover:-translate-y-2 ${servicesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-purple-400/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-400 mb-6">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
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

        <section className="py-20 px-6 bg-slate-800/50" ref={benefitsSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${benefitsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-purple-400 to-pink-400">Infrastructure Benefits</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Enterprise-grade reliability, security, and performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-400/50 transition-all ${benefitsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-slate-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50" ref={techStackSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${techStackSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-purple-400 to-pink-400">Technology Stack</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Industry-leading tools for AI infrastructure at scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {techStack.map((stack, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-400/50 transition-all ${techStackSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
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

        <section className="py-20 px-6 bg-slate-800/50" ref={featuresSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 ${featuresSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="gradient-text from-purple-400 to-pink-400">Complete Infrastructure Management</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cloud className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Multi-Cloud Orchestration</h3>
                      <p className="text-slate-400 text-sm">Deploy and manage AI workloads across AWS, Azure, and GCP with unified control.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Gauge className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Performance Optimization</h3>
                      <p className="text-slate-400 text-sm">Real-time monitoring and automatic resource optimization for peak performance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Security & Compliance</h3>
                      <p className="text-slate-400 text-sm">Enterprise-grade security with SOC2, HIPAA, and GDPR compliance built-in.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">24/7 Monitoring</h3>
                      <p className="text-slate-400 text-sm">Continuous infrastructure monitoring with intelligent alerting and incident response.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Cost Optimization</h3>
                      <p className="text-slate-400 text-sm">Intelligent resource allocation and spot instance management reduce costs by 60%.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Auto-Scaling</h3>
                      <p className="text-slate-400 text-sm">Automatic scaling based on demand ensures optimal performance and cost efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6" ref={ctaSection.ref}>
          <div className="max-w-4xl mx-auto text-center">
            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden ${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 opacity-10 animate-gradient"></div>
              <div className="relative z-10 space-y-6">
                <Server className="w-16 h-16 text-purple-400 mx-auto" />
                <h2 className="text-5xl font-bold">
                  <span className="gradient-text from-purple-400 via-pink-400 to-cyan-400 animate-gradient">
                    Build Scalable AI Infrastructure
                  </span>
                </h2>
                <p className="text-xl text-slate-300">
                  Let's design and implement enterprise-grade infrastructure for your AI applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <CalendarBooking
                    buttonText="Schedule Infrastructure Consultation"
                    className="group bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 inline-flex items-center gap-3"
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
