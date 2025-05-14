import React, { useState } from 'react';

export default function Todo() {
	const [text, setText] = useState('youcef');
	const [list, setList] = useState([]);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setList([text, ...list]);
			}}
			style={{
				border: '1px solid black',
				marginTop: '2rem',
			}}
		>
			<div>
				<input
					type="text"
					value={text}
					onChange={(event) => {
						setText(event.target.value);
					}}
				/>
				<button type="submit">add</button>
			</div>
			<ul>
				{list.map((element, i) => (
					<li key={i}>
						{element}
						<button
							type="button"
							onClick={() => {
								const newList = [...list];
								newList.splice(i, 1);
								setList(newList);
							}}
						>
							x
						</button>
					</li>
				))}
			</ul>
		</form>
	);
}
