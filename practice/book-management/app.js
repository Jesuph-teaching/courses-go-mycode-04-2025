import 'dotenv/config';
import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import authRouter from './routers/auth.js';
import { CheckAuth, isAdmin } from './middlewares/auth.js';
import usersRouter from './routers/users.js';
import booksRouter from './routers/book.js';
import ordersRouter from './routers/orders.js';

const app = express();

/* middlewares (helpers)  */
app.set('trust proxy', true);

app.use(
	cors({
		credentials: true,
		origin: new RegExp(process.env.CORS_ORIGIN || 'http://localhost:5173'),
	})
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

/* Routes */
app.use('/auth', authRouter);
// a private route ( with authentication required)
app.use('/books', booksRouter);
app.use('/orders', CheckAuth, ordersRouter);
app.use('/users', CheckAuth, isAdmin, usersRouter);

// not found
app.use((req, res) => {
	return res.status(404).json({ success: false, message: 'Not Found' });
});
// error handling
app.use((err, req, res, next) => {
	if (err) {
		console.error(err);
		return res.status(500).json({
			success: false,
			message: 'Internal Server Error',
			error: err.message,
		});
	}
	next();
});

export default app;
