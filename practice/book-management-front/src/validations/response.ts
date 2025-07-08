import { type MyZodType, z } from '../config/defaultZod';
const nullSchema = z.null();
export const errorResponseSchema = z.object<MyZodType<ErrorResponseI>>({
	message: z.string(),
	error: z.unknown(),
	success: z.literal(false),
});
export const successResponseSchema = <T = null>(
	schema: z.ZodType<T> = nullSchema as unknown as z.ZodType<T>
) => {
	return z.object<MyZodType<SuccessResponseI<T>>>({
		message: z.string(),
		success: z.literal(true),
		data: schema,
		token: z.string().optional(),
	});
};
export const responseSchema = <T = null>(
	schema: z.ZodType<T> = nullSchema as unknown as z.ZodType<T>
) => {
	return successResponseSchema<T>(schema).or(errorResponseSchema);
};
