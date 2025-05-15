import { useState } from 'react';
import Profile from './Profile';

export default function Exercise() {
	const [userForm, setUserForm] = useState({
		firstName: '',
		lastName: '',
		age: 20,
	});
	function handleFirstNameChange(e) {
		setUserForm({ ...userForm, firstName: e.target.value });
	}
	console.log('updating');
	return (
		<div>
			<input
				placeholder="First name"
				type="text"
				value={userForm.firstName}
				onChange={handleFirstNameChange}
			/>
			<input
				placeholder="Last name"
				type="text"
				value={userForm.lastName}
				onChange={(e) => {
					setUserForm({ ...userForm, lastName: e.target.value });
				}}
			/>
			<input
				placeholder="Age"
				type="number"
				value={userForm.age}
				onChange={(e) => {
					const newValue = Number(e.target.value);
					if (newValue > 0) {
						setUserForm({ ...userForm, age: newValue });
					}
				}}
			/>
			<Profile
				firstName={userForm.firstName}
				lastName={userForm.lastName}
				age={userForm.age}
			/>
		</div>
	);
}
