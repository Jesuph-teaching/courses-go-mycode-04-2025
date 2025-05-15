import React, { useEffect, useState } from 'react';

export default function CountDown() {
	const [count, setCount] = useState(200000);
	useEffect(() => {
		const id = setInterval(() => {
			setCount((prev) => {
				return prev - 1;
			});
		}, 60000); // 1000ms = 1s
		return () => {
			clearInterval(id);
		};
	}, []);
	return <div>{count}</div>;
}
