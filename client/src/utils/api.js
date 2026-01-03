import axios from 'axios';

// Determine API URL based on environment
// Production: api.cloudpillers.com
// Development: localhost:5001
const getApiUrl = () => {
  // If VITE_API_URL is explicitly set, use it
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Check if running in browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // If on cloudpillers.com domain, use api.cloudpillers.com
    if (hostname === 'cloudpillers.com' || hostname === 'www.cloudpillers.com') {
      // Always use HTTPS for production domain
      return 'https://api.cloudpillers.com/api/v1';
    }
  }
  
  // Default to localhost for local development
  return 'http://localhost:5001/api/v1';
};

const API_URL = getApiUrl();

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Check for admin token first, then regular token
    const adminToken = localStorage.getItem('adminToken');
    const token = localStorage.getItem('token');
    const authToken = adminToken || token;
    
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Only redirect if it's an admin route
      if (error.config?.url?.includes('/admin')) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        window.location.href = '/admin/login';
      } else {
        localStorage.removeItem('token');
      }
    }
    return Promise.reject(error);
  }
);

export default api;

