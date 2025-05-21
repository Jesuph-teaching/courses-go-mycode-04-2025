import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';

export default function useTheme() {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error(
			'Theme provider is not accessble or written outside a provider'
		);
	return context;
}
