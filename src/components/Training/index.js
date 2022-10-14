import Header from '../Header'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';






const Training = ({fullTraining, setDeleteTraining, deleteOneTraining, adminid, connexion, setConnexion}) => {

const navigate = useNavigate();


const deleteTraining = (event) => {
setDeleteTraining(event.target.id);
deleteOneTraining()
navigate(`/training/${adminid}`)


}

	
	return (

<div className="training">
	<Header connexion={connexion}
	setConnexion={setConnexion}/>

	

<div class="container-fluid d-flex justify-content-center flex-wrap all_card">

{fullTraining.map((training) => (
	

console.log(training.training_img),

<div className="card m-2 card_training"  >
 
  <img src={require(`../../assets/${training.training_img}.gif`)} className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	<p>{training.training_serie} séries de {training.training_repetition} répétitions </p>
<div className="d-flex m-1"> 
	<p>Supprimer</p>
	<input type="submit" value="X" id={training.training_id} onClick={deleteTraining}/>
	</div>
  </div>
 
</div> 

))}



</div>
<div className="div_btn_home"><a class="btn_home" href="#"><Link to="/start">Choisir d'autres exercices</Link></a></div>
</div>

		
	)
}

export default Training;
