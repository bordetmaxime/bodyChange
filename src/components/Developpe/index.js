import Header from '../Header';
import { Link } from 'react-router-dom';

import dev1 from '../../assets/dev1.gif';
import dev2 from '../../assets/dev2.gif';
import dev3 from '../../assets/dev3.gif';
import dev4 from '../../assets/dev4.gif';
import dev5 from '../../assets/dev5.gif';
import dev6 from '../../assets/dev6.gif';
import dev7 from '../../assets/dev7.gif';
import dev8 from '../../assets/dev8.gif';
import dev9 from '../../assets/dev9.gif';
import dev10 from '../../assets/dev10.gif';
import dev11 from '../../assets/dev11.gif';
import dev12 from '../../assets/dev12.gif';
import dev13 from '../../assets/dev13.gif';
import dev14 from '../../assets/dev14.gif';
import dev15 from '../../assets/dev15.gif';
import dev16 from '../../assets/dev16.gif';
import dev17 from '../../assets/dev17.gif';
import dev18 from '../../assets/dev18.gif';
import dev19 from '../../assets/dev19.gif';
import dev20 from '../../assets/dev20.gif';
import dev21 from '../../assets/dev21.gif';
import dev22 from '../../assets/dev22.gif';
import dev23 from '../../assets/dev23.gif';
import dev24 from '../../assets/dev24.gif';


const Developpe = ({
repDev1, repDev2,repDev3, repDev4,repDev5, repDev6, repDev7, repDev8, repDev9, repDev10, repDev11, repDev12, repDev13, repDev14, repDev15, repDev16,
repDev17, repDev18, repDev19, repDev20, repDev21, repDev22, repDev23, repDev24, setRepDev1, setRepDev2, setRepDev3, setRepDev4, setRepDev5,
setRepDev6, setRepDev7, setRepDev8, setRepDev9, setRepDev10, setRepDev12, setRepDev13, setRepDev14, setRepDev16, setRepDev17, setRepDev18, setRepDev19,
setRepDev20, setRepDev21, setRepDev22, setRepDev23, setRepDev24, serDev1, serDev2, serDev3, serDev4, serDev5, serDev6, serDev7, serDev8, serDev9, 
serDev10, serDev11, serDev12, serDev13, serDev14, serDev15, serDev16, serDev17, serDev18, serDev19, serDev20, serDev21, serDev22, serDev23, serDev24,
setSerDev1, setSerDev2, setSerDev3, setSerDev4, setSerDev5, setSerDev6, setSerDev7, setSerDev8, setSerDev9, setSerDev10, setSerDev11, setSerDev12,
setSerDev13, setSerDev14, setSerDev16, setSerDev17, setSerDev18, setSerDev19, setSerDev21, setSerDev22, setSerDev23, setSerDev24, 
trainingSubmit, connexion, setConnexion
}) => {


	const inputValue = (event) => {

		const name = event.target.name;

		const value = event.target.value;

		switch (name) {
			case 'repDev1':
				setRepDev1(value)
			  break;
			  case 'repDev2':
				setRepDev2(value)
			  break;
			  case 'repDev3':
				setRepDev3(value)
			  break;
			  case 'repDev4':
				setRepDev4(value)
			  break;
			  case 'repDev5':
				setRepDev5(value)
			  break;
			  case 'repDev6':
				setRepDev6(value)
			  break;
			  case 'repDev7':
				setRepDev7(value)
			  break;
			  case 'repDev8':
				setRepDev8(value)
			  break;
			  case 'repDev9':
				setRepDev9(value)
			  break;
			  case 'repDev10':
				setRepDev10(value)
			  break;
			  case 'repDev11':
				setRepDev11(value)
			  break;
			  case 'repDev12':
				setRepDev12(value)
			  break;
			  case 'repDev13':
				setRepDev13(value)

			  break;
			  case 'repDev14':
				setRepDev14(value)
			  break;
			  case 'repDev15':
				setRepDev15(value)
			  break;
			  case 'repDev16':
				setRepDev16(value)
			  break;
			  case 'repDev17':
				setRepDev17(value)
			  break;
			  case 'repDev18':
				setRepDev18(value)
			  break;
			  case 'repDev19':
				setRepDev19(value)
			  break;
			  case 'repDev20':
				setRepDev20(value)
			  break;
			  case 'repDev21':
				setRepDev21(value)
			  break;
			  case 'repDev22':
				setRepDev22(value)
			  break;
			  case 'repDev23':
				setRepDev23(value)
			  break;
			  case 'repDev24':
				setRepDev24(value)
			  break;
			  case 'serDev1':
				setSerDev1(value)
				break;
			case 'serDev2':
				setSerDev2(value)
				break;
			case 'serDev3':
				setSerDev3(value)
				break;
			case 'serDev4':
				setSerDev4(value)
				break;
			case 'serDev5':
				setSerDev5(value)
				break;
		    case 'serDev6':
				setSerDev6(value)
				break;
			case 'serDev7':
				setSerDev7(value)
				break;
			case 'serDev8':
				setSerDev8(value)
				break;
			case 'serDev9':
				setSerDev9(value)
				break;
			case 'serDev10':
				setSerDev10(value)
				break;
			case 'serDev11':
				setSerDev11(value)
				break;
			case 'serDev12':
				setSerDev12(value)
				break;
			case 'serDev13':
				setSerDev13(value)
				break;
			case 'serDev14':
				setSerDev14(value)
				break;
			case 'serDev15':
				setSerDev15(value)
				break;
			case 'serDev16':
				setSerDev16(value)
				break;
			case 'serDev17':
				setSerDev17(value)
				break;
			case 'serDev18':
				setSerDev18(value)
				break;
			case 'serDev19':
				setSerDev19(value)
				break;
			case 'serDev20':
				setSerDev20(value)
				break;
			case 'serDev21':
				setSerDev21(value)
				break;
			case 'serDev22':
				setSerDev22(value)
				break;
			case 'serDev23':
				setSerDev23(value)
				break;
			case 'serDev24':
				setSerDev24(value)
				break;
		
								default:
			  console.log('404');
		  }
		  
	}; 

	return(

	<div className='developpe'>
<Header connexion={connexion}
setConnexion={setConnexion}/>

<div class="container-fluid">

<form onSubmit={trainingSubmit}>

	<div className="row">

			<div className="card m-2 col-md"  >
  <img src={dev1}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev1">nombre de série:</label>
  <input type="number" id="cardserDev1"  value={serDev1} name="serDev1" className="w-75 m-auto" onChange={ inputValue }/>

  <label for="cardrepDev1">nombre de répétion:</label>
    <input type="number" id="cardrepDev1" value={repDev1} name="repDev1" className="w-75 m-auto" onChange={ inputValue }/>
  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev2}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
<label for="cardserDev2">nombre de série:</label>
  <input type="number" id="cardserDev2" value={serDev2} name="serDev2" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev2">nombre de répétion:</label>
    <input type="number" id="cardrepDev2" value={repDev2} name="repDev2" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev3}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev3">nombre de série:</label>
  <input type="number" id="cardserDev3" value={serDev3} name="serDev3" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev3">nombre de répétion:</label>
    <input type="number" id="cardrepDev3" value={repDev3} name="repDev3" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev4}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
 
	<label for="cardserDev4">nombre de série:</label>
  <input type="number" id="cardserDev4"  value={serDev4} name="serDev4" className="w-75 m-auto" onChange={ inputValue }/>
 <label for="cardrepDev4">nombre de répétion:</label>
    <input type="number" id="cardrepDev4" value={repDev4} name="repDev4" className="w-75 m-auto" onChange={ inputValue }/>
 
  </div>
</div>

</div>

<div className="row">

<div className="card m-2 col-md"  >
  <img src={dev5}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev5">nombre de série:</label>
  <input type="number" id="cardserDev5"  value={serDev5} name="serDev5" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev5">nombre de répétion:</label>
    <input type="number" id="cardrepDev5" value={repDev5} name="repDev5" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
  </div>


  <div className="card m-2 col-md"  >
  <img src={dev6}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
 
	<label for="cardserDev6">nombre de série:</label>
  <input type="number" id="cardserDev6"  value={serDev6} name="serDev6"  className="w-75 m-auto" onChange={ inputValue }/>
 <label for="cardrepDev6">nombre de répétion:</label>
    <input type="number" id="cardrepDev6" value={repDev6} name="repDev6" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev7}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">
  
	<label for="cardserDev7">nombre de série:</label>
  <input type="number" id="cardserDev7" value={serDev7} name="serDev7" className="w-75 m-auto" onChange={ inputValue }/>
<label for="cardrepDev7">nombre de répétion:</label>
    <input type="number" id="cardrepDev7"  value={repDev7} name="repDev7" className="w-75 m-auto" onChange={ inputValue }/>
 
  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev8}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev8">nombre de série:</label>
  <input type="number" id="cardserDev8" value={serDev8} name="serDev8" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev8">nombre de répétion:</label>
    <input type="number" id="cardrepDev8"  value={repDev8} name="repDev8" className="w-75 m-auto" onChange={ inputValue } />

  </div>
</div>

</div>

<div className="row">


<div className="card m-2 col-md"  >
  <img src={dev9}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev9">nombre de série:</label>
  <input type="number" id="cardserDev9" value={serDev9} name="serDev9" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev9">nombre de répétion:</label>
    <input type="number" id="cardrepDev9"  value={repDev9} name="repDev9" className="w-75 m-auto" onChange={ inputValue }/>
 
  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev10}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev10">nombre de série:</label>
  <input type="number" id="cardserDev10"  value={serDev10} name="serDev10" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev10">nombre de répétion:</label>
    <input type="number" id="cardrepDev10" value={repDev10} name="repDev10" className="w-75 m-auto" onChange={ inputValue }/>
 
  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev11}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev11">nombre de série:</label>
  <input type="number" id="cardserDev11"  value={serDev11} name="serDev11" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev11">nombre de répétion:</label>
    <input type="number" id="cardrepDev11" value={repDev11} name="repDev11" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev12}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev12">nombre de série:</label>
  <input type="number" id="cardserDev12" value={serDev12} name="serDev12" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev12">nombre de répétion:</label>
    <input type="number" id="cardrepDev12" value={repDev12} name="repDev12" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


</div>

<div className="row">


<div className="card m-2 col-md"  >
  <img src={dev13}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev13">nombre de série:</label>
  <input type="number" id="cardserDev13" value={serDev13} name="serDev13" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev13">nombre de répétion:</label>
    <input type="number" id="cardrepDev13" value={repDev13} name="repDev13" className="w-75 m-auto" onChange={ inputValue }/>
 
  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev14}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev14">nombre de série:</label>
  <input type="number" id="cardserDev14" value={serDev14} name="serDev14" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev14">nombre de répétion:</label>
    <input type="number" id="cardrepDev14" value={repDev14} name="repDev14" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev15}  className="card-img-top" alt="..." />
  <div className="card-body input_bloc_center">
  
	<label for="cardserDev15">nombre de série:</label>
  <input type="number" id="cardserDev15" value={serDev15} name="serDev15" className="w-75 m-auto" onChange={ inputValue }/>
<label for="cardrepDev15">nombre de répétion:</label>
    <input type="number" id="cardrepDev15"  value={repDev15} name="repDev15" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev16}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev16">nombre de série:</label>
  <input type="number" id="cardserDev16"  value={serDev16} name="serDev16" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev16">nombre de répétion:</label>
    <input type="number" id="cardrepDev16" value={repDev16} name="repDev16" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>

</div>

<div className="row">


<div className="card m-2 col-md"  >
  <img src={dev17}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev17">nombre de série:</label>
  <input type="number" id="cardserDev17" value={serDev17} name="serDev17" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev17">nombre de répétion:</label>
    <input type="number" id="cardrepDev17" value={repDev17} name="repDev17" className="w-75 m-auto" onChange={ inputValue }/>
 
  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev18}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev18">nombre de série:</label>
  <input type="number" id="cardserDev18" value={serDev18} name="serDev18" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev18">nombre de répétion:</label>
    <input type="number" id="cardrepDev18"  value={repDev18} name="repDev18" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev19}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev19">nombre de série:</label>
  <input type="number" id="cardserDev19"  value={serDev19} name="serDev19"  className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev19">nombre de répétion:</label>
    <input type="number" id="cardrepDev19" value={repDev19} name="repDev19" className="w-75 m-auto" onChange={ inputValue }/>
 
  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev20}  className="card-img-top" alt="..." />
  <div className="card-body input_bloc_center">
  
	<label for="cardserDev20">nombre de série:</label>
  <input type="number" id="cardserDev20"  value={serDev20} name="serDev20" className="w-75 m-auto" onChange={ inputValue }/>
<label for="cardrepDev20">nombre de répétion:</label>
    <input type="number" id="cardrepDev20"  value={repDev20} name="repDev20" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>

</div>

<div className="row">

<div className="card m-2 col-md"  >
  <img src={dev21}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev21">nombre de série:</label>
  <input type="number" id="cardserDev21" value={serDev21} name="serDev21" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev21">nombre de répétion:</label>
    <input type="number" id="cardrepDev21" value={repDev21} name="repDev21" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev22}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev22">nombre de série:</label>
  <input type="number" id="cardserDev22" value={serDev22} name="serDev22"  className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev22">nombre de répétion:</label>
    <input type="number" id="cardrepDev22" value={repDev22} name="repDev22" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev23}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">

	<label for="cardserDev23">nombre de série:</label>
  <input type="number" id="cardserDev23" value={serDev23} name="serDev23" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev23">nombre de répétion:</label>
    <input type="number" id="cardrepDev23"  value={repDev23} name="repDev23" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>


<div className="card m-2 col-md"  >
  <img src={dev24}  className="card-img-top" alt="..."/>
  <div className="card-body input_bloc_center">


	<label for="cardserDev24">nombre de série:</label>
  <input type="number" id="cardserDev24"  value={serDev24} name="serDev24" className="w-75 m-auto" onChange={ inputValue }/>
  <label for="cardrepDev24">nombre de répétion:</label>
    <input type="number" id="cardrepDev24" value={repDev24} name="repDev24" className="w-75 m-auto" onChange={ inputValue }/>

  </div>
</div>

</div>

<div className="d-flex justify-content-center m-5 exercice_all_button">

<button type="submit" class="btn btn-primary btn-lg m-2">Enregistrer l'entrainement</button>
<button type="button" class="btn btn-secondary btn-lg m-2"><Link to="/machine">Choisir d'autres éxercices</Link></button>

</div>

</form>

	</div>
	</div>
	)

}

export default Developpe;
