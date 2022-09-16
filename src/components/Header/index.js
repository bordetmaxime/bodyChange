import './styles.scss';
import Body from '../../assets/body.png';
import { Link } from 'react-router-dom';

const Header = () => {
	
	return (
	<div className="header">
		<div className="container d-flex align-items-center flex-column">
	<img src={ Body } alt="logo bodyChange" className="w-25"/>
	<Link to="/training">Mon entrainement</Link>
<Link to="/machine">Retour</Link>
	
	</div>

	</div>
);
};

export default Header;


