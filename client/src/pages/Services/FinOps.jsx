import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

const FinOps = () => {
  const optimizationAreas = [
    {
      title: 'Compute Optimization',
      items: [
        'Instance rightsizing recommendations',
        'Reserved Instance (RI) strategy & purchase',
        'Savings Plans optimization',
        'Spot instance implementation',
        'Auto-scaling configuration',
      ],
    },
    {
      title: 'Storage Optimization',
      items: [
        'Storage tier optimization (hot, warm, cold, archive)',
        'Lifecycle policy implementation',
        'Data deduplication strategies',
        'Unused storage identification',
        'EBS volume optimization',
      ],
    },
    {
      title: 'Network Cost Optimization',
      items: [
        'Data transfer cost reduction',
        'CDN optimization',
        'VPC endpoint usage',
        'Inter-AZ transfer minimization',
        'Internet egress optimization',
      ],
    },
    {
      title: 'Database Optimization',
      items: [
        'Database instance rightsizing',
        'Reserved capacity planning',
        'Query performance optimization',
        'Backup & snapshot management',
        'Connection pooling optimization',
      ],
    },
  ];

  const results = [
    { metric: '30-60%', label: 'Cost Reduction' },
    { metric: '30-50%', label: 'Compute Cost Savings' },
    { metric: '40-60%', label: 'Storage Cost Reduction' },
    { metric: 'Predictable', label: 'Monthly Billing' },
  ];

  return (
    <>
      <SEO
        title="Cloud Cost Optimization Services - FinOps, Reduce Cloud Spending 30-60%"
        description="Expert FinOps and cloud cost optimization services. Reduce cloud spending by 30-60% through rightsizing, reserved instances, and automated cost management. Get free cloud cost assessment today."
        keywords="cloud cost optimization, finops services, reduce cloud costs, cloud cost reduction, aws cost optimization, azure cost optimization, cloud spending reduction, cost optimization consulting, cloud cost management, finops consulting, cloud cost analysis, aws cost savings, azure cost savings, reserved instances, spot instances, cloud billing optimization, cost visibility, cloud waste reduction, cloud budget management, finops framework"
        canonical="/services/cost-optimization"
        serviceType="FinOps & Cost Optimization"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Cost Optimization', url: '/services/cost-optimization' },
        ]}
      />
      <div className="min-h-screen pt-24">
      {/* Hero Section */}
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
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-yellow-600 dark:text-yellow-600 dark:text-yellow-400 mb-6">
              Cloud Cost Optimization
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">FinOps</span>
              <br />
              <span className="text-primary-700">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 leading-relaxed mb-10">
              Reduce cloud spending by 30-60% while maintaining or improving performance through data-driven optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-assessment">
                <Button variant="primary" size="lg">
                  Get Free Cost Assessment
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

      {/* Results Section */}
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
              Typical <span className="text-gradient">Results</span>
            </h2>
            <p className="text-xl text-primary-500">
              Real savings achieved for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-strong rounded-2xl p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-3">
                  {result.metric}
                </div>
                <div className="text-primary-500">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas */}
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
              Optimization <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-xl text-primary-500">
              Comprehensive cost optimization across all cloud resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-strong rounded-2xl p-8"
              >
                <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-6">
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-yellow-600 dark:text-yellow-400 mr-3 mt-1">✓</span>
                      <span className="text-gray-700 text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FinOps Practices */}
      <section className="section-padding bg-gray-50 dark:bg-dark-100/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-8 text-center">
              Our <span className="text-gradient">FinOps</span> Approach
            </h2>
            <div className="glass-strong rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary-700 mb-4">
                    Cost Analysis & Assessment
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-primary-600">
                    <li>• Comprehensive cloud bill analysis</li>
                    <li>• Cost allocation & chargeback setup</li>
                    <li>• Resource utilization analysis</li>
                    <li>• Cost anomaly detection</li>
                    <li>• Spending trends & forecasting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary-700 mb-4">
                    Cost Management Tools
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-primary-600">
                    <li>• AWS Cost Explorer configuration</li>
                    <li>• Azure Cost Management setup</li>
                    <li>• GCP Billing export & BigQuery</li>
                    <li>• Custom cost dashboards</li>
                    <li>• Automated cost reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
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
            className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-6">
                Ready to Reduce Your Cloud Costs?
              </h2>
              <p className="text-xl text-gray-700 text-primary-600 mb-8 max-w-2xl mx-auto">
                Get a free cost assessment and discover how we can help you save 30-60% on your cloud spending
              </p>
              <Link to="/free-assessment">
                <Button variant="primary" size="lg">
                  Get Free Assessment
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

export default FinOps;

