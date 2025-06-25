// title, author, price, stock, description
import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'users',
			required: true,
		},
		books: [
			{
				bookId: {
					type: Schema.Types.ObjectId,
					ref: 'books',
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
			},
		],
		totalPrice: {
			type: Number,
			required: true,
			min: 0,
		},
		status: {
			type: String,
			enum: ['pending', 'completed', 'cancelled'],
			default: 'pending',
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

const orderModel = model('orders', orderSchema);
export default orderModel;
