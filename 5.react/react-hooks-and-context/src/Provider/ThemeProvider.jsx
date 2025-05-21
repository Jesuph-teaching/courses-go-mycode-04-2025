import { useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/Theme';

const initialTheme = localStorage.getItem('theme');

export default function ThemeProvider({ children }) {
	const [isLight, setIsLight] = useState(initialTheme === 'true');
	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			isLight ? 'lofi' : 'luxury'
		);
		localStorage.setItem('theme', isLight ? 'true' : 'false');
	}, [isLight]);
	function toggleTheme() {
		setIsLight(!isLight);
	}
	return (
		<ThemeContext.Provider value={{ isLight, setIsLight, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
