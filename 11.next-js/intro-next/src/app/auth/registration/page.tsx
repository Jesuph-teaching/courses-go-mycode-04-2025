import Link from 'next/link';
import React from 'react';

export default function RegistrationPage() {
	return (
		<div className="flex flex-col">
			<p>
				if you already have an account please{' '}
				<Link href="/auth/login" className="text-blue-500">
					login
				</Link>
			</p>
		</div>
	);
}
