import { useState } from 'react';

export default function ProductCard() {
	const [state, setState] = useState(200);
	const imageStyle = {
		width: state,
		height: '200px',
	};
	return (
		<div>
			<img
				src="/tree.png"
				alt=""
				style={imageStyle}
				onClick={() => {
					setState(300);
					console.log('click');
				}}
			/>
		</div>
	);
}
