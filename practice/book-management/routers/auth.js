import { Router } from 'express';
import userSchema, { loginSchema } from '../validation/users.js';
import { validateBodySchema } from '../middlewares/validations.js';
import { checkUser, login, register, verifyEmail } from '../handlers/auth.js';
import { CheckAuth } from '../middlewares/auth.js';
import { sessionVerificationSchema } from '../validation/session.js';
const authRouter = Router();
authRouter.get('/', CheckAuth, checkUser);
authRouter.post('/login', validateBodySchema(loginSchema), login);
authRouter.post('/register', validateBodySchema(userSchema), register);
authRouter.post(
	'/verify',
	CheckAuth,
	validateBodySchema(sessionVerificationSchema),
	verifyEmail
);

export default authRouter;
