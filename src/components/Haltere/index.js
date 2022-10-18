import Header from '../Header';
import { Link } from 'react-router-dom';

import haltere1 from '../../assets/haltere1.gif';
import haltere2 from '../../assets/haltere2.gif';
import haltere3 from '../../assets/haltere3.gif';
import haltere4 from '../../assets/haltere4.gif';
import haltere5 from '../../assets/haltere5.gif';
import haltere6 from '../../assets/haltere6.gif';
import haltere7 from '../../assets/haltere7.gif';
import haltere8 from '../../assets/haltere8.gif';
import haltere9 from '../../assets/haltere9.gif';
import haltere10 from '../../assets/haltere10.gif';
import haltere11 from '../../assets/haltere11.gif';
import haltere12 from '../../assets/haltere12.gif';
import haltere13 from '../../assets/haltere13.gif';
import haltere14 from '../../assets/haltere14.gif';


const Haltere = ({repHaltere1, repHaltere2,repHaltere3, repHaltere4,repHaltere5, repHaltere6, repHaltere7,
	 repHaltere8, repHaltere9, repHaltere10, repHaltere11, repHaltere12, repHaltere13, repHaltere14, setRepHaltere1, setRepHaltere2, setRepHaltere3, 
	 setRepHaltere4, setRepHaltere5, setRepHaltere6, setRepHaltere7, setRepHaltere8, setRepHaltere9, setRepHaltere10, setRepHaltere12, setRepHaltere13,
	 setRepHaltere14, serHaltere1, serHaltere2, serHaltere3, serHaltere4, serHaltere5, serHaltere6, serHaltere7, serHaltere8, serHaltere9, serHaltere10,
	  serHaltere11, serHaltere12, serHaltere13, serHaltere14, setSerHaltere1, setSerHaltere2, setSerHaltere3, setSerHaltere4, setSerHaltere5, setSerHaltere6, 
	  setSerHaltere7, setSerHaltere8, setSerHaltere9, setSerHaltere10, setSerHaltere11, setSerHaltere12,
	  setSerHaltere13, setSerHaltere14,trainingSubmit, connexion, setConnexion
	 }) => {


		const inputValue = (event) => {

			const name = event.target.name;
	
			const value = event.target.value;
	
			switch (name) {
				case 'repHaltere1':
					setRepHaltere1(value)
				  break;
				  case 'repHaltere2':
					setRepHaltere2(value)
				  break;
				  case 'repHaltere3':
					setRepHaltere3(value)
				  break;
				  case 'repHaltere4':
					setRepHaltere4(value)
				  break;
				  case 'repHaltere5':
					setRepHaltere5(value)
				  break;
				  case 'repHaltere6':
					setRepHaltere6(value)
				  break;
				  case 'repHaltere7':
					setRepHaltere7(value)
				  break;
				  case 'repHaltere8':
					setRepHaltere8(value)
				  break;
				  case 'repHaltere9':
					setRepHaltere9(value)
				  break;
				  case 'repHaltere10':
					setRepHaltere10(value)
				  break;
				  case 'repHaltere11':
					setRepHaltere11(value)
				  break;
				  case 'repHaltere12':
					setRepHaltere12(value)
				  break;
				  case 'repHaltere13':
					setRepHaltere13(value)
				  break;
				  case 'repHaltere14':
					setRepHaltere14(value)
				  break;
				  case 'serHaltere1':
					setSerHaltere1(value)
					break;
				case 'serHaltere2':
					setSerHaltere2(value)
					break;
				case 'serHaltere3':
					setSerHaltere3(value)
					break;
				case 'serHaltere4':
					setSerHaltere4(value)
					break;
				case 'serHaltere5':
					setSerHaltere5(value)
					break;
				case 'serHaltere6':
					setSerHaltere6(value)
					break;
				case 'serHaltere7':
					setSerHaltere7(value)
					break;
				case 'serHaltere8':
					setSerHaltere8(value)
					break;
				case 'serHaltere9':
					setSerHaltere9(value)
					break;
				case 'serHaltere10':
					setSerHaltere10(value)
					break;
				case 'serHaltere11':
					setSerHaltere11(value)
					break;
				case 'serHaltere12':
					setSerHaltere12(value)
					break;
				case 'serHaltere13':
					setSerHaltere13(value)
					break;
				case 'serHaltere14':
					setSerHaltere14(value)
					break;
			
									default:
				  console.log('404');
			  }
			  
		}; 
return(
	<div className='haltere'>
<Header connexion={connexion}
setConnexion={setConnexion} />

<div class="container-fluid">

<form onSubmit={trainingSubmit}>

	<div className="row">
			<div className="card m-2 col-md"  >
  <img src={haltere1}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
	<label for="cardserHaltere1">Nombre de série:</label>
  <input type="number" id="cardserHaltere1" value={serHaltere1} name="serHaltere1"  className="w-75 m-auto" onChange={inputValue} />
 <label for="cardrepHaltere1">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere1"  value={repHaltere1} name="repHaltere1" className="w-75 m-auto" onChange={inputValue}/>

  </div>
</div>

<div className="card m-2 col-md"  >
  <img src={haltere2}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere2">Nombre de série:</label>
  <input type="number" id="cardserHaltere2"  value={serHaltere2} name="serHaltere2"  className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere2">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere2" value={repHaltere2} name="repHaltere2" className="w-75 m-auto" onChange={inputValue}/>

  </div>
</div>

<div className="card m-2 col-md"  >
  <img src={haltere3}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere3">Nombre de série:</label>
  <input type="number" id="cardserHaltere3"  value={serHaltere3} name="serHaltere3" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere3">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere3" value={repHaltere3} name="repHaltere3" className="w-75 m-auto" onChange={inputValue}/>
	
  </div>
</div>

<div className="card m-2 col-md"  >
  <img src={haltere4}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere4">Nombre de série:</label>
  <input type="number" id="cardserHaltere4" value={serHaltere4} name="serHaltere4" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere4">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere4" value={repHaltere4} name="repHaltere4" className="w-75 m-auto" onChange={inputValue}/>

  </div>
</div>

</div>

<div className="row">

<div className="card m-2 col-md"  >
  <img src={haltere5}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere5">Nombre de série:</label>
  <input type="number" id="cardserHaltere5" value={serHaltere5} name="serHaltere5" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardepHaltere5">Nombre de répétion:</label>
    <input type="number" id="cardepHaltere5" value={repHaltere5} name="repHaltere5" className="w-75 m-auto" onChange={inputValue}/>

  </div>
  </div>

<div className="card m-2 col-md"  >
  <img src={haltere6}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere6">Nombre de série:</label>
  <input type="number" id="cardserHaltere6" value={serHaltere6} name="serHaltere6" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere6">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere6" value={repHaltere6} name="repHaltere6" className="w-75 m-auto" onChange={inputValue}/>

   </div>
</div>

<div className="card m-2 col-md"  >
  <img src={haltere7}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere7">Nombre de série:</label>
  <input type="number" id="cardserHaltere7" value={serHaltere7} name="serHaltere7" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere7">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere7" value={repHaltere7} name="repHaltere7" className="w-75 m-auto" onChange={inputValue}/>

   </div>
</div>

<div className="card m-2 col-md"  >
  <img src={haltere8}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere8">Nombre de série:</label>
  <input type="number" id="cardserHaltere8" value={serHaltere8} name="serHaltere8" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere8">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere8" value={repHaltere8} name="repHaltere8" className="w-75 m-auto" onChange={inputValue}/>

  </div>
</div>

</div>
<div className="row">

<div className="card m-2 col-md"  >
  <img src={haltere9}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere9">Nombre de série:</label>
  <input type="number" id="cardserHaltere9" value={serHaltere9} name="serHaltere9" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere9">Nombre de répétion:</label>
    <input type="number" id="repHaltere9"  value={repHaltere9} name="repHaltere9" className="w-75 m-auto" onChange={inputValue}/>

  </div>
</div>

<div className="card m-2 col-md"  >
  <img src={haltere10}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere10">Nombre de série:</label>
  <input type="number" id="cardserHaltere10" value={serHaltere10} name="serHaltere10" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere10">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere10" value={repHaltere10} name="repHaltere10" className="w-75 m-auto" onChange={inputValue}/>

  </div>
</div>

<div className="card m-2 col-md"  >
  <img src={haltere11}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere11">Nombre de série:</label>
  <input type="number" id="cardserHaltere11" value={serHaltere11} name="serHaltere11" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere11">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere11" value={repHaltere11} name="repHaltere11" className="w-75 m-auto" onChange={inputValue}/>

  </div>
</div>

<div className="card m-2 col-md"  >
  <img src={haltere12}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere12">Nombre de série:</label>
  <input type="number" id="cardserHaltere12" value={serHaltere12} name="serHaltere12" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere12">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere12" value={repHaltere12} name="repHaltere12" className="w-75 m-auto" onChange={inputValue}/>

   </div>
</div>

</div>
<div className="row">

<div className="card m-2 col-md-3"  >
  <img src={haltere13}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere13">Nombre de série:</label>
  <input type="number" id="cardserHaltere13" value={serHaltere13} name="serHaltere13" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere13">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere13" value={repHaltere13} name="repHaltere13" className="w-75 m-auto" onChange={inputValue}/>

   </div>
</div>

<div className="card m-2 col-md-3"  >
  <img src={haltere14}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserHaltere14">Nombre de série:</label>
  <input type="number" id="cardserHaltere14" value={serHaltere14} name="serHaltere14" className="w-75 m-auto" onChange={inputValue}/>
  <label for="cardrepHaltere14">Nombre de répétion:</label>
    <input type="number" id="cardrepHaltere14" value={repHaltere14} name="repHaltere14" className="w-75 m-auto" onChange={inputValue}/>
	
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

export default Haltere;



