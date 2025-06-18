import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		age: { type: Number, min: 12, max: 100 },
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
const userModel = model('users', userSchema);
export default userModel; // db.users
