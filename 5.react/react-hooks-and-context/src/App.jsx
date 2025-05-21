import ButtonThemeSwitch from './components/ButtonThemeSwitch';
import Navbar from './components/Navbar';
import ThemeProvider from './Provider/ThemeProvider';

function App() {
	return (
		<ThemeProvider>
			<Navbar></Navbar>
			<p className="">Hello</p>
			<ButtonThemeSwitch />
		</ThemeProvider>
	);
}

export default App;
