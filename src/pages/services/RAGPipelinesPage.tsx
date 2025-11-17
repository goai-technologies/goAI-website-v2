import { Search, Database, Brain, FileText, Image, TrendingUp, CheckCircle2, Layers, Zap, Cloud, Shield, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { CalendarBooking } from '../../components/CalendarBooking';
import { SEO } from '../../components/SEO';
import { LogoScroller } from '../../components/LogoScroller';
import { companyLogos } from '../../constants/logos';

export function RAGPipelinesPage() {
  const heroSection = useScrollAnimation();
  const benefitsSection = useScrollAnimation();
  const architectureSection = useScrollAnimation();
  const mediaTypesSection = useScrollAnimation();
  const dataStoresSection = useScrollAnimation();
  const useCasesSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const benefits = [
    { icon: TrendingUp, title: 'Up-to-Date Information', desc: 'Access current data beyond model training cutoffs for accurate, timely responses.' },
    { icon: Shield, title: 'Reduced Hallucinations', desc: 'Ground AI responses in factual data, dramatically reducing false information.' },
    { icon: Brain, title: 'Domain Expertise', desc: 'Leverage organizational knowledge without expensive model retraining.' },
    { icon: Zap, title: 'Cost-Effective', desc: 'More affordable than fine-tuning while maintaining high accuracy.' },
    { icon: Search, title: 'Source Attribution', desc: 'Transparent citations showing exactly where information comes from.' },
    { icon: Database, title: 'Flexible Integration', desc: 'Connect to any data source: databases, documents, APIs, real-time feeds.' }
  ];

  const architecture = [
    { num: '1', title: 'Document Ingestion', desc: 'Collect and process data from diverse sources', icon: FileText },
    { num: '2', title: 'Chunking & Embedding', desc: 'Break content into semantic chunks with vector embeddings', icon: Layers },
    { num: '3', title: 'Vector Storage', desc: 'Store embeddings in optimized vector databases', icon: Database },
    { num: '4', title: 'Query Processing', desc: 'Convert user queries into semantic embeddings', icon: Search },
    { num: '5', title: 'Semantic Retrieval', desc: 'Find most relevant content using similarity search', icon: Brain },
    { num: '6', title: 'Response Generation', desc: 'Generate contextual answers using retrieved data', icon: Zap }
  ];

  const mediaTypes = [
    { icon: FileText, title: 'Text Documents', desc: 'PDFs, Word docs, web pages, markdown files', color: 'cyan' },
    { icon: Database, title: 'Structured Data', desc: 'Databases, spreadsheets, CSV files, JSON', color: 'blue' },
    { icon: Image, title: 'Images & Media', desc: 'OCR processing, multimodal embeddings', color: 'purple' },
    { icon: TrendingUp, title: 'Real-Time Sources', desc: 'Live data feeds, APIs, streaming data', color: 'pink' }
  ];

  const dataStores = [
    {
      category: 'Relational DBs',
      stores: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'Oracle'],
      color: 'cyan'
    },
    {
      category: 'NoSQL',
      stores: ['MongoDB', 'Firestore', 'DynamoDB', 'DocumentDB'],
      color: 'blue'
    },
    {
      category: 'Cloud Storage',
      stores: ['AWS S3', 'Google Cloud', 'Azure Blob', 'Dropbox'],
      color: 'purple'
    },
    {
      category: 'Vector DBs',
      stores: ['Pinecone', 'Milvus', 'Weaviate', 'Qdrant'],
      color: 'pink'
    },
    {
      category: 'Document Mgmt',
      stores: ['SharePoint', 'Google Drive', 'Confluence', 'Notion'],
      color: 'green'
    }
  ];

  const useCases = [
    {
      title: 'Legal Document Analysis',
      desc: 'Intelligent search across contracts, case law, and legal documents with source citations.',
      icon: FileText,
      benefits: ['Instant document retrieval', 'Precedent analysis', 'Contract review automation']
    },
    {
      title: 'Customer Support',
      desc: 'Knowledge base powered responses with accurate product information and troubleshooting.',
      icon: Search,
      benefits: ['24/7 automated support', 'Consistent answers', 'Reduced ticket volume']
    },
    {
      title: 'Enterprise Document Search',
      desc: 'Multi-modal search across organizational knowledge with semantic understanding.',
      icon: Database,
      benefits: ['Cross-department search', 'Intelligent summaries', 'Version tracking']
    }
  ];

  return (
    <>
      <SEO
        title="RAG Pipeline Development | Retrieval-Augmented Generation Services"
        description="Build intelligent RAG pipelines for accurate AI responses. Connect LLMs to your data with semantic search, vector databases, and multi-modal retrieval."
        keywords="RAG pipeline, retrieval augmented generation, vector database, semantic search, LLM integration, AI knowledge base, document search, enterprise AI"
        url="https://goai.dev/services/rag-pipelines"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
        <div className="fixed top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse"></div>

          <div className="max-w-7xl mx-auto relative z-10" ref={heroSection.ref}>
            <div className={`text-center space-y-8 ${heroSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/30 rounded-full px-6 py-2 mb-4 animate-pulse-glow">
                <Brain className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">RAG PIPELINES</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text from-green-400 via-cyan-400 to-blue-500 animate-gradient">
                  Intelligent RAG Pipelines
                </span>
                <br />
                <span className="text-white">for Accurate AI</span>
              </h1>

              <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto">
                Combine large language models with your data for accurate, contextual responses using Retrieval-Augmented Generation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <CalendarBooking
                  buttonText="Build Your RAG System"
                  className="group bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105 flex items-center gap-2"
                />
                <a href="#architecture" className="border-2 border-green-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400/10 transition-all hover:scale-105 text-white">
                  See How It Works
                </a>
              </div>
            </div>

            <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-green-400 to-cyan-400">
                  <AnimatedCounter end={95} duration={1500} suffix="%" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Accuracy Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-cyan-400 to-blue-400">
                  <AnimatedCounter end={80} duration={1500} suffix="%" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Less Hallucination</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-blue-400 to-purple-400">
                  <AnimatedCounter end={10} duration={1500} suffix="x" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Faster Search</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text from-purple-400 to-green-400">
                  <AnimatedCounter end={100} duration={1500} suffix="+" isVisible={heroSection.isVisible} />
                </div>
                <div className="text-slate-400">Data Sources</div>
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

        <section className="py-20 px-6 bg-slate-900/50" ref={benefitsSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${benefitsSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-green-400 to-cyan-400">Why RAG Pipelines?</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Enhance LLMs with organizational knowledge and real-time data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-green-400/50 transition-all ${benefitsSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-400" />
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

        <section id="architecture" className="py-20 px-6 bg-slate-800/50" ref={architectureSection.ref}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-5xl font-bold mb-6 ${architectureSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="gradient-text from-green-400 to-cyan-400">RAG Pipeline Architecture</span>
            </h2>
            <p className={`text-xl text-slate-300 mb-16 max-w-3xl mx-auto ${architectureSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Six-stage process for intelligent document retrieval and generation
            </p>

            <div className="relative">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-slate-700/30">
                <div
                  className={`h-full bg-gradient-to-r from-green-400 via-cyan-400 via-blue-400 to-purple-400 transition-all duration-2000 ease-out`}
                  style={{
                    width: architectureSection.isVisible ? '100%' : '0%',
                    transitionDelay: '0.2s'
                  }}
                ></div>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                {architecture.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className={`space-y-4 relative ${architectureSection.isVisible ? 'animate-scale-in' : 'opacity-0'} hover:-translate-y-2 transition-transform`} style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto hover:rotate-12 transition-transform hover:scale-110 z-10 ring-4 ring-slate-800">
                        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">{step.num}</span>
                        <Icon className="w-6 h-6 opacity-20" />
                      </div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="text-slate-400 text-sm">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50" ref={mediaTypesSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${mediaTypesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-green-400 to-cyan-400">Supported Media Types</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Multi-modal RAG pipelines for diverse data sources
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mediaTypes.map((media, idx) => {
                const Icon = media.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-${media.color}-400/50 transition-all text-center ${mediaTypesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 bg-${media.color}-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon className={`w-8 h-8 text-${media.color}-400`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{media.title}</h3>
                    <p className="text-slate-400">{media.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-800/50" ref={dataStoresSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${dataStoresSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-green-400 to-cyan-400">Supported Data Stores</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Connect to any data source in your organization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {dataStores.map((store, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-green-400/50 transition-all ${dataStoresSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h3 className={`text-lg font-bold mb-4 text-${store.color}-400`}>{store.category}</h3>
                  <ul className="space-y-2">
                    {store.stores.map((item, sidx) => (
                      <li key={sidx} className="text-slate-300 flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 bg-${store.color}-400 rounded-full`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/50" ref={useCasesSection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${useCasesSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-4">
                <span className="gradient-text from-green-400 to-cyan-400">RAG Use Cases</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Real-world applications of RAG pipelines
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-green-400/50 transition-all hover:-translate-y-2 ${useCasesSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-green-400/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                    <p className="text-slate-400 mb-6">{useCase.desc}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" ref={ctaSection.ref}>
          <div className="max-w-4xl mx-auto text-center">
            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700 relative overflow-hidden ${ctaSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 opacity-10 animate-gradient"></div>
              <div className="relative z-10 space-y-6">
                <Brain className="w-16 h-16 text-green-400 mx-auto" />
                <h2 className="text-5xl font-bold">
                  <span className="gradient-text from-green-400 via-cyan-400 to-blue-400 animate-gradient">
                    Build Your RAG Pipeline
                  </span>
                </h2>
                <p className="text-xl text-slate-300">
                  Transform your data into intelligent, context-aware AI responses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <CalendarBooking
                    buttonText="Start Your RAG Project"
                    className="group bg-gradient-to-r from-green-500 to-cyan-500 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105 inline-flex items-center gap-3"
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
