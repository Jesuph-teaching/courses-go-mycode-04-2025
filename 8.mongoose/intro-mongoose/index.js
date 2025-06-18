import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/users.js';

const PORT = process.env.PORT;

const app = express();
// parse body that comes in json form
app.use(express.json());
// parse body that comes in encoded form
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
mongoose
	.connect(process.env.MONGODB_URI, {
		dbName: process.env.MONGODB_DB_NAME,
		auth: {
			username: process.env.MONGODB_USERNAME,
			password: process.env.MONGODB_PASSWORD,
		},
	})
	.then(() => {
		console.log('Database is connected');
		app.listen(PORT, function () {
			console.log(`Server is on : http://localhost:${PORT}`);
		});
	})
	.catch(() => {
		console.error('Database failed to connect');
	});
