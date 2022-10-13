import './styles.scss';
import Header from '../Header';
import { Link } from 'react-router-dom';



const Home = () => {
	
	return (
	<div className="home">
		<Header />
	
		<div className="container home-container">	

		<ul class="list-group w-75 m-auto">  
      <span class="badge badge-info badge-pill">1</span>
  <li class="list-group-item d-flex justify-content-center align-items-center">
   Ajouter vos machines

  </li>

     <span class="badge badge-info badge-pill">2</span>
  <li class="list-group-item d-flex justify-content-center align-items-center ">
  Choisissez vos exercices 
 
  </li> 
    <span class="badge badge-info badge-pill">3</span>
  <li class="list-group-item d-flex justify-content-center align-items-center ">
Consulter votre entrainement
 
  </li>
</ul>


</div>
<div className="div_btn_home">
<a className="btn_home"><Link to="/registration">m'inscrire </Link></a>
</div>
<div className="div_btn_home">
<a className="btn_home"><Link to="/connection">Me connecter </Link></a>
</div>
	</div>
);
};

export default Home;


