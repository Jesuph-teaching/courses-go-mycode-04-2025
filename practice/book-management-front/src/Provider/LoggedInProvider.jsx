import { useQuery } from '@tanstack/react-query';
import useUser from '../hooks/useUser';
import { checkAuth } from '../api/auth';
import userSchema from '../validations/user';
import Fallback from '../components/Loadings/Fallback';
import Background from '../components/Background';

export default function LoggedInProvider({ children }) {
	const { login, logout } = useUser();
	const { isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			try {
				const user = await checkAuth();
				const parsedUser = await userSchema.parseAsync(user);
				login(parsedUser);
				return parsedUser;
			} catch (error) {
				console.error('Authentication error:', error);
				logout();
				throw error;
			}
		},
	});
	if (isLoading) {
		return <Fallback />;
	}
	return (
		<>
			<Background />
			{children}
		</>
	);
}
