import { Zap, Gauge, Target, Clock, Users, Layers, Bot, Lightbulb, ArrowRight, CheckCircle2, Star, TrendingUp, Rocket as RocketIcon, ExternalLink, Mail, Calendar, Code, RefreshCw, Server, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NinjaAnimation } from '../components/NinjaAnimation';
import { CalendarBooking } from '../components/CalendarBooking';
import { LogoScroller } from '../components/LogoScroller';
import { companyLogos } from '../constants/logos';
import { SEO } from '../components/SEO';

export function HomePage() {
  const heroStats = useScrollAnimation();
  const clientsSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const workSection = useScrollAnimation();
  const speedSection = useScrollAnimation();
  const testimonialsSection = useScrollAnimation();
  const approachSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const clientCards = [
    {
      icon: Target,
      color: 'cyan',
      title: 'MVP Builders',
      slug: 'mvp-builders',
      desc: 'Get your product to market before your runway ends. We build functional MVPs in 2-4 weeks, not quarters.',
      items: ['Rapid prototyping', 'Core feature focus', 'Launch-ready code']
    },
    {
      icon: Layers,
      color: 'blue',
      title: 'Backlog Crushers',
      slug: 'backlog-crushers',
      desc: 'Stuck with a growing backlog? We clear it fast. Sprint augmentation or full feature development.',
      items: ['Sprint acceleration', 'Priority features first', 'Seamless integration']
    },
    {
      icon: Clock,
      color: 'purple',
      title: 'Enterprise Fast-Track',
      slug: 'enterprise-fast-track',
      desc: 'Need critical projects done yesterday? We handle urgent initiatives with enterprise-grade quality at startup speed.',
      items: ['Rapid deployment', 'Security-first approach', 'Compliance ready']
    },
    {
      icon: Bot,
      color: 'pink',
      title: 'AI Agent Pioneers',
      slug: 'ai-pioneers',
      desc: 'Building the next generation of AI? We live on the bleeding edge. LLMs, agents, automation—we ship it.',
      items: ['LLM integration', 'Agent frameworks', 'Cutting-edge tech']
    },
    {
      icon: Lightbulb,
      color: 'yellow',
      title: 'Non-Tech Founders',
      slug: 'non-tech-founders',
      desc: 'Got an idea but no technical co-founder? We speak human. Turn your vision into a working product.',
      items: ['Plain-English communication', 'End-to-end guidance', 'MVP to scale']
    },
    {
      icon: Users,
      color: 'green',
      title: 'Tech-First Teams',
      slug: 'tech-teams',
      desc: 'Need extra horsepower? We integrate with your team like we\'re already on payroll. Zero ramp-up time.',
      items: ['Instant integration', 'Your stack, your way', 'Collaborative approach']
    }
  ];

  return (
    <>
      <SEO
        title="goAI - Ship in Weeks, Not Months | Rapid Development Agency"
        description="Engineering ninjas delivering MVPs, crushing backlogs, and shipping at lightning speed. From zero to production in 2-4 weeks. Get started in 48 hours."
        keywords="rapid development, MVP development, fast development agency, backlog clearing, sprint augmentation, AI development, startup development, engineering team augmentation"
        url="https://goai.dev"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <div className="fixed top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>

        <NinjaAnimation />

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce-subtle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2 mb-4 animate-pulse-glow">
              <Gauge className="w-5 h-5 text-cyan-400 animate-spin-slow" />
              <span className="text-cyan-400 font-semibold">NEED FOR SPEED DEVELOPMENT</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="gradient-text from-cyan-400 via-blue-400 to-purple-500 animate-gradient">
                Ship in Weeks,
              </span>
              <br />
              <span className="text-white">Not Months</span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto animate-fade-in-delay">
              Your fast-track partner for MVPs, backlogs, and rapid deployments. From zero to production at lightning speed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay">
              <CalendarBooking
                buttonText="Book a Free Call"
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2"
              />
              <a href="#work" className="border-2 border-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all hover:scale-105 text-white">
                See Our Velocity
              </a>
            </div>
          </div>

          <div ref={heroStats.ref} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className={`space-y-2 ${heroStats.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="text-4xl font-bold gradient-text from-cyan-400 to-blue-400">
                <AnimatedCounter end={2} duration={1500} suffix="-4 Weeks" isVisible={heroStats.isVisible} />
              </div>
              <div className="text-slate-400">Average MVP Delivery</div>
            </div>
            <div className={`space-y-2 ${heroStats.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold gradient-text from-blue-400 to-purple-400">
                <AnimatedCounter end={3} duration={1500} suffix="x" isVisible={heroStats.isVisible} />
              </div>
              <div className="text-slate-400">Faster Than Traditional</div>
            </div>
            <div className={`space-y-2 ${heroStats.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold gradient-text from-purple-400 to-pink-400">
                <AnimatedCounter end={48} duration={1500} suffix="hrs" isVisible={heroStats.isVisible} />
              </div>
              <div className="text-slate-400">First Prototype Ready</div>
            </div>
            <div className={`space-y-2 ${heroStats.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold gradient-text from-pink-400 to-cyan-400">
                <AnimatedCounter end={100} duration={1500} suffix="%" isVisible={heroStats.isVisible} />
              </div>
              <div className="text-slate-400">On-Time Delivery</div>
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
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-slate-300">
                <span className="font-bold text-cyan-400">4.9/5</span> from 50+ projects delivered
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 px-6 bg-slate-900/50" ref={workSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${workSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text from-cyan-400 to-blue-400">Rapid MVP Development & SaaS Solutions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Projects shipped at breakneck speed without breaking anything
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'FinanceAI Dashboard',
                category: 'AI-Powered SaaS',
                time: '3 Weeks',
                impact: '50k users in month 1',
                tags: ['React', 'Python', 'OpenAI'],
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'MedConnect Platform',
                category: 'Healthcare Tech',
                time: '4 Weeks',
                impact: '15 hospitals onboarded',
                tags: ['Next.js', 'Node.js', 'PostgreSQL'],
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                title: 'ShopFlow Commerce',
                category: 'E-Commerce',
                time: '2 Weeks',
                impact: '$2M GMV in 90 days',
                tags: ['React', 'Stripe', 'AWS'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'AgentHub Automation',
                category: 'AI Agents',
                time: '3 Weeks',
                impact: '85% task automation',
                tags: ['LangChain', 'TypeScript', 'Vector DB'],
                gradient: 'from-pink-500 to-cyan-500'
              }
            ].map((project, idx) => {
              const projectSlug = project.title.toLowerCase().replace(/\s+/g, '');
              return (
              <Link
                key={idx}
                to={`/case-studies/${projectSlug}`}
                className={`group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 block ${workSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-cyan-400 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    </div>
                    <ExternalLink className="w-6 h-6 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span className="text-slate-400">Shipped in {project.time}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold gradient-text from-cyan-400 to-blue-400">
                      {project.impact}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 border border-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 px-6 bg-slate-800/50" ref={clientsSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${clientsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text from-cyan-400 to-blue-400">Software Development for Startups, SaaS & AI Companies</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built for founders, teams, and organizations that need velocity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link
                  key={idx}
                  to={`/${card.slug}`}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-${card.color}-400/50 transition-all hover:shadow-xl hover:shadow-${card.color}-500/20 hover:-translate-y-2 ${clientsSection.isVisible ? 'animate-scale-in' : 'opacity-0'} block`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-${card.color}-400 to-${card.color === 'cyan' ? 'blue' : card.color === 'blue' ? 'purple' : card.color === 'purple' ? 'pink' : card.color === 'pink' ? 'red' : card.color === 'yellow' ? 'orange' : 'teal'}-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-slate-400 mb-4">{card.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className={`w-4 h-4 text-${card.color}-400`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-slate-900/50" ref={servicesSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${servicesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text from-cyan-400 via-blue-400 to-purple-400">Our Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end solutions for modern AI-powered applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                color: 'cyan',
                title: 'Full-Stack Development',
                slug: '/services/fullstack-development',
                desc: 'AI-powered web and mobile applications with modern frameworks and intelligent features.',
                highlights: ['React & Next.js', 'ML API Development', 'Cloud-Native Apps']
              },
              {
                icon: RefreshCw,
                color: 'blue',
                title: 'Legacy Migration',
                slug: '/services/legacy-migration',
                desc: 'Transform outdated systems into modern, cloud-native solutions with AI-powered automation.',
                highlights: ['COBOL to Java', 'Microservices', 'Zero Downtime']
              },
              {
                icon: Server,
                color: 'purple',
                title: 'AI Infrastructure',
                slug: '/services/ai-infrastructure',
                desc: 'Enterprise-grade MLOps infrastructure with automated scaling and monitoring.',
                highlights: ['Multi-Cloud', 'Auto-Scaling', '99.9% Uptime']
              },
              {
                icon: Brain,
                color: 'green',
                title: 'RAG Pipelines',
                slug: '/services/rag-pipelines',
                desc: 'Intelligent document retrieval systems that ground AI in your organizational data.',
                highlights: ['Vector Search', 'Multi-Modal', 'Source Attribution']
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  to={service.slug}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-${service.color}-400/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-${service.color}-500/20 ${servicesSection.isVisible ? 'animate-scale-in' : 'opacity-0'} block`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-${service.color}-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <Icon className={`w-8 h-8 text-${service.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className={`w-4 h-4 text-${service.color}-400`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex items-center gap-2 text-${service.color}-400 font-semibold group-hover:gap-3 transition-all`}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="speed" className="py-20 px-6 bg-slate-800/50" ref={speedSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${speedSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-2">
                <Gauge className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm">VELOCITY ENGINE</span>
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                <span className="gradient-text from-cyan-400 via-blue-400 to-purple-400">
                  Agile Development & Rapid Prototyping
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                We've cracked the code on rapid development. Ship quality products at a pace that seems impossible.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, color: 'cyan', title: '48-Hour Kickoff', desc: 'From first call to first prototype in 2 days. See progress immediately, not eventually.' },
                  { icon: Target, color: 'blue', title: 'Sprint Cycles', desc: 'Weekly deployments. Continuous feedback loops. Ship features while they\'re still hot.' },
                  { icon: CheckCircle2, color: 'purple', title: 'Production Quality', desc: 'Fast doesn\'t mean fragile. Clean code, tested, scalable, and ready for real users.' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                      <div className={`w-12 h-12 bg-${item.color}-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 text-${item.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`relative ${speedSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-float"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Speed Stack</h3>
                <div className="space-y-6">
                  {[
                    { tech: 'React / Next.js / TypeScript', level: 'RAPID', width: 95, color: 'cyan' },
                    { tech: 'Node.js / Python / Go', level: 'RAPID', width: 92, color: 'blue' },
                    { tech: 'AI / LLM / Agents', level: 'BLEEDING EDGE', width: 90, color: 'purple' },
                    { tech: 'Cloud / DevOps / CI/CD', level: 'AUTOMATED', width: 88, color: 'pink' }
                  ].map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300">{skill.tech}</span>
                        <span className={`text-${skill.color}-400 font-bold text-sm`}>{skill.level}</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${skill.color}-400 to-${skill.color === 'cyan' ? 'blue' : skill.color === 'blue' ? 'purple' : skill.color === 'purple' ? 'pink' : 'cyan'}-500 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: speedSection.isVisible ? `${skill.width}%` : '0%',
                            transitionDelay: `${idx * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-slate-800/50" ref={testimonialsSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${testimonialsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text from-cyan-400 to-purple-400">What Builders Say</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't take our word for it—here's what our clients experienced
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                quote: "goAI is playing a key role in modernizing our legacy systems into a future-ready, AI-powered platform, with measurable impact.",
                author: "Veteran Leader in Embedded Systems",
                role: "CXO, Mid-size Product Engineering Company",
                rating: 5,
                gradient: "from-cyan-400 to-blue-500"
              },
              {
                quote: "The app got crews out nearly an hour faster during the last storm, avoiding a major outage and improved our regulatory scorecard",
                author: "Senior Operations Leader",
                role: "Network Operations Supervisor, Integrated Electric Utility",
                rating: 5,
                gradient: "from-blue-400 to-purple-500"
              },
              {
                quote: "Real-time dashboards replaced our manual spreadsheets completely. We can now generate compliant reports instantly",
                author: "Senior Leader in HR",
                role: "Vice President, HR, Large E-commerce Retailer",
                rating: 5,
                gradient: "from-purple-400 to-pink-500"
              },
              {
                quote: "I am a big fan of goAI!! Loved loved loved the WhatsApp and Google chat entry points. Truly the way to go!",
                author: "Hackathon Participant",
                role: "Google Agentic AI Hackathon",
                rating: 5,
                gradient: "from-pink-400 to-cyan-500"
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className={`group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 ${testimonialsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-xl font-bold`}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 px-6 bg-slate-900/50" ref={approachSection.ref}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-5xl font-bold mb-6 ${approachSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="gradient-text from-cyan-400 to-purple-400">Our Agile Sprint Process</span>
          </h2>
          <p className={`text-xl text-slate-300 mb-16 max-w-3xl mx-auto ${approachSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Our battle-tested process for shipping at lightning speed
          </p>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-slate-700/30">
              <div
                className={`h-full bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 transition-all duration-2000 ease-out`}
                style={{
                  width: approachSection.isVisible ? '100%' : '0%',
                  transitionDelay: '0.2s'
                }}
              ></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '1', title: 'Sprint Zero', desc: '48 hours. Scope locked. Architecture mapped. First prototype deployed.', color: 'cyan', icon: RocketIcon },
                { num: '2', title: 'Weekly Sprints', desc: 'Ship features every 7 days. Continuous deployment. Real progress, tracked.', color: 'blue', icon: Target },
                { num: '3', title: 'Daily Sync', desc: '15-minute standups. No blockers. Maximum velocity maintained.', color: 'purple', icon: Zap },
                { num: '4', title: 'Launch Fast', desc: 'Production-ready in weeks. Iterate based on real user feedback.', color: 'pink', icon: TrendingUp }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className={`space-y-4 relative ${approachSection.isVisible ? 'animate-scale-in' : 'opacity-0'} hover:-translate-y-2 transition-transform`} style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className={`relative w-20 h-20 bg-gradient-to-br from-${step.color}-400 to-${step.color === 'cyan' ? 'blue' : step.color === 'blue' ? 'purple' : step.color === 'purple' ? 'pink' : 'cyan'}-500 rounded-2xl flex items-center justify-center mx-auto hover:rotate-12 transition-transform hover:scale-110 z-10 ring-4 ring-slate-900`}>
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

          <div className={`mt-16 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 ${approachSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-cyan-400 text-4xl font-bold mb-2">
                  <AnimatedCounter end={24} duration={1500} suffix="/7" isVisible={approachSection.isVisible} />
                </div>
                <div className="text-slate-400">Support Available</div>
              </div>
              <div>
                <div className="text-blue-400 text-4xl font-bold mb-2">
                  <AnimatedCounter end={15} duration={1500} suffix=" min" isVisible={approachSection.isVisible} />
                </div>
                <div className="text-slate-400">Daily Standups</div>
              </div>
              <div>
                <div className="text-purple-400 text-4xl font-bold mb-2">
                  <AnimatedCounter end={7} duration={1500} suffix=" days" isVisible={approachSection.isVisible} />
                </div>
                <div className="text-slate-400">Sprint Cycles</div>
              </div>
              <div>
                <div className="text-pink-400 text-4xl font-bold mb-2">
                  <AnimatedCounter end={0} duration={1500} suffix="" isVisible={approachSection.isVisible} />
                </div>
                <div className="text-slate-400">Surprises</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={ctaSection.ref}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden ${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-10 animate-gradient"></div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2 mb-2 animate-pulse-glow">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm">TIME IS MONEY</span>
              </div>
              <h2 className="text-5xl font-bold">
                <span className="gradient-text from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                  Stop Waiting. Start Shipping.
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Every day you wait is a day your competitors get ahead. Let's get your product in users' hands—fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 inline-flex items-center gap-3">
                  Launch in 2 Weeks
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="border-2 border-cyan-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all hover:scale-105">
                  See Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
