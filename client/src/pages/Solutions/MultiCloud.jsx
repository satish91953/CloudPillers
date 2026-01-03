import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const MultiCloud = () => {
  const strategies = [
    'Multi-cloud architecture design',
    'Workload distribution optimization',
    'Cross-cloud data synchronization',
    'Unified monitoring and management',
    'Cost optimization across providers',
    'Disaster recovery across clouds',
  ];

  const advantages = [
    'Avoid vendor lock-in',
    'Optimize costs by choosing best provider for each workload',
    'Enhanced reliability and redundancy',
    'Compliance with data residency requirements',
    'Leverage best-of-breed services',
    'Improved performance through geographic distribution',
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
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
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-indigo-600 mb-6">
              Multi-Cloud Strategy
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Multi-Cloud</span>
              <br />
              <span className="text-gray-900">Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
              Optimize across multiple cloud providers for best performance, cost, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get Strategy Consultation
                </Button>
              </Link>
              <Link to="/free-assessment">
                <Button variant="secondary" size="lg">
                  Book Expert Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategies Section */}
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
              Our Multi-Cloud <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to manage and optimize your multi-cloud environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 flex items-start space-x-4 bg-white border border-gray-200"
              >
                <svg className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-700">{strategy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
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
              Multi-Cloud <span className="text-gradient">Advantages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why a multi-cloud strategy makes sense for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 flex items-start space-x-4 bg-white border border-gray-200"
              >
                <svg className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-700">{advantage}</p>
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
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Build Your Multi-Cloud Strategy
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Partner with us to design and implement an optimal multi-cloud architecture.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MultiCloud;

