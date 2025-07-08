import { useQuery } from '@tanstack/react-query';
import useUser from '../hooks/useUser';
import { checkAuth } from '../api/auth';
import Fallback from '../components/Loadings/Fallback';
import Background from '../components/Background';

export default function LoggedInProvider({ children }: { children: React.ReactNode }) {
	const { login, logout } = useUser();
	const { isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			try {
				const user = await checkAuth();
				if (!user.success) throw new Error('Authentication failed');
				login(user.data);
				return user.data;
			} catch (error) {
				console.error('Authentication error:', error);
				logout();
				throw error;
			}
		},
	});
	/* if (isLoading) {
		return <Fallback />;
	} */
	return (
		<>
			<Background />
			{children}
		</>
	);
}
