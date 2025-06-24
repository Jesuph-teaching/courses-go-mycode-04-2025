import 'dotenv/config';
import express from 'express';
import { connectDB } from './services/db.js';
import authRouter from './routers/auth.js';
import todosRouter from './routers/todos.js';
import { CheckAuth, isAdmin } from './middlewares/auth.js';
import usersRouter from './routers/users.js';

const app = express();
const PORT = process.env.PORT;

/* middlewares (helpers)  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* Routes */
app.use('/auth', authRouter);
// a private route ( with authentication required)
app.use('/todos', CheckAuth, todosRouter);
app.use('/users', CheckAuth, isAdmin, usersRouter);

connectDB().then(() => {
	app.listen(PORT, function () {
		console.log(`The app is on http://localhost:${PORT}`);
	});
});
