import { FileText, Scale, CheckCircle2, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SEO } from '../components/SEO';

export function TermsOfServicePage() {
  const heroSection = useScrollAnimation();
  const contentSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Terms of Service - goAI"
        description="goAI's terms of service. Understand the terms and conditions for using our rapid development services."
        keywords="terms of service, terms and conditions, goAI terms"
        url="https://goai.solutions/terms-of-service"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <section className="pt-32 pb-20 px-6" ref={heroSection.ref}>
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
                <Scale className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">TERMS OF SERVICE</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text from-blue-400 to-purple-400">Terms of Service</span>
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
                  Welcome to goAI Technologies ("goAI", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website, services, and any software, applications, or tools provided by goAI. By accessing or using our services, you agree to be bound by these Terms.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  1. Acceptance of Terms
                </h2>
                <p className="text-slate-300 mb-6">
                  By accessing or using goAI's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our services.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-3">
                  <FileText className="w-6 h-6" />
                  2. Description of Services
                </h2>
                <p className="text-slate-300 mb-4">
                  goAI provides rapid software development services, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li>MVP (Minimum Viable Product) development</li>
                  <li>Full-stack application development</li>
                  <li>AI and machine learning solutions</li>
                  <li>Legacy system migration and modernization</li>
                  <li>Backlog clearing and sprint augmentation</li>
                  <li>Technical consulting and advisory services</li>
                </ul>
                <p className="text-slate-300 mb-6">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-3">
                  <Scale className="w-6 h-6" />
                  3. Service Agreements
                </h2>
                <p className="text-slate-300 mb-6">
                  Specific projects and engagements will be governed by separate written agreements ("Service Agreements") that detail the scope of work, deliverables, timelines, payment terms, and other project-specific terms. In the event of a conflict between these Terms and a Service Agreement, the Service Agreement shall prevail.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">4. User Responsibilities</h2>
                <p className="text-slate-300 mb-4">
                  You agree to:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information when engaging our services</li>
                  <li>Maintain the security of any credentials or access codes provided</li>
                  <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                  <li>Not interfere with or disrupt the integrity or performance of our services</li>
                  <li>Not attempt to gain unauthorized access to our systems or networks</li>
                  <li>Respect intellectual property rights and not infringe upon the rights of others</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">5. Intellectual Property Rights</h2>
                <p className="text-slate-300 mb-4">
                  <strong>goAI's Intellectual Property:</strong> All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and code, are owned by goAI or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong>Client Intellectual Property:</strong> Subject to the terms of your Service Agreement, you retain ownership of your proprietary information, data, and materials provided to goAI. You grant goAI a limited license to use such materials solely for the purpose of providing services to you.
                </p>
                <p className="text-slate-300 mb-6">
                  <strong>Work Product:</strong> Ownership of work product developed by goAI will be specified in your Service Agreement. Typically, upon full payment, ownership of custom-developed work product transfers to you, while goAI retains rights to any pre-existing tools, frameworks, or methodologies used.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">6. Payment Terms</h2>
                <p className="text-slate-300 mb-4">
                  Payment terms will be specified in your Service Agreement. Generally:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li>Payment is due according to the schedule specified in your Service Agreement</li>
                  <li>Late payments may incur interest charges as specified in the agreement</li>
                  <li>goAI reserves the right to suspend services for non-payment</li>
                  <li>All fees are non-refundable unless otherwise specified in your Service Agreement</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-blue-400 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6" />
                  7. Warranties and Disclaimers
                </h2>
                <p className="text-slate-300 mb-4">
                  <strong>Service Warranties:</strong> goAI warrants that services will be performed in a professional and workmanlike manner consistent with industry standards. Specific warranties, if any, will be detailed in your Service Agreement.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong>Disclaimers:</strong> EXCEPT AS EXPRESSLY SET FORTH IN YOUR SERVICE AGREEMENT, GOAI'S SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES of MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p className="text-slate-300 mb-6">
                  goAI does not warrant that our services will be uninterrupted, error-free, or completely secure. You acknowledge that software development involves inherent risks and that goAI cannot guarantee specific outcomes or results.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">8. Limitation of Liability</h2>
                <p className="text-slate-300 mb-6">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, GOAI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OUR SERVICES. GOAI'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO GOAI IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR AS OTHERWISE SPECIFIED IN YOUR SERVICE AGREEMENT.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">9. Indemnification</h2>
                <p className="text-slate-300 mb-6">
                  You agree to indemnify, defend, and hold harmless goAI, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services, violation of these Terms, or infringement of any intellectual property or other rights of any person or entity.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">10. Confidentiality</h2>
                <p className="text-slate-300 mb-6">
                  Both parties agree to maintain the confidentiality of proprietary information disclosed during the course of our engagement. Specific confidentiality obligations will be detailed in your Service Agreement or a separate Non-Disclosure Agreement (NDA).
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">11. Termination</h2>
                <p className="text-slate-300 mb-4">
                  Either party may terminate a Service Agreement in accordance with its terms. goAI may also suspend or terminate your access to our services immediately, without prior notice, if you breach these Terms or engage in fraudulent, illegal, or harmful activities.
                </p>
                <p className="text-slate-300 mb-6">
                  Upon termination, your right to use our services will cease immediately. Provisions that by their nature should survive termination will survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">12. Dispute Resolution</h2>
                <p className="text-slate-300 mb-6">
                  Any disputes arising out of or relating to these Terms or our services shall be resolved through good faith negotiations. If negotiations fail, disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, or as otherwise specified in your Service Agreement. The arbitration shall take place in San Francisco, California, unless otherwise agreed.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">13. Governing Law</h2>
                <p className="text-slate-300 mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">14. Changes to Terms</h2>
                <p className="text-slate-300 mb-6">
                  goAI reserves the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-blue-400">15. Contact Information</h2>
                <p className="text-slate-300 mb-6">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                  <p className="text-slate-300 mb-2"><strong>goAI Technologies</strong></p>
                  <p className="text-slate-300 mb-2">Email: <a href="mailto:info@goai.solutions" className="text-blue-400 hover:text-blue-300">info@goai.solutions</a></p>
                  <p className="text-slate-300 mb-2">Phone: <a href="tel:+17865301555" className="text-blue-400 hover:text-blue-300">+1 (786)-530-1555</a></p>
                  <p className="text-slate-300">Website: <a href="https://goai.solutions" className="text-blue-400 hover:text-blue-300">goai.solutions</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

