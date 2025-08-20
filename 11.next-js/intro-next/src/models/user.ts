import { Model, Schema, Types, model, models } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserI } from '@/types/user';
import { Document } from 'mongoose';
interface UserDocument extends UserI, Document<Types.ObjectId> {}
const userSchema = new Schema<UserDocument>(
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
// pre hooks (action = save) // this happens before saving in the database
userSchema.pre('save', async function () {
	if (this.isNew || this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
});

const userModel = (models.users as Model<UserDocument>) || model('users', userSchema);
export default userModel; // db.users
