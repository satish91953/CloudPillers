import { motion } from 'framer-motion';
import Button from '../../components/common/Button';

const Whitepapers = () => {
  const whitepapers = [
    {
      title: 'Cloud Cost Optimization: A Complete Guide',
      description: 'Learn proven strategies to reduce cloud spending by 30-60% while maintaining or improving performance. This comprehensive guide covers FinOps best practices, cost optimization techniques, and real-world case studies.',
      category: 'FinOps',
      pages: '45',
      downloadUrl: '#',
    },
    {
      title: 'DevSecOps Implementation Framework',
      description: 'A step-by-step guide to implementing DevSecOps practices in your organization. Includes security automation, CI/CD integration, vulnerability management, and compliance automation strategies.',
      category: 'Security',
      pages: '38',
      downloadUrl: '#',
    },
    {
      title: 'Multi-Cloud Strategy: Best Practices',
      description: 'Navigate the complexities of multi-cloud environments with this detailed whitepaper. Learn about architecture patterns, cost management, security considerations, and vendor management strategies.',
      category: 'Architecture',
      pages: '52',
      downloadUrl: '#',
    },
    {
      title: 'Cloud Compliance: SOC 2, ISO 27001, HIPAA',
      description: 'Comprehensive guide to achieving and maintaining cloud compliance. Covers SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR requirements with practical implementation strategies.',
      category: 'Compliance',
      pages: '41',
      downloadUrl: '#',
    },
    {
      title: 'Kubernetes at Scale: Production Best Practices',
      description: 'Learn how to run Kubernetes in production at scale. This whitepaper covers cluster design, resource management, monitoring, security, and disaster recovery strategies.',
      category: 'DevOps',
      pages: '48',
      downloadUrl: '#',
    },
    {
      title: 'Cloud Migration Playbook',
      description: 'A comprehensive playbook for migrating workloads to the cloud. Includes assessment frameworks, migration strategies, risk mitigation, and post-migration optimization techniques.',
      category: 'Migration',
      pages: '56',
      downloadUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4">
              Whitepapers & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth guides and resources to help you optimize your cloud infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Category */}
                  <div className="flex items-center justify-end mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                      {paper.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-gradient transition-colors">
                    {paper.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {paper.description}
                  </p>

                  {/* Meta Info and Download */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{paper.pages} pages</span>
                    <a
                      href={paper.downloadUrl}
                      className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      <span>Download</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>
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
            className="bg-white rounded-3xl p-10 md:p-14 text-center max-w-3xl mx-auto border border-gray-200 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Need Custom Guidance?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Our experts can provide tailored advice and solutions for your specific cloud challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </a>
              <a href="/free-assessment">
                <Button variant="secondary" size="lg">
                  Get Free Assessment
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Whitepapers;

