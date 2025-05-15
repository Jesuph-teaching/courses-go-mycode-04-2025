import CountDown from './components/CountDown';
import Counter from './components/Counter';
import DropDown from './components/DropDown';
import Exercise from './components/Exercise';
import Form from './components/Form';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Profile from './components/Profile';
import ProfileDisplay from './components/ProfileDisplay';
import Todo from './components/Todo';

export default function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				{/* <ProductCard /> */}
				<Counter />
				{/* <DropDown />
				<Todo />
				<ProfileDisplay />
				<Profile firstName="Youcef" />
				<Exercise /> */}
				<CountDown />
				<Form />
			</main>
			<footer></footer>
		</>
	);
}
