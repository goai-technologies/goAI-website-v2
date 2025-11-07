import { Linkedin, Mail, Brain, Code, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SEO } from '../components/SEO';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  icon: any;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Deepak N Belavadi',
    role: 'Gen AI & Applied AI Solutions',
    bio: 'Tech Vision with expertise in gen AI and AI-driven Product & Platform Innovation',
    icon: Brain
  },
  {
    name: 'Deepak Swamy',
    role: 'AI Strategy & Innovation',
    bio: 'Product & Technology Strategy for AI-enabled transformation at scale',
    icon: Zap
  },
  {
    name: 'Parth Verma',
    role: 'Gen AI and Agentic AI',
    bio: 'GenAI and Agentic AI expert with >6 years experience in the space',
    icon: Brain
  },
  {
    name: 'Sree Harshavardhana',
    role: 'Product Engineering',
    bio: 'Engineering Leader with > 20 years experience in the industry',
    icon: Code
  },
  {
    name: 'Vivian D\'Souza',
    role: 'Gen AI and Agentic AI',
    bio: 'GenAI and Agentic AI expert with ~8 years experience',
    icon: Brain
  },
  {
    name: 'AI Agents',
    role: 'Task based Agents',
    bio: 'Specialized AI agents for task automation and intelligent workflows',
    icon: Zap
  }
];

export function TeamPage() {
  const heroSection = useScrollAnimation();
  const teamSection = useScrollAnimation();
  const cultureSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Our Team - Engineering Ninjas"
        description="Meet the world-class engineers obsessed with velocity. We've shipped products for millions and now help you do the same."
        keywords="engineering team, software developers, rapid development team, startup engineering"
        url="https://goai.dev/team"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-32 pb-20 px-6" ref={heroSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">MEET THE TEAM</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Engineering <span className="gradient-text from-cyan-400 to-blue-400">Ninjas</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A small team of world-class engineers obsessed with velocity. We've shipped products for millions of users and now we help you do the same.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={teamSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => {
              const Icon = member.icon;
              return (
                <div
                  key={idx}
                  className={`group ${teamSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 p-8 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-slate-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={cultureSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${cultureSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              Our <span className="gradient-text from-cyan-400 to-blue-400">Culture</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              What makes us different? We actually ship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Speed is Everything',
                desc: 'We measure success in deployments per day, not meetings per week. Velocity isn\'t a metric—it\'s our religion.',
                emoji: '⚡'
              },
              {
                title: 'No BS Policy',
                desc: 'Skip the corporate theater. We write code, ship products, and make impact. Everything else is optional.',
                emoji: '🎯'
              },
              {
                title: 'Always Learning',
                desc: 'Tech moves fast. We move faster. Bleeding edge tools, latest frameworks, continuous upskilling.',
                emoji: '🚀'
              },
              {
                title: 'Async-First',
                desc: 'Work when you\'re most productive. No mandatory 9-5. Results matter, not hours logged.',
                emoji: '🌍'
              },
              {
                title: 'Quality at Speed',
                desc: 'Fast doesn\'t mean sloppy. We write clean code, test thoroughly, and ship confidently.',
                emoji: '✨'
              },
              {
                title: 'Client Obsessed',
                desc: 'Your success is our success. We\'re not vendors—we\'re partners who care about your outcomes.',
                emoji: '🤝'
              }
            ].map((value, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-2 ${cultureSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{value.emoji}</div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-10 animate-gradient"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text from-cyan-400 via-blue-400 to-purple-400">Want to Work With Us?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                We're always looking for exceptional talent. If you ship fast and care about quality, let's talk.
              </p>
              <a
                href="mailto:careers@goai.dev"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                careers@goai.dev
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
