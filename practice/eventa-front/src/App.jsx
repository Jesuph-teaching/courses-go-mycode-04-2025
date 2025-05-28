import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

// pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Error404 from './pages/Error404';
import SignIn from './pages/Auth/SignIn';
import Register from './pages/Auth/Register';
import ResetPassword from './pages/Auth/ResetPassword';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import UserProvider from './Provider/UserProvider';
import Activities from './pages/admin/Activities';
import Events from './pages/admin/Events';
import Users from './pages/admin/Users';

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route index element={<Navigate to={'/home'} />}></Route>
					<Route path="/home" Component={Home}></Route>
					<Route path="/auth" Component={AuthLayout}>
						<Route
							index
							element={<Navigate replace to={'/auth/sign-in'} />}
						/>
						<Route path="sign-in" Component={SignIn}></Route>
						<Route path="register" Component={Register}></Route>
						<Route
							path="reset-password"
							Component={ResetPassword}
						></Route>
					</Route>
					<Route path="/admin" Component={AdminLayout}>
						<Route path="dashboard" Component={Dashboard}></Route>
						<Route path="users" Component={Users}></Route>
						<Route path="events" Component={Events}></Route>
						<Route path="activities" Component={Activities}></Route>
					</Route>
					{/* <Route path="/" Component={Home}></Route> */}
					<Route path="/about-us" Component={AboutUs}></Route>
					<Route path="*" Component={Error404}></Route>
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
