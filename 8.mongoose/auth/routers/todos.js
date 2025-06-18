import { Router } from 'express';
import {
	createTodo,
	deleteTodo,
	getTodoById,
	getTodos,
	updateTodo,
} from '../handlers/todos.handler.js';
import { validateBodySchema } from '../middlewares/validations.js';
import todoSchema from '../validations/todos.js';

const todosRouter = Router();

todosRouter
	.route('/')
	.get(getTodos)
	.post(validateBodySchema(todoSchema), createTodo);
todosRouter.route('/:id').get(getTodoById).put(updateTodo).delete(deleteTodo);

export default todosRouter;
