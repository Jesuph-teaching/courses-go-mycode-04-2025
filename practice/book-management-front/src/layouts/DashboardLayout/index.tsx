import { Outlet } from 'react-router';
import { Suspense } from 'react';
import Fallback from '../../components/Loadings/Fallback';
import Sidebar from './Sidebar';
import type { SidebarItem } from './type';

export default function DashboardLayout({
	children,
	additionalSidebarItems = [],
	sidebarItems,
}: {
	children?: React.ReactNode;
	additionalSidebarItems?: SidebarItem[];
	sidebarItems: SidebarItem[];
}) {
	return (
		<div className="flex h-full w-full px-8 pt-8">
			<div className="drawer lg:drawer-open bg-base-200 w-full overflow-clip rounded-t-xl shadow-xl">
				<input id="sidebar-check" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col py-8">
					{/* Page content here */}
					{children}
					<Suspense fallback={<Fallback />}>
						<Outlet />
					</Suspense>
				</div>
				<Sidebar
					additionalSidebarItems={additionalSidebarItems}
					sidebarItems={sidebarItems}
				/>
			</div>
		</div>
	);
}
