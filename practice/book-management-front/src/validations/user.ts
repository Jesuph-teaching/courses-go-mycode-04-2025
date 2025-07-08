import { z, type MyZodType } from '../config/defaultZod';
import { mongodbIdSchema, passwordSchema } from './elements';

export const loginSchema = z.object({
	email: z.string().email('Email must be valid'),
	password: passwordSchema,
}) as z.ZodObject<MyZodType<LoginUserI>>;
const registerUserSchema = loginSchema.extend({
	/* firstName: z
		.string()
		.min(3, 'First name must have at least 3 letters')
		.max(70, 'First name must have at most 70 letters'),
	lastName: z
		.string()
		.min(3, 'Last name must have at least 3 letters')
		.max(70, 'Last name must have at most 70 letters'), */
	name: z
		.string()
		.min(3, 'First name must have at least 3 letters')
		.max(70, 'First name must have at most 70 letters')
		.optional(),
}) as z.ZodObject<MyZodType<RegisterUserI>>;

export const basicUserSchema = registerUserSchema.extend({
	role: z.enum(['Admin', 'User']),
	books: z.object({
		favorite: z.array(mongodbIdSchema),
		borrowed: z.array(mongodbIdSchema),
		read: z.array(mongodbIdSchema),
		listened: z.array(mongodbIdSchema),
	}),
}) as z.ZodObject<MyZodType<BasicUserI>>;

export const userSchema = basicUserSchema
	.extend({
		_id: mongodbIdSchema,
		createdAt: z.string(),
		updatedAt: z.string(),
	})
	.omit({ password: true }) as z.ZodObject<MyZodType<UserI>>;
