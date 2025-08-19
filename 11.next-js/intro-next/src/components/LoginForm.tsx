'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function LoginForm({ lastLogin }: { lastLogin: { message: string } }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form onSubmit={(e) => {}} className="card bg-base-200">
			<div className="card-body">
				<p>{lastLogin.message}</p>
				<div className="flex flex-col w-full max-w-xs">
					<label
						htmlFor="email"
						/* className="select-none"
					onCopy={(e) => {
						e.preventDefault();
					}} */
					>
						Email
					</label>
					<input
						className="w-full border rounded-lg select-none"
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
				<div className="flex flex-col w-full max-w-xs">
					<label htmlFor="password">Password</label>
					<input
						className="w-full border rounded-lg select-none"
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
				<button>Login</button>
				<p>
					if you don't have an account please{' '}
					<Link href="/auth/registration" className="text-blue-500">
						create an account
					</Link>
				</p>
			</div>
		</form>
	);
}
