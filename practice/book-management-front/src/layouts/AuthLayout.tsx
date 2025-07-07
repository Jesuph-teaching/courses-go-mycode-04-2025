import { Navigate, Outlet } from 'react-router';
import useUser from '../hooks/useUser';
import { Suspense } from 'react';
import Fallback from '../components/Loadings/Fallback';

export default function AuthLayout() {
	const { isLoggedIn } = useUser();
	if (isLoggedIn) {
		return <Navigate to="/app" />;
	}

	return (
		<div className="w-full h-full overflow-auto py-8 flex items-center flex-col">
			<div className="card bg-base-200 my-auto w-lg shadow-xl">
				<div className="card-body flex-col items-center justify-center gap-4">
					<img src="/logo.png" alt="logo" className="w-36 mb-8" />
					<Suspense fallback={<Fallback />}>
						<Outlet />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
