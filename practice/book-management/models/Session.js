import { Schema, model } from 'mongoose';
import otpGenerator from 'otp-generator';
const sessionSchema = new Schema(
	{
		password: {
			type: String,
			default: () => {
				// random OTP code
				return otpGenerator.generate(5, {
					lowerCaseAlphabets: false,
					specialChars: false,
					upperCaseAlphabets: false,
				});
			},
			min: 5,
			max: 5,
		},
		sessionType: {
			type: String,
			enum: ['email', 'password'], // email: email verification , password: resetting password
			required: true,
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'users',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

sessionSchema.index({ createdAt: 1 }, { expires: 300 });
const sessionModel = model('session', sessionSchema);
export default sessionModel;
