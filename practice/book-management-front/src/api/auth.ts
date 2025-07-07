import axiosConfig from '../config/axios';
import { userSchema } from '../validations/user';

export async function login({ email, password }: LoginUserI) {
	try {
		const response = await axiosConfig.post<ResponseI<UserI>>(
			'/auth/login',
			{
				email,
				password,
			},
			{
				schema: userSchema,
			}
		);
		return response.data;
	} catch (error) {
		console.error('Login error:', error);
		throw error;
	}
}
export async function register({ email, password, firstName, lastName }: RegisterUserI) {
	try {
		const response = await axiosConfig.post<ResponseI<UserI>>(
			'/auth/register',
			{
				email,
				password,
				firstName,
				lastName,
			},
			{
				schema: userSchema,
			}
		);
		return response.data;
	} catch (error) {
		console.error('Registration error:', error);
		throw error;
	}
}
export async function logout() {
	try {
		const response = await axiosConfig.delete<ResponseI>('/auth/logout');
		return response.data;
	} catch (error) {
		console.error('Logout error:', error);
		throw error;
	}
}
export async function checkAuth() {
	try {
		const response = await axiosConfig.get<ResponseI<UserI>>('/auth', { schema: userSchema });
		return response.data;
	} catch (error) {
		console.error('Check auth error:', error);
		throw error;
	}
}
