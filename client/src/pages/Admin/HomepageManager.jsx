import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../../utils/api';
import AdminNav from '../../components/Admin/AdminNav';
import Button from '../../components/common/Button';

const HomepageManager = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    loadContent();
  }, [navigate]);

  const loadContent = async () => {
    try {
      setLoading(true);
      const response = await api.get('/homepage');
      setContent(response.data.data);
    } catch (error) {
      console.error('Error loading content:', error);
      if (error.response?.status === 401) {
        navigate('/admin/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      setMessage(null);
      await api.put('/homepage', content);
      setMessage({ type: 'success', text: 'Homepage content saved successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save content. Please try again.' });
      console.error('Error saving content:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (path, value) => {
    const keys = path.split('.');
    setContent((prev) => {
      const newContent = { ...prev };
      let current = newContent;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newContent;
    });
  };

  const addStat = () => {
    setContent((prev) => ({
      ...prev,
      stats: [...(prev.stats || []), { value: '', label: '', order: prev.stats?.length || 0 }],
    }));
  };

  const removeStat = (index) => {
    setContent((prev) => ({
      ...prev,
      stats: prev.stats.filter((_, i) => i !== index),
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <svg className="animate-spin h-12 w-12 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-600">Loading content...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <AdminNav />
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">Homepage Content Manager</h1>
          <p className="text-gray-600">Manage your homepage content</p>
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'
            }`}
          >
            {message.text}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Hero Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Hero Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Badge Text</label>
                <input
                  type="text"
                  value={content.hero?.badge || ''}
                  onChange={(e) => handleChange('hero.badge', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Main Heading</label>
                <input
                  type="text"
                  value={content.hero?.mainHeading || ''}
                  onChange={(e) => handleChange('hero.mainHeading', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Sub Heading</label>
                <input
                  type="text"
                  value={content.hero?.subHeading || ''}
                  onChange={(e) => handleChange('hero.subHeading', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
                <textarea
                  rows={3}
                  value={content.hero?.description || ''}
                  onChange={(e) => handleChange('hero.description', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-heading font-bold text-gray-900">Stats Section</h2>
              <Button type="button" variant="secondary" size="sm" onClick={addStat}>
                + Add Stat
              </Button>
            </div>
            <div className="space-y-4">
              {content.stats?.map((stat, index) => (
                <div key={index} className="flex gap-4 items-end">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Value</label>
                    <input
                      type="text"
                      value={stat.value || ''}
                      onChange={(e) => {
                        const newStats = [...content.stats];
                        newStats[index].value = e.target.value;
                        setContent({ ...content, stats: newStats });
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Label</label>
                    <input
                      type="text"
                      value={stat.label || ''}
                      onChange={(e) => {
                        const newStats = [...content.stats];
                        newStats[index].label = e.target.value;
                        setContent({ ...content, stats: newStats });
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeStat(index)}
                    className="px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="primary" size="lg" disabled={saving}>
              {saving ? 'Saving...' : 'Save Content'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomepageManager;

