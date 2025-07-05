import { Navigate, Outlet } from 'react-router';
import useUser from '../hooks/useUser';

export default function AppLayout() {
	const { isLoggedIn } = useUser();
	if (!isLoggedIn) {
		return <Navigate to="/auth" />;
	}

	return (
		<>
			<Outlet />
		</>
	);
}
