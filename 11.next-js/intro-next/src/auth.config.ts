import { getServerSession, NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import userModel from './models/user';
import bcrypt from 'bcrypt';
import dbConnect from './lib/db';
export const authOptions: NextAuthOptions = {
	providers: [
		CredentialProvider({
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'Enter your email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials || !credentials.email || !credentials.password) {
					throw new Error('You have to provide credential');
				}
				const { email, password } = credentials;
				await dbConnect();
				const user = await userModel.findOne({ email });
				if (!user) {
					throw new Error('Wrong credentials');
				}
				console.log(password, user.password);

				if (!(await bcrypt.compare(password, user.password))) {
					throw new Error('Wrong credentials');
				}
				return {
					id: user._id.toString(),
					email: user.email,
					name: user.firstName + ' ' + user.lastName,
				};
			},
		}),
	],
};

export const getSession = () => getServerSession(authOptions);
