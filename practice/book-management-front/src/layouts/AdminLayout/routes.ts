import type { SidebarItem } from '../DashboardLayout/type';

export const sidebarItems: SidebarItem[] = [
	{ label: 'Home', icon: 'icon-[heroicons--home]', path: '/app/home' },
	{ label: 'Search', icon: 'icon-[heroicons--magnifying-glass]', path: '/app/search' },
	{ label: 'My Shelf', icon: 'icon-[ri--book-shelf-fill]', path: '/app/my-shelf' },
	{
		label: 'Contribute',
		icon: 'icon-[ri--hand-coin-line]',
		path: '/app/contribute',
	},
];
