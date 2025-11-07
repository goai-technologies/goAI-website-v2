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
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { FinanceAICaseStudy } from './pages/case-studies/FinanceAICaseStudy';
import { MedConnectCaseStudy } from './pages/case-studies/MedConnectCaseStudy';
import { ShopFlowCaseStudy } from './pages/case-studies/ShopFlowCaseStudy';
import { AgentHubCaseStudy } from './pages/case-studies/AgentHubCaseStudy';
import { FullStackDevelopmentPage } from './pages/services/FullStackDevelopmentPage';
import { LegacyMigrationPage } from './pages/services/LegacyMigrationPage';
import { AIInfrastructurePage } from './pages/services/AIInfrastructurePage';
import { RAGPipelinesPage } from './pages/services/RAGPipelinesPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mvp-builders" element={<MVPBuildersPage />} />
          <Route path="/backlog-crushers" element={<BacklogCrushersPage />} />
          <Route path="/enterprise-fast-track" element={<EnterpriseFastTrackPage />} />
          <Route path="/ai-pioneers" element={<AIPioneersPage />} />
          <Route path="/non-tech-founders" element={<NonTechFoundersPage />} />
          <Route path="/tech-teams" element={<TechTeamsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies/financeaidashboard" element={<FinanceAICaseStudy />} />
          <Route path="/case-studies/medconnectplatform" element={<MedConnectCaseStudy />} />
          <Route path="/case-studies/shopflowcommerce" element={<ShopFlowCaseStudy />} />
          <Route path="/case-studies/agenthubautomation" element={<AgentHubCaseStudy />} />
          <Route path="/services/fullstack-development" element={<FullStackDevelopmentPage />} />
          <Route path="/services/legacy-migration" element={<LegacyMigrationPage />} />
          <Route path="/services/ai-infrastructure" element={<AIInfrastructurePage />} />
          <Route path="/services/rag-pipelines" element={<RAGPipelinesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
