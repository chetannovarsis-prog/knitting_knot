import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.knittingknot.com/api',
});

// Add a request interceptor to include the customer token
api.interceptors.request.use(
  (config) => {
    const customer = JSON.parse(localStorage.getItem('customer') || 'null');
    const token = customer?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle HTML responses (SPA fallback)
api.interceptors.response.use(
  (response) => {
    // If the response is a string and starts with <!DOCTYPE html>, it's likely the SPA fallback
    if (typeof response.data === 'string' && response.data.trim().startsWith('<!DOCTYPE html>')) {
      console.error('Received HTML instead of JSON. Check the API URL and endpoint.');
      return Promise.reject(new Error('Received HTML instead of JSON'));
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
