import {
	configureStore,
	type Action,
	type ThunkAction,
} from '@reduxjs/toolkit';
import userReducer from './slice/user'; // Assuming you have a user slice
const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export default store;

export const dispatch = store.dispatch;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
