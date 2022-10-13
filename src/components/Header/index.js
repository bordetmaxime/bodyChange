import './styles.scss';
import Body from '../../assets/body.png';
import { Link } from 'react-router-dom';

const Header = ({connection, setConnection}) => {

	const deconnexion = () => {
		setConnection(false)
	}
	
	return (
	<div className="header">
		<div className="container d-flex align-items-center flex-column">
	<img src={ Body } alt="logo bodyChange" className="w-25"/>
	{ connection ? <a href="#" onClick={deconnexion}><Link to="/connection">Déconnexion</Link></a> : ''}

	</div>

	</div>
);
};

export default Header;


