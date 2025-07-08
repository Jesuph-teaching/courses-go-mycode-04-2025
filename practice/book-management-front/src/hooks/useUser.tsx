import {
	login,
	logout,
	updateBorrowedBooks,
	updateFavoriteBooks,
	updateListenedBooks,
	updateReadBooks,
} from '../store/slice/user';
import { useAppDispatch, useAppSelector } from './redux';

export default function useUser() {
	const { user, isLoggedIn, isAdmin } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	return {
		user,
		isLoggedIn,
		isAdmin,
		// actions
		login: (userData: UserI) => dispatch(login(userData)),
		logout: () => dispatch(logout()),
		updateFavoriteBooks: (books: string[]) => dispatch(updateFavoriteBooks(books)),
		updateBorrowedBooks: (books: string[]) => dispatch(updateBorrowedBooks(books)),
		updateReadBooks: (books: string[]) => dispatch(updateReadBooks(books)),
		updateListenedBooks: (books: string[]) => dispatch(updateListenedBooks(books)),
	};
}
