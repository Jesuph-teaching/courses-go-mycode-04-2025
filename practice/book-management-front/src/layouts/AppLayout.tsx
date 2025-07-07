import { Navigate, Outlet } from 'react-router';
import useUser from '../hooks/useUser';
import { Suspense } from 'react';
import Fallback from '../components/Loadings/Fallback';

export default function AppLayout() {
	const { isLoggedIn } = useUser();
	if (!isLoggedIn) {
		return <Navigate to="/auth" />;
	}

	return (
		<>
			<Suspense fallback={<Fallback />}>
				<Outlet />
			</Suspense>
		</>
	);
}
