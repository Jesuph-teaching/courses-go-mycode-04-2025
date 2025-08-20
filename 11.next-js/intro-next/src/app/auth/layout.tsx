import Image from 'next/image';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto flex gap-4 flex-col md:flex-row">
			<div className="flex-1">
				<Image
					src="/images/auth.jpg"
					alt="auth image"
					className="max-h-screen object-cover w-full"
					width={720}
					height={900}
					priority
					quality={20}
				/>
			</div>
			<div className="flex-1">{children}</div>
		</div>
	);
}
