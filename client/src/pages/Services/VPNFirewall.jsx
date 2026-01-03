import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

const VPNFirewall = () => {
  const services = [
    {
      title: 'Site-to-Site VPN',
      desc: 'Secure connections between cloud networks, on-premises data centers, and branch offices',
    },
    {
      title: 'Client-to-Site VPN',
      desc: 'Remote access VPN solutions for secure employee connectivity from anywhere',
    },
    {
      title: 'Cloud Firewall Management',
      desc: 'Next-generation firewall configuration, rule management, and traffic filtering',
    },
    {
      title: 'Network Security Groups',
      desc: 'Micro-segmentation, security group optimization, and zero-trust network architecture',
    },
    {
      title: 'VPN Gateway Setup',
      desc: 'High-availability VPN gateways with automatic failover and load balancing',
    },
    {
      title: 'Firewall Rule Optimization',
      desc: 'Security policy review, rule consolidation, and performance optimization',
    },
  ];

  const benefits = [
    'Secure remote access for distributed teams',
    'Protected network communications',
    'Reduced attack surface and threat exposure',
    'Compliance with security standards',
    'Centralized network security management',
    'High availability and redundancy',
  ];

  return (
    <>
      <SEO
        title="VPN and Firewall Services - Secure Network Connectivity & Firewall Management"
        description="Enterprise VPN and firewall services including site-to-site VPN, client-to-site VPN, cloud firewall management, and network security. Secure your cloud infrastructure with our VPN and firewall solutions. Expert network security consulting."
        keywords="vpn services, firewall services, vpn setup, firewall management, site to site vpn, client to site vpn, cloud firewall, network security, vpn gateway, firewall configuration, vpn consulting, firewall consulting, aws vpn, azure vpn, cloud vpn, network firewall, next generation firewall, NGFW, vpn tunnel, ipsec vpn, ssl vpn, remote access vpn, network segmentation, security groups, network access control"
        canonical="/services/vpn-firewall"
        serviceType="VPN & Firewall Services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'VPN and Firewall', url: '/services/vpn-firewall' },
        ]}
      />
      <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-purple-600 mb-6">
              VPN and Firewall
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">VPN & Firewall</span>
              <br />
              <span className="text-gray-900">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
              Secure your network infrastructure with enterprise-grade VPN and firewall solutions for cloud and hybrid environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-assessment">
                <Button variant="primary" size="lg">
                  Get Network Assessment
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Book Expert Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our Comprehensive <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From VPN connectivity to advanced firewall management, we provide complete network security solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 flex items-start space-x-4 bg-white border border-gray-200"
              >
                <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Key <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with us to achieve a robust and secure network infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 flex items-start space-x-4 bg-white border border-gray-200"
              >
                <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden bg-white border border-gray-200"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Secure Your Network Today
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get a comprehensive network security assessment and fortify your infrastructure.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default VPNFirewall;

