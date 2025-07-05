import { Outlet } from 'react-router';
import useUser from '../hooks/useUser';

export default function AdminLayout() {
	const { isLoggedIn, isAdmin } = useUser();
	if (!isLoggedIn) {
		return <Navigate to="/auth" />;
	}
	if (!isAdmin) {
		return <Navigate to="/app" />;
	}

	return (
		<>
			<Outlet />
		</>
	);
}
