import Header from '../Header';
import { Link } from 'react-router-dom';

const Menu = ({adminid, connection, setConnection}) => {
	return (
		

<div className="Menu">

<Header connection={connection}
setConnection={setConnection}/>

<div className="m-auto d-flex justify-content-center">

<button className="btn btn-primary m-3"><Link to={`/training/${adminid}`}>Voir mon entrainement</Link></button>
<button className="btn btn-primary m-3"><Link to="/start">Créer mon entrainement</Link></button>

</div>

</div>

)


};

export default Menu;
