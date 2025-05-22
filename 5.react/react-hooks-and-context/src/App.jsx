import ThemeProvider from './Provider/ThemeProvider';
import UserProvider from './Provider/UserProvider';
import { BrowserRouter, Route, Routes } from 'react-router';
// pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<UserProvider>
					<Routes>
						<Route path="/" Component={Home} />
						<Route path="/sign-in" Component={SignIn} />
					</Routes>
				</UserProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
