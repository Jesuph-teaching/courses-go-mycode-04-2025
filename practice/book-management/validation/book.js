import { z } from 'zod/v4';

export const bookSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	author: z.string().min(1, 'Author is required'),
	price: z.object({
		original: z.number().min(0, 'Original price must be positive').optional(),
		current: z.number().min(0, 'Current price must be positive'),
	}),
	stock: z.object({
		physical: z.number().min(0, 'Stock must be a positive integer').optional(),
		audio: z.url().optional(),
		eBook: z.url().optional(),
	}),
	description: z.string().min(10, 'Description must be at least 10 characters long'),
	cover: z.url('Cover must be a valid URL').optional(),
});
