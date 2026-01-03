import axios from 'axios';

// Determine API URL based on environment (runtime detection)
// Production: api.cloudpillers.com
// Development: localhost:5001
const getApiUrl = () => {
  // If VITE_API_URL is explicitly set, use it
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Runtime detection - check if running in browser
  if (typeof window !== 'undefined' && window.location) {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    
    // If on cloudpillers.com domain, use api.cloudpillers.com
    if (hostname === 'cloudpillers.com' || hostname === 'www.cloudpillers.com') {
      // Always use HTTPS for production domain
      return 'https://api.cloudpillers.com/api/v1';
    }
    
    // If on localhost or 127.0.0.1, use localhost backend
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5001/api/v1';
    }
    
    // For other domains (like EC2 IP), try to use same host with port 5001
    // But prefer HTTPS if the frontend is HTTPS
    if (protocol === 'https:') {
      return `https://${hostname}:5001/api/v1`;
    }
    return `http://${hostname}:5001/api/v1`;
  }
  
  // Default to localhost for local development
  return 'http://localhost:5001/api/v1';
};

// Create axios instance with dynamic baseURL
const api = axios.create({
  baseURL: getApiUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 second timeout
});

// Request interceptor - set API URL and add auth token
api.interceptors.request.use(
  (config) => {
    // Re-evaluate API URL on each request to handle runtime changes
    if (typeof window !== 'undefined' && window.location) {
      const hostname = window.location.hostname;
      const protocol = window.location.protocol;
      
      // If on cloudpillers.com domain, always use api.cloudpillers.com
      if (hostname === 'cloudpillers.com' || hostname === 'www.cloudpillers.com') {
        config.baseURL = 'https://api.cloudpillers.com/api/v1';
      } 
      // If on localhost, use localhost backend
      else if (hostname === 'localhost' || hostname === '127.0.0.1') {
        config.baseURL = 'http://localhost:5001/api/v1';
      } 
      // For other domains, use same host with port 5001
      else if (!import.meta.env.VITE_API_URL) {
        if (protocol === 'https:') {
          config.baseURL = `https://${hostname}:5001/api/v1`;
        } else {
          config.baseURL = `http://${hostname}:5001/api/v1`;
        }
      }
    }
    
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
    // Log network errors for debugging
    if (!error.response) {
      console.error('Network Error:', {
        message: error.message,
        baseURL: error.config?.baseURL,
        url: error.config?.url,
        fullURL: error.config?.baseURL + error.config?.url,
      });
    }
    
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

