import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { MVPBuildersPage } from './pages/MVPBuildersPage';
import { BacklogCrushersPage } from './pages/BacklogCrushersPage';
import { EnterpriseFastTrackPage } from './pages/EnterpriseFastTrackPage';
import { AIPioneersPage } from './pages/AIPioneersPage';
import { NonTechFoundersPage } from './pages/NonTechFoundersPage';
import { TechTeamsPage } from './pages/TechTeamsPage';
// import { BlogPage } from './pages/BlogPage';
// import { BlogPostPage } from './pages/BlogPostPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { FinanceAICaseStudy } from './pages/case-studies/FinanceAICaseStudy';
import { MedConnectCaseStudy } from './pages/case-studies/MedConnectCaseStudy';
import { ShopFlowCaseStudy } from './pages/case-studies/ShopFlowCaseStudy';
import { AgentHubCaseStudy } from './pages/case-studies/AgentHubCaseStudy';
import { FullStackDevelopmentPage } from './pages/services/FullStackDevelopmentPage';
import { LegacyMigrationPage } from './pages/services/LegacyMigrationPage';
import { AIInfrastructurePage } from './pages/services/AIInfrastructurePage';
import { RAGPipelinesPage } from './pages/services/RAGPipelinesPage';
import { LLMReadmePage } from './pages/LLMReadmePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* LLM Readme page - no header/footer, raw markdown display */}
        <Route path="/llm-readme" element={<LLMReadmePage />} />
        
        {/* All other pages with Layout wrapper */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/mvp-builders" element={<Layout><MVPBuildersPage /></Layout>} />
        <Route path="/backlog-crushers" element={<Layout><BacklogCrushersPage /></Layout>} />
        <Route path="/enterprise-fast-track" element={<Layout><EnterpriseFastTrackPage /></Layout>} />
        <Route path="/ai-pioneers" element={<Layout><AIPioneersPage /></Layout>} />
        <Route path="/non-tech-founders" element={<Layout><NonTechFoundersPage /></Layout>} />
        <Route path="/tech-teams" element={<Layout><TechTeamsPage /></Layout>} />
        {/* <Route path="/blog" element={<Layout><BlogPage /></Layout>} /> */}
        {/* <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} /> */}
        <Route path="/team" element={<Layout><TeamPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicyPage /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfServicePage /></Layout>} />
        <Route path="/cookie-policy" element={<Layout><CookiePolicyPage /></Layout>} />
        <Route path="/case-studies/financeaidashboard" element={<Layout><FinanceAICaseStudy /></Layout>} />
        <Route path="/case-studies/medconnectplatform" element={<Layout><MedConnectCaseStudy /></Layout>} />
        <Route path="/case-studies/shopflowcommerce" element={<Layout><ShopFlowCaseStudy /></Layout>} />
        <Route path="/case-studies/agenthubautomation" element={<Layout><AgentHubCaseStudy /></Layout>} />
        <Route path="/services/fullstack-development" element={<Layout><FullStackDevelopmentPage /></Layout>} />
        <Route path="/services/legacy-migration" element={<Layout><LegacyMigrationPage /></Layout>} />
        <Route path="/services/ai-infrastructure" element={<Layout><AIInfrastructurePage /></Layout>} />
        <Route path="/services/rag-pipelines" element={<Layout><RAGPipelinesPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
