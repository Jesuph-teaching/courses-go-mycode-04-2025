import { z } from 'zod/v4';

export const sessionVerificationSchema = z.object({
	otp: z.string().regex(/\d{5}/),
});
