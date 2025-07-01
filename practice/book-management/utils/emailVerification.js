import sessionModel from '../models/Session.js';
import transporter from '../services/email.js';

export async function SendVerificationEmail(createdUser) {
	// create the verification session
	const session = await sessionModel.create({
		userId: createdUser._id,
		sessionType: 'email',
	});
	const link = `${process.env.WEBSITE_DOMAIN}/auth/verification?otp=${session.password}`;
	transporter
		.sendMail({
			from: process.env.EMAIL_USERNAME,
			to: createdUser.email,
			subject: 'New account at MYBookshelf',
			//text:''
			html: `
                <h1>Welcome</h1>
                <p>Hello ${createdUser.firstName} ${createdUser.lastName} to our website</p>
                <p>Your OTP password is ${session.password}</p>
                <p>Or you can click on the link:<a href="${link}">your verification link</a> </p>
                `,
		})
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
}
