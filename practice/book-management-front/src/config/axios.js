import axios from 'axios';

const axiosConfig = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	withCredentials: true,
});
/* 
// This is a custom axios instance that sets the base URL and default headers.
// It also includes an interceptor to add the Authorization header with a token from localStorage.
axiosConfig.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
}); */

export default axiosConfig;
