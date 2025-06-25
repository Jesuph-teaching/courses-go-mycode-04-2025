// title, author, price, stock, description
import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		price: {
			original: {
				type: Number,
			},
			current: {
				type: Number,
				required: true,
			},
		},
		stock: {
			type: Number,
			default: 0,
		},
		description: {
			type: String,
			required: true,
		},
		cover: {
			type: String,
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

const bookModel = model('books', bookSchema);
export default bookModel;
