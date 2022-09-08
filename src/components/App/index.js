// == Import
import { Route, Routes } from 'react-router';
import './styles.css';

import Home from '../Home';
import Header from '../Header';

// == Composant
const App = () => {

	return (
		<div className="App">
			 <Routes>
			 <Route path="/" element={ <Home /> } />
			 </Routes>
			

		
		</div>
	);
};

// == Export
export default App;
