import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';

const Home = () => {
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
      gradient: 'from-indigo-500 to-blue-500',
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

  const stats = [
    { value: '30-60%', label: 'Cost Reduction' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Support' },
    { value: '50+', label: 'Clients' },
  ];

  return (
    <>
      <SEO
        title="CloudPillers - Enterprise Cloud Services | DevOps, Security, Compliance & Cost Optimization"
        description="Enterprise-grade DevOps, Security, Compliance, and Cost Optimization services for cloud-native businesses. Reduce cloud costs by 30-60%, achieve 99.99% uptime, and get 24/7 support. Free cloud assessment available."
        keywords="cloud services, devops services, cloud security, cloud compliance, cost optimization, finops, cloud consulting, aws services, azure services, gcp services, cloud migration, managed cloud services, enterprise cloud solutions, cloud transformation, cloud infrastructure, multi-cloud services, cloud strategy, cloud architecture, cloud automation, cloud optimization, cloud managed services"
        canonical="/"
        serviceType="Enterprise Cloud Services"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-20">
        {/* Subtle Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Enterprise Cloud Services
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              <span className="text-gradient block mb-2">Build, Secure & Optimize</span>
              <span className="text-gray-900 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Your Cloud Infrastructure
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 mx-auto leading-relaxed"
            >
              Enterprise-grade DevOps, Security, Compliance, and Cost Optimization services for cloud-native businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link to="/free-assessment">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free Cloud Assessment
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Book Expert Call
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-3 sm:p-4 md:p-5 text-center bg-white"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud solutions to accelerate your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={service.path}>
                  <div className="glass-strong rounded-2xl p-6 h-full transition-all duration-300 hover:border-blue-500/50 border border-gray-200 bg-white">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* How We Work Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process to transform your cloud infrastructure
            </p>
          </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { step: '1', title: 'Assess', desc: 'Infrastructure, cost, security review' },
                  { step: '2', title: 'Design', desc: 'Architecture & optimization plan' },
                  { step: '3', title: 'Implement', desc: 'Automation, migration, hardening' },
                  { step: '4', title: 'Optimize', desc: 'Continuous improvement & support' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="glass rounded-2xl p-5 sm:p-6 border border-gray-200 bg-white">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-xl sm:text-2xl font-heading font-bold text-white mx-auto mb-4 shadow-lg shadow-blue-500/30">
                        {item.step}
                      </div>
                      <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 text-center max-w-3xl mx-auto border border-gray-200 bg-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Ready to Transform Your Cloud?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
              Get a free cloud assessment and discover how we can help optimize your infrastructure
            </p>
            <Link to="/free-assessment">
              <Button variant="primary" size="lg">
                Get Free Assessment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
