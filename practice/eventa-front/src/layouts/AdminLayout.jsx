import React from 'react';
import { Link, Navigate, Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import useUser from '../hooks/useUser';
const navigation = [
	{
		name: 'Dashboard',
		path: '/admin/dashboard',
	},
	{
		name: 'Users',
		path: '/admin/users',
	},
];
export default function AdminLayout() {
	const { user } = useUser();
	if (user.isLoggedIn && user.isAdmin)
		return (
			<div className="w-full h-screen flex flex-col">
				<Navbar />
				<div className="flex w-full h-full">
					<aside className="w-56 h-full border flex flex-col">
						{navigation.map((nav) => (
							<Link to={nav.path}>{nav.name}</Link>
						))}
					</aside>
					<Outlet />
				</div>
			</div>
		);
	return <Navigate to={'/auth/sign-in'} />;
}
