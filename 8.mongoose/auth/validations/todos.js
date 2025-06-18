import { z } from 'zod/v3';

const checkForHexRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;

const todoSchema = z.object({
	task: z.string().min(3, 'You have to give 3 letters at least'),
	dueDate: z.date().optional(),
	status: z.boolean().optional(),
	userId: z.string().regex(checkForHexRegExp, 'Invalid user id'),
});

export default todoSchema;
