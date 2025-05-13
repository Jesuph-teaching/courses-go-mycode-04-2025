import reactImage from '../assets/react.svg';
import './navbar.css';
export default function Navbar() {
	return (
		<nav className="navbar">
			<img src={reactImage} alt="" />
			<p>hello</p>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
			</ul>
		</nav>
	);
}
