
import './styles.scss';
import Header from '../Header';
import Squat from '../../assets/squat.jpg';
import Guide from '../../assets/guide.jpg';
import Developpe from '../../assets/developpe1.jpg';
import Haltere from '../../assets/haltere.jpg';
import { Link } from 'react-router-dom';




const Start = ({changeState, connection, setConnection}) => {

	const selectMachine =  (event) =>{
	changeState(event)		
		}
		

	return (
	<div className="start">

	<Header connection={connection}
	setConnection={setConnection}/>
	<div className="container">

	<div id="carouselExampleControls" className="carousel slide w-25 h-100 m-auto" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Squat} className="d-block w-100" alt="..."/>
	  <button className="w-100 m-auto p-3" value="squat" type="button" onClick={selectMachine}>+ Ajouter</button>
    </div>

	  
    <div className="carousel-item">
      <img src={Developpe} className="d-block w-100" alt="..."/>
	  <button className="w-100 m-auto p-3" value="developpe" type="button" onClick={selectMachine}>+ Ajouter</button>

    </div>

    <div className="carousel-item">
      <img src={Guide} className="d-block w-100 " alt="..."/>
	  <button className="w-100 m-auto p-3" value="guide" type="button" onClick={selectMachine}>+ Ajouter</button>
	 
	  
    </div>

	<div className="carousel-item">
      <img src={Haltere} className="d-block w-100" alt="..."/>
	  <button className="w-100 m-auto p-3" value="haltere" type="button" onClick={selectMachine}>+ Ajouter</button>

    </div>
 
  </div>
   
  <button className="carousel-control-prev h-auto" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon color_change" aria-hidden="true"></span>
    <span className="visually-hidden color_change"></span>
  </button>
  <button className="carousel-control-next h-auto color_change " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
    <span className="visually-hidden "></span>
  </button>
</div>




</div>
<div className="m-auto d-flex justify-content-center">
<Link to="/machine" className="btn btn-secondary  m-3 w-25">J'ai choisis mes machines</Link>
</div>
	</div>
);
};

export default Start;


