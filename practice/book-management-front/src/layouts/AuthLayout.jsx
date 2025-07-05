import { Outlet } from 'react-router';
import useUser from '../hooks/useUser';
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
					<Outlet />
				</div>
			</div>
		</div>
	);
}
