import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Calendar, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { CalendarBooking } from './CalendarBooking';
import { ScrollToSection } from './ScrollToSection';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <ScrollToSection to="/#work" className="hover:text-cyan-400 transition-all hover:scale-110">Work</ScrollToSection>
            <ScrollToSection to="/#clients" className="hover:text-cyan-400 transition-all hover:scale-110">Who We Serve</ScrollToSection>
            <div className="relative group">
              <button className="hover:text-cyan-400 transition-all hover:scale-110 flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-xl shadow-xl overflow-hidden transition-all duration-200">
                <Link
                  to="/services/fullstack-development"
                  className="block px-6 py-3 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all border-b border-slate-700/50"
                >
                  <div className="font-semibold">Full-Stack Development</div>
                  <div className="text-xs text-slate-400">AI-powered web & mobile apps</div>
                </Link>
                <Link
                  to="/services/legacy-migration"
                  className="block px-6 py-3 hover:bg-blue-400/10 hover:text-blue-400 transition-all border-b border-slate-700/50"
                >
                  <div className="font-semibold">Legacy Migration</div>
                  <div className="text-xs text-slate-400">Modernize outdated systems</div>
                </Link>
                <Link
                  to="/services/ai-infrastructure"
                  className="block px-6 py-3 hover:bg-purple-400/10 hover:text-purple-400 transition-all border-b border-slate-700/50"
                >
                  <div className="font-semibold">AI Infrastructure</div>
                  <div className="text-xs text-slate-400">Enterprise MLOps & scaling</div>
                </Link>
                <Link
                  to="/services/rag-pipelines"
                  className="block px-6 py-3 hover:bg-green-400/10 hover:text-green-400 transition-all"
                >
                  <div className="font-semibold">RAG Pipelines</div>
                  <div className="text-xs text-slate-400">Intelligent document retrieval</div>
                </Link>
              </div>
            </div>
            <Link to="/team" className="hover:text-cyan-400 transition-all hover:scale-110">Team</Link>
            <Link to="/blog" className="hover:text-cyan-400 transition-all hover:scale-110">Blog</Link>
            <CalendarBooking
              buttonText="Book a Call"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 animate-pulse-glow inline-flex items-center gap-2"
              icon={<Calendar className="w-4 h-4" />}
            />
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="py-16 px-6 border-t border-slate-800 bg-slate-900/50 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <Logo className="h-12 w-auto" />
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Engineering ninjas delivering rapid solutions at breakneck speed. From MVP to scale, we ship fast or die trying.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/goai-technologies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:scale-110 transition-all group">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                </a>
                <a href="https://github.com/goai-technologies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:scale-110 transition-all group">
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                </a>
                <Link to="/contact" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:scale-110 transition-all group">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><ScrollToSection to="/#work" className="text-slate-400 hover:text-cyan-400 transition-colors">Our Work</ScrollToSection></li>
                <li><ScrollToSection to="/#clients" className="text-slate-400 hover:text-cyan-400 transition-colors">Who We Serve</ScrollToSection></li>
                <li><ScrollToSection to="/#speed" className="text-slate-400 hover:text-cyan-400 transition-colors">How We Work</ScrollToSection></li>
                <li><ScrollToSection to="/#testimonials" className="text-slate-400 hover:text-cyan-400 transition-colors">Testimonials</ScrollToSection></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/team" className="text-slate-400 hover:text-cyan-400 transition-colors">Team</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400">© 2025 goAI. Ship Fast or Die Trying.</p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <Link to="/contact" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
