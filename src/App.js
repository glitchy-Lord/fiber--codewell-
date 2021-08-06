import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

import { Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
	return (
		<Switch>
			<main className='App'>
				<Header />
				<Route path='/' component={LandingPage} exact />
				<Route path='/sign-up' component={Signup} />
				<Footer />
			</main>
		</Switch>
	);
}

export default App;
