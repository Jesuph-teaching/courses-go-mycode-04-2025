import 'dotenv/config';
import express from 'express';
import { z } from 'zod';

const PORT = process.env.PORT; // load the PORT from .env file
const app = express(); // create an express app

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const users = [];
const userSchema = z.object({
	firstName: z
		.string({ required_error: 'First name is required' })
		.min(4, 'First name must have at least 4 letters')
		.max(35, 'First name must have at most 35'),
	lastName: z
		.string({ required_error: 'Last name is required' })
		.min(4, 'Last name must have at least 4 letters')
		.max(35, 'Last name must have at most 35'),
});
// Read
app.get('/', function (req, res) {
	res.json(users);
});
app.post('/', function (req, res) {
	const newUser = userSchema.safeParse(req.body);
	if (newUser.success) {
		newUser.data.id = new Date().getTime();
		users.push(newUser.data);
		res.json({
			success: true,
			message: 'You have added a new user',
		});
	} else {
		throw newUser.error;
	}
});
app.put('/', function (req, res) {
	if (req.body) {
		if (req.body.id) {
			const { id: userId, ...data } = req.body;
			// search for index of the user to be updated
			const userIndex = users.findIndex((user) => {
				return user.id === userId;
			});
			// if it doesn't exist throw an error
			if (userIndex < 0) throw new Error('User not found');
			// update it
			users[userIndex] = { id: userId, ...data };
			res.json({
				success: true,
				message: 'user updated successfully',
			});
		} else {
			throw new Error("The id doesn't exist");
		}
	} else {
		throw new Error("The body doesn't have data");
	}
});
app.delete('/', function (req, res) {
	if (req.body) {
		if (req.body.id) {
			const { id: userId } = req.body;
			// search for index of the user to be updated
			const userIndex = users.findIndex((user) => {
				return user.id === userId;
			});
			// if it doesn't exist throw an error
			if (userIndex < 0) throw new Error('User not found');
			// delete it
			users.splice(userIndex, 1);
			res.json({
				success: true,
				message: 'user deleted successfully',
			});
		} else {
			throw new Error("The id doesn't exist");
		}
	} else {
		throw new Error("The body doesn't have data");
	}
});
/* rest route (404 - not found) */
app.get('{*n}', function (req, res) {
	res.status(404).json({
		message: 'This not found',
		success: false,
	});
});
/* for customizing errors */
app.use(function (err, req, res, next) {
	res.status(500).json({
		message: 'message' in err ? err.message : err,
		success: false,
	});
});

app.listen(PORT, function () {
	console.log(`Server is on http://localhost:${PORT}`);
});
