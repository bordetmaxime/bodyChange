import Header from '../Header';
import { Link } from 'react-router-dom';
import Body from '../../assets/body.png';

const NotFound= () => {
	return (
		

<div className="notFound">
<div className="container d-flex align-items-center flex-column">

<img src={ Body } alt="logo bodyChange" className="w-25"/>

</div>

<div className="container d-flex align-items-center flex-column">



<h1>404</h1>

<h2>page introuvable ! Merci de vous connecter pour accéder à cette page!</h2>

<div className="div_btn_home"><a class="btn_home" href="#"><Link to="/registration">M'inscire</Link></a></div>
<div className="div_btn_home"><a class="btn_home" href="#"><Link to="/connection">Me connecter</Link></a></div>

</div>

</div>

)


};

export default NotFound;
