import Header from '../Header'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';






const Training = ({fullTraining, setDeleteTraining, deleteOneTraining, adminId, connection, setConnection}) => {

const navigate = useNavigate();


const deleteTraining = (event) => {
setDeleteTraining(event.target.id);
deleteOneTraining()
navigate(`/training/${adminId}`)


}

	
	return (

<div className="training">
	<Header connection={connection}
	setConnection={setConnection}/>

<div class="d-flex justify-content-start flex-wrap">

{fullTraining.map((training) => (
	

console.log(training.training_img),

<div className="card w-25 m-2"  >
 
  <img src={require(`../../assets/${training.training_img}.gif`)} className="card-img-top" alt="..."/>
  <div className="card-body">
	<p>{training.training_serie} séries de {training.training_repetition} répétitions </p>

	<p>supprimer</p>
	<input type="submit" value="X" id={training.training_id} onClick={deleteTraining}/>
  </div>
 
</div> 

))}



</div>
<div className="div_btn_home"><a class="btn_home" href="#"><Link to="/exercice">Choisir d'autres exercices</Link></a></div>
</div>

		
	)
}

export default Training;
