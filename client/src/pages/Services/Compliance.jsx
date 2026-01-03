import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

const Compliance = () => {
  const standards = [
    { name: 'ISO 27001', desc: 'Information Security Management' },
    { name: 'SOC 2', desc: 'Type I & Type II Compliance' },
    { name: 'HIPAA', desc: 'Healthcare Data Protection' },
    { name: 'PCI DSS', desc: 'Payment Card Industry' },
    { name: 'GDPR', desc: 'Data Protection Regulation' },
    { name: 'NIST 800-53', desc: 'Security Controls' },
  ];

  const approach = [
    {
      step: '1',
      title: 'Gap Analysis',
      desc: 'Identify compliance gaps and prioritize remediation',
    },
    {
      step: '2',
      title: 'Control Implementation',
      desc: 'Design and implement security controls',
    },
    {
      step: '3',
      title: 'Evidence Automation',
      desc: 'Automate evidence collection and reporting',
    },
    {
      step: '4',
      title: 'Audit Support',
      desc: 'Prepare for and support compliance audits',
    },
  ];

  return (
    <>
      <SEO
        title="Cloud Compliance Services - SOC 2, ISO 27001, HIPAA, PCI DSS Compliance"
        description="Expert cloud compliance and governance services for SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, and NIST. Achieve and maintain compliance with automated controls and continuous monitoring. Get compliance consultation."
        keywords="cloud compliance, SOC 2 compliance, ISO 27001 compliance, HIPAA compliance, PCI DSS compliance, GDPR compliance, compliance consulting, cloud governance, compliance automation, regulatory compliance, SOC 2 type 2, ISO 27001 certification, HIPAA cloud compliance, PCI DSS cloud, GDPR cloud compliance, NIST framework, compliance audit, compliance assessment, security compliance, data privacy compliance, cloud compliance framework"
        canonical="/services/compliance"
        serviceType="Compliance & Governance"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Compliance & Governance', url: '/services/compliance' },
        ]}
      />
      <div className="min-h-screen pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-3xl"
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
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-green-600 dark:text-green-400 mb-6">
              Compliance & Governance
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Compliance</span>
              <br />
              <span className="text-primary-700">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 leading-relaxed mb-10">
              Achieve and maintain compliance with industry standards while keeping engineering velocity high through automation and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-assessment">
                <Button variant="primary" size="lg">
                  Get Compliance Assessment
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-4">
              Compliance <span className="text-gradient">Standards</span>
            </h2>
            <p className="text-xl text-primary-500">
              We support multiple compliance frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-strong rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-2">
                  {standard.name}
                </h3>
                <p className="text-primary-500">{standard.desc}</p>
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
              Our <span className="text-gradient">Approach</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-3xl font-heading font-bold text-primary-700 mx-auto mb-6 shadow-lg shadow-green-500/50">
                  {item.step}
                </div>
                <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-500">{item.desc}</p>
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
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-6">
                Achieve Compliance Faster
              </h2>
              <p className="text-xl text-gray-700 text-primary-600 mb-8 max-w-2xl mx-auto">
                Let us help you achieve and maintain compliance without slowing down your engineering teams
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get Started
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

export default Compliance;

