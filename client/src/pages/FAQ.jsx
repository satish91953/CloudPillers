import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does CloudPillers offer?',
          answer: 'CloudPillers offers comprehensive cloud services including DevOps Engineering, Cloud Security, Compliance & Governance, FinOps (Cost Optimization), Re-Architecture, and Managed Support. We help businesses build, secure, and optimize their cloud infrastructure.',
        },
        {
          question: 'How quickly can you get started?',
          answer: 'We can typically begin working on your project within 1-2 business days after initial consultation. For urgent needs, we offer expedited onboarding. The exact timeline depends on the scope and complexity of your requirements.',
        },
        {
          question: 'Do you work with all cloud providers?',
          answer: 'Yes, we work with all major cloud providers including AWS, Google Cloud Platform (GCP), Microsoft Azure, and multi-cloud environments. Our team is certified and experienced across all platforms.',
        },
        {
          question: 'What is your pricing model?',
          answer: 'We offer flexible pricing models including project-based, retainer, and managed service agreements. Pricing depends on the scope of work, complexity, and ongoing support requirements. Contact us for a customized quote.',
        },
      ],
    },
    {
      category: 'DevOps & Infrastructure',
      questions: [
        {
          question: 'What DevOps tools and technologies do you use?',
          answer: 'We work with industry-standard tools including Kubernetes, Docker, Terraform, Ansible, Jenkins, GitLab CI/CD, GitHub Actions, and cloud-native services. We choose the best tools based on your specific needs and infrastructure.',
        },
        {
          question: 'Can you help migrate from on-premises to cloud?',
          answer: 'Absolutely! We specialize in cloud migration projects, helping businesses move from on-premises infrastructure to cloud platforms. We handle everything from assessment and planning to execution and optimization.',
        },
        {
          question: 'Do you provide 24/7 support?',
          answer: 'Yes, our Managed Support service includes 24/7 monitoring, incident management, and support. We offer different SLA tiers to meet your business requirements and ensure minimal downtime.',
        },
      ],
    },
    {
      category: 'Security & Compliance',
      questions: [
        {
          question: 'What security certifications do you have?',
          answer: 'Our team holds various security certifications including AWS Security, Azure Security, GCP Security, CISSP, and more. We follow industry best practices and security frameworks to ensure your infrastructure is secure.',
        },
        {
          question: 'Can you help with compliance requirements?',
          answer: 'Yes, we help businesses achieve and maintain compliance with standards like SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, and NIST. We provide compliance assessments, implementation, and ongoing monitoring.',
        },
        {
          question: 'How do you handle security vulnerabilities?',
          answer: 'We conduct regular security assessments, vulnerability scans, and penetration testing. We implement security best practices, use CSPM tools, and provide proactive threat detection and response.',
        },
      ],
    },
    {
      category: 'Cost Optimization',
      questions: [
        {
          question: 'How much can I save with your FinOps services?',
          answer: 'Our clients typically see 30-60% reduction in cloud costs. The exact savings depend on your current infrastructure, usage patterns, and optimization opportunities. We provide a free cost assessment to identify potential savings.',
        },
        {
          question: 'What cost optimization strategies do you use?',
          answer: 'We employ multiple strategies including right-sizing instances, reserved instance planning, storage optimization, data transfer cost reduction, auto-scaling configuration, and identifying unused resources.',
        },
        {
          question: 'Do you provide cost monitoring and reporting?',
          answer: 'Yes, we provide comprehensive cost monitoring, detailed reports, budget alerts, and cost allocation. You\'ll have full visibility into your cloud spending with actionable insights.',
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our cloud services and solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openIndex === currentIndex;
                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-8">
                          {faq.question}
                        </span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5 text-gray-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
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
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Can't find what you're looking for? Our team is here to help. Get in touch and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Contact Us
              </a>
              <a
                href="/free-assessment"
                className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all"
              >
                Get Free Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

