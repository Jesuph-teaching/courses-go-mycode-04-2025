# Book Management API Practice

## 1. Project Initialization

1. Open VS Code and create a folder called `bookstore-api`.
2. Inside the terminal, run:

    - `npm init -y` to create a Node project.
    - Install dependencies: Express, Mongoose, dotenv, bcrypt, JWT.
    - Install `nodemon` as a development dependency to auto-reload your server.

3. Create essential folders:

    - `models/` for MongoDB schemas
    - `handlers/` for logic that handles requests
    - `services/` for reusable business logic
    - `routes/` for all API endpoints
    - `middleware/` for authentication and role checks
    - `config/` or `services/` for MongoDB connection logic

---

## 2. Basic Configuration

1. Create a `.env` file and define:

    - A port (e.g., `PORT=5000`)
    - Your MongoDB connection string (e.g., `MONGODB_URI=...`)
    - A JWT secret (e.g., `AUTH_SECRET=...`) [make sure to use a strong secret maybe using `npx auth secret`]

2. Create a file to connect to MongoDB using Mongoose.
3. Create a central Express app that:

    - Uses JSON parsing and URL encoding middleware
    - ~~Uses CORS for cross-origin requests~~
    - Loads all route files
    - Loads error handlers
    - Exports the app

4. Create a separate server start file that runs the app on the specified port.

---

## 3. User Authentication

1. **User model** should include:

    - Name, email (unique), hashed password, isAdmin flag.

2. Create routes for:

    - **Register**: Accepts name, email, password.
    - **Login**: Checks credentials, returns a JWT token.

3. Store JWT tokens in client apps and use them in requests via headers:
   `Authorization: Bearer <token>`
4. Middleware:

    - One middleware to **verify token** and attach user to the request.
    - Another to **check if the user is admin** (e.g., `user.isAdmin === true`).

---

## 4. Book Management

1. **Book model** should include: title, author, price, stock, description, etc.
2. Separate routes into two groups:

    - **Public (for all users including guests)**:

        - View all books
        - View a single book by ID

    - **Admin-only**:

        - Create a book
        - Update a book
        - Delete a book

3. Apply middleware to admin routes:

    - Require authentication
    - Require admin role

---

## 5. Purchases / Orders

1. **Order model** should include:

    - Reference to the user
    - List of books (each with book ID, quantity, price at time of purchase)
    - Total amount
    - Created date and status

2. **Routes for authenticated users**:

    - Create a new order (purchase)
    - View their own orders

3. **Routes for admin**:

    - View all orders from all users

4. Protect all order routes using the token middleware.

---

## 6. API Security and Testing

1. Require all protected routes to receive a valid JWT in headers:

    ```
    Authorization: Bearer <token>
    ```

2. Use Thunder Client or Postman inside VS Code to:

    - Register and login users
    - Copy the token and test protected routes
    - Create books (as admin)
    - Make purchases (as logged-in users)
    - List user-specific orders
    - Verify forbidden access for guests on protected routes

---

## 7. Summary of API Behavior

| Endpoint             | Method | Access        | Description                   |
| -------------------- | ------ | ------------- | ----------------------------- |
| `/api/auth/register` | POST   | Public        | Register a new user           |
| `/api/auth/login`    | POST   | Public        | Login and get JWT token       |
| `/api/books`         | GET    | Public        | View all books                |
| `/api/books/:id`     | GET    | Public        | View one book                 |
| `/api/books`         | POST   | Admin only    | Create a new book             |
| `/api/books/:id`     | PUT    | Admin only    | Edit an existing book         |
| `/api/books/:id`     | DELETE | Admin only    | Remove a book                 |
| `/api/orders`        | POST   | Authenticated | Place an order with book list |
| `/api/orders/my`     | GET    | Authenticated | View logged-in user’s orders  |
| `/api/orders`        | GET    | Admin only    | View all orders               |

---

## 8. Final Tips for Students

-   **Use clear naming**: handlers, routes, models.
-   **Use Postman or Thunder Client** to test headers and request bodies.
-   **Test your middleware** thoroughly: deny access if no token or wrong role.
-   **Practice role-based access control**: separate what users can see/do.
-   **Keep logic clean and modular**: use services for business logic, handlers for request handling.
-   **Use environment variables** for sensitive data like DB connection strings and JWT secrets.
-   **Follow RESTful conventions**: use appropriate HTTP methods and status codes.

---

## 9. Additional Resources

-   [Express.js Documentation](https://expressjs.com/)
-   [Mongoose Documentation](https://mongoosejs.com/docs/)
-   [JWT Documentation](https://jwt.io/)
-   [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/)
-   [Node.js Documentation](https://nodejs.org/en/docs/)
-   [MongoDB Documentation](https://docs.mongodb.com/)
-   ~~[CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)~~
-   [dotenv Documentation](https://www.npmjs.com/package/dotenv)
-   [bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
-   [Nodemon Documentation](https://nodemon.io/)
-   [Thunder Client Documentation](https://www.thunderclient.com/docs)
-   [Role-Based Access Control (RBAC) Overview](https://auth0.com/docs/authorization/rbac/)

---

## 10. Common Issues and Troubleshooting

-   ~~**CORS Errors**: Ensure you have set up CORS middleware correctly in your Express app.~~
-   **JWT Issues**: If you get "Unauthorized" errors, check if the token is being sent correctly in the headers.
-   **Database Connection**: If you can't connect to MongoDB, verify your connection string in the `.env` file and ensure your MongoDB server is running.
-   **Middleware Not Working**: If your middleware isn't being called, ensure it's correctly applied in your route definitions.
-   **Validation Errors**: Use libraries like `express-validator` to validate incoming request data and return meaningful error messages.
-   **Debugging**: Use `console.log` statements to debug your code, or use a debugger in VS Code to step through your code.
-   **Testing with Postman/Thunder Client**: Make sure to set the correct headers, especially for authentication. Use the "Authorization" header for JWT tokens.
-   **Environment Variables**: If your app isn't reading from the `.env` file, ensure you have `dotenv` configured at the top of your main server file.
-   **Error Handling**: Implement proper error handling in your routes and middleware to return meaningful HTTP status codes and messages.
-   **Version Control**: Use Git to track changes in your code. Commit frequently with meaningful messages.
-   **Documentation**: Keep your API documentation updated, especially if you add new endpoints or change existing ones.

---

## 11. Next Steps

-   **Implement Pagination**: For book listings and orders, implement pagination to handle large datasets.
-   **Add Search Functionality**: Allow users to search for books by title, author, or other criteria.
-   **Enhance Security**: Implement rate limiting to prevent abuse of your API endpoints.
-   **Deployment**: Consider deploying your API to a cloud service like Heroku, Render, AWS, or DigitalOcean.
-   **Documentation**: Use tools like Swagger or Postman to document your API endpoints for easier consumption by other developers.
-   **Frontend Integration**: Build a simple frontend using React to interact with your API.
