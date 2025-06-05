import WeatherCardWithRQ from './WeatherCardWithRQ';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const client = new QueryClient({});
function App() {
	return (
		<QueryClientProvider client={client}>
			<div className="flex blu w-full min-h-screen bg-gray-100 justify-center items-center px-8">
				<WeatherCardWithRQ />
			</div>
		</QueryClientProvider>
	);
}

export default App;
