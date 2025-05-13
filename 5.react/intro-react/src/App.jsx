import Navbar from './components/Navbar';
import './App.css';
import Profile from './components/Profile';

const users = [
	{ firstName: 'Youcef', lastName: 'Madadi' },
	{ firstName: 'Chouaib', lastName: 'Madadi' },
	{ firstName: 'Assia', lastName: 'Madadi' },
	{ firstName: 'Imene', lastName: 'Madadi' },
];
export default function App() {
	return (
		<div>
			<Navbar />
			<Profile firstName="Youcef" lastName="Madadi" />

			{users.map((user) => (
				<Profile firstName={user.firstName} lastName={user.lastName} />
			))}
		</div>
	);
}
