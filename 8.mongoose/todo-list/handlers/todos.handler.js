import { success } from 'zod/v4';
import todoModel from '../models/todos.js';

export async function getTodos(req, res) {
	try {
		/* todoModel.find().then(todos=>{}) */
		const todos = await todoModel.find({
			userId: req.user._id, // the todos of the logged in user
		});
		res.json({
			success: true,
			message: 'fetch todo list successfully',
			data: todos,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'failed to fetch todo list',
		});
		console.log(err);
	}
}
export async function getTodoById(req, res) {}
export async function createTodo(req, res) {
	try {
		const todo = req.body;
		todo.dueDate = todo.dueDate ? new Date(todo.dueDate) : todo.dueDate;
		todo.userId = req.user._id; // saving the id of the logged in user
		const newTodo = await todoModel.create(todo);
		res.json({
			success: true,
			message: 'todo created successfully',
			data: newTodo,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
			message: 'Failed to create todo task',
			error: err,
		});
	}
}
export async function updateTodo(req, res) {}
export async function deleteTodo(req, res) {}
