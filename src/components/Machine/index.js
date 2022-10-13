import './styles.scss';
import Header from '../Header';
import Squat from '../../assets/squat.jpg';
import Guide from '../../assets/guide.jpg';
import Developpe from '../../assets/developpe1.jpg';
import Haltere from '../../assets/haltere.jpg';
import { Link } from 'react-router-dom';


const Machine = ({developpe, guide, squat, haltere, connection, setConnection}) => {

	
	return ( 
	<div className="machine">
			<Header connection={connection}
			setConnection={setConnection}/>
	<h1 className="title-machine">Mes machines : </h1>
	<div className="d-flex justify-content-start flex-wrap">

	{developpe === true ? <div className="d-flex flex-column m-2"><img src={Developpe} /> <button><Link to="/developpe">Selectionner les exercices</Link></button></div> : ' '}
	{guide === true ? <div className="d-flex flex-column m-2"><img src={Guide} /><button><Link to="/guide">Selectionner les exercices</Link></button></div> : ' '}
	{squat === true ? <div className="d-flex flex-column m-2"><img src={Squat} /><button><Link to="/squat">Selectionner les exercices</Link></button></div>  : ' '}
	{haltere === true ? <div className="d-flex flex-column m-2"><img src={Haltere} /><button><Link to="/haltere">Selectionner les exercices</Link></button></div>  : ' '}
	</div>
	</div>

	
);
};

export default Machine;


