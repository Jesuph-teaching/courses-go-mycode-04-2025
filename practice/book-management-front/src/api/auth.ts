import axiosConfig from '../config/axios';
import { userSchema } from '../validations/user';

export async function login({
	email,
	password,
	rememberMe,
}: LoginUserI & { rememberMe?: boolean }) {
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
	if (response.data.success && response.data.token) {
		if (rememberMe) localStorage.setItem('token', response.data.token);
		sessionStorage.setItem('token', response.data.token);
	}

	return response.data;
}
export async function register({ email, password, /* firstName, lastName */ name }: RegisterUserI) {
	const response = await axiosConfig.post<ResponseI<UserI>>(
		'/auth/register',
		{
			email,
			password,
			/* firstName,
			lastName, */
			name,
		},
		{
			schema: userSchema,
		}
	);
	if (response.data.success && response.data.token) {
		sessionStorage.setItem('token', response.data.token);
	}
	return response.data;
}
export async function logout() {
	const response = await axiosConfig.delete<ResponseI>('/auth/logout');
	sessionStorage.removeItem('token');
	localStorage.removeItem('token');
	return response.data;
}
export async function checkAuth() {
	const response = await axiosConfig.get<ResponseI<UserI>>('/auth', { schema: userSchema });
	return response.data;
}
