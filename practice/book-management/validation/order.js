import { z } from 'zod/v4';
import { mongoDbIdSchema } from './utils.js';
export const cartSchema = z.object({
	books: z.array(
		z.object({
			bookId: mongoDbIdSchema,
			quantity: z.number().min(1, 'Quantity must be at least 1'),
		})
	),
});

export const orderSchema = cartSchema.extend({
	userId: mongoDbIdSchema,
	totalPrice: z.number().min(0, 'Total price must be positive'),
	status: z.enum(['pending', 'completed', 'cancelled']),
});
