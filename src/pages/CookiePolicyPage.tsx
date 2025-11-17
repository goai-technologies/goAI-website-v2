import { Cookie, Settings, Shield, Info } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SEO } from '../components/SEO';

export function CookiePolicyPage() {
  const heroSection = useScrollAnimation();
  const contentSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Cookie Policy - goAI"
        description="goAI's cookie policy. Learn how we use cookies and tracking technologies to enhance your experience."
        keywords="cookie policy, cookies, tracking, goAI cookies"
        url="https://goai.solutions/cookie-policy"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <section className="pt-32 pb-20 px-6" ref={heroSection.ref}>
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
                <Cookie className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">COOKIE POLICY</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text from-purple-400 to-pink-400">Cookie Policy</span>
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
                  This Cookie Policy explains how goAI Technologies ("goAI", "we", "us", or "our") uses cookies and similar tracking technologies on our website and services. This policy should be read in conjunction with our <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-purple-400 flex items-center gap-3">
                  <Cookie className="w-6 h-6" />
                  1. What Are Cookies?
                </h2>
                <p className="text-slate-300 mb-6">
                  Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow websites to recognize your device and remember information about your visit, such as your preferences and actions.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-purple-400 flex items-center gap-3">
                  <Settings className="w-6 h-6" />
                  2. How We Use Cookies
                </h2>
                <p className="text-slate-300 mb-4">
                  goAI uses cookies and similar technologies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</li>
                  <li><strong>Analytics Cookies:</strong> We use analytics cookies to understand how visitors interact with our website, helping us improve our services and user experience.</li>
                  <li><strong>Functional Cookies:</strong> These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, personalized features.</li>
                  <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, such as which pages you visit most often, to help us optimize our website's performance.</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-purple-400 flex items-center gap-3">
                  <Info className="w-6 h-6" />
                  3. Types of Cookies We Use
                </h2>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Essential Cookies</h3>
                  <p className="text-slate-300 mb-2">
                    These cookies are strictly necessary for the operation of our website. They include:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                    <li>Session management cookies</li>
                    <li>Security and authentication cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Analytics and Performance Cookies</h3>
                  <p className="text-slate-300 mb-2">
                    We use these cookies to analyze website traffic and user behavior:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                    <li>Google Analytics cookies (anonymized data)</li>
                    <li>Page view and session tracking</li>
                    <li>User interaction tracking</li>
                  </ul>
                  <p className="text-slate-300 mt-3 text-sm">
                    These cookies help us understand which pages are most popular, how users navigate our site, and identify areas for improvement.
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Functional Cookies</h3>
                  <p className="text-slate-300 mb-2">
                    These cookies enable enhanced functionality and personalization:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                    <li>Language and region preferences</li>
                    <li>User interface customization</li>
                    <li>Form data retention</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-purple-400 flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  4. Third-Party Cookies
                </h2>
                <p className="text-slate-300 mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of our website and deliver advertisements. These third-party cookies include:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use our website. Google Analytics uses cookies to collect information such as how often users visit our site and what pages they visit.</li>
                  <li><strong>Social Media Platforms:</strong> Our website may include social media features (such as LinkedIn and GitHub links) that may set cookies on your device.</li>
                </ul>
                <p className="text-slate-300 mb-6">
                  These third-party cookies are subject to the respective third parties' privacy policies. We do not control these cookies, and you should check the third-party websites for more information about their cookie practices.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-purple-400">5. Cookie Duration</h2>
                <p className="text-slate-300 mb-4">
                  Cookies can be either "persistent" or "session" cookies:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They are used to maintain your session while browsing our website.</li>
                  <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and improve your experience on return visits.</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-purple-400">6. Managing Your Cookie Preferences</h2>
                <p className="text-slate-300 mb-4">
                  You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website's features.
                </p>
                <p className="text-slate-300 mb-4">
                  You can manage cookies through your browser settings. Here are links to instructions for popular browsers:
                </p>
                <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 ml-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Microsoft Edge</a></li>
                </ul>
                <p className="text-slate-300 mb-6">
                  You can also opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Google Analytics Opt-out Browser Add-on</a>.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-purple-400">7. Do Not Track Signals</h2>
                <p className="text-slate-300 mb-6">
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. goAI does not currently respond to DNT browser signals or mechanisms.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-purple-400">8. Updates to This Cookie Policy</h2>
                <p className="text-slate-300 mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Cookie Policy on our website and updating the "Last Updated" date. Your continued use of our website after such changes constitutes acceptance of the updated Cookie Policy.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-purple-400">9. Contact Us</h2>
                <p className="text-slate-300 mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                  <p className="text-slate-300 mb-2"><strong>goAI Technologies</strong></p>
                  <p className="text-slate-300 mb-2">Email: <a href="mailto:info@goai.solutions" className="text-purple-400 hover:text-purple-300">info@goai.solutions</a></p>
                  <p className="text-slate-300 mb-2">Phone: <a href="tel:+17865301555" className="text-purple-400 hover:text-purple-300">+1 (786)-530-1555</a></p>
                  <p className="text-slate-300">Website: <a href="https://goai.solutions" className="text-purple-400 hover:text-purple-300">goai.solutions</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


