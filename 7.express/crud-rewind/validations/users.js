import { z } from 'zod/v4';

const userSchema = z.object({
	firstName: z
		.string({ required_error: 'User has to have first name' })
		.min(3, 'First name has to have at least 3 letters')
		.max(35),
	lastName: z
		.string({ required_error: 'User has to have last name' })
		.min(3)
		.max(35),
	email: z.string({ required_error: 'User has to have email' }).email(),
	age: z.number({ required_error: 'User has to have age' }),
});
export default userSchema;
