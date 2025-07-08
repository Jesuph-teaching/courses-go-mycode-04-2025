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
			physical: {
				type: Number,
				default: 0,
			},
			audio: {
				type: String, // link to audio
			},
			eBook: {
				type: String, // link to pdf
			},
		},
		description: {
			type: String,
			required: true,
		},
		cover: {
			type: String,
		},

		keywords: [{ type: String }],
		category: {
			type: Schema.Types.ObjectId,
			ref: 'categories',
		},
		contributedBy: {
			type: Schema.Types.ObjectId,
			ref: 'users',
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
bookSchema.index(
	{ title: 'text', author: 'text', description: 'text', keywords: 'text' },
	{
		name: 'search_index',
	}
);

const bookModel = model('books', bookSchema);
export default bookModel;
