import Header from '../Header';
import './styles.scss';

import guide1 from '../../assets/guide1.gif';
import guide2 from '../../assets/guide2.gif';
import guide3 from '../../assets/guide3.gif';
import guide4 from '../../assets/guide4.gif';
import guide5 from '../../assets/guide5.gif';
import guide6 from '../../assets/guide6.gif';
import guide7 from '../../assets/guide7.gif';
import guide8 from '../../assets/guide8.gif';
import guide9 from '../../assets/guide9.gif';
import guide10 from '../../assets/guide10.gif';
import guide11 from '../../assets/guide11.gif';
import guide12 from '../../assets/guide12.gif';
import guide13 from '../../assets/guide13.gif';
import guide14 from '../../assets/guide14.gif';
import guide15 from '../../assets/guide15.gif';
import guide16 from '../../assets/guide16.gif';
import guide17 from '../../assets/guide17.gif';
import guide18 from '../../assets/guide18.gif';
import guide20 from '../../assets/guide20.gif';
import guide21 from '../../assets/guide21.gif';
import { Link } from 'react-router-dom';

const Guide = ({repGuide1, repGuide2,repGuide3, repGuide4,repGuide5, repGuide6, repGuide7, repGuide8, repGuide9, repGuide10, repGuide11, repGuide12, repGuide13, repGuide14, repGuide15, repGuide16,
	repGuide17, repGuide18, repGuide20, repGuide21, setRepGuide1, setRepGuide2, setRepGuide3, setRepGuide4, setRepGuide5,
	setRepGuide6, setRepGuide7, setRepGuide8, setRepGuide9, setRepGuide10, setRepGuide12, setRepGuide13, setRepGuide14, setRepGuide16, setRepGuide17, setRepGuide18,
	setRepGuide20, setRepGuide21, serGuide1, serGuide2, serGuide3, serGuide4, serGuide5, serGuide6, serGuide7, serGuide8, serGuide9, 
	serGuide10, serGuide11, serGuide12, serGuide13, serGuide14, serGuide15, serGuide16, serGuide17, serGuide18, serGuide20, serGuide21, setSerGuide1, setSerGuide2, setSerGuide3, setSerGuide4, setSerGuide5, setSerGuide6, setSerGuide7, setSerGuide8, setSerGuide9, setSerGuide10, setSerGuide11, setSerGuide12,
	setSerGuide13, setSerGuide14, setSerGuide16, setSerGuide17, setSerGuide18, setSerGuide21, trainingSubmit, connexion, setConnexion}) => {

	const inputValue = (event) => {

		const name = event.target.name;

		const value = event.target.value;

		switch (name) {
			case 'repGuide1':
				setRepGuide1(value)
			  break;
			  case 'repGuide2':
				setRepGuide2(value)
			  break;
			  case 'repGuide3':
				setRepGuide3(value)
			  break;
			  case 'repGuide4':
				setRepGuide4(value)
			  break;
			  case 'repGuide5':
				setRepGuide5(value)
			  break;
			  case 'repGuide6':
				setRepGuide6(value)
			  break;
			  case 'repGuide7':
				setRepGuide7(value)
			  break;
			  case 'repGuide8':
				setRepGuide8(value)
			  break;
			  case 'repGuide9':
				setRepGuide9(value)
			  break;
			  case 'repGuide10':
				setRepGuide10(value)
			  break;
			  case 'repGuide11':
				setRepGuide11(value)
			  break;
			  case 'repGuide12':
				setRepGuide12(value)
			  break;
			  case 'repGuide13':
				setRepGuide13(value)

			  break;
			  case 'repGuide14':
				setRepGuide14(value)
			  break;
			  case 'repGuide15':
				setRepGuide15(value)
			  break;
			  case 'repGuide16':
				setRepGuide16(value)
			  break;
			  case 'repGuide17':
				setRepGuide17(value)
			  break;
			  case 'repGuide18':
				setRepGuide18(value)
			  break;
			  case 'repGuide20':
				setRepGuide20(value)
			  break;
			  case 'repGuide21':
				setRepGuide21(value)
			  break;
			  case 'serGuide1':
				setSerGuide1(value)
				break;
			case 'serGuide2':
				setSerGuide2(value)
				break;
			case 'serGuide3':
				setSerGuide3(value)
				break;
			case 'serGuide4':
				setSerGuide4(value)
				break;
			case 'serGuide5':
				setSerGuide5(value)
				break;
		    case 'serGuide6':
				setSerGuide6(value)
				break;
			case 'serGuide7':
				setSerGuide7(value)
				break;
			case 'serGuide8':
				setSerGuide8(value)
				break;
			case 'serGuide9':
				setSerGuide9(value)
				break;
			case 'serGuide10':
				setSerGuide10(value)
				break;
			case 'serGuide11':
				setSerGuide11(value)
				break;
			case 'serGuide12':
				setSerGuide12(value)
				break;
			case 'serGuide13':
				setSerGuide13(value)
				break;
			case 'serGuide14':
				setSerGuide14(value)
				break;
			case 'serGuide15':
				setSerGuide15(value)
				break;
			case 'serGuide16':
				setSerGuide16(value)
				break;
			case 'serGuide17':
				setSerGuide17(value)
				break;
			case 'serGuide18':
				setSerGuide18(value)
				break;
			case 'serGuide20':
				setSerGuide20(value)
				break;
			case 'serGuide21':
				setSerGuide21(value)
				break;
			default:
			  console.log('404');
		  }
		  
	}; 


return(
	<div className='guide'>
<Header connexion={connexion}
setConnexion={setConnexion} />

<div class="container-fluid">

<form onSubmit={trainingSubmit}>

<div className="row">
			<div className="card m-2 col-md "  >
  <img src={guide1}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide1">Nombre de série:</label>
  <input type="number" id="cardserGuide1"  value={serGuide1} name="serGuide1" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide1">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide1"  value={repGuide1} name="repGuide1" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={guide2}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide2">Nombre de série:</label>
  <input type="number" id="cardserGuide2"  value={serGuide2} name="serGuide2" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide2">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide2"  value={repGuide2} name="repGuide2" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>




<div className="card m-2 col-md"   >
  <img src={guide3}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide1">Nombre de série:</label>
  <input type="number" id="cardserGuide3"  value={serGuide3} name="serGuide3" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide3">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide3"  value={repGuide3} name="repGuide3" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>







<div className="card m-2 col-md"  >
  <img src={guide4}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide4">Nombre de série:</label>
  <input type="number" id="cardserGuide4"  value={serGuide4} name="serGuide4" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide4">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide4"  value={repGuide4} name="repGuide4" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>

</div>

<div className="row">

<div className="card m-2 col-md"  >
  <img src={guide5}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide5">Nombre de série:</label>
  <input type="number" id="cardserGuide5"  value={serGuide5} name="serGuide5" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide5">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide5"  value={repGuide5} name="repGuide5" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>



<div className="card m-2 col-md"  >
  <img src={guide6}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide6">Nombre de série:</label>
  <input type="number" id="cardserGuide6"  value={serGuide6} name="serGuide6" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide6">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide6"  value={repGuide6} name="repGuide6" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>



<div className="card m-2 col-md"  >
  <img src={guide7}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide7">Nombre de série:</label>
  <input type="number" id="cardserGuide7"  value={serGuide7} name="serGuide7" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide7">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide7"  value={repGuide7} name="repGuide7" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>



<div className="card m-2 col-md"  >
  <img src={guide8}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide8">Nombre de série:</label>
  <input type="number" id="cardserGuide8"  value={serGuide8} name="serGuide8" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide1">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide8"  value={repGuide8} name="repGuide8" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>

</div>

<div className="row">

<div className="card m-2 col-md"  >
  <img src={guide9}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide9">Nombre de série:</label>
  <input type="number" id="cardserGuide9"  value={serGuide9} name="serGuide9" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide9">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide9"  value={repGuide9} name="repGuide9" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>



<div className="card m-2 col-md"  >
  <img src={guide10}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide10">Nombre de série:</label>
  <input type="number" id="cardserGuide10"  value={serGuide10} name="serGuide10" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide10">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide10"  value={repGuide10} name="repGuide10" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>



<div className="card m-2 col-md"  >
  <img src={guide11}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide11">Nombre de série:</label>
  <input type="number" id="cardserGuide11"  value={serGuide11} name="serGuide11" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide11">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide11"  value={repGuide11} name="repGuide11" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>



<div className="card m-2 col-md"  >
  <img src={guide12}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide12">Nombre de série:</label>
  <input type="number" id="cardserGuide12"  value={serGuide12} name="serGuide12" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide12">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide12"  value={repGuide12} name="repGuide12" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>

</div>

<div className="row">


<div className="card m-2 col-md"  >
  <img src={guide13}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide13">Nombre de série:</label>
  <input type="number" id="cardserGuide13"  value={serGuide13} name="serGuide13" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide13">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide13"  value={repGuide13} name="repGuide13" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>



<div className="card m-2 col-md"  >
  <img src={guide14}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide14">Nombre de série:</label>
  <input type="number" id="cardserGuide14"  value={serGuide14} name="serGuide14" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide14">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide14"  value={repGuide14} name="repGuide14" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
   </div>

  <div className="card m-2 col-md"  >
  <img src={guide15}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide15">Nombre de série:</label>
  <input type="number" id="cardserGuide15"  value={serGuide15} name="serGuide15" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide15">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide15"  value={repGuide15} name="repGuide15" className="w-75 m-auto" onChange={inputValue}/>	

 
</div>

</div>



<div className="card m-2 col-md"  >
  <img src={guide16}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide16">Nombre de série:</label>
  <input type="number" id="cardserGuide16"  value={serGuide16} name="serGuide16" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide16">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide16"  value={repGuide16} name="repGuide16" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>

</div>

<div className="row">


<div className="card m-2 col-md"  >
  <img src={guide17}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide17">Nombre de série:</label>
  <input type="number" id="cardserGuide17"  value={serGuide17} name="serGuide17" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide17">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide17"  value={repGuide17} name="repGuide17" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>



<div className="card m-2 col-md"  >
  <img src={guide18}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide18">Nombre de série:</label>
  <input type="number" id="cardserGuide18"  value={serGuide18} name="serGuide18" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide18">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide18"  value={repGuide18} name="repGuide18" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={guide20}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide20">Nombre de série:</label>
  <input type="number" id="cardserGuide20"  value={serGuide20} name="serGuide20" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide20">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide20"  value={repGuide20} name="repGuide20" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>

<div className="card m-2 col-md"  >
  <img src={guide21}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	  
	<label for="cardserGuide21">Nombre de série:</label>
  <input type="number" id="cardserGuide21"  value={serGuide21} name="serGuide21" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepGuide21">Nombre de répétion:</label>
    <input type="number" id="cardrepGuide21"  value={repGuide21} name="repGuide21" className="w-75 m-auto" onChange={inputValue}/>	

  </div>
</div>

</div>

<div className="d-flex justify-content-center m-5 exercice_all_button">
<button type="submit" class="btn btn-primary btn-lg m-2 btn_responsive_size">Enregistrer l'entrainement</button>
<button type="button" class="btn btn-secondary btn-lg m-2 btn_responsive_size"><Link to="/machine">Choisir d'autres éxercices</Link></button>
<a href="#" className="back_start"><Link to="/machine">Retour</Link></a>

</div>


</form>

</div>

	</div>
)


}

export default Guide;
