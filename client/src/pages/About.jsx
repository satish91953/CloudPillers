import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const About = () => {
  const values = [
    {
      title: 'Expertise',
      desc: '10+ years of cloud experience',
    },
    {
      title: 'Innovation',
      desc: 'Cutting-edge cloud technologies',
    },
    {
      title: 'Reliability',
      desc: '99.99% uptime guarantee',
    },
    {
      title: 'Partnership',
      desc: 'Your success is our mission',
    },
  ];

  return (
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
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">About</span>
              <span className="text-primary-700"> Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 leading-relaxed mb-8">
              We're a team of cloud experts dedicated to helping businesses build, secure, and optimize their cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-strong rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-heading font-semibold text-primary-700 mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-700 text-primary-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your cloud infrastructure
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

