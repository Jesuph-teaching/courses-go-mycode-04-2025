import {
	createUser,
	deleteUser,
	getUsers,
	updateUser,
} from '../handlers/users.js';
import { Router } from 'express';
import { validateBody, validateId } from '../middleware/validation.js';
import userSchema from '../validations/users.js';
const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/', validateBody(userSchema), createUser);
userRouter.put(
	'/:id',
	validateId,
	validateBody(userSchema.partial()),
	updateUser
);
userRouter.delete('/:id', validateId, deleteUser);

export default userRouter;
