import Counter from './components/Counter';
import DropDown from './components/DropDown';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Todo from './components/Todo';

export default function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<ProductCard />
				<Counter />
				<DropDown />
				<Todo />
			</main>
			<footer></footer>
		</>
	);
}
