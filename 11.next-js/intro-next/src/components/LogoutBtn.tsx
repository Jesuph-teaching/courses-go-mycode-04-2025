'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

export default function LogoutBtn() {
	return (
		<button
			onClick={() => {
				signOut({
					redirect: false,
				});
			}}
			className="btn btn-error"
		>
			logout
		</button>
	);
}
