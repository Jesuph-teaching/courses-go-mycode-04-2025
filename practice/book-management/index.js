import 'dotenv/config';
import { connectDB } from './services/db.js';
import app from './app.js';

const PORT = process.env.PORT;

connectDB().then(() => {
	app.listen(PORT, function () {
		console.log(`The app is on http://localhost:${PORT}`);
	});
});
