import axios from 'axios';

// Create an instance of axios with default configuration
const api = axios.create({
    baseURL: 'https://api.example.com/', // Replace with your API base URL
    timeout: 10000, // Request timeout in milliseconds
});

// Add a request interceptor to include authentication tokens
api.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken'); // Retrieve token from local storage or any other storage mechanism
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Attach the token to the headers
    }
    return config;
}, error => {
    // Handle request error
    return Promise.reject(error);
});

// Add a response interceptor for handling responses
api.interceptors.response.use(response => {
    return response;
}, error => {
    // Handle response error
    if (error.response.status === 401) {
        // Handle unauthorized access (e.g. redirect to login)
    }
    return Promise.reject(error);
});

export default api;