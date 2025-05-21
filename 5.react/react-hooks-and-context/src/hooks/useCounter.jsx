import React, { useState } from 'react';

export default function useCounter(initial) {
	const [count, setCount] = useState(initial);
	function increment() {
		setCount(count + 1);
	}
	return {
		increment,
		count,
	};
}
