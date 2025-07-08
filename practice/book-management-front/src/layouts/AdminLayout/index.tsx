import { Navigate } from 'react-router';
import useUser from '../../hooks/useUser';
import DashboardLayout from '../DashboardLayout';
import { sidebarItems } from './routes';

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
			<DashboardLayout sidebarItems={sidebarItems}>
				<label htmlFor="sidebar-check" className="btn btn-primary drawer-button lg:hidden">
					<span className="icon-[heroicons--bars-3] h-6 w-6"></span>
				</label>
			</DashboardLayout>
		</>
	);
}
