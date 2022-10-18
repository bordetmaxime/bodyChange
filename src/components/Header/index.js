import './styles.scss';
import Body from '../../assets/body.png';
import { Link } from 'react-router-dom';

const Header = ({connexion, setConnexion}) => {

	const deconnexion = () => {
		setConnexion(false)
	}
	
	return (
	<div className="header">
		<div className="container d-flex align-items-center flex-column">
	<img src={ Body } alt="logo bodyChange" className="img_header"/>
	{ connexion ? <a href="#" onClick={deconnexion}><Link to="/connexion">Déconnexion</Link></a>
	 : ''}
	 	{ connexion ? <a href="#" className="back_start"><Link to="/machine">Retour</Link></a>
	 : ''}


	</div>

	</div>
);
};

export default Header;


