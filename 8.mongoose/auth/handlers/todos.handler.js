import todoModel from '../models/todos.js';

export async function getTodos(req, res) {
	try {
		/* todoModel.find().then(todos=>{}) */
		const todos = await todoModel.find();
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
	res.json({
		success: true,
	});
}
export async function updateTodo(req, res) {}
export async function deleteTodo(req, res) {}
