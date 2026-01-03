import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import CloudMigration from './pages/Solutions/CloudMigration';
import MultiCloud from './pages/Solutions/MultiCloud';
import DevSecOps from './pages/Solutions/DevSecOps';
import CostOptimization from './pages/Solutions/CostOptimization';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Blog from './pages/Resources/Blog';
import BlogDetail from './pages/Resources/BlogDetail';
import CaseStudies from './pages/Resources/CaseStudies';
import Whitepapers from './pages/Resources/Whitepapers';
import ServicesLanding from './pages/Services/ServicesLanding';
import DevOps from './pages/Services/DevOps';
import Cybersecurity from './pages/Services/Cybersecurity';
import Compliance from './pages/Services/Compliance';
import FinOps from './pages/Services/FinOps';
import ReArchitecture from './pages/Services/ReArchitecture';
import ManagedSupport from './pages/Services/ManagedSupport';
import VPNFirewall from './pages/Services/VPNFirewall';
import AdminLogin from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import BlogManagement from './pages/Admin/BlogManagement';
import SiteSettings from './pages/Admin/SiteSettings';
import HomepageManager from './pages/Admin/HomepageManager';
import FAQManager from './pages/Admin/FAQManager';
import FreeAssessment from './pages/FreeAssessment';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Contact />
                  </motion.div>
                }
              />
              <Route
                path="/free-assessment"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <FreeAssessment />
                  </motion.div>
                }
              />
              <Route
                path="/solutions"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Solutions />
                  </motion.div>
                }
              />
              <Route
                path="/solutions/cloud-migration"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <CloudMigration />
                  </motion.div>
                }
              />
              <Route
                path="/solutions/multi-cloud"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <MultiCloud />
                  </motion.div>
                }
              />
              <Route
                path="/solutions/devsecops"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <DevSecOps />
                  </motion.div>
                }
              />
              <Route
                path="/solutions/cost-optimization"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <CostOptimization />
                  </motion.div>
                }
              />
              <Route
                path="/industries"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Industries />
                  </motion.div>
                }
              />
              <Route
                path="/pricing"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Pricing />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/faq"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <FAQ />
                  </motion.div>
                }
              />
              <Route
                path="/resources/blog"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Blog />
                  </motion.div>
                }
              />
              <Route
                path="/resources/blog/:slug"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <BlogDetail />
                  </motion.div>
                }
              />
              <Route
                path="/resources/case-studies"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <CaseStudies />
                  </motion.div>
                }
              />
              <Route
                path="/resources/whitepapers"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Whitepapers />
                  </motion.div>
                }
              />
              <Route
                path="/services"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <ServicesLanding />
                  </motion.div>
                }
              />
              <Route
                path="/services/devops"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <DevOps />
                  </motion.div>
                }
              />
              <Route
                path="/services/cybersecurity"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Cybersecurity />
                  </motion.div>
                }
              />
              <Route
                path="/services/compliance"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Compliance />
                  </motion.div>
                }
              />
              <Route
                path="/services/cost-optimization"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <FinOps />
                  </motion.div>
                }
              />
              <Route
                path="/services/re-architecture"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <ReArchitecture />
                  </motion.div>
                }
              />
              <Route
                path="/services/managed-support"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <ManagedSupport />
                  </motion.div>
                }
              />
              <Route
                path="/services/vpn-firewall"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <VPNFirewall />
                  </motion.div>
                }
              />
              {/* Admin Routes */}
              <Route
                path="/admin/login"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <AdminLogin />
                  </motion.div>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Dashboard />
                  </motion.div>
                }
              />
              <Route
                path="/admin/blog"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <BlogManagement />
                  </motion.div>
                }
              />
              <Route
                path="/admin/settings"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <SiteSettings />
                  </motion.div>
                }
              />
              <Route
                path="/admin/homepage"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <HomepageManager />
                  </motion.div>
                }
              />
              <Route
                path="/admin/faq"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <FAQManager />
                  </motion.div>
                }
              />
              <Route
                path="*"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="min-h-screen flex items-center justify-center"
                  >
                    <div className="text-center">
                      <h1 className="text-6xl font-heading font-bold text-gradient mb-4">404</h1>
                      <p className="text-xl text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="text-primary-700 hover:text-primary-300">
                        Go back home
                      </a>
                    </div>
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
