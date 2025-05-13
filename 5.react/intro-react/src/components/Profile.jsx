import React from 'react';

export default function Profile(props) {
	return (
		<div>
			<h3>
				Hello, {props.firstName} {props.lastName}
			</h3>
		</div>
	);
}
