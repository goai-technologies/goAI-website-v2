import { Lightbulb, ArrowRight, CheckCircle2, MessageCircle, Heart, Map, Users, Code2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NinjaAnimation } from '../components/NinjaAnimation';
import { SEO } from '../components/SEO';

export function NonTechFoundersPage() {
  const heroSection = useScrollAnimation();
  const challengeSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const resultsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Non-Tech Founders - Turn Your Vision Into Reality"
        description="Got an idea but no technical co-founder? We speak human. Turn your vision into a working product with plain-English communication and end-to-end guidance."
        keywords="non-technical founder, startup without cto, technical co-founder alternative, product development for founders"
        url="https://goai.dev/non-tech-founders"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <NinjaAnimation />
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" ref={heroSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,179,8,0.1),transparent_50%)] animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className={`max-w-4xl ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-2 mb-6">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">NON-TECH FOUNDERS</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Your Vision, <span className="gradient-text from-yellow-400 to-orange-500">Our Execution</span>
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              You don't need a technical co-founder. You need a team that speaks human, understands your vision, and builds it exactly how you imagined. That's us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Build My Idea
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <Link to="/contact" className="border-2 border-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400/10 transition-all hover:scale-105 inline-flex items-center justify-center">
                Discuss My Vision
              </Link>
            </div>
          </div>

          <div ref={heroSection.ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '100', suffix: '+', label: 'Non-Tech Founders Helped' },
              { value: '0', suffix: '', label: 'Technical Jargon' },
              { value: '48', suffix: 'hrs', label: 'First Mockup Ready' },
              { value: '100', suffix: '%', label: 'Clear Communication' }
            ].map((stat, idx) => (
              <div key={idx} className={`text-center ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-3xl font-bold gradient-text from-yellow-400 to-orange-400 mb-2">
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
              <span className="gradient-text from-yellow-400 to-orange-400">You're Not Alone</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Common challenges non-technical founders face
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: MessageCircle, title: 'Lost in Translation', desc: 'Developers speak code. You speak business. Communication breakdowns kill great ideas.' },
              { icon: Heart, title: 'Finding the Right Partner', desc: 'Technical co-founders are hard to find, expensive to hire, and risky to work with.' },
              { icon: Map, title: 'No Technical Roadmap', desc: 'You know what you want, but have no idea what\'s possible, realistic, or cost-effective.' },
              { icon: Users, title: 'Trust Issues', desc: 'How do you know if developers are building it right when you can\'t read the code?' }
            ].map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 ${challengeSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
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
              <span className="gradient-text from-yellow-400 to-orange-400">How We Work With You</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Plain English. Visual progress. Total transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: 'Speak Human', desc: 'No technical jargon. We explain everything in plain English you can actually understand.' },
              { icon: Map, title: 'Visual Everything', desc: 'Mockups, prototypes, demos. See exactly what you\'re getting before we build it.' },
              { icon: Heart, title: 'Full Transparency', desc: 'Weekly updates, daily access, continuous feedback. You\'re involved every step.' }
            ].map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-yellow-400/50 transition-all hover:shadow-xl hover:shadow-yellow-500/20 ${solutionSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-slate-400">{solution.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-yellow-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Guaranteed</span>
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
              <span className="gradient-text from-yellow-400 to-orange-400">Your Journey With Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Vision Session', desc: 'Tell us your idea in your words. We listen, ask questions, understand your goals.' },
              { num: '2', title: 'Visual Mockups', desc: 'See exactly what we\'ll build. Click through prototypes. Give feedback.' },
              { num: '3', title: 'Weekly Check-ins', desc: 'Watch it come to life. Test features. Request changes. Stay in control.' },
              { num: '4', title: 'Launch Support', desc: 'We don\'t disappear. Training, support, and guidance post-launch.' }
            ].map((step, idx) => (
              <div key={idx} className={`text-center ${processSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6">
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
            <h3 className="text-3xl font-bold mb-8 text-center">Founder Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: 150, suffix: '+', label: 'Non-Tech Founders Helped', color: 'yellow' },
                { value: 100, suffix: '%', label: 'Satisfaction Rate', color: 'orange' },
                { value: 25, suffix: 'M+', label: 'In Funding Raised', color: 'yellow' }
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className={`text-5xl font-bold gradient-text from-${metric.color}-400 to-orange-500 mb-2`}>
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
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-10 animate-gradient"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl font-bold">
                <span className="gradient-text from-yellow-400 to-orange-400">Bring Your Idea to Life</span>
              </h2>
              <p className="text-xl text-slate-300">
                You've got the vision. We've got the execution. Let's build something amazing together.
              </p>
              <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-105 inline-flex items-center gap-3">
                Start Building Today
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
