import { Router } from 'express';
import {
	createTodo,
	deleteTodo,
	getTodoById,
	getTodos,
	updateTodo,
} from '../handlers/todos.handler.js';
import { validateBodySchema } from '../middlewares/validations.js';
import todoSchema from '../validation/todos.js';
import { CheckAuth } from '../middlewares/auth.js';

const todosRouter = Router();

todosRouter
	.route('/')
	.get(CheckAuth, getTodos)
	.post(CheckAuth, validateBodySchema(todoSchema), createTodo);
todosRouter.route('/:id').get(getTodoById).put(updateTodo).delete(deleteTodo);

export default todosRouter;
