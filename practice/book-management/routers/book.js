import { Router } from 'express';
import {
	createBook,
	deleteBook,
	getBookById,
	getBooks,
	updateBook,
} from '../handlers/books.js';
import { CheckAuth, isAdmin } from '../middlewares/auth.js';
import {
	validateBodySchema,
	validateParamsSchema,
} from '../middlewares/validations.js';
import { idParamsSchema } from '../validation/utils.js';
import { bookSchema } from '../validation/book.js';

const booksRouter = Router();

booksRouter
	.route('/')
	.get(getBooks)
	.post(CheckAuth, isAdmin, validateBodySchema(bookSchema), createBook);

booksRouter
	.route('/:id')
	.all(validateParamsSchema(idParamsSchema))
	.get(getBookById)
	.put(
		CheckAuth,
		isAdmin,
		validateBodySchema(bookSchema.partial()),
		updateBook
	)
	.delete(CheckAuth, isAdmin, deleteBook);

export default booksRouter;
