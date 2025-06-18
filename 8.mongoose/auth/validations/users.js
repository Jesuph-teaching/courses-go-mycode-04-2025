import { z } from 'zod/v3';

const userSchema = z.object({
	firstName: z
		.string()
		.min(3, 'First name must have at least 3 letters')
		.max(35, 'First name must have at most 35 letters'),
	lastName: z
		.string()
		.min(3, 'Last name must have at least 3 letters')
		.max(35, 'Last name must have at most 35 letters'),
	age: z
		.number()
		.min(12, 'User has to be older than 12 years old')
		.max(100, 'User has to be less than 100 years old'),
	email: z.string().email('Email must be valid'),
	password: z
		.string()
		.regex(
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
			"Password isn't not strong enough"
		),
});

export default userSchema;
