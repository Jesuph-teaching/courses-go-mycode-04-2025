import { useState } from 'react';
import { UserContext } from '../contexts/User';

export default function UserProvider({ children }) {
	// state management
	const [user, setUser] = useState({
		info: null,
		isLoggedIn: false,
		isAdmin: false,
		// token: null
	});
	function login(information) {
		// verify with the backend if data is correct
		if (information !== null) {
			setUser({
				info: information,
				isLoggedIn: true,
				isAdmin: true,
				// token: token that comes from the backend
			});
		}
	}
	function logout() {
		setUser({
			...user,
			//info:null
			isLoggedIn: false,
			isAdmin: false,
		});
	}
	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}
