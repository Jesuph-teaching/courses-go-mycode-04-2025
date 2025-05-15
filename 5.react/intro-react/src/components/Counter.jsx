import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export default function Counter() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('mounted counter');
		return () => {
			console.log('unmounted counter');
		};
	}, []);
	useEffect(() => {
		console.log('count has changed', count);
		if (count > 18) {
			toast('Rak kbir');
		}
	}, [count]);
	return (
		<div>
			<button
				onClick={() => {
					if (count > 0) {
						setCount(count - 1);
					}
				}}
			>
				-
			</button>
			<input
				value={count}
				type="number"
				onChange={(e) => {
					setCount(Number(e.target.value));
				}}
			/>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
			<Toaster />
		</div>
	);
}
