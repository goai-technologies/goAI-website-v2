import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CalendarBooking } from '../components/CalendarBooking';
import { SEO } from '../components/SEO';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    source: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const heroSection = useScrollAnimation();
  const formSection = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        source: '',
        message: ''
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEO
        title="Contact Us - Start Shipping in 48 Hours"
        description="Ready to accelerate your product? Book a call and we'll start shipping in 48 hours. Fast response guaranteed."
        keywords="contact goai, book consultation, rapid development inquiry, mvp consultation"
        url="https://goai.dev/contact"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-32 pb-20 px-6" ref={heroSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <Send className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">GET IN TOUCH</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Let's <span className="gradient-text from-cyan-400 to-blue-400">Ship Fast</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to accelerate your product? Book a call and we'll start shipping in 48 hours.
            </p>
            <div className="flex justify-center">
              <CalendarBooking
                buttonText="Schedule Your Free Call"
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 inline-flex items-center gap-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text from-cyan-400 to-blue-400">Or Fill Out the Form</span>
          </h2>
          <p className="text-slate-300 text-lg mb-2">
            Prefer to send us a message? We'll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" ref={formSection.ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className={`lg:col-span-2 ${formSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text from-cyan-400 to-blue-400">Contact Information</span>
              </h2>
              <p className="text-slate-300 mb-12 leading-relaxed text-lg">
                Drop us a message and we'll get back to you within 24 hours. Usually faster.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href="mailto:hello@goai.dev" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                      hello@goai.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <a href="tel:+1-555-SHIP-NOW" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                      +1 (555) SHIP-NOW
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Office</h3>
                    <p className="text-slate-300 text-lg">
                      San Francisco, CA<br />
                      (Remote-first team)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/30 rounded-2xl">
                <h3 className="font-bold text-lg mb-2 text-cyan-400">Response Time</h3>
                <p className="text-slate-300">
                  We typically respond within 4 hours during business hours (9 AM - 6 PM PST, Monday-Friday).
                </p>
              </div>
            </div>

            <div className={`lg:col-span-3 ${formSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-700">
                {success ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-slate-300 text-lg">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="source" className="block text-sm font-semibold mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="twitter">Twitter</option>
                        <option value="referral">Referral</option>
                        <option value="blog">Blog/Article</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text from-cyan-400 to-blue-400">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'How quickly can you start?',
                a: 'Within 48 hours. After our kickoff call, we start building immediately.'
              },
              {
                q: 'What if I need to scale the team?',
                a: 'We can add engineers within a week. Our network is deep and pre-vetted.'
              },
              {
                q: 'Do you sign NDAs?',
                a: 'Absolutely. We take confidentiality seriously and sign NDAs before any technical discussions.'
              },
              {
                q: 'What tech stacks do you work with?',
                a: 'We\'re stack-agnostic but specialize in React, Node.js, Python, and modern cloud infrastructure.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700"
              >
                <h3 className="font-bold text-lg mb-3 text-cyan-400">{faq.q}</h3>
                <p className="text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
