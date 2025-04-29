class User {
	username;
	password;
	id;
	age;
	isLoggedIn = false;
	static counter = 0;
	constructor(username, password, age) {
		this.username = username;
		this.password = password;
		this.age = age;
		//this.id = Math.floor(Math.random() * 100000);
		this.id = User.counter++;
	}
	login(password) {
		if (this.password === password) {
			console.log('You are logged in');
			this.isLoggedIn = true;
		} else {
			console.log('wrong password');
			this.isLoggedIn = false;
		}
	}
	logout() {
		console.log('You have logged out');
		this.isLoggedIn = false;
	}
	/* 	sendMessage(to, message) {
		console.log(`message sent to ${to.username} [${message}]`);
		to.receiveMessage(this, message);
	}
	receiveMessage(from, message) {
		console.log(`message received from ${from.username} :[${message}]`);
	} */
}
const user1 = new User('Youcef', 'password', 27);
const user2 = new User('Larbi', 'password', 21);
const user3 = new User('Farouk', 'password', 20);
//user1.sendMessage(user2, 'hello Larbi');
console.log(user1, user2, user3);

//user1.login(prompt('Please enter password for user 1'));
/* 
class Animal
- attributes  (hungerLevel)
- feed (-- from hungerLevel)
2 animal
 */
