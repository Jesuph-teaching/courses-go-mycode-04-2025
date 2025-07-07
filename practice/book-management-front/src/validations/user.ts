import { z, type MyZodType } from '../config/defaultZod';
import { mongodbIdSchema, passwordSchema } from './elements';

export const loginSchema = z.object<MyZodType<LoginUserI>>({
	email: z.email('Email must be valid'),
	password: passwordSchema,
});
const registerUserSchema = loginSchema.extend<MyZodType<Omit<RegisterUserI, keyof LoginUserI>>>({
	firstName: z
		.string()
		.min(3, 'First name must have at least 3 letters')
		.max(70, 'First name must have at most 70 letters'),
	lastName: z
		.string()
		.min(3, 'Last name must have at least 3 letters')
		.max(70, 'Last name must have at most 70 letters'),
});

export const basicUserSchema = registerUserSchema.extend<
	MyZodType<Omit<BasicUserI, keyof RegisterUserI>>
>({
	role: z.enum(['Admin', 'User']),
	books: z.object({
		favorite: z.array(mongodbIdSchema),
		borrowed: z.array(mongodbIdSchema),
		read: z.array(mongodbIdSchema),
		listened: z.array(mongodbIdSchema),
	}),
});

export const userSchema = basicUserSchema.extend<MyZodType<Omit<UserI, keyof BasicUserI>>>({
	_id: mongodbIdSchema,
	createdAt: z.string(),
	updatedAt: z.string(),
});
