import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import Routes from './Routes';
import { Provider as StoreProvider } from 'react-redux';
import { Toaster } from 'sonner';

import storeConfig from './store'; // Assuming you have a store setup
import queryClient from './config/query';
import toastConfig from './config/toaster';
import LoggedInProvider from './Provider/LoggedInProvider';
import { Suspense } from 'react';
import Fallback from './components/Loadings/Fallback';

function App() {
	return (
		<BrowserRouter>
			<StoreProvider store={storeConfig}>
				<QueryClientProvider client={queryClient}>
					<LoggedInProvider>
						<Suspense fallback={<Fallback />}>
							<Routes />
						</Suspense>
					</LoggedInProvider>
				</QueryClientProvider>
			</StoreProvider>
			<Toaster {...toastConfig} />
		</BrowserRouter>
	);
}

export default App;
