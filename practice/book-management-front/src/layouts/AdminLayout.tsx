import { Navigate, Outlet } from 'react-router';
import useUser from '../hooks/useUser';
import Fallback from '../components/Loadings/Fallback';
import { Suspense } from 'react';

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
			<Suspense fallback={<Fallback />}>
				<Outlet />
			</Suspense>
		</>
	);
}
