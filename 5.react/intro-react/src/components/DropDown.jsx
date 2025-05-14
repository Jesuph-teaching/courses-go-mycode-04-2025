import { useState } from 'react';
import './dropdown.css';

export default function DropDown() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="dropdown">
			<button
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				menu
			</button>
			{isOpen ? (
				<ul className="dropdown-menu">
					<li>element 1 </li>
					<li>element 2</li>
					<li>element 3</li>
				</ul>
			) : null}
		</div>
	);
}
