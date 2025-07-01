import { Schema, model } from 'mongoose';

const rateSchema = new Schema(
	{
		ratedBy: {
			type: Schema.Types.ObjectId,
			ref: 'users',
			required: true,
		},
		bookId: {
			type: Schema.Types.ObjectId,
			ref: 'books',
			required: true,
		},
		rating: {
			type: Number,
			min: 1,
			max: 5,
			required: true,
		},
		// we can add comments etc...
	},
	{ timestamps: true }
);
rateSchema.index({ ratedBy: 1, bookId: 1 }, { unique: true });
const rateModel = model('ratings', rateSchema);

export default rateModel;
