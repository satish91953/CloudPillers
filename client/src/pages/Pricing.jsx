import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Custom',
      desc: 'Perfect for small teams getting started',
      features: [
        'Basic cloud assessment',
        'Email support',
        'Monthly reviews',
        'Cost optimization tips',
      ],
    },
    {
      name: 'Professional',
      price: 'Custom',
      desc: 'For growing businesses',
      features: [
        'Comprehensive assessment',
        'Priority support',
        'Weekly reviews',
        'Dedicated engineer',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For large organizations',
      features: [
        'Full-service management',
        '24/7 support',
        'SLA guarantees',
        'Dedicated team',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-3xl"
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
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 leading-relaxed">
              Flexible pricing plans tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
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
                  {plan.name}
                </h3>
                <div className="text-4xl font-heading font-bold text-gradient mb-2">
                  {plan.price}
                </div>
                <p className="text-primary-500 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary-700 mr-3 mt-1">✓</span>
                      <span className="text-gray-700 text-primary-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="primary" size="md" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

