import { z } from 'zod/v4';

const userSchema = z.object({
	_id: z.string().regex(/^[0-9a-fA-F]{24}$/),
	email: z.email(),
	firstName: z.string().min(2).max(100),
	lastName: z.string().min(2).max(100),
	role: z.enum(['Admin', 'User']),
});

export default userSchema;
