import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../utils/api';
import Button from '../components/common/Button';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  company: yup.string(),
  companySize: yup.string(),
  currentCloudSpend: yup.string(),
  primaryChallenges: yup.array().min(1, 'Please select at least one challenge'),
  services: yup.array().min(1, 'Please select at least one service'),
  timeline: yup.string(),
  budget: yup.string(),
  additionalInfo: yup.string(),
});

const FreeAssessment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const watchedChallenges = watch('primaryChallenges') || [];
  const watchedServices = watch('services') || [];

  const toggleChallenge = (challenge) => {
    const current = watchedChallenges;
    const updated = current.includes(challenge)
      ? current.filter((c) => c !== challenge)
      : [...current, challenge];
    setValue('primaryChallenges', updated);
  };

  const toggleService = (service) => {
    const current = watchedServices;
    const updated = current.includes(service)
      ? current.filter((s) => s !== service)
      : [...current, service];
    setValue('services', updated);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await api.post('/assessment', data);
      setSubmitStatus('success');
      reset();
      // Optionally show success message from API
      if (response.data?.message) {
        // Message is already handled by UI, but could be displayed
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting assessment:', error);
      // Could display error.response?.data?.message from API response
    } finally {
      setIsSubmitting(false);
    }
  };

  const challenges = [
    'High cloud costs',
    'Security concerns',
    'Compliance requirements',
    'Performance issues',
    'Scalability challenges',
    'Legacy system migration',
    'DevOps automation',
    'Monitoring & observability',
  ];

  const services = [
    { value: 'devops', label: 'DevOps Engineering' },
    { value: 'cybersecurity', label: 'Cloud Security' },
    { value: 'compliance', label: 'Compliance & Governance' },
    { value: 'finops', label: 'FinOps' },
    { value: 're-architecture', label: 'Re-Architecture' },
    { value: 'managed-support', label: 'Managed Support' },
    { value: 'vpn-firewall', label: 'VPN and Firewall' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3">
              Free Cloud <span className="text-gradient">Assessment</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Get a comprehensive analysis of your cloud infrastructure and discover optimization opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! We'll review your assessment and get back to you within 24 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Something went wrong. Please try again or contact us directly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                {/* Basic Information */}
                <div>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Basic Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                {/* Company Details */}
                <div>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Company Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Company Size
                      </label>
                      <select
                        {...register('companySize')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Current Cloud Spend (Monthly)
                      </label>
                      <select
                        {...register('currentCloudSpend')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                      >
                        <option value="">Select range</option>
                        <option value="<$1k">Less than $1k</option>
                        <option value="$1k-$10k">$1k - $10k</option>
                        <option value="$10k-$50k">$10k - $50k</option>
                        <option value="$50k-$100k">$50k - $100k</option>
                        <option value="$100k+">$100k+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Primary Challenges */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Primary Challenges <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {challenges.map((challenge) => (
                      <label
                        key={challenge}
                        className="flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={watchedChallenges.includes(challenge)}
                          onChange={() => toggleChallenge(challenge)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{challenge}</span>
                      </label>
                    ))}
                  </div>
                  {errors.primaryChallenges && (
                    <p className="mt-2 text-sm text-red-600">{errors.primaryChallenges.message}</p>
                  )}
                </div>

                {/* Services of Interest */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Services of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.value}
                        className="flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={watchedServices.includes(service.value)}
                          onChange={() => toggleService(service.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{service.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="mt-2 text-sm text-red-600">{errors.services.message}</p>
                  )}
                </div>

                {/* Timeline & Budget */}
                <div>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Project Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Timeline
                      </label>
                      <select
                        {...register('timeline')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Budget Range
                      </label>
                      <select
                        {...register('budget')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                      >
                        <option value="">Select budget</option>
                        <option value="<$10k">Less than $10k</option>
                        <option value="$10k-$50k">$10k - $50k</option>
                        <option value="$50k-$100k">$50k - $100k</option>
                        <option value="$100k+">$100k+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    {...register('additionalInfo')}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-base"
                    placeholder="Tell us more about your cloud infrastructure, specific challenges, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Assessment Request'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FreeAssessment;

