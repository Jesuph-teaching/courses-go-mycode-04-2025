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

axiosConfig.interceptors.response.use(
	(response) => {
		// Handle successful responses
		const schema = response.config.schema;
		if (schema) {
			try {
				// Validate and parse the response data
				const parsedData = schema.parse(response.data);
				response.data = parsedData; // Replace raw data with validated data
			} catch (error) {
				// Reject the promise with Zod validation error
				return Promise.reject(error);
			}
		}
		return response;
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			// Handle unauthorized access, e.g., redirect to login
			console.error('Unauthorized access - redirecting to login');
			window.location.href = '/auth/login';
		}
		return Promise.reject(error);
	}
);
export default axiosConfig;
