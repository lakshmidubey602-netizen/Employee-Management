import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging/debugging
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error || 'Something went wrong';
    console.error('API Error:', message);
    return Promise.reject({ message, status: error.response?.status });
  }
);

// Employee API endpoints
export const employeeAPI = {
  // Get all employees
  getAll: () => api.get('/employees'),

  // Get single employee
  getById: (id) => api.get(`/employees/${id}`),

  // Create new employee
  create: (data) => api.post('/employees', data),

  // Update employee
  update: (id, data) => api.put(`/employees/${id}`, data),

  // Delete employee
  delete: (id) => api.delete(`/employees/${id}`),
};

export default api;
