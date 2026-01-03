import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

const ReArchitecture = () => {
  const services = [
    {
      title: 'Legacy to Cloud-Native',
      desc: 'Modernize legacy applications for cloud-native architecture',
    },
    {
      title: 'Monolith to Microservices',
      desc: 'Break down monoliths into scalable microservices',
    },
    {
      title: 'High Availability & DR',
      desc: 'Design resilient systems with disaster recovery',
    },
    {
      title: 'Multi-Region Architecture',
      desc: 'Global distribution for performance and compliance',
    },
    {
      title: 'Performance Optimization',
      desc: 'Tune infrastructure for maximum performance',
    },
    {
      title: 'Container & Serverless',
      desc: 'Adopt containers and serverless architectures',
    },
  ];

  return (
    <>
      <SEO
        title="Cloud Re-Architecture Services - Legacy Modernization & Microservices Migration"
        description="Expert cloud re-architecture services for legacy modernization, microservices migration, and cloud-native transformation. Modernize your infrastructure with scalable, cost-effective architectures. Free architecture assessment."
        keywords="cloud re-architecture, legacy modernization, microservices migration, cloud migration, application modernization, cloud architecture, re-architecture consulting, legacy system migration, cloud transformation, application refactoring, cloud-native architecture, microservices architecture, containerization, serverless architecture, cloud architecture design, infrastructure modernization, digital transformation, lift and shift, replatforming, cloud migration strategy"
        canonical="/services/re-architecture"
        serviceType="Cloud Re-Architecture"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Re-Architecture', url: '/services/re-architecture' },
        ]}
      />
      <div className="min-h-screen pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"
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
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-6">
              Cloud Re-Architecture
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Re-Architecture</span>
              <br />
              <span className="text-primary-700">& Migration</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 leading-relaxed mb-10">
              Modernize and re-architect cloud infrastructure for scalability, resilience, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-assessment">
                <Button variant="primary" size="lg">
                  Get Migration Assessment
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
              Architecture <span className="text-gradient">Services</span>
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

      <section className="section-padding">
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
                Ready to Modernize Your Architecture?
              </h2>
              <p className="text-xl text-gray-700 text-primary-600 mb-8 max-w-2xl mx-auto">
                Transform your infrastructure for scalability, resilience, and future growth
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

export default ReArchitecture;

