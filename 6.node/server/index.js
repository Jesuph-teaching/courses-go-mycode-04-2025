import http from 'node:http';
import fs from 'node:fs';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
dotenv.config();

const PORT = process.env.PORT || 3000;

const user = {
	firstName: faker.person.firstName(),
	lastName: faker.person.lastName(),
	birthdate: faker.date.birthdate(),
};

const server = http.createServer(function (request, response) {
	if (request.url === '/') {
		fs.readFile(
			'./view/index.html',
			{
				encoding: 'utf8',
			},
			function (error, data) {
				if (error) {
					response.writeHead(500, {
						'accept-language': 'en',
					});
					response.write('Internal error');
				} else {
					response.writeHead(200, {
						'accept-language': 'en',
					});
					response.write(data);
				}
				response.end();
			}
		);
	} else if (request.url === '/home') {
		response.writeHead(200, {
			'accept-language': 'en',
		});
		response.write('Home page');
		response.end();
	} else if (request.url === '/api') {
		response.writeHead(200, {
			'accept-language': 'en',
			'content-type': 'application/json',
		});
		response.write(JSON.stringify(user));
		response.end();
	} else {
		response.writeHead(404, {
			'accept-language': 'en',
		});
		response.write('Page not found');
		response.end();
	}
});

server.listen(PORT, function () {
	console.log('the server is on in port :', PORT);
});
