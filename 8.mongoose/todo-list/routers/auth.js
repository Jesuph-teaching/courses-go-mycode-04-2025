import { Router } from 'express';
import userSchema from '../validation/users.js';
import { validateBodySchema } from '../middlewares/validations.js';
import { checkUser, login, register } from '../handlers/auth.js';
const authRouter = Router();
authRouter.get('/', checkUser);
authRouter.post('/login', login);
authRouter.post('/register', validateBodySchema(userSchema), register);

export default authRouter;
