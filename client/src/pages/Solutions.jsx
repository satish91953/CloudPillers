import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Solutions = () => {
  const solutions = [
    {
      title: 'Cloud Migration',
      desc: 'Seamless migration to AWS, Azure, or GCP with zero downtime',
      gradient: 'from-blue-500 to-cyan-500',
      path: '/solutions/cloud-migration',
    },
    {
      title: 'Multi-Cloud Strategy',
      desc: 'Optimize across multiple cloud providers for best performance',
      gradient: 'from-indigo-500 to-blue-500',
      path: '/solutions/multi-cloud',
    },
    {
      title: 'DevSecOps',
      desc: 'Integrate security into your DevOps pipeline from day one',
      gradient: 'from-green-500 to-emerald-500',
      path: '/solutions/devsecops',
    },
    {
      title: 'Cost Optimization',
      desc: 'Reduce cloud spending by 30-60% without compromising performance',
      gradient: 'from-yellow-500 to-orange-500',
      path: '/solutions/cost-optimization',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-slate-50">
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

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Comprehensive cloud solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link to={solution.path}>
                  <div className="glass-strong rounded-2xl p-8 h-full transition-all duration-300 hover:border-blue-500/50 border border-gray-200 bg-white cursor-pointer">
                    <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      {solution.desc}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
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

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden bg-white border border-gray-200"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                Ready to Transform Your Cloud Strategy?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let our experts help you choose and implement the perfect cloud solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/free-assessment">
                  <Button variant="secondary" size="lg">
                    Free Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
