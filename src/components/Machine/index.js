import './styles.scss';
import Header from '../Header';
import Squat from '../../assets/squat.jpg';
import Guide from '../../assets/guide.jpg';
import Developpe from '../../assets/developpe1.jpg';
import Haltere from '../../assets/haltere.jpg';
import { Link } from 'react-router-dom';


const Machine = ({connexion, setConnexion}) => {

	
	return ( 
	<div className="machine">
			<Header connexion={connexion}
			setConnexion={setConnexion}/>
	<div className="container-fluid">
	<h1 className="title-machine">Machine disponible : </h1>
	<div className="d-flex justify-content-center flex-wrap">

	<div className="d-flex flex-column m-2"><img className="img_select_exercice" src={Developpe} /> <button className="btn_select_exercice"><Link to="/developpe">Selectionner les exercices</Link></button></div>
	<div className="d-flex flex-column m-2"><img  className="img_select_exercice" src={Guide} /><button className="btn_select_exercice"><Link to="/guide">Selectionner les exercices</Link></button></div>
	<div className="d-flex flex-column m-2"><img  className="img_select_exercice" src={Squat} /><button className="btn_select_exercice"><Link to="/squat">Selectionner les exercices</Link></button></div>
	<div className="d-flex flex-column m-2"><img className="img_select_exercice" src={Haltere} /><button className="btn_select_exercice"><Link to="/haltere">Selectionner les exercices</Link></button></div>
	</div>
	</div>
	</div>

	
);
};

export default Machine;


