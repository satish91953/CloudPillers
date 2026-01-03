import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesLanding = () => {
  const services = [
    {
      title: 'DevOps Engineering',
      description: 'CI/CD pipelines, Kubernetes, Infrastructure as Code',
      gradient: 'from-blue-500 to-cyan-500',
      path: '/services/devops',
    },
    {
      title: 'Cloud Security',
      description: 'CSPM, IAM hardening, Vulnerability management',
      gradient: 'from-blue-500 to-cyan-500',
      path: '/services/cybersecurity',
    },
    {
      title: 'Compliance & Governance',
      description: 'SOC 2, ISO 27001, HIPAA, PCI DSS',
      gradient: 'from-green-500 to-emerald-500',
      path: '/services/compliance',
    },
    {
      title: 'FinOps',
      description: 'Cost optimization, 30-60% savings guaranteed',
      gradient: 'from-yellow-500 to-orange-500',
      path: '/services/cost-optimization',
    },
    {
      title: 'Re-Architecture',
      description: 'Legacy modernization, Microservices migration',
      gradient: 'from-blue-500 to-cyan-500',
      path: '/services/re-architecture',
    },
    {
      title: 'Managed Support',
      description: '24/7 monitoring, Incident management, SLA-based',
      gradient: 'from-rose-500 to-red-500',
      path: '/services/managed-support',
    },
    {
      title: 'VPN and Firewall',
      description: 'Secure network connectivity, Firewall management, VPN solutions',
      gradient: 'from-purple-500 to-pink-500',
      path: '/services/vpn-firewall',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions to accelerate your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <Link to={service.path}>
                  <div className="glass-strong rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary-500/50">
                    <h3 className="text-xl font-heading font-semibold text-primary-700 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-primary-500 leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center text-primary-700 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesLanding;

