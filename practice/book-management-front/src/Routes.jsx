import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router';

const NotFound = lazy(() => import('./pages/NotFound'));
// App pages
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const BookDetails = lazy(() => import('./pages/BookDetails'));
const Read = lazy(() => import('./pages/Read'));
const MyShelf = lazy(() => import('./pages/MyShelf'));
const ContributeBook = lazy(() => import('./pages/ContributeBook'));
// Authentication pages
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));

// Layouts
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));
const AppLayout = lazy(() => import('./layouts/AppLayout'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
// Admin pages
const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard'));
const AdminUsers = lazy(() => import('./pages/Admin/Users'));
const AdminBooks = lazy(() => import('./pages/Admin/Books'));
const AdminBorrowings = lazy(() => import('./pages/Admin/Borrowings'));
const AdminSettings = lazy(() => import('./pages/Admin/Settings'));

export default function Routes() {
	return useRoutes([
		{ index: true, element: <Navigate to="/app" replace /> },
		{
			path: '/app',
			Component: AppLayout,
			children: [
				{ index: true, element: <Navigate to="/app/home" replace /> },
				{ path: 'home', Component: Home },
				{ path: 'search', Component: Search },
				{ path: 'books/:id', Component: BookDetails },
				{ path: 'read/:id', Component: Read },
				{ path: 'my-shelf', Component: MyShelf },
				{ path: 'contribute', Component: ContributeBook },
			],
		},
		{
			path: '/admin',
			Component: AdminLayout,
			children: [
				{
					index: true,
					element: <Navigate to="/admin/dashboard" replace />,
				},
				{ path: 'dashboard', Component: AdminDashboard },
				{ path: 'users', Component: AdminUsers },
				{ path: 'books', Component: AdminBooks },
				{ path: 'borrowings', Component: AdminBorrowings },
				{ path: 'settings', Component: AdminSettings },
			],
		},
		{
			path: '/auth',
			Component: AuthLayout,
			children: [
				{ index: true, element: <Navigate to="/auth/login" replace /> },
				{ path: 'login', Component: Login },
				{ path: 'register', Component: Register },
				{ path: 'reset-password', Component: ResetPassword },
				{ path: 'reset-password/:token', Component: ChangePassword },
			],
		},
		{ path: '*', Component: NotFound },
	]);
}
