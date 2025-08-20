import 'dotenv/config';
import dbConnect from '@/lib/db';
import userModel from '@/models/user';
import { UserI } from '@/types/user';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

async function createUser(user: UserI) {
	await dbConnect();
	const createdUser = await userModel.create(user);
	console.log(createdUser);
	return createdUser;
}
createUser({
	firstName: prompt('Enter first name:'),
	lastName: prompt('Enter last name:'),
	email: prompt('Enter email:'),
	age: Number(prompt('Enter age:')),
	password: prompt('Enter password:'),
});
