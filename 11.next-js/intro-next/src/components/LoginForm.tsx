'use client';
import { signIn, SignInResponse } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isSigning, setIsSigning] = useState(false);
	const [data, setData] = useState<SignInResponse | null>(null);
	const router = useRouter();
	useEffect(() => {
		if (data) {
			if (data.ok) {
				// redirect to /account
				setTimeout(() => {
					setIsSigning(false);
					router.push('/account');
				}, 1500);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				setIsSigning(true);
				const response = await signIn('credentials', { email, password, redirect: false });
				setData(response ?? null);
			}}
			className="card bg-base-200"
		>
			<div className="card-body">
				{data ? (
					<p className="text-center">
						{data.error ? data.error : 'successfully logged in'}
					</p>
				) : null}
				<div className="flex flex-col w-full ">
					<label htmlFor="email">Email</label>
					<input
						className="w-full input "
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="flex flex-col w-full ">
					<label htmlFor="password">Password</label>
					<input
						className="w-full input"
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<button disabled={isSigning} className="btn btn-primary">
					Login
				</button>
				<p>
					if you don&apos;t have an account please{' '}
					<Link href="/auth/registration" className="text-blue-500">
						create an account
					</Link>
				</p>
			</div>
		</form>
	);
}
