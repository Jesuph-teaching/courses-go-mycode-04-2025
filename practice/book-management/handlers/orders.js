import { StatusCodes } from 'http-status-codes';
import orderModel from '../models/orders.js';

export async function getMyOrders(req, res) {
	try {
		const userId = req.user._id; // Assuming user ID is stored in req.user
		const orders = await orderModel.find({ userId: userId });
		res.status(StatusCodes.ACCEPTED).json({
			success: true,
			message: 'Orders retrieved successfully',
			data: orders,
		});
	} catch (error) {
		console.error('Error in getMyOrders:', error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Internal Server Error',
			error: error.message,
		});
	}
}
export async function orderBooks(req, res) {
	try {
		const { books: booksCart } = req.body; // Assuming books is in the request body
		const userId = req.user._id; // Assuming user ID is stored in req.user

		const booksIds = booksCart.map((item) => item.bookId);
		const books = await orderModel.find({ bookId: { $in: booksIds } });
		if (!books || books.length !== booksCart.length) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
				message: 'Some books are not found',
			});
		}
		const totalPrice = booksCart.reduce((total, item) => {
			const book = books.find((b) => b._id.equals(item.bookId));
			if (book) {
				return total + book.price * item.quantity;
			}
			return total;
		}, 0);
		// Validate that the total price is a positive number
		if (totalPrice <= 0) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
				message: 'Total price must be a positive number',
			});
		}
		// Create a new order
		const newOrder = new orderModel({
			userId,
			books,
			totalPrice,
			status: 'pending', // Default status
		});
		// Save the order to the database
		await newOrder.save();

		res.status(StatusCodes.CREATED).json({
			success: true,
			message: 'Order created successfully',
			data: newOrder,
		});
	} catch (error) {
		console.error('Error in getMyOrders:', error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Internal Server Error',
			error: error.message,
		});
	}
}
export async function getOrders(req, res) {
	try {
		const orders = await orderModel.find().populate('userId', 'name email');
		res.status(StatusCodes.ACCEPTED).json({
			success: true,
			message: 'Orders retrieved successfully',
			data: orders,
		});
	} catch (error) {
		console.error('Error in getMyOrders:', error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Internal Server Error',
			error: error.message,
		});
	}
}
export async function getOrderById(req, res) {
	try {
		const order = await orderModel
			.findById(req.params.id)
			.populate('userId', 'name email');
		if (!order) {
			return res.status(StatusCodes.NOT_FOUND).json({
				success: false,
				message: 'Order not found',
			});
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Order retrieved successfully',
			data: order,
		});
	} catch (error) {
		console.error('Error in getMyOrders:', error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Internal Server Error',
			error: error.message,
		});
	}
}
export async function updateOrder(req, res) {
	try {
		const orderId = req.params.id;
		const updateData = req.body; // Assuming the update data is in the request body

		const updatedOrder = await orderModel.findByIdAndUpdate(
			orderId,
			updateData,
			{ new: true }
		);
		if (!updatedOrder) {
			return res.status(StatusCodes.NOT_FOUND).json({
				success: false,
				message: 'Order not found',
			});
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Order updated successfully',
			data: updatedOrder,
		});
	} catch (error) {
		console.error('Error in getMyOrders:', error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Internal Server Error',
			error: error.message,
		});
	}
}
export async function deleteOrder(req, res) {
	try {
		const orderId = req.params.id;

		const deletedOrder = await orderModel.findByIdAndDelete(orderId);
		if (!deletedOrder) {
			return res.status(StatusCodes.NOT_FOUND).json({
				success: false,
				message: 'Order not found',
			});
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Order deleted successfully',
			data: deletedOrder,
		});
	} catch (error) {
		console.error('Error in getMyOrders:', error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Internal Server Error',
			error: error.message,
		});
	}
}
