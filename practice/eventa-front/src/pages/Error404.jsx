import { Link } from 'react-router';

export default function Error404() {
	return (
		<div className="flex w-full gap-2 min-h-screen flex-col justify-center items-center">
			<h2 className="text-7xl text-red-800 font-bold">Page not found</h2>
			<h3 className="text-6xl font-bold">404</h3>
			<p className="text-lg">
				This page doesn't exist or have been removed
			</p>
			<Link to="/" className="bg-gray-600 text-white p-2 rounded-xl">
				Go back home
			</Link>
		</div>
	);
}
