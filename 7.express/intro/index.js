import 'dotenv/config';
import express from 'express';

const app = express(); // create an express app
const PORT = process.env.PORT; // load the PORT from .env file
app.get('/', function (req, res) {
	res.send('Hello from the backend');
});
app.get('/user', function (req, res) {
	res.json({
		firstName: 'Youcef',
		lastName: 'Madadi',
	});
});
app.get('{*n}', function (req, res) {
	res.send('This not found');
});
/* rest route (404 - not found) */
app.listen(PORT, function () {
	console.log(`Server is on http://localhost:${PORT}`);
});
