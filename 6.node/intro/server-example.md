```js
// server.js
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
	// Route: /json
	if (req.url === '/json') {
		const data = {
			message: 'Hello, this is a JSON response!',
			timestamp: new Date(),
		};

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(data));
	}

	// Route: /html
	else if (req.url === '/html') {
		const html = `
      <!DOCTYPE html>
      <html>
      <head><title>HTML Response</title></head>
      <body>
        <h1>Hello from HTML route!</h1>
        <p>This is an HTML response from the Node.js server.</p>
      </body>
      </html>
    `;

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(html);
	}

	// Route not found
	else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('404 Not Found');
	}
});

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
```
