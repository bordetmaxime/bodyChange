
import './styles.scss';
import Header from '../Header';
import Squat from '../../assets/squat1.jpg';
import Guide from '../../assets/machineguidee1.jpg';
import Developpe from '../../assets/developpe1.jpg';
import Haltere from '../../assets/haltere.jpg';
import { Link } from 'react-router-dom';




const Start = ({changeState}) => {

	const selectMachine =  (event) =>{
	changeState(event)		
		}
		

	return (
	<div className="start">

	<Header/>
	<div className="container">

	<div id="carouselExampleControls" className="carousel slide w-50 h-100 m-auto" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Squat} className="d-block w-100" alt="..."/>
	  <button className="w-100 h-25 m-auto" value="squat" type="button" onClick={selectMachine}>+</button>
    </div>

	  
    <div className="carousel-item">
      <img src={Developpe} className="d-block w-100" alt="..."/>
	  <button className="w-100 h-25 m-auto" value="developpe" type="button" onClick={selectMachine}>+</button>

    </div>

    <div className="carousel-item">
      <img src={Guide} className="d-block w-100 " alt="..."/>
	  <button className="w-100 h-25 m-auto" value="guide" type="button" onClick={selectMachine}>+</button>
	 
	  
    </div>

	<div className="carousel-item">
      <img src={Haltere} className="d-block w-100" alt="..."/>
	  <button className="w-100 h-25 m-auto" value="haltere" type="button" onClick={selectMachine}>+</button>

    </div>
 
  </div>
   
  <button className="carousel-control-prev h-100" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




</div>

<Link to="/machine" className="btn btn-secondary d-flex justify-content-center">Continuer</Link>
	</div>
);
};

export default Start;


