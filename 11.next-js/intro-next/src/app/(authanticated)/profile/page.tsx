'use client';
import LogoutBtn from '@/components/LogoutBtn';
import { useSession } from 'next-auth/react';
import React from 'react';

export default function Profile() {
	const { data, status } = useSession();
	if (status === 'unauthenticated' || !data?.user) {
		return <p>You are not logged in.</p>;
	}
	return (
		<div>
			<h1 className="text-6xl">Profile</h1>
			<h1 className="text-3xl">{data.user.name}</h1>
			<h3 className="text-xl">{data.user.email}</h3>
			<LogoutBtn />
		</div>
	);
}
