import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

const ManagedSupport = () => {
  const tiers = [
    {
      name: 'Essential',
      hours: '9 AM - 6 PM',
      features: [
        'Email & ticket support',
        'Monthly health reviews',
        'Basic monitoring & alerting',
        'Incident response (business hours)',
      ],
    },
    {
      name: 'Professional',
      hours: '8 AM - 8 PM',
      features: [
        'Email, ticket, & phone support',
        'Weekly health reviews',
        'Advanced monitoring & alerting',
        'Proactive optimization',
      ],
    },
    {
      name: 'Enterprise',
      hours: '24/7/365',
      features: [
        'Multiple support channels',
        'On-call engineer availability',
        'SLA guarantees',
        'Dedicated account manager',
      ],
    },
  ];

  const services = [
    '24×7 monitoring & alerting',
    'Incident management',
    'Performance tuning',
    'Security patching',
    'Backup & disaster recovery',
    'SLA-based support models',
  ];

  return (
    <>
      <SEO
        title="Managed Cloud Support Services - 24/7 Monitoring & Incident Management"
        description="24/7 managed cloud support services with SLA-based monitoring, incident management, and proactive issue resolution. Get enterprise-grade cloud support with 99.99% uptime guarantee. 24/7 cloud operations."
        keywords="managed cloud support, cloud support services, 24/7 cloud monitoring, cloud incident management, cloud support, managed services, cloud operations, cloud monitoring, cloud support consulting, aws managed services, azure managed services, cloud managed services, devops support, cloud operations center, cloud NOC, incident response, cloud maintenance, cloud support team, managed infrastructure, cloud operations management, proactive monitoring"
        canonical="/services/managed-support"
        serviceType="Managed Cloud Support"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Managed Support', url: '/services/managed-support' },
        ]}
      />
      <div className="min-h-screen pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 dark:bg-rose-500/20 rounded-full blur-3xl"
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
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-rose-600 dark:text-rose-600 dark:text-rose-400 mb-6">
              Managed Cloud Support
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Managed</span>
              <br />
              <span className="text-primary-700">Cloud Support</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 leading-relaxed mb-10">
              Provide ongoing cloud operations support, so your teams can focus on business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-assessment">
                <Button variant="primary" size="lg">
                  Get Free Assessment
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
              Support <span className="text-gradient">Tiers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-strong rounded-2xl p-8"
              >
                <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-2">
                  {tier.name}
                </h3>
                <div className="text-primary-700 mb-6 font-medium">{tier.hours}</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-rose-600 dark:text-rose-600 dark:text-rose-400 mr-3 mt-1">✓</span>
                      <span className="text-gray-700 text-primary-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Managed <span className="text-gradient">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-xl p-6 text-center"
              >
                <p className="text-gray-700 text-primary-600">{service}</p>
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
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-red-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-6">
                Focus on Growth, We Handle Operations
              </h2>
              <p className="text-xl text-gray-700 text-primary-600 mb-8 max-w-2xl mx-auto">
                Let our experts manage your cloud infrastructure while you focus on building your business
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

export default ManagedSupport;

