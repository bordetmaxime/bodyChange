import './styles.scss';
import Header from '../Header';
import Smith1 from '../../assets/smith/squat-smith.gif';
import Smith2 from '../../assets/smith/dev-couche-smith.gif';
import Smith3 from '../../assets/smith/dev-epaule-smith.gif';
import Smith4 from '../../assets/smith/dev-nuque-smith.gif';
import Smith5 from '../../assets/smith/drag-curl-smith.gif';
import Smith6 from '../../assets/smith/ext-mollets-deb-smith.gif';
import Smith7 from '../../assets/smith/ext-mollets-smith.gif';
import Smith8 from '../../assets/smith/heg-press-smith.gif';
import Smith9 from '../../assets/smith/hip-trust-smith.gif';
import Smith10 from '../../assets/smith/tirage-smith.gif';
import { Link } from 'react-router-dom';



const Squat = ({repSquat1, repSquat2, repSquat3, repSquat4, repSquat5, repSquat6, repSquat7, repSquat8, repSquat9, repSquat10,
	serSquat1, serSquat2, serSquat3, serSquat4, serSquat5, serSquat6, serSquat7, serSquat8, serSquat9, serSquat10,
setRepSquat1, setRepSquat2, setRepSquat3, setRepSquat4, setRepSquat5, setRepSquat6, setRepSquat7,setRepSquat8, setRepSquat9, setRepSquat10,
setSerSquat1, setSerSquat2, setSerSquat3, setSerSquat4, setSerSquat5, setSerSquat6, setSerSquat7, setSerSquat8, setSerSquat9, setSerSquat10, }) => {

		const inputValue = (event) => {


		const name = event.target.name;

		const value = event.target.value;

		switch (name) {
			case 'repSquat1':
				setRepSquat1(value)
			  break;

			  case 'repSquat2':
				setRepSquat2(value)
			  break;

			  case 'repSquat3':
				setRepSquat3(value)
				console.log("coucou")
			  break;

			  case 'repSquat4':
				setRepSquat4(value)
			  break;
			  case 'repSquat5':
				setRepSquat5(value)
			  break;
			  case 'repSquat6':
				setRepSquat6(value)
			  break;
			  case 'repSquat7':
				setRepSquat7(value)
			  break;
			  case 'repSquat8':
				setRepSquat8(value)
			  break;
			  case 'repSquat9':
				setRepSquat9(value)
			  break;
			  case 'repSquat10':
				setRepSquat10(value)
			  break;
			case 'serSquat1':
				setSerSquat1(value)
				break;
			case 'serSquat2':
				setSerSquat2(value)
				break;
			case 'serSquat3':
				setSerSquat3(value)
				break;
			case 'serSquat4':
				setSerSquat4(value)
				break;
			case 'serSquat5':
				setSerSquat5(value)
				break;
		    case 'serSquat6':
				setSerSquat6(value)
				break;
			case 'serSquat7':
				setSerSquat7(value)
				break;
			case 'serSquat8':
				setSerSquat8(value)
				break;
			case 'serSquat9':
				setSerSquat9(value)
				break;
			case 'serSquat10':
				setSerSquat10(value)
				break;

			default:
			  console.log('404');
		  }
		  
	};  

	
	
	return (
	<div className="Squat">
			<Header/>

			<div class="d-flex justify-content-around flex-wrap">

			<div className="card w-25 m-2"  >
  <img src={Smith1}  className="card-img-top" alt="..."/>
  <div className="card-body">

	<label for="card1serie">nombre de série:</label>
  <input type="number" id="card1serie" value={serSquat1} name='serSquat1' className="w-75 m-auto" onChange={ inputValue }/>
  <label for="card1rep">nombre de répétion:</label>
    <input type="number" id="card1rep" value={repSquat1} name='repSquat1' className="w-75 m-auto" onChange={ inputValue }/>


  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith2}  className="card-img-top" alt="..."/>
  <div className="card-body">
 

  <label for="card2serie">nombre de série:</label>
  <input type="number" id="card2serie" value={serSquat2} name='serSquat2' className="w-75 m-auto" onChange={ inputValue }/>
  <label for="card2rep">nombre de répétion:</label>
  <input type="number" id="card2rep" value={repSquat2} name='repSquat2'  className="w-75 m-auto" onChange={ inputValue }/>
  
 

  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith3}  className="card-img-top" alt="..."/>
  <div className="card-body">
  
 
  <label for="card3serie">nombre de série:</label>
  <input type="number" id="card3serie" value={serSquat3} name='serSquat3' className="w-75 m-auto" onChange={ inputValue }/>
 <label for="card3rep">nombre de répétion:</label>
  <input type="number" id="card3rep" value={repSquat3} name='repSquat3' className="w-75 m-auto" onChange={ inputValue }/>
 

  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith4}  className="card-img-top" alt="..."/>
  <div className="card-body">


  <label for="card4serie">nombre de série:</label>
  <input type="number" id="card4serie" value={serSquat4} name='serSquat4' className="w-75 m-auto" onChange={ inputValue }/>
  <label for="card4rep">nombre de répétion:</label>
  <input type="number" id="card4rep" value={repSquat4} name='repSquat4' className="w-75 m-auto" onChange={ inputValue }/>


  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith5}  className="card-img-top" alt="..."/>
  <div className="card-body">
 
 
  <label for="card5serie">nombre de série:</label>
  <input type="number" id="card5serie" value={serSquat5} name='serSquat5' className="w-75 m-auto" onChange={ inputValue }/>
 <label for="card5rep">nombre de répétion:</label>
  <input type="number" id="card5rep" value={repSquat5} name='repSquat5' className="w-75 m-auto" onChange={ inputValue }/>


  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith6}  className="card-img-top" alt="..."/>
  <div className="card-body">
  
  <label for="card6serie">nombre de série:</label>
  <input type="number" id="card6serie" value={serSquat6} name='serSquat6' className="w-75 m-auto" onChange={ inputValue }/>
  <label for="card6rep">nombre de répétion:</label>
  <input type="number" id="card6rep" value={repSquat6} name='repSquat6' className="w-75 m-auto" onChange={ inputValue }/>


  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith7}  className="card-img-top" alt="..."/>
  <div className="card-body">
 

  <label for="card7serie">nombre de série:</label>
  <input type="number" id="card7serie" value={serSquat7} name='serSquat7' className="w-75 m-auto" onChange={ inputValue }/>
 <label for="card7rep">nombre de répétion:</label>
  <input type="number" id="card7rep" value={repSquat7} name='repSquat7' className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith8}  className="card-img-top" alt="..."/>
  <div className="card-body">


  <label for="card8serie">nombre de série:</label>
  <input type="number" id="card8serie" value={serSquat8} name='serSquat8' className="w-75 m-auto" onChange={ inputValue }/>
  <label for="card8rep8">nombre de répétion:</label>
  <input type="number" id="card8rep" value={repSquat8} name='repSquat8' className="w-75 m-auto" onChange={ inputValue }/>



  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith9}  className="card-img-top" alt="..."/>
  <div className="card-body">
  

  <label for="card9serie">nombre de série:</label>
  <input type="number" id="card9serie" value={serSquat9} name='serSquat9' className="w-75 m-auto" onChange={ inputValue }/>
  <label for="card9rep">nombre de répétion:</label>
  <input type="number" id="card9rep" value={repSquat9} name='repSquat9' className="w-75 m-auto" onChange={ inputValue }/>


  </div>
</div>

<div className="card w-25 m-2"  >
  <img src={Smith10}  className="card-img-top" alt="..."/>
  <div className="card-body">
  
  <label for="card10serie">nombre de série:</label>
  <input type="number" id="card10serie" value={serSquat10} name='serSquat10' className="w-75 m-auto" onChange={ inputValue }/>
  <label for="card10rep">nombre de répétion:</label>
  <input type="number" id="card10rep" value={repSquat10} name='repSquat10' className="w-75 m-auto" onChange={ inputValue }/>


  </div>
</div>

</div>
<div className="d-flex justify-content-center m-5">
<button><Link to="/training">Voir mon entrainement</Link></button>
<button><Link to="/machine">choisir d'autres éxercices</Link></button>

</div>


	</div>

	
);
};

export default Squat;


