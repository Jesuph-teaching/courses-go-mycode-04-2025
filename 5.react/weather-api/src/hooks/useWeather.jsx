import { useState } from 'react';

export default function useWeather() {
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	function fetchWeather(url) {
		setError(null);
		setLoading(true);
		fetch(url)
			.then((response) => {
				if (response.ok) {
					setError(null);
					response.json().then((data) => {
						setData(data);
					});
				} else {
					setData(null);
					if (response.status === 400) {
						setError('You need to write the name of the city');
					} else if (response.status === 404) {
						setError("This city doesn't exist");
					}
				}
			})
			.catch((e) => {
				console.log(e);
				setData(null);
				setError('Unknown error');
			})
			.finally(() => {
				setLoading(false);
			});
	}
	return {
		error,
		data,
		loading,
		fetchWeather,
	};
}
