import { Bot, ArrowRight, CheckCircle2, Zap, Brain, Code2, Database, Sparkles, TrendingUp, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NinjaAnimation } from '../components/NinjaAnimation';
import { SEO } from '../components/SEO';
import { LogoScroller } from '../components/LogoScroller';
import { companyLogos } from '../constants/logos';

export function AIPioneersPage() {
  const heroSection = useScrollAnimation();
  const techSection = useScrollAnimation();
  const approachSection = useScrollAnimation();
  const resultsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="AI Agent Pioneers - Bleeding Edge AI Development"
        description="Building the next generation of AI? We live on the bleeding edge. LLMs, agents, automation—we ship it fast. LangChain, vector databases, custom models."
        keywords="ai development, llm integration, ai agents, langchain, vector databases, machine learning, ai automation"
        url="https://goai.dev/ai-pioneers"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <NinjaAnimation />
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" ref={heroSection.ref}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(236,72,153,0.1),transparent_50%)] animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className={`max-w-4xl ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/30 rounded-full px-6 py-2 mb-6">
              <Bot className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-semibold">AI AGENT PIONEERS</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Build the <span className="gradient-text from-pink-400 via-purple-400 to-cyan-400">Future of AI</span>
            </h1>

            <p className="text-2xl text-slate-300 mb-8 leading-relaxed">
              You're building the next generation of AI. We live on the bleeding edge with you. LLMs, agents, RAG, fine-tuning—we ship it all at lightning speed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Build AI Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <Link to="/contact" className="border-2 border-pink-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-400/10 transition-all hover:scale-105 inline-flex items-center justify-center">
                Discuss Your Vision
              </Link>
            </div>
          </div>

          <div ref={heroSection.ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10', suffix: '+', label: 'LLM Integrations' },
              { value: '5M', suffix: '+', label: 'Tokens/Day Processed' },
              { value: '<100', suffix: 'ms', label: 'Average Latency' },
              { value: '24', suffix: '/7', label: 'Model Monitoring' }
            ].map((stat, idx) => (
              <div key={idx} className={`text-center ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-3xl font-bold gradient-text from-pink-400 to-cyan-400 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
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

      <section className="py-20 px-6 bg-slate-900/50" ref={techSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${techSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text from-pink-400 to-cyan-400">Our AI Arsenal</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks we ship with daily
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: 'LLM Integration', techs: ['OpenAI GPT-4', 'Anthropic Claude', 'Google Gemini', 'Open Source Models'], color: 'pink' },
              { icon: Bot, title: 'Agent Frameworks', techs: ['LangChain', 'LlamaIndex', 'AutoGPT', 'Custom Agents'], color: 'purple' },
              { icon: Database, title: 'Vector Databases', techs: ['Pinecone', 'Weaviate', 'Chroma', 'Qdrant'], color: 'cyan' },
              { icon: Code2, title: 'Fine-Tuning', techs: ['LoRA', 'QLoRA', 'Custom Training', 'Prompt Engineering'], color: 'blue' },
              { icon: Sparkles, title: 'RAG Systems', techs: ['Embeddings', 'Semantic Search', 'Context Windows', 'Retrieval'], color: 'pink' },
              { icon: TrendingUp, title: 'ML Ops', techs: ['Model Monitoring', 'A/B Testing', 'Cost Optimization', 'Scaling'], color: 'purple' }
            ].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-${tech.color}-400/50 transition-all hover:shadow-xl ${techSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className={`w-16 h-16 bg-gradient-to-br from-${tech.color}-400 to-${tech.color === 'pink' ? 'purple' : tech.color === 'purple' ? 'cyan' : 'blue'}-500 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                  <ul className="space-y-2">
                    {tech.techs.map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400">
                        <CheckCircle2 className={`w-4 h-4 text-${tech.color}-400`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={approachSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${approachSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text from-pink-400 to-cyan-400">How We Build AI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Research & Design', desc: 'Model selection, architecture design, cost optimization planning.' },
              { num: '2', title: 'Rapid Prototyping', desc: 'Quick POCs to validate approach. Iterate based on real results.' },
              { num: '3', title: 'Production Build', desc: 'Scalable infrastructure, monitoring, fallbacks, cost controls.' },
              { num: '4', title: 'Continuous Improvement', desc: 'A/B testing, prompt tuning, model upgrades, performance optimization.' }
            ].map((step, idx) => (
              <div key={idx} className={`text-center ${approachSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50" ref={resultsSection.ref}>
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 ${resultsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-8 text-center">AI Project Success</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: 15, suffix: '+', label: 'AI Products Shipped', color: 'pink' },
                { value: 90, suffix: '%', label: 'Cost Reduction', color: 'purple' },
                { value: 50, suffix: 'M+', label: 'AI Requests Handled', color: 'cyan' }
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className={`text-5xl font-bold gradient-text from-${metric.color}-400 to-cyan-500 mb-2`}>
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
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-500 opacity-10 animate-gradient"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl font-bold">
                <span className="gradient-text from-pink-400 via-purple-400 to-cyan-400">Ship AI Faster</span>
              </h2>
              <p className="text-xl text-slate-300">
                Stop experimenting, start shipping. Let's build production AI together.
              </p>
              <button className="group bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105 inline-flex items-center gap-3">
                Build AI With Us
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
