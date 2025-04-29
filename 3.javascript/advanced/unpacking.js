const user1 = {
	id: 3245,
	age: 27,
	username: 'youcef',
	password: 'hello',
	//isVerified: false,
};

function displayUser({ username, age, isVerified }) {
	console.log(`
    My name is ${username},
    I'm ${age} years old,
    and i'm ${isVerified ? 'verified' : 'not verified'}.
    `);
}

displayUser(user1);
