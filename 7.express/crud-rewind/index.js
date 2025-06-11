import 'dotenv/config';
import express from 'express';
import { z, ZodError } from 'zod/v4';
import userRouter from './router/users.js';

const app = express();
const PORT = process.env.PORT;

// parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.use(function (err, req, res, next) {
	res.json({
		message: 'Error happened',
		error: err instanceof ZodError ? z.prettifyError(err) : err.message,
	});
});
app.listen(PORT, function () {
	console.log(`server is on http://localhost:${PORT}`);
});
