// <Profile firstName="" => props ={firsName:""}
export default function Profile({ firstName, lastName, age }) {
	return (
		<div>
			<h3>
				Hello, {firstName} {lastName}, {age}
			</h3>
		</div>
	);
}
