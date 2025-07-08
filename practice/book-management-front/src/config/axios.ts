import axios from 'axios';
import { responseSchema } from '../validations/response';

if (localStorage.getItem('token')) {
	sessionStorage.setItem('token', localStorage.getItem('token') || '');
}

const axiosConfig = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	withCredentials: true,
});

// This is a custom axios instance that sets the base URL and default headers.
// It also includes an interceptor to add the Authorization header with a token from sessionStorage.
axiosConfig.interceptors.request.use((config) => {
	const token = sessionStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

axiosConfig.interceptors.response.use(
	(response) => {
		// Handle successful responses
		const schema = response.config.schema;
		if (schema) {
			try {
				// Validate and parse the response data
				const rS = responseSchema(schema);
				const parsedData = rS.parse(response.data);
				response.data = parsedData; // Replace raw data with validated data
			} catch (error) {
				if (error instanceof Error) {
					console.error(error.message);
					throw new Error(`Response validation failed`);
				}
				return Promise.reject(error);
			}
		}
		return response;
	},
	(error) => {
		if (
			error.response &&
			error.response.status === 401 &&
			// typeof window !== 'undefined' &&
			!window.location.href.includes('/auth')
		) {
			window.location.href = '/auth/login';
		}
		return Promise.reject(error);
	}
);
export default axiosConfig;
