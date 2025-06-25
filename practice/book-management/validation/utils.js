import { z } from 'zod/v4';

export const mongoDbIdSchema = z
	.string()
	.regex(/^[a-f\d]{24}$/i, 'Invalid MongoDB ID format');
export const paginationSchema = z.object({
	page: z.number().int().min(1, 'Page must be a positive integer').default(1),
	limit: z
		.number()
		.int()
		.min(1, 'Limit must be a positive integer')
		.max(100, 'Limit cannot exceed 100')
		.default(10),
});
export const sortSchema = z.object({
	sortBy: z.string().optional().default('createdAt'),
	sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
});
export const idParamsSchema = z.object({
	id: mongoDbIdSchema,
});
