import userModel from '../models/users.js';

export function getUsers(req, res) {
	userModel.find().then((users) => {
		res.json({
			message: 'created user successfully',
			success: true,
			data: users,
		});
	});
}

export function createUser(req, res) {
	userModel
		.insertOne(req.body)
		.then((user) => {
			res.json({
				message: 'created user successfully',
				success: true,
				data: user,
			});
		})
		.catch((error) => {
			res.json({
				success: false,
				message: 'Failed to create a user',
				error: error,
			});
		});
}
