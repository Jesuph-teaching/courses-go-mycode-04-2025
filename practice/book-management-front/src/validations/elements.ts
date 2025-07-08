import { z } from '../config/defaultZod';

export const passwordSchema = z
	.string()
	.min(8, 'Password must be at least 8 characters long')
	.refine((val) => /[A-Z]/.test(val), {
		message: 'Password must contain at least one uppercase letter',
	})
	.refine((val) => /[a-z]/.test(val), {
		message: 'Password must contain at least one lowercase letter',
	})
	.refine((val) => /[0-9]/.test(val), {
		message: 'Password must contain at least one digit',
	});
export const mongodbIdSchema = z.string().regex(/^[a-f\d]{24}$/i, 'Invalid MongoDB ID format');
