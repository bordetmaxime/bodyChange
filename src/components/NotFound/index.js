import Header from '../Header';
import { Link } from 'react-router-dom';
import Body from '../../assets/body.png';
import './styles.scss';

const NotFound= () => {
	return (
		

<div className="notFound">
<div className="container d-flex align-items-center flex-column">

<img src={ Body } alt="logo bodyChange" className="w-25"/>

</div>

<div className="container d-flex align-items-center flex-column">



<h1 className="not_found_h1">404</h1>

<h2 className="not_found_h2">Page introuvable ! Merci de vous connecter pour accéder à cette page!</h2>

<div className="div_btn_home"><a class="btn_home_404" href="#"><Link to="/registration">Inscription</Link></a></div>
<div className="div_btn_home"><a class="btn_home_404" href="#"><Link to="/connexion">Connexion</Link></a></div>

</div>

</div>

)


};

export default NotFound;
