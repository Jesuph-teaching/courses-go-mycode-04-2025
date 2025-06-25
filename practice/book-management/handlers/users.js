import { StatusCodes } from 'http-status-codes';
import userModel from '../models/users.js';

export async function getUsers(req, res) {
	try {
		const users = await userModel.find();
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Users fetched successfully',
			data: users,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Failed to fetch users',
			error: error.message || error,
		});
	}
}
export async function createUser(req, res) {
	try {
		const user = await userModel.create(req.body);
		res.status(StatusCodes.CREATED).json({
			success: true,
			message: 'User created successfully',
			data: user,
		});
	} catch (error) {
		if (error instanceof Error) {
			if (error.code === 1100) {
				res.status(StatusCodes.CONFLICT).json({
					success: false,
					message: 'User already exist',
					error: error,
				});
			} else {
				res.status(StatusCodes.BAD_REQUEST).json({
					success: false,
					message: 'Failed to create user',
					error: error,
				});
			}
		} else {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				success: false,
				message: 'Failed to create user due to server error',
				error: error,
			});
		}
	}
}
export async function getUserById(req, res) {
	try {
		const user = await userModel.findById(req.params.id);
		if (!user) {
			throw new Error('User not found');
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'User fetched successfully',
			data: user,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to fetch user ${req.params.id}`,
			error: error.message || error,
		});
	}
}
export async function updateUser(req, res) {
	try {
		const user = await userModel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
			}
		);
		if (!user) {
			throw new Error('User not found');
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'User updated successfully',
			data: user,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to update user ${req.params.id}`,
			error: error.message || error,
		});
	}
}
export async function deleteUser(req, res) {
	try {
		const user = await userModel.findByIdAndDelete(req.params.id);
		if (!user) {
			throw new Error('User not found');
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'User deleted successfully',
			data: user,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to delete user ${req.params.id}`,
			error: error.message || error,
		});
	}
}
