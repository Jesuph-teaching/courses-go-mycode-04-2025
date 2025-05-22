import React, { useContext } from 'react';
import { UserContext } from '../contexts/User';

export default function useUser() {
	const context = useContext(UserContext);
	if (!context)
		throw new Error('useUser can be used only inside User Provider');
	return context;
}
