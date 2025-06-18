import { Router } from 'express';
import { createUser, getUsers } from '../handlers/users.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/', createUser);

export default userRouter;
