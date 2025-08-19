import LoginForm from '@/components/LoginForm';

export default async function LoginPage() {
	// check db
	// await new Promise((res) => setTimeout(() => res(null), 3000));
	// verify if user is connected
	return <LoginForm lastLogin={{ message: 'tesst' }} />;
}
