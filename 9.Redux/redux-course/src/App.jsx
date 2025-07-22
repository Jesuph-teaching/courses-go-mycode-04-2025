import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import Quiz from './components/Quiz';
import Progress from './components/Progress';

function App() {
	return (
		<ReduxProvider store={store}>
			<div className="flex  w-full h-screen">
				<Quiz />
				<div className="divider lg:divider-horizontal" />
				<Progress />
			</div>
		</ReduxProvider>
	);
}

export default App;
