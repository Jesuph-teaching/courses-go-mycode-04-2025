import React from 'react';

export default function Navbar() {
	return (
		<div className="flex w-full items-center justify-between">
			<label htmlFor="sidebar-check" className="btn btn-primary drawer-button lg:hidden">
				<span className="icon-[heroicons--bars-3] h-6 w-6"></span>
			</label>
		</div>
	);
}
