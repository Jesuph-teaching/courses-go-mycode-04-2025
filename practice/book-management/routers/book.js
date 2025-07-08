import { Router } from 'express';
import {
	addToFavoriteBooks,
	borrowABook,
	contributeBook,
	createBook,
	deleteBook,
	getBookById,
	getBooks,
	getBooksRatings,
	getBorrowedBooks,
	getFavoriteBooks,
	getListenedBooks,
	getNewArrivalBooks,
	getRecentlyReadBooks,
	getRecommendedBooks,
	listenedToBook,
	rateBook,
	readBook,
	updateBook,
} from '../handlers/books.js';
import { CheckAuth, isAdmin } from '../middlewares/auth.js';
import {
	validateBodySchema,
	validateParamsSchema,
	validateQuerySchema,
} from '../middlewares/validations.js';
import { filterSchema, idParamsSchema } from '../validation/utils.js';
import { bookSchema } from '../validation/book.js';
import { ratingSchema } from '../validation/rate.js';

const booksRouter = Router();

booksRouter
	.route('/')
	.get(validateQuerySchema(filterSchema), getBooks)
	.post(CheckAuth, isAdmin, validateBodySchema(bookSchema), createBook);

booksRouter.route('/contribute').post(CheckAuth, validateBodySchema(bookSchema), contributeBook);
booksRouter.route('/recommended').get(getRecommendedBooks);
booksRouter.route('/new-arrival').get(getNewArrivalBooks);

booksRouter.route('/read').all(CheckAuth).get(getRecentlyReadBooks);
booksRouter.route('/favorite').all(CheckAuth).get(getFavoriteBooks);
booksRouter.route('/borrowed').all(CheckAuth).get(getBorrowedBooks);
booksRouter.route('/listened').all(CheckAuth).get(getListenedBooks);

booksRouter.route('/read/:id').all(CheckAuth, validateParamsSchema(idParamsSchema)).put(readBook);
booksRouter
	.route('/favorite/:id')
	.all(CheckAuth, validateParamsSchema(idParamsSchema))
	.put(addToFavoriteBooks);
booksRouter
	.route('/borrowed/:id')
	.all(CheckAuth, validateParamsSchema(idParamsSchema))
	.put(borrowABook);
booksRouter
	.route('/listened/:id')
	.all(CheckAuth, validateParamsSchema(idParamsSchema))
	.put(listenedToBook);
booksRouter
	.route('/:id/rate')
	.all(CheckAuth)
	.get(getBooksRatings)
	.post(validateBodySchema(ratingSchema), rateBook);
booksRouter
	.route('/:id')
	.all(validateParamsSchema(idParamsSchema))
	.get(getBookById)
	.put(CheckAuth, isAdmin, validateBodySchema(bookSchema.partial()), updateBook)
	.delete(CheckAuth, isAdmin, deleteBook);

export default booksRouter;
