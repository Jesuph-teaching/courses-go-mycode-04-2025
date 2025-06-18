import 'dotenv/config';
import express from 'express';
import { connectDB } from './services/db.js';
import authRouter from './routers/auth.js';

const app = express();
const PORT = process.env.PORT;

/* middlwares (helpers)  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* Routes */
app.use('/auth', authRouter);

connectDB().then(() => {
	app.listen(PORT, function () {
		console.log(`The app is on http://localhost:${PORT}`);
	});
});
