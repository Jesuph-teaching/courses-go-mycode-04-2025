import { Types } from 'mongoose';
import bookModel from '../models/books.js';
import { StatusCodes } from 'http-status-codes';
import rateModel from '../models/rate.js';
export async function getBooks(req, res) {
	try {
		const { limit, page, sortBy, sortOrder, search, category } = req.parsedQuery;
		console.log({ limit, page, sortBy, sortOrder, search });
		const filter = search ? { $text: { $search: search } } : {};
		if (category) {
			filter.category = new Types.ObjectId(category);
		}
		const books = await bookModel
			.find(filter)
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ [sortBy]: sortOrder });
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
		const books = await bookModel.find().sort({ createdAt: -1 });
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
		const booksIds = req.user.books.read;
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
		const booksIds = req.user.books.favorite;
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
export async function getListenedBooks(req, res) {
	try {
		const booksIds = req.user.books.listened;
		if (!booksIds || booksIds.length === 0) {
			throw new Error("You don't have listened books yet");
		}
		const books = await bookModel.find({
			_id: { $in: booksIds },
		});
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Listened Books fetched successfully',
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
export async function getBorrowedBooks(req, res) {
	try {
		const booksIds = req.user.books.borrowed;
		if (!booksIds || booksIds.length === 0) {
			throw new Error("You don't have borrowed books yet");
		}
		const books = await bookModel.find({
			_id: { $in: booksIds },
		});
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Borrowed Books fetched successfully',
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
			if (error.code === 11000) {
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
export async function contributeBook(req, res) {
	try {
		const book = await bookModel.create({
			...req.body,
			contributedBy: req.user._id,
		});
		res.status(StatusCodes.CREATED).json({
			success: true,
			message: 'Book created successfully',
			data: book,
		});
	} catch (error) {
		if (error instanceof Error) {
			if (error.code === 11000) {
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
export async function readBook(req, res) {
	try {
		const book = await bookModel.findById(req.params.id);
		if (!book) {
			throw new Error('Book not found');
		}
		const result = await req.user.updateOne(
			{
				$addToSet: {
					'books.read': book._id,
				},
			},
			{
				new: true,
			}
		);
		console.log(result);
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Book has been added to read list successfully',
			data: req.user.books.read,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to update read list for ${req.params.id} book`,
			error: error.message || error,
		});
	}
}
export async function addToFavoriteBooks(req, res) {
	try {
		const book = await bookModel.findById(req.params.id);
		if (!book) {
			throw new Error('Book not found');
		}
		const favoriteList = await req.user.books.favorite;
		const indexOfBook = favoriteList.findIndex((b) => b.equals(book._id));
		let message;
		if (indexOfBook >= 0) {
			req.user.books.favorite.splice(indexOfBook, 1);
			message = 'Book has been removed from favorite list successfully';
		} else {
			req.user.books.favorite.push(book._id);
			message = 'Book has been added to favorite list successfully';
		}
		await req.user.save();
		res.status(StatusCodes.OK).json({
			success: true,
			message: message,
			data: req.user.books.favorite,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to update favorite list for ${req.params.id} book`,
			error: error.message || error,
		});
	}
}
export async function borrowABook(req, res) {
	try {
		const book = await bookModel.findById(req.params.id);
		if (!book) {
			throw new Error('Book not found');
		}
		const result = await req.user.updateOne(
			{
				$addToSet: {
					'books.borrowed': book._id,
				},
			},
			{
				new: true,
			}
		);
		console.log(result);
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Book has been added to borrowed list successfully',
			data: req.user.books.borrowed,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to update borrowed list for ${req.params.id} book`,
			error: error.message || error,
		});
	}
}
export async function listenedToBook(req, res) {
	try {
		const book = await bookModel.findById(req.params.id);
		if (!book) {
			throw new Error('Book not found');
		}
		const result = await req.user.updateOne(
			{
				$addToSet: {
					'books.listened': book._id,
				},
			},
			{
				new: true,
			}
		);
		console.log(result);
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Book has been added to listened list successfully',
			data: req.user.books.listened,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to update listened list for ${req.params.id} book`,
			error: error.message || error,
		});
	}
}
export async function rateBook(req, res) {
	try {
		const book = await bookModel.findById(req.params.id);
		if (!book) {
			throw new Error('Book not found');
		}
		const { rating } = req.body;
		const rate = await rateModel.create({
			bookId: book._id,
			ratedBy: req.user._id,
			rating: rating,
		});
		res.status(StatusCodes.OK).json({
			success: true,
			message: 'Book has been rated successfully',
			data: rate,
		});
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.code);
			if (error.code === 11000) {
				res.status(StatusCodes.CONFLICT).json({
					success: false,
					message: `Failed to rate ${req.params.id} book because user has already rated this book`,
					error: error.message || error,
				});
			} else {
				res.status(StatusCodes.BAD_REQUEST).json({
					success: false,
					message: `Failed to rate ${req.params.id} book`,
					error: error.message || error,
				});
			}
		} else {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				success: false,
				message: `Failed to rate ${req.params.id} book`,
				error: error.message || error,
			});
		}
	}
}
export async function getBooksRatings(req, res) {
	try {
		const book = await bookModel.findById(req.params.id);
		if (!book) {
			throw new Error('Book not found');
		}
		const ratings = await rateModel.find({
			bookId: book._id,
		});
		res.status(StatusCodes.OK).json({
			success: true,
			message: "Fetching Book's rating successfully",
			data: ratings,
		});
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			success: false,
			message: `Failed to fetch ${req.params.id} book`,
			error: error.message || error,
		});
	}
}
