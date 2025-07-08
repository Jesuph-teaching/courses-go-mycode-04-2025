import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null as null | UserI,
	isLoggedIn: false,
	isAdmin: false,
};
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: { payload: UserI }) => {
			state.user = action.payload;
			state.isLoggedIn = true;
			state.isAdmin = true; // action.payload.role === 'Admin';
		},
		logout: (state) => {
			state.user = null;
			state.isLoggedIn = false;
			state.isAdmin = false;
		},
		updateFavoriteBooks: (state, action: { payload: string[] }) => {
			if (state.user) {
				state.user.books.favorite = action.payload;
			}
		},
		updateBorrowedBooks: (state, action: { payload: string[] }) => {
			if (state.user) {
				state.user.books.borrowed = action.payload;
			}
		},
		updateReadBooks: (state, action: { payload: string[] }) => {
			if (state.user) {
				state.user.books.read = action.payload;
			}
		},
		updateListenedBooks: (state, action: { payload: string[] }) => {
			if (state.user) {
				state.user.books.listened = action.payload;
			}
		},
	},
});

export const {
	login,
	logout,
	updateFavoriteBooks,
	updateBorrowedBooks,
	updateReadBooks,
	updateListenedBooks,
} = userSlice.actions;

export default userSlice.reducer;
