import './styles.scss';
import Header from '../Header';
import Squat from '../../assets/squat1.jpg';
import Guide from '../../assets/machineguidee1.jpg';
import Developpe from '../../assets/developpe1.jpg';
import Haltere1 from '../../assets/haltere.jpg';
import { Link } from 'react-router-dom';


const Machine = ({developpe, guide, squat, haltere}) => {

	
	return (
	<div className="machine">
			<Header/>
	<h1>Mes machines</h1>
	<div className="d-flex justify-content-start flex-wrap">

	{developpe === true ? <div><img src={Developpe} /> <button><Link to="/developpe">Selectionner les exercices</Link></button></div> : ' '}
	{guide === true ? <div><img src={Guide} /><button><Link to="/guide">Selectionner les exercices</Link></button></div> : ' '}
	{squat === true ? <div><img src={Squat} /><button><Link to="/squat">Selectionner les exercices</Link></button></div>  : ' '}
	{haltere === true ? <div><img src={Haltere1} /><button><Link to="/haltere">Selectionner les exercices</Link></button></div>  : ' '}
	</div>
	</div>

	
);
};

export default Machine;


