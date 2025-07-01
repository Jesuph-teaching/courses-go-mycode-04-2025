import { StatusCodes } from 'http-status-codes';

import userModel from '../models/users.js';
import jwt from 'jsonwebtoken';
import transporter from '../services/email.js';
import { SendVerificationEmail } from '../utils/emailVerification.js';
import sessionModel from '../models/Session.js';

export async function login(req, res) {
	try {
		const { email, password } = req.body;
		const user = await userModel.findOne({ email: email });
		if (!user) {
			throw new Error('Wrong email');
		}
		const isPasswordCorrect = await user.comparePassword(password);
		// comparing password
		if (!isPasswordCorrect) {
			throw new Error('Wrong password');
		}
		const userInfo = {
			_id: user._id,
			createdAt: new Date(),
		};
		const token = jwt.sign(userInfo, process.env.AUTH_SECRET);
		user.password = undefined; // remove password from the response
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'You have logged in',
			data: user,
			token,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: 'Failed to login',
			error: error.message,
		});
	}
}

export async function register(req, res) {
	// process registration
	const user = req.body;
	try {
		const createdUser = await userModel.create(user);
		const userInfo = {
			_id: createdUser._id,
			createdAt: new Date(),
		};
		const token = jwt.sign(userInfo, process.env.AUTH_SECRET);
		createdUser.password = undefined; // remove password from the response
		SendVerificationEmail(createdUser);
		res.status(StatusCodes.OK).json({
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
	const user = req.user;
	if (!user) {
		throw new Error('User not found');
	}
	res.json({
		success: true,
		data: user,
	});
}

export async function verifyEmail(req, res) {
	try {
		// here
		const { otp } = req.body;
		const session = await sessionModel.findOne({
			userId: req.user._id,
			sessionType: 'email',
		});
		if (!session) {
			// or if createdAt surpass 5min
			throw new Error('The session has expired');
		}
		if (session.password !== otp) {
			throw new Error('OTP code is wrong');
		}
		req.user.isEmailVerified = true;
		await req.user.save();
		await session.deleteOne();
		res.json({
			success: true,
			message: 'User email is verified successfully',
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: 'Failed to verify the email',
			error: error.message,
		});
	}
}
