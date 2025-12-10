/**
 * LLM Readme Page - Canonical "For AI & Search" brief for goAI Solutions
 * 
 * Framework: Vite + React + TypeScript
 * Routing: React Router DOM (declarative routes in App.tsx)
 * SEO: react-helmet-async via SEO component
 * 
 * Raw markdown display - no header/footer, plain text format for AI systems.
 */

import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import llmBrief from '../constants/llm-brief.json';
import llmReadmeContent from '../content/llm-readme.md?raw';

// JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "goAI Solutions",
  "url": "https://goai.solutions/",
  "description": "goAI Solutions is an AI product and solutions studio based in Bangalore, India, helping companies design, build, and ship AI-powered products and automation.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1830, 30th Cross, 11th Main Road, Banashankari II Stage, B Sk II Stage",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560070",
    "addressCountry": "IN"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does goAI Solutions do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "goAI Solutions is an AI product and solutions studio that helps companies design, build, and deploy AI-powered products, automations, and workflows that solve real business problems."
      }
    },
    {
      "@type": "Question",
      "name": "Who is a typical goAI customer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typical customers are founders and teams in startups, tech-enabled SMBs, and innovation groups who want to ship AI products or automation quickly without hiring a large in-house AI team."
      }
    },
    {
      "@type": "Question",
      "name": "Where is goAI Solutions based?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "goAI Solutions is incorporated in India and headquartered in Bangalore, Karnataka, while working remotely with clients."
      }
    }
  ]
};

export function LLMReadmePage() {
  return (
    <>
      <SEO
        title="For AI & Search | goAI Solutions"
        description="goAI Solutions is an AI product and solutions studio based in Bangalore, India. We help companies move from idea → shipped AI product fast, with pragmatic engineering, automation, and agentic workflows."
        keywords="goAI Solutions, AI product studio, AI automation, Bangalore AI company, AI solutions"
        url="https://goai.solutions/llm-readme"
      />
      
      {/* Embed llm-brief.json */}
      <Helmet>
        <script type="application/json" id="llm-brief">
          {JSON.stringify(llmBrief)}
        </script>
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Raw markdown display - plain text, no header/footer */}
      <div className="min-h-screen bg-white">
        <pre className="max-w-4xl mx-auto px-6 py-8 font-mono text-sm text-gray-900 whitespace-pre-wrap">
          {llmReadmeContent}
        </pre>
      </div>
    </>
  );
}
