import axios from 'axios';
import API_KEYS from "../constants/api-keys";

const url = `${API_KEYS.API_URL}/`;

const api = axios.create({
    baseURL: url, // Laravel API base URL
    withCredentials: true, // Include cookies for Sanctum authentication if needed
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;