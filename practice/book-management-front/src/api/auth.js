import axiosConfig from '../config/axios';

export async function login({ email, password }) {
	try {
		const response = await axiosConfig.post('/auth/login', {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		console.error('Login error:', error);
		throw error;
	}
}
export async function register({ email, password, firstName, lastName }) {
	try {
		const response = await axiosConfig.post('/auth/register', {
			email,
			password,
			firstName,
			lastName,
		});
		return response.data;
	} catch (error) {
		console.error('Registration error:', error);
		throw error;
	}
}
export async function logout() {
	try {
		const response = await axiosConfig.delete('/auth/logout');
		return response.data;
	} catch (error) {
		console.error('Logout error:', error);
		throw error;
	}
}
export async function checkAuth() {
	try {
		const response = await axiosConfig.get('/auth');
		return response.data;
	} catch (error) {
		console.error('Check auth error:', error);
		throw error;
	}
}
