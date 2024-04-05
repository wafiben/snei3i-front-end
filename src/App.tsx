
import {Layout} from './layout';
import Home from './pages/home';
/* import Home from './pages/home';

import {Details} from './pages/details-employee';
import {NotFound} from './pages/not-found'; */
import {Navigate} from 'react-router-dom';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const App: React.FC=() => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/users" element={<Home />} />
					<Route
						path="/"
						element={<Navigate to="/users" />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>

	);
};

export default App;
