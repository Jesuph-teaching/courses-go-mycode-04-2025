/**
 * Toast configuration for the application.
 * This configuration sets the default options for toast notifications,
 * including position, auto-close duration, and theme.
 * @type {import('sonner').ToasterProps}
 */
const toastConfig = {
	position: 'top-right',
	duration: 5000, // Duration in milliseconds
	theme: 'light',
	closeButton: true,
	swipeDirections: ['top', 'bottom'],
};

export default toastConfig;
