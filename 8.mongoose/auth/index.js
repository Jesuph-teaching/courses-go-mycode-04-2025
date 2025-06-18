import 'dotenv/config';
import express from 'express';
import { connectDB } from './services/db.js';
import authRouter from './routers/auth.js';
import todosRouter from './routers/todos.js';
import usersRouter from './routers/users.js';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/todos', todosRouter);
app.use('/users', usersRouter);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ success: false, message: 'internal error' });
});
connectDB().then(() => {
	app.listen(PORT, function () {
		console.log(`Server is on http://localhost:${PORT}`);
	});
});
