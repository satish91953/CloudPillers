import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Services',
      path: '/services',
      children: [
        { name: 'DevOps Engineering', path: '/services/devops' },
        { name: 'Cloud Security', path: '/services/cybersecurity' },
        { name: 'Compliance & Governance', path: '/services/compliance' },
        { name: 'FinOps', path: '/services/cost-optimization' },
        { name: 'Re-Architecture', path: '/services/re-architecture' },
        { name: 'Managed Support', path: '/services/managed-support' },
        { name: 'VPN and Firewall', path: '/services/vpn-firewall' },
      ],
    },
    {
      name: 'Solutions',
      path: '/solutions',
      children: [
        { name: 'Cloud Migration', path: '/solutions/cloud-migration' },
        { name: 'Multi-Cloud Strategy', path: '/solutions/multi-cloud' },
        { name: 'DevSecOps', path: '/solutions/devsecops' },
        { name: 'Cost Optimization', path: '/solutions/cost-optimization' },
      ],
    },
    {
      name: 'Industries',
      path: '/industries',
    },
    {
      name: 'Resources',
      path: '/resources/blog',
      children: [
        { name: 'Blog', path: '/resources/blog' },
        { name: 'Case Studies', path: '/resources/case-studies' },
        { name: 'Whitepapers', path: '/resources/whitepapers' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
    {
      name: 'Pricing',
      path: '/pricing',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm"
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30"
            >
              <span className="text-white font-bold text-lg">CP</span>
            </motion.div>
            <span className="text-xl font-heading font-bold text-gradient whitespace-nowrap logo-text">CloudPillers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.children && setHoveredNav(link.name)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <Link
                  to={link.path}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors flex items-center ${
                    isActive(link.path)
                      ? 'text-gray-900'
                      : 'text-gray-900 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                  {link.children && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {isActive(link.path) && !link.children && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-600"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.children && (
                  <AnimatePresence>
                    {hoveredNav === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl p-2 shadow-2xl z-50 border border-gray-200"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-3 py-2 text-sm text-gray-900 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setHoveredNav(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <Button variant="secondary" size="sm" className="px-5 py-2 text-gray-900 border-gray-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-gray-900 hover:text-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 space-y-1 overflow-hidden bg-white rounded-xl border border-gray-200 shadow-lg p-2"
            >
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors text-base font-medium ${
                      isActive(link.path)
                        ? 'bg-blue-50 text-gray-900 border-l-4 border-blue-500'
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.name}</span>
                      {link.children && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </Link>
                  {link.children && (
                    <div className="pl-4 pr-2 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-200 mt-3">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="secondary" size="md" className="w-full text-gray-900 border-gray-300">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;

