import userModel from '../models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { success } from 'zod/v4';
export function login(req, res) {
	res.json({
		success: true,
		message: 'You have logged in',
	});
}

export async function register(req, res) {
	// process registration
	const user = req.body;
	try {
		user.password = await bcrypt.hash(user.password, 10);
		const createdUser = await userModel.create(user);
		const userInfo = {
			_id: createdUser._id,
			createdAt: new Date(),
		};
		const token = jwt.sign(userInfo, process.env.AUTH_SECRET);
		res.json({
			success: true,
			message: 'You have registered',
			data: createdUser,
			token,
		});
	} catch (err) {
		if (err instanceof Error && 'code' in err) {
			if (err.code === 11000) {
				res.status(400).json({
					success: false,
					message: 'user already exist',
				});
			} else {
				res.status(400).json({
					success: false,
					message: 'Invalid user validation',
					error: err,
				});
			}
		} else {
			res.status(400).json({
				success: false,
				message: 'Unknown error',
				error: err,
			});
		}
	}
}

export async function checkUser(req, res) {
	// 1. token in the body
	//const token = req.body.token;
	// 2. token in the header
	const token = req.headers.authorization.split(' ')[1];
	if (!token) {
		throw new Error("Token doesn't exist ");
	}

	const verified = jwt.verify(token, process.env.AUTH_SECRET);
	if (!verified) {
		throw new Error('Unverified token used');
	}
	const user = await userModel.findById(verified._id).select('-password');
	if (!user) {
		throw new Error('User not found');
	}
	res.json({
		success: true,
		data: user,
	});
}
