import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import AdminNav from '../../components/Admin/AdminNav';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [user, setUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'editor',
  });
  const [userMessage, setUserMessage] = useState(null);
  
  // Filter states
  const [contactFilter, setContactFilter] = useState('all');
  const [assessmentFilter, setAssessmentFilter] = useState('all');
  
  // Pagination states
  const [contactPage, setContactPage] = useState(1);
  const [assessmentPage, setAssessmentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  // Pagination metadata
  const [contactPagination, setContactPagination] = useState({ total: 0, pages: 1 });
  const [assessmentPagination, setAssessmentPagination] = useState({ total: 0, pages: 1 });
  
  // Detail modal states
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  
  // Active tab/section
  const [activeSection, setActiveSection] = useState('overview');
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');

    if (!token || !userData) {
      navigate('/admin/login');
      return;
    }

    setUser(JSON.parse(userData));
  }, [navigate]);

  // Load contacts and assessments when filters or pages change
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      await Promise.all([loadContacts(), loadAssessments(), loadTeamMembers()]);
      setLoading(false);
    };
    
    if (user) {
      loadInitialData();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      loadContacts();
    }
  }, [contactFilter, contactPage]);

  useEffect(() => {
    if (user) {
      loadAssessments();
    }
  }, [assessmentFilter, assessmentPage]);

  const loadContacts = async () => {
    try {
      const filterParam = contactFilter === 'all' ? '' : contactFilter;
      const contactsRes = await api.get('/contact/admin', {
        params: {
          filter: filterParam,
          page: contactPage,
          limit: itemsPerPage,
        },
      });
      setContacts(contactsRes.data.data || []);
      setContactPagination({
        total: contactsRes.data.total || 0,
        pages: contactsRes.data.pages || 1,
      });
    } catch (error) {
      console.error('Error loading contacts:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
      }
    }
  };

  const loadAssessments = async () => {
    try {
      const filterParam = assessmentFilter === 'all' ? '' : assessmentFilter;
      const assessmentsRes = await api.get('/assessment/admin', {
        params: {
          filter: filterParam,
          page: assessmentPage,
          limit: itemsPerPage,
        },
      });
      setAssessments(assessmentsRes.data.data || []);
      setAssessmentPagination({
        total: assessmentsRes.data.total || 0,
        pages: assessmentsRes.data.pages || 1,
      });
    } catch (error) {
      console.error('Error loading assessments:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
      }
    }
  };

  const loadTeamMembers = async () => {
    try {
      const usersRes = await api.get('/admin/users');
      setTeamMembers(usersRes.data.data || []);
    } catch (userError) {
      console.error('Error loading team members:', userError);
      setTeamMembers([]);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      setCreatingUser(true);
      setUserMessage(null);
      await api.post('/admin/register', userFormData);
      setUserMessage({ type: 'success', text: 'Team member created successfully!' });
      setUserFormData({ name: '', email: '', password: '', role: 'editor' });
      setShowUserForm(false);
      loadTeamMembers();
    } catch (error) {
      setUserMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to create team member. Please try again.',
      });
    } finally {
      setCreatingUser(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this team member?')) return;
    try {
      await api.delete(`/admin/users/${userId}`);
      setUserMessage({ type: 'success', text: 'Team member deleted successfully!' });
      loadTeamMembers();
    } catch (error) {
      setUserMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to delete team member. Please try again.',
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const quickActions = [
    {
      title: 'Homepage',
      description: 'Edit hero, stats & services',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      path: '/admin/homepage',
      bgColor: 'bg-blue-50',
      hoverBgColor: 'hover:bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Blog Posts',
      description: 'Manage blog content',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      path: '/admin/blog',
      bgColor: 'bg-purple-50',
      hoverBgColor: 'hover:bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'FAQ',
      description: 'Manage FAQs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      path: '/admin/faq',
      bgColor: 'bg-green-50',
      hoverBgColor: 'hover:bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Site Settings',
      description: 'Company info & contact',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      path: '/admin/settings',
      bgColor: 'bg-orange-50',
      hoverBgColor: 'hover:bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <div className="relative w-12 h-12 mx-auto mb-4">
            <div className="absolute inset-0 border-3 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-sm text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">
                Welcome back, <span className="font-medium text-gray-900">{user?.name || 'Admin'}</span>
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 w-fit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Key Metrics - Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Contact Submissions</p>
            <p className="text-3xl font-bold text-gray-900">{contactPagination.total}</p>
            <p className="text-xs text-gray-500 mt-1">Total inquiries</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-green-50 rounded-lg">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Assessment Requests</p>
            <p className="text-3xl font-bold text-gray-900">{assessmentPagination.total}</p>
            <p className="text-xs text-gray-500 mt-1">Pending reviews</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-indigo-50 rounded-lg">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Team Members</p>
            <p className="text-3xl font-bold text-gray-900">{teamMembers.length}</p>
            <p className="text-xs text-gray-500 mt-1">Active users</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-purple-50 rounded-lg">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Total Leads</p>
            <p className="text-3xl font-bold text-gray-900">{contactPagination.total + assessmentPagination.total}</p>
            <p className="text-xs text-gray-500 mt-1">Combined total</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              <button
                onClick={() => setActiveSection('overview')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeSection === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeSection === 'contacts'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contact Submissions
                {contactPagination.total > 0 && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
                    {contactPagination.total}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveSection('assessments')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeSection === 'assessments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Assessment Requests
                {assessmentPagination.total > 0 && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
                    {assessmentPagination.total}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveSection('team')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeSection === 'team'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Team Management
              </button>
            </nav>
          </div>
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action) => (
                  <button
                    key={action.path}
                    onClick={() => navigate(action.path)}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-left group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${action.bgColor} flex items-center justify-center ${action.hoverBgColor} transition-colors`}>
                      <div className={action.iconColor}>
                        {action.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {action.title}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{action.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Submissions Section */}
        {activeSection === 'contacts' && (
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-base font-semibold text-gray-900">Contact Submissions</h2>
              <div className="flex items-center gap-3">
                <select
                  value={contactFilter}
                  onChange={(e) => {
                    setContactFilter(e.target.value);
                    setContactPage(1);
                  }}
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="3months">Last 3 Months</option>
                  <option value="6months">Last 6 Months</option>
                  <option value="year">Last Year</option>
                </select>
                <span className="px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                  {contactPagination.total} total
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contacts.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="px-6 py-8 text-center text-sm text-gray-500">
                        No contact submissions found
                      </td>
                    </tr>
                  ) : (
                    contacts.map((contact) => (
                      <tr key={contact._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{contact.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{contact.phone || '—'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{contact.company || '—'}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded capitalize">
                            {contact.service || 'General'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(contact.createdAt)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            contact.status === 'read' || contact.status === 'contacted' || contact.status === 'qualified'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {contact.status || 'new'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {contactPagination.pages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {(contactPage - 1) * itemsPerPage + 1} to {Math.min(contactPage * itemsPerPage, contactPagination.total)} of {contactPagination.total} results
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setContactPage(p => Math.max(1, p - 1))}
                    disabled={contactPage === 1}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="px-3 py-1.5 text-sm text-gray-700">
                    Page {contactPage} of {contactPagination.pages}
                  </span>
                  <button
                    onClick={() => setContactPage(p => Math.min(contactPagination.pages, p + 1))}
                    disabled={contactPage === contactPagination.pages}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Assessment Requests Section */}
        {activeSection === 'assessments' && (
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-base font-semibold text-gray-900">Assessment Requests</h2>
              <div className="flex items-center gap-3">
                <select
                  value={assessmentFilter}
                  onChange={(e) => {
                    setAssessmentFilter(e.target.value);
                    setAssessmentPage(1);
                  }}
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="3months">Last 3 Months</option>
                  <option value="6months">Last 6 Months</option>
                  <option value="year">Last Year</option>
                </select>
                <span className="px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                  {assessmentPagination.total} total
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {assessments.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-sm text-gray-500">
                        No assessment requests found
                      </td>
                    </tr>
                  ) : (
                    assessments.map((assessment) => (
                      <tr key={assessment._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{assessment.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{assessment.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{assessment.company || '—'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(assessment.createdAt)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => setSelectedAssessment(assessment)}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {assessmentPagination.pages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {(assessmentPage - 1) * itemsPerPage + 1} to {Math.min(assessmentPage * itemsPerPage, assessmentPagination.total)} of {assessmentPagination.total} results
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setAssessmentPage(p => Math.max(1, p - 1))}
                    disabled={assessmentPage === 1}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="px-3 py-1.5 text-sm text-gray-700">
                    Page {assessmentPage} of {assessmentPagination.pages}
                  </span>
                  <button
                    onClick={() => setAssessmentPage(p => Math.min(assessmentPagination.pages, p + 1))}
                    disabled={assessmentPage === assessmentPagination.pages}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Team Management Section */}
        {activeSection === 'team' && (
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">Team Management</h2>
              <button
                onClick={() => {
                  setShowUserForm(!showUserForm);
                  setUserMessage(null);
                  setUserFormData({ name: '', email: '', password: '', role: 'editor' });
                }}
                className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                {showUserForm ? 'Cancel' : 'Add Member'}
              </button>
            </div>

            {userMessage && (
              <div className={`mx-6 mt-4 p-3 rounded-lg text-sm ${
                userMessage.type === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {userMessage.text}
              </div>
            )}

            {showUserForm && (
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Create Team Member</h3>
                <form onSubmit={handleCreateUser} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={userFormData.name}
                        onChange={(e) => setUserFormData({ ...userFormData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={userFormData.email}
                        onChange={(e) => setUserFormData({ ...userFormData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        value={userFormData.password}
                        onChange={(e) => setUserFormData({ ...userFormData, password: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        minLength={6}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Role <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={userFormData.role}
                        onChange={(e) => setUserFormData({ ...userFormData, role: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={creatingUser}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {creatingUser ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating...
                      </>
                    ) : (
                      'Create Member'
                    )}
                  </button>
                </form>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamMembers.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-sm text-gray-500">
                        No team members yet
                      </td>
                    </tr>
                  ) : (
                    teamMembers.map((member) => (
                      <tr key={member._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-xs mr-3">
                              {member.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{member.name}</div>
                              {member._id === user?.id && (
                                <div className="text-xs text-gray-500">Current user</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{member.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            member.role === 'admin'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {member.role === 'admin' ? 'Admin' : 'Editor'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(member.createdAt)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {member._id !== user?.id ? (
                            <button
                              onClick={() => handleDeleteUser(member._id)}
                              className="text-red-600 hover:text-red-800 font-medium"
                            >
                              Delete
                            </button>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Contact Details</h3>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-500">Name</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedContact.name}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Email</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedContact.email}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Phone</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedContact.phone || '—'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Company</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedContact.company || '—'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Service</label>
                  <p className="text-sm text-gray-900 mt-1 capitalize">{selectedContact.service || 'General'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Status</label>
                  <p className="text-sm text-gray-900 mt-1 capitalize">{selectedContact.status || 'New'}</p>
                </div>
                {selectedContact.source && (
                  <div>
                    <label className="text-xs font-medium text-gray-500">Source</label>
                    <p className="text-sm text-gray-900 mt-1">{selectedContact.source}</p>
                  </div>
                )}
                <div>
                  <label className="text-xs font-medium text-gray-500">Date Submitted</label>
                  <p className="text-sm text-gray-900 mt-1">{formatDate(selectedContact.createdAt)}</p>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500">Message</label>
                <p className="text-sm text-gray-900 mt-1 bg-gray-50 p-3 rounded-lg">{selectedContact.message || '—'}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assessment Detail Modal */}
      {selectedAssessment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Assessment Details</h3>
              <button
                onClick={() => setSelectedAssessment(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-500">Name</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedAssessment.name}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Email</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedAssessment.email}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Company</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedAssessment.company || '—'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Company Size</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedAssessment.companySize || '—'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Current Cloud Spend</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedAssessment.currentCloudSpend || '—'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Timeline</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedAssessment.timeline || '—'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Budget</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedAssessment.budget || '—'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Status</label>
                  <p className="text-sm text-gray-900 mt-1 capitalize">{selectedAssessment.status || 'New'}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">Date Submitted</label>
                  <p className="text-sm text-gray-900 mt-1">{formatDate(selectedAssessment.createdAt)}</p>
                </div>
              </div>
              {selectedAssessment.services && selectedAssessment.services.length > 0 && (
                <div>
                  <label className="text-xs font-medium text-gray-500">Services of Interest</label>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {selectedAssessment.services.map((service, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded capitalize">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {selectedAssessment.primaryChallenges && selectedAssessment.primaryChallenges.length > 0 && (
                <div>
                  <label className="text-xs font-medium text-gray-500">Primary Challenges</label>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {selectedAssessment.primaryChallenges.map((challenge, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {selectedAssessment.additionalInfo && (
                <div>
                  <label className="text-xs font-medium text-gray-500">Additional Information</label>
                  <p className="text-sm text-gray-900 mt-1 bg-gray-50 p-3 rounded-lg">{selectedAssessment.additionalInfo}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
