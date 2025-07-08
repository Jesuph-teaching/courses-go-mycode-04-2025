import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

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
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ['Admin', 'User'],
			default: 'User',
		},
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
		books: {
			favorite: [
				{
					type: Schema.Types.ObjectId,
					ref: 'books',
				},
			],
			borrowed: [
				{
					type: Schema.Types.ObjectId,
					ref: 'books',
				},
			],
			read: [
				{
					type: Schema.Types.ObjectId,
					ref: 'books',
				},
			],
			listened: [
				{
					type: Schema.Types.ObjectId,
					ref: 'books',
				},
			],
		},
	},
	{
		toJSON: {
			versionKey: false,
		},
		toObject: {
			versionKey: false,
		},
		timestamps: true,
	}
);
// pre hooks (action = save) // this happens before saving in the database
userSchema.pre('save', async function () {
	if (this.isNew || this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
});
userSchema.methods.comparePassword = async function (requestedPassword) {
	return bcrypt.compare(requestedPassword, this.password);
};
const userModel = model('users', userSchema);
export default userModel; // db.users
