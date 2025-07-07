import './style.css';
import { cn } from '../../utils/tailwind';
export default function Loading({ className }) {
	return <span className={cn('loader', className)}></span>;
}
