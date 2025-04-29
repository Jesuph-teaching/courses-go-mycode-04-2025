const user = {
	id: 3245,
	username: 'youcef',
	password: 'hello',
	isVerified: true,
};
const user2 = {
	id: 234634,
	username: 'chouaib',
	password: 'front-end',
	isVerified: false,
};
/* const id = user.id;
const username = user.username; */
const { id, username } = user;
const { id: id2, username: username2, email = 'chouaib@deepseek.com' } = user2;
console.log(id, id2, email);
