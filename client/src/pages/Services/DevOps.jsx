import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SEO from '../../components/common/SEO';

const DevOps = () => {
  const capabilities = [
    {
      title: 'CI/CD Pipeline Engineering',
      items: [
        'GitHub Actions workflow design & optimization',
        'GitLab CI/CD pipeline configuration',
        'Jenkins multi-branch pipeline setup',
        'Multi-environment deployment strategies',
        'Automated testing integration',
      ],
    },
    {
      title: 'Container & Orchestration',
      items: [
        'Docker containerization & optimization',
        'Kubernetes cluster design (EKS, GKE, AKS)',
        'Helm chart development & management',
        'Service mesh implementation',
        'Auto-scaling configuration',
      ],
    },
    {
      title: 'Infrastructure as Code',
      items: [
        'Terraform module development',
        'AWS CloudFormation templates',
        'Pulumi infrastructure automation',
        'Infrastructure versioning & state management',
        'Multi-cloud IaC strategies',
      ],
    },
    {
      title: 'Monitoring & Observability',
      items: [
        'Prometheus & Grafana stack setup',
        'ELK/EFK stack for log aggregation',
        'Distributed tracing (Jaeger, Zipkin)',
        'APM tools integration',
        'Custom metrics & dashboards',
      ],
    },
  ];

  const outcomes = [
    { title: 'Faster Releases', desc: 'Deploy in minutes, not days' },
    { title: 'Zero-Downtime Deployments', desc: 'Seamless updates' },
    { title: 'Scalable Infrastructure', desc: 'Grows with your needs' },
    { title: 'Reliable Systems', desc: '99.99% uptime SLA' },
  ];

  return (
    <>
      <SEO
        title="DevOps Engineering Services - CI/CD, Kubernetes, Infrastructure as Code"
        description="Expert DevOps engineering services including CI/CD pipelines, Kubernetes orchestration, Infrastructure as Code (IaC), and cloud automation. Accelerate your software delivery with our DevOps solutions. Get free assessment."
        keywords="devops services, devops engineering, CI/CD pipeline, kubernetes services, infrastructure as code, devops consulting, cloud automation, devops support, devops implementation, devops transformation, aws devops, azure devops, devops as a service, devops managed services, continuous integration, continuous deployment, container orchestration, terraform, ansible, jenkins, gitlab ci, github actions"
        canonical="/services/devops"
        serviceType="DevOps Engineering"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'DevOps Engineering', url: '/services/devops' },
        ]}
      />
      <div className="min-h-screen pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
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
            <div className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-blue-600 dark:text-blue-600 dark:text-blue-400 mb-6">
              DevOps Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">DevOps</span>
              <br />
              <span className="text-primary-700">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-primary-600 leading-relaxed mb-10">
              Transform your development workflow with modern DevOps practices that enable faster deployments, higher reliability, and seamless scalability.
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
              Business <span className="text-gradient">Outcomes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-strong rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-heading font-semibold text-primary-700 mb-2">
                  {outcome.title}
                </h3>
                <p className="text-primary-500">{outcome.desc}</p>
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
              Core <span className="text-gradient">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
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
                  {cap.title}
                </h3>
                <ul className="space-y-3">
                  {cap.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-600 dark:text-blue-400 mr-3 mt-1">✓</span>
                      <span className="text-gray-700 text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-700 mb-6">
                Ready to Accelerate Your DevOps?
              </h2>
              <p className="text-xl text-gray-700 text-primary-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve faster deployments and more reliable infrastructure
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

export default DevOps;

