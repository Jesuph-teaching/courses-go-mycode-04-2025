import { Router } from 'express';
import {
	createUser,
	deleteUser,
	getUserById,
	getUsers,
	updateUser,
} from '../handlers/users.js';
import {
	validateBodySchema,
	validateParamsSchema,
} from '../middlewares/validations.js';
import { fullUserSchema } from '../validation/users.js';
import { idParamsSchema } from '../validation/utils.js';

const usersRouter = Router();

usersRouter
	.route('/')
	.get(getUsers)
	.post(validateBodySchema(fullUserSchema), createUser);

usersRouter
	.route('/:id')
	.all(validateParamsSchema(idParamsSchema))
	.get(getUserById)
	.put(validateBodySchema(fullUserSchema.partial()), updateUser)
	.delete(deleteUser);

export default usersRouter;
