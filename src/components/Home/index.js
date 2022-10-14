import './styles.scss';
import Header from '../Header';
import { Link } from 'react-router-dom';



const Home = () => {
	
	return (
	<div className="home">
		<Header />
	
		<div className="container home-container w-80">	

		<ul class="list-group m-auto">  
      <span class="badge badge-info badge-pill">1</span>
  <li class="list-group-item d-flex justify-content-center align-items-center text-center">
   Ajouter vos machines

  </li>

     <span class="badge badge-info badge-pill">2</span>
  <li class="list-group-item d-flex justify-content-center align-items-center text-center ">
  Choisissez vos exercices 
 
  </li> 
    <span class="badge badge-info badge-pill">3</span>
  <li class="list-group-item d-flex justify-content-center align-items-center text-center ">
Consulter votre entrainement
 
  </li>
</ul>


</div>
<div className="div_btn_home">
<a className="btn_home btn_home_registration"><Link to="/registration">Inscription </Link></a>
</div>
<div className="div_btn_home">
<a className="btn_home btn_home_connexion"><Link to="/connexion">Connexion </Link></a>
</div>
	</div>
);
};

export default Home;


