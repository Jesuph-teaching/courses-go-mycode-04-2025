import { getSession } from '@/auth.config';
import LogoutBtn from '@/components/LogoutBtn';
import React from 'react';

export default async function Profile() {
	const session = await getSession();
	if (!session) {
		return <p>You are not logged in.</p>;
	}
	return (
		<div>
			<h1 className="text-6xl">Account</h1>
			<h1 className="text-3xl">{session.user?.name}</h1>
			<h3 className="text-xl">{session.user?.email}</h3>
			<LogoutBtn />
		</div>
	);
}
