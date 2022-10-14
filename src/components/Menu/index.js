import Header from '../Header';
import { Link } from 'react-router-dom';
import './styles.scss';

const Menu = ({adminid, connexion, setConnexion}) => {
	return (
		

<div className="Menu">

<Header connexion={connexion}
setConnexion={setConnexion}/>

<div className="m-auto d-flex justify-content-center menu_btn">

<button className="btn btn-primary m-3"><Link to={`/training/${adminid}`}>Voir mon entrainement</Link></button>
<button className="btn btn-primary m-3"><Link to="/start">Créer mon entrainement</Link></button>

</div>

</div>

)


};

export default Menu;
