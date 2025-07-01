import bookModel from '../models/books.js';
import { StatusCodes } from 'http-status-codes';
export async function getBooks(req, res) {
	try {
		const books = await bookModel.find();
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Books fetched successfully',
			data: books,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Failed to fetch books',
			error: error.message || error,
		});
	}
}
export async function getRecommendedBooks(req, res) {
	try {
		const books = await bookModel.find();
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Books fetched successfully',
			data: books,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Failed to fetch books',
			error: error.message || error,
		});
	}
}
export async function getNewArrivalBooks(req, res) {
	try {
		const { limit = 20 } = req.query;
		const books = await bookModel
			.find()
			.sort({ createdAt: -1 })
			.limit(Number(limit));
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Books fetched successfully',
			data: books,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Failed to fetch books',
			error: error.message || error,
		});
	}
}
export async function getRecentlyReadBooks(req, res) {
	try {
		const booksIds = req.user.readBooks;
		if (!booksIds || booksIds.length === 0) {
			throw new Error("You didn't read any book yet");
		}
		const books = await bookModel.find({
			_id: { $in: booksIds },
		});
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Books fetched successfully',
			data: books,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Failed to fetch books',
			error: error.message || error,
		});
	}
}
export async function getFavoriteBooks(req, res) {
	try {
		const booksIds = req.user.favoriteBooks;
		if (!booksIds || booksIds.length === 0) {
			throw new Error("You don't have favorite books yet");
		}
		const books = await bookModel.find({
			_id: { $in: booksIds },
		});
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Favorite Books fetched successfully',
			data: books,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: 'Failed to fetch books',
			error: error.message || error,
		});
	}
}
export async function createBook(req, res) {
	try {
		const book = await bookModel.create(req.body);
		res.status(StatusCodes.CREATED).json({
			success: true,
			message: 'Book created successfully',
			data: book,
		});
	} catch (error) {
		if (error instanceof Error) {
			if (error.code === 1100) {
				res.status(StatusCodes.CONFLICT).json({
					success: false,
					message: 'Book already exist',
					error: error.message || error,
				});
			} else {
				res.status(StatusCodes.BAD_REQUEST).json({
					success: false,
					message: 'Failed to create book',
					error: error.message || error,
				});
			}
		} else {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				success: false,
				message: 'Failed to create book due to server error',
				error: error.message || error,
			});
		}
	}
}
export async function getBookById(req, res) {
	try {
		const book = await bookModel.findById(req.params.id);
		if (!book) {
			throw new Error('Book not found');
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Book fetched successfully',
			data: book,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to fetch book ${req.params.id}`,
			error: error.message || error,
		});
	}
}
export async function updateBook(req, res) {
	try {
		const book = await bookModel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
			}
		);
		if (!book) {
			throw new Error('Book not found');
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Book updated successfully',
			data: book,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to update book ${req.params.id}`,
			error: error.message || error,
		});
	}
}
export async function deleteBook(req, res) {
	try {
		const book = await bookModel.findByIdAndDelete(req.params.id);
		if (!book) {
			throw new Error('Book not found');
		}
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Book deleted successfully',
			data: book,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to delete book ${req.params.id}`,
			error: error.message || error,
		});
	}
}
