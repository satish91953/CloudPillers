import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Cost Reduction',
      client: 'Leading E-commerce Company',
      industry: 'E-commerce',
      challenge: 'High cloud costs with unpredictable spending patterns and lack of visibility into resource utilization.',
      solution: 'Implemented comprehensive FinOps strategy with automated cost monitoring, right-sizing recommendations, and reserved instance optimization.',
      results: [
        '35% reduction in cloud costs',
        'Improved cost predictability with budget alerts',
        'Automated cost optimization workflows',
      ],
      services: ['FinOps', 'Cost Optimization'],
    },
    {
      title: 'Healthcare Provider Compliance Achievement',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Need to achieve HIPAA compliance and strengthen security posture for patient data protection.',
      solution: 'Conducted security assessment, implemented compliance controls, and established ongoing monitoring and audit processes.',
      results: [
        'Achieved HIPAA compliance certification',
        'Enhanced security posture with CSPM implementation',
        'Reduced security incidents by 60%',
      ],
      services: ['Compliance', 'Cloud Security'],
    },
    {
      title: 'SaaS Startup DevOps Transformation',
      client: 'Fast-Growing SaaS Company',
      industry: 'SaaS',
      challenge: 'Manual deployment processes causing delays and frequent production issues.',
      solution: 'Implemented CI/CD pipelines, containerization with Kubernetes, and infrastructure as code practices.',
      results: [
        '90% reduction in deployment time',
        'Zero-downtime deployments achieved',
        'Improved developer productivity by 50%',
      ],
      services: ['DevOps Engineering', 'Re-Architecture'],
    },
    {
      title: 'Financial Services Multi-Cloud Migration',
      client: 'Financial Services Firm',
      industry: 'Finance',
      challenge: 'Legacy infrastructure limiting scalability and increasing operational costs.',
      solution: 'Migrated to multi-cloud architecture with automated scaling, enhanced security, and cost optimization.',
      results: [
        '40% cost reduction',
        'Improved scalability and performance',
        'Enhanced security and compliance',
      ],
      services: ['Re-Architecture', 'Cloud Security', 'FinOps'],
    },
    {
      title: 'Tech Company 24/7 Support Implementation',
      client: 'Enterprise Technology Company',
      industry: 'Technology',
      challenge: 'Need for round-the-clock monitoring and incident response capabilities.',
      solution: 'Implemented managed support service with 24/7 monitoring, automated alerting, and SLA-based incident management.',
      results: [
        '99.99% uptime achieved',
        'Reduced mean time to resolution by 70%',
        'Proactive issue detection and prevention',
      ],
      services: ['Managed Support', 'DevOps Engineering'],
    },
    {
      title: 'Manufacturing Company Cloud Security Hardening',
      client: 'Global Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Security vulnerabilities and lack of centralized security management across cloud environments.',
      solution: 'Implemented comprehensive security framework with CSPM, IAM hardening, and vulnerability management.',
      results: [
        'Eliminated critical security vulnerabilities',
        'Centralized security management',
        'Improved compliance posture',
      ],
      services: ['Cloud Security', 'Compliance'],
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
              Case <span className="text-gradient">Studies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world success stories from businesses we've helped transform their cloud infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1">
                            {study.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {study.client} • {study.industry}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                      Challenge
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                      Solution
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Let's discuss how we can help transform your cloud infrastructure and achieve similar results.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

