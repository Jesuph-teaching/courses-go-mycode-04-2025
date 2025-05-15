import React, { useState } from 'react';
import Profile from './Profile';

export default function ProfileDisplay() {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		age: 20,
	});
	return (
		<div>
			<form>
				<input
					value={user.firstName}
					placeholder="firstName"
					onChange={(e) => {
						setUser((u) => ({ ...u, firstName: e.target.value }));
					}}
				/>
				<input
					value={user.lastName}
					placeholder="lastName"
					onChange={(e) => {
						setUser((u) => ({ ...u, lastName: e.target.value }));
					}}
				/>
				<input
					value={user.age}
					placeholder="age"
					type="number"
					onChange={(e) => {
						setUser((u) => ({ ...u, age: Number(e.target.value) }));
					}}
				/>
			</form>
			<Profile
				firstName={user.firstName}
				lastName={user.lastName}
				age={user.age}
			/>
		</div>
	);
}
