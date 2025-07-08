import { Link, NavLink } from 'react-router';
import Logo from '../../components/Logo';
import { cn } from '../../utils/tailwind';
import type { SidebarItem } from './type';

export default function Sidebar({
	additionalSidebarItems,
	sidebarItems,
}: {
	additionalSidebarItems: SidebarItem[];
	sidebarItems: SidebarItem[];
}) {
	return (
		<div className="drawer-side h-full">
			<label
				htmlFor="sidebar-check"
				aria-label="close sidebar"
				className="drawer-overlay"
			></label>
			<div className="menu bg-base-100 text-base-content h-full w-80 gap-24 overflow-auto px-12 py-4">
				<div className="relative flex w-full items-center justify-between gap-8">
					<Link to={'/app'} className="w-full max-w-40">
						<Logo className="w-full" />
					</Link>
					<label
						htmlFor="sidebar-check"
						aria-label="close sidebar"
						className="btn btn-ghost btn-sm btn-circle absolute top-1/2 right-0 shrink-0 -translate-y-1/2 md:hidden"
					>
						<span className="icon-[heroicons--x-mark] h-6 w-6"></span>
					</label>
				</div>
				<ul className="flex flex-col gap-4">
					{/* Sidebar content here */}
					{sidebarItems.map((item) => (
						<li>
							<NavLink
								className={({ isActive }) =>
									cn('flex gap-2', isActive ? 'menu-active' : '')
								}
								to={item.path}
							>
								{item.icon && <span className={`${item.icon} h-6 w-6`}></span>}
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>
				<ul className="mt-auto flex flex-col gap-2">
					{/* Sidebar content here */}
					{additionalSidebarItems.map((item) => (
						<li>
							<NavLink
								className={({ isActive }) =>
									cn('flex gap-2', isActive ? 'menu-active' : '')
								}
								to={item.path}
							>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
