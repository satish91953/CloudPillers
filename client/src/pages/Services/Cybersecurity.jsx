import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

const Cybersecurity = () => {
  const services = [
    {
      title: 'Cloud Security Posture Management',
      desc: 'Multi-cloud security assessment, configuration drift detection, and automated remediation',
    },
    {
      title: 'IAM Hardening',
      desc: 'Least privilege access, role-based access control, and zero-trust architecture',
    },
    {
      title: 'Network Security',
      desc: 'VPC design, WAF configuration, DDoS protection, and network segmentation',
    },
    {
      title: 'Vulnerability Management',
      desc: 'Container scanning, dependency assessment, and automated patching',
    },
    {
      title: 'Security Monitoring & SIEM',
      desc: 'Real-time threat detection, security event correlation, and incident response',
    },
    {
      title: 'Incident Response',
      desc: 'Security playbooks, forensics, containment procedures, and recovery planning',
    },
  ];

  const outcomes = [
    { metric: 'Reduced', label: 'Attack Surface' },
    { metric: 'Secure', label: 'Cloud Workloads' },
    { metric: 'Compliance', label: 'Ready Environments' },
  ];

  return (
    <>
      <SEO
        title="Cloud Security Services - CSPM, IAM Hardening, Vulnerability Management"
        description="Comprehensive cloud security services including CSPM, IAM hardening, vulnerability management, threat detection, and incident response. Protect your cloud infrastructure with enterprise-grade security solutions. Free security assessment available."
        keywords="cloud security, cloud security services, CSPM, IAM hardening, vulnerability management, cloud security consulting, threat detection, security monitoring, cloud security assessment, network security, aws security, azure security, cloud security posture management, identity and access management, security compliance, penetration testing, security audit, cloud firewall, DDoS protection, WAF, security operations center, SOC"
        canonical="/services/cybersecurity"
        serviceType="Cloud Security"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Cloud Security', url: '/services/cybersecurity' },
        ]}
      />
      <div className="min-h-screen pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
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
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-blue-600 dark:text-blue-600 dark:text-blue-400 mb-6">
              Cloud Security
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Cybersecurity</span>
              <br />
              <span className="text-primary-700">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 leading-relaxed mb-10">
              Protect your cloud infrastructure from threats, misconfigurations, and compliance violations with comprehensive security services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-assessment">
                <Button variant="primary" size="lg">
                  Get Security Assessment
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

      <section className="section-padding bg-gray-50 dark:bg-dark-100/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-4">
              Business <span className="text-gradient">Outcomes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-strong rounded-2xl p-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  {outcome.metric}
                </div>
                <div className="text-primary-500">{outcome.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-4">
              Security <span className="text-gradient">Services</span>
            </h2>
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
                className="glass-strong rounded-2xl p-8"
              >
                <h3 className="text-xl font-heading font-semibold text-primary-700 mb-4">
                  {service.title}
                </h3>
                <p className="text-primary-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-dark-100/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-6">
                Secure Your Cloud Infrastructure
              </h2>
              <p className="text-xl text-gray-700 text-primary-600 mb-8 max-w-2xl mx-auto">
                Get a comprehensive security assessment and protect your business from threats
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get Security Assessment
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

export default Cybersecurity;

