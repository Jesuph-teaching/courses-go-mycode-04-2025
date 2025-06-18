import { Router } from 'express';
import { login, register } from '../handlers/auth.js';
import { validateBodySchema } from '../middlewares/validations.js';
import userSchema from '../validations/users.js';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/register', validateBodySchema(userSchema), register);

export default authRouter;
