import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import UserFormModal from './components/UserFormModal';
import type { UserI } from './types/user';

export default function App() {
	const [users, setUsers] = useState<UserI[]>([
		{
			firstName: 'Youcef',
			lastName: 'Madadi',
			age: 27,
		},
	]);
	return (
		<>
			<div className="grid grid-cols-2 xl:grid-cols-3 container mx-auto gap-4">
				{users.map((user) => (
					<ProfileCard
						age={user.age}
						firstName={user.firstName}
						lastName={user.lastName}
					/>
				))}
			</div>
			<UserFormModal
				onCreateUser={(user) => {
					setUsers((p) => [...p, user]);
				}}
			/>
		</>
	);
}
