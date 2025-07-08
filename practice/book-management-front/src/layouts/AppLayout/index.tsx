import { Navigate } from 'react-router';
import useUser from '../../hooks/useUser';
import { additionalSidebarItems, sidebarItems } from './routes';
import DashboardLayout from '../DashboardLayout';
import Navbar from './Navbar';

export default function AppLayout() {
	const { isLoggedIn } = useUser();
	if (!isLoggedIn) {
		return <Navigate to="/auth" />;
	}

	return (
		<DashboardLayout
			additionalSidebarItems={additionalSidebarItems}
			sidebarItems={sidebarItems}
		>
			<Navbar />
		</DashboardLayout>
	);
}
