import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login, logout } from '../store/slice/user';

export default function useUser() {
	const { user, isLoggedIn, isAdmin } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	return {
		user,
		isLoggedIn,
		isAdmin,
		login: (userData) => dispatch(login(userData)),
		logout: () => dispatch(logout()),
	};
}
