import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full flex flex-col min-h-screen">
			<div className="flex-1 w-full">{children}</div>
			<footer className="w-full bg-neutral-500 text-black p-4 mt-auto">
				<h2>My website</h2>
			</footer>
		</div>
	);
}
