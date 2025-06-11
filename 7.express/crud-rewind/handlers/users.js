import { v4 as uuidv4 } from 'uuid';
const users = [];
export function getUsers(req, res) {
	res.json(users);
}
export function createUser(req, res) {
	const newUser = req.body;
	newUser.id = uuidv4();
	users.push(newUser);
	res.json({
		message: 'User created successfully',
		success: true,
	});
}
export function updateUser(req, res) {
	const userPosition = users.findIndex((user) => {
		return user.id === req.params.id;
	});
	if (userPosition < 0) {
		throw new Error('User not found');
	}
	const updatedUser = req.body;
	users[userPosition] = { ...users[userPosition], ...updatedUser };
	res.json({
		message: 'User updated successfully',
		success: true,
	});
}
export function deleteUser(req, res) {
	const userPosition = users.findIndex((user) => {
		return user.id === req.params.id;
	});
	if (userPosition < 0) {
		throw new Error('User not found');
	}
	users.splice(userPosition, 1);
	res.json({
		message: 'User deleted successfully',
		success: true,
	});
}
