import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SEO } from '../components/SEO';

export function PrivacyPolicyPage() {
  const heroSection = useScrollAnimation();
  const contentSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Privacy Policy - goAI"
        description="goAI's privacy policy. Learn how we protect your data and respect your privacy while delivering rapid development services."
        keywords="privacy policy, data protection, goAI privacy"
        url="https://goai.solutions/privacy-policy"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <section className="pt-32 pb-20 px-6" ref={heroSection.ref}>
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">PRIVACY POLICY</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text from-cyan-400 to-blue-400">Privacy Policy</span>
              </h1>
              <p className="text-xl text-slate-300">
                Last Updated: November 12, 2025
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-6" ref={contentSection.ref}>
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 md:p-12 ${contentSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg mb-8">
                  At goAI Technologies ("goAI", "we", "us", or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                  <Lock className="w-6 h-6" />
                  1. Information We Collect
                </h2>
                <p className="text-slate-300 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li>Contact information (name, email address, phone number, company name)</li>
                  <li>Project details and requirements when you engage our services</li>
                  <li>Communication records, including emails and messages</li>
                  <li>Payment and billing information (processed securely through third-party providers)</li>
                  <li>Information you provide when filling out forms on our website</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                  <Eye className="w-6 h-6" />
                  2. How We Use Your Information
                </h2>
                <p className="text-slate-300 mb-4">
                  goAI uses the information we collect to:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our rapid development services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your inquiries, comments, and requests</li>
                  <li>Send you technical updates, security alerts, and support messages</li>
                  <li>Deliver personalized content and recommendations</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-slate-300 mb-4">
                  goAI values your trust and does not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business, conducting our operations, or serving our users, provided they agree to keep this information confidential.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with your explicit consent or at your direction.</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                  <Lock className="w-6 h-6" />
                  4. Data Security
                </h2>
                <p className="text-slate-300 mb-6">
                  goAI implements industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use encryption, secure servers, and access controls to safeguard your data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                  <FileText className="w-6 h-6" />
                  5. Your Rights and Choices
                </h2>
                <p className="text-slate-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-slate-300 mb-6">
                  To exercise these rights, please contact us at <a href="mailto:info@goai.solutions" className="text-cyan-400 hover:text-cyan-300">info@goai.solutions</a>.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400">6. Cookies and Tracking Technologies</h2>
                <p className="text-slate-300 mb-6">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more information, please see our <a href="/cookie-policy" className="text-cyan-400 hover:text-cyan-300">Cookie Policy</a>.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400">7. Data Retention</h2>
                <p className="text-slate-300 mb-6">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400">8. International Data Transfers</h2>
                <p className="text-slate-300 mb-6">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400">9. Children's Privacy</h2>
                <p className="text-slate-300 mb-6">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400">10. Changes to This Privacy Policy</h2>
                <p className="text-slate-300 mb-6">
                  goAI may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-cyan-400">11. Contact Us</h2>
                <p className="text-slate-300 mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                  <p className="text-slate-300 mb-2"><strong>goAI Technologies</strong></p>
                  <p className="text-slate-300 mb-2">Email: <a href="mailto:info@goai.solutions" className="text-cyan-400 hover:text-cyan-300">info@goai.solutions</a></p>
                  <p className="text-slate-300 mb-2">Phone: <a href="tel:+17865301555" className="text-cyan-400 hover:text-cyan-300">+1 (786)-530-1555</a></p>
                  <p className="text-slate-300">Website: <a href="https://goai.solutions" className="text-cyan-400 hover:text-cyan-300">goai.solutions</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

