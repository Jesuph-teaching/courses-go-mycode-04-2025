import React, { useEffect, useState } from 'react';

export default function Form() {
	const [title, setTitle] = useState('');
	useEffect(() => {
		document.title = 'GOMYCODE - ' + title;
		return () => {
			document.title = 'GOMYCODE - Home';
		};
	}, [title]);

	return (
		<form>
			<input
				type="text"
				placeholder="title"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<textarea name="" id=""></textarea>
		</form>
	);
}
