import { Schema, model } from 'mongoose';
const dueTime = 24 * 3600 * 1000;

const todoSchema = new Schema(
	{
		task: {
			type: String,
			required: true,
		},
		dueDate: {
			type: Date,
			default: function () {
				return Date.now() + dueTime;
			},
		},
		status: {
			type: Boolean,
			default: false,
		},
		userId: {
			type: Schema.Types.ObjectId, // the id created by mongodb
			required: true,
			ref: 'users',
		},
	},
	{
		timestamps: true,
	}
);

const todoModel = model('todos', todoSchema);
export default todoModel;
