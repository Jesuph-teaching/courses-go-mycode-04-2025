import React from 'react';
import { Link } from 'react-router';

export default function Register() {
	return (
		<div>
			<h2 className="text-xl font-bold">Register</h2>
			<fieldset className="fieldset">
				<label className="label">Email</label>
				<input type="email" className="input" placeholder="Email" />
				<label className="label">Password</label>
				<input
					type="password"
					className="input"
					placeholder="Password"
				/>
				<div>
					<Link to="/auth/reset-password" className="link link-hover">
						Forgot password?
					</Link>
				</div>
				<button className="btn btn-neutral mt-4">Login</button>
			</fieldset>
		</div>
	);
}
