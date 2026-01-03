import axios from 'axios';

// Determine API URL based on environment
// In production (EC2), use the same host with port 5001
// In development, use localhost or VITE_API_URL
const getApiUrl = () => {
  // If VITE_API_URL is explicitly set, use it
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // If running in browser, detect the current host
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    
    // If not localhost, use the same host with backend port
    if (host !== 'localhost' && host !== '127.0.0.1') {
      return `${protocol}//${host}:5001/api/v1`;
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

