// == Import
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

import Home from '../Home';
import Start from '../Start';
import Machine from '../Machine';
import Squat from '../Squat';
import Developpe from '../Developpe';
import Haltere from '../Haltere';
import Guide from '../Guide';
import Training from '../Training';
import Registration from '../Registration';
import Connexion from '../Connexion';
import Menu from '../Menu';
import NotFound from '../NotFound';





// == Composant
const App = () => {

	const navigate = useNavigate();



	const [firstname, setfirstname] = useState('')
	const [lastname, setlastname] = useState('')
	const [password, setpassword] = useState('')
	const [email, setemail] = useState('')
	const [connexion, setConnexion] = useState(false)
	const [adminid, setadminid] = useState()
	const [fullTraining, setfullTraining] = useState('')
	const [deleteTraining, setDeleteTraining] = useState()
	

	const [ squat, setSquat] = useState(false);
	const [ developpe, setDeveloppe] = useState(false);
	const [ guide, setGuide] = useState(false);
	const [ haltere, setHaltere] = useState(false);


	const [repSquat1, setRepSquat1] = useState();
	const [repSquat2, setRepSquat2] = useState();
	const [repSquat3, setRepSquat3] = useState();
	const [repSquat4, setRepSquat4] = useState();
	const [repSquat5, setRepSquat5] = useState();
	const [repSquat6, setRepSquat6] = useState();
	const [repSquat7, setRepSquat7] = useState();
	const [repSquat8, setRepSquat8] = useState();
	const [repSquat9, setRepSquat9] = useState();
	const [repSquat10, setRepSquat10] = useState();

	const [serSquat1, setSerSquat1] = useState()
	const [serSquat2, setSerSquat2] = useState()
	const [serSquat3, setSerSquat3] = useState()
	const [serSquat4, setSerSquat4] = useState()
	const [serSquat5, setSerSquat5] = useState()
	const [serSquat6, setSerSquat6] = useState()
	const [serSquat7, setSerSquat7] = useState()
	const [serSquat8, setSerSquat8] = useState()
	const [serSquat9, setSerSquat9] = useState()
	const [serSquat10, setSerSquat10] = useState()


	const [repDev1, setRepDev1] = useState();
	const [repDev2, setRepDev2] = useState();
	const [repDev3, setRepDev3] = useState();
	const [repDev4, setRepDev4] = useState();
	const [repDev5, setRepDev5] = useState();
	const [repDev6, setRepDev6] = useState();
	const [repDev7, setRepDev7] = useState();
	const [repDev8, setRepDev8] = useState();
	const [repDev9, setRepDev9] = useState();
	const [repDev10, setRepDev10] = useState();
	const [repDev11, setRepDev11] = useState();
	const [repDev12, setRepDev12] = useState();
	const [repDev13, setRepDev13] = useState();
	const [repDev14, setRepDev14] = useState();
	const [repDev15, setRepDev15] = useState();
	const [repDev16, setRepDev16] = useState();
	const [repDev17, setRepDev17] = useState();
	const [repDev18, setRepDev18] = useState();
	const [repDev19, setRepDev19] = useState();
	const [repDev20, setRepDev20] = useState();
	const [repDev21, setRepDev21] = useState();
	const [repDev22, setRepDev22] = useState();
	const [repDev23, setRepDev23] = useState();
	const [repDev24, setRepDev24] = useState();


	const [serDev1, setSerDev1] = useState()
	const [serDev2, setSerDev2] = useState()
	const [serDev3, setSerDev3] = useState()
	const [serDev4, setSerDev4] = useState()
	const [serDev5, setSerDev5] = useState()
	const [serDev6, setSerDev6] = useState()
	const [serDev7, setSerDev7] = useState()
	const [serDev8, setSerDev8] = useState()
	const [serDev9, setSerDev9] = useState()
	const [serDev10, setSerDev10] = useState()
	const [serDev11, setSerDev11] = useState()
	const [serDev12, setSerDev12] = useState()
	const [serDev13, setSerDev13] = useState()
	const [serDev14, setSerDev14] = useState()
	const [serDev15, setSerDev15] = useState()
	const [serDev16, setSerDev16] = useState()
	const [serDev17, setSerDev17] = useState()
	const [serDev18, setSerDev18] = useState()
	const [serDev19, setSerDev19] = useState()
	const [serDev20, setSerDev20] = useState()
	const [serDev21, setSerDev21] = useState()
	const [serDev22, setSerDev22] = useState()
	const [serDev23, setSerDev23] = useState()
	const [serDev24, setSerDev24] = useState()


	const [repHaltere1, setRepHaltere1] = useState();
	const [repHaltere2, setRepHaltere2] = useState();
	const [repHaltere3, setRepHaltere3] = useState();
	const [repHaltere4, setRepHaltere4] = useState();
	const [repHaltere5, setRepHaltere5] = useState();
	const [repHaltere6, setRepHaltere6] = useState();
	const [repHaltere7, setRepHaltere7] = useState();
	const [repHaltere8, setRepHaltere8] = useState();
	const [repHaltere9, setRepHaltere9] = useState();
	const [repHaltere10, setRepHaltere10] = useState();
	const [repHaltere11, setRepHaltere11] = useState();
	const [repHaltere12, setRepHaltere12] = useState();
	const [repHaltere13, setRepHaltere13] = useState();
	const [repHaltere14, setRepHaltere14] = useState();

	const [serHaltere1, setSerHaltere1] = useState()
	const [serHaltere2, setSerHaltere2] = useState()
	const [serHaltere3, setSerHaltere3] = useState()
	const [serHaltere4, setSerHaltere4] = useState()
	const [serHaltere5, setSerHaltere5] = useState()
	const [serHaltere6, setSerHaltere6] = useState()
	const [serHaltere7, setSerHaltere7] = useState()
	const [serHaltere8, setSerHaltere8] = useState()
	const [serHaltere9, setSerHaltere9] = useState()
	const [serHaltere10, setSerHaltere10] = useState()
	const [serHaltere11, setSerHaltere11] = useState()
	const [serHaltere12, setSerHaltere12] = useState()
	const [serHaltere13, setSerHaltere13] = useState()
	const [serHaltere14, setSerHaltere14] = useState()

const [repGuide1, setRepGuide1] = useState();
const [repGuide2, setRepGuide2] = useState();
const [repGuide3, setRepGuide3] = useState();
const [repGuide4, setRepGuide4] = useState();
const [repGuide5, setRepGuide5] = useState();
const [repGuide6, setRepGuide6] = useState();
const [repGuide7, setRepGuide7] = useState();
const [repGuide8, setRepGuide8] = useState();
const [repGuide9, setRepGuide9] = useState();
const [repGuide10, setRepGuide10] = useState();
const [repGuide11, setRepGuide11] = useState();
const [repGuide12, setRepGuide12] = useState();
const [repGuide13, setRepGuide13] = useState();
const [repGuide14, setRepGuide14] = useState();
const [repGuide15, setRepGuide15] = useState();
const [repGuide16, setRepGuide16] = useState();
const [repGuide17, setRepGuide17] = useState();
const [repGuide18, setRepGuide18] = useState();
const [repGuide20, setRepGuide20] = useState();
const [repGuide21, setRepGuide21] = useState();


const [serGuide1, setSerGuide1] = useState()
const [serGuide2, setSerGuide2] = useState()
const [serGuide3, setSerGuide3] = useState()
const [serGuide4, setSerGuide4] = useState()
const [serGuide5, setSerGuide5] = useState()
const [serGuide6, setSerGuide6] = useState()
const [serGuide7, setSerGuide7] = useState()
const [serGuide8, setSerGuide8] = useState()
const [serGuide9, setSerGuide9] = useState()
const [serGuide10, setSerGuide10] = useState()
const [serGuide11, setSerGuide11] = useState()
const [serGuide12, setSerGuide12] = useState()
const [serGuide13, setSerGuide13] = useState()
const [serGuide14, setSerGuide14] = useState()
const [serGuide15, setSerGuide15] = useState()
const [serGuide16, setSerGuide16] = useState()
const [serGuide17, setSerGuide17] = useState()
const [serGuide18, setSerGuide18] = useState()
const [serGuide20, setSerGuide20] = useState()
const [serGuide21, setSerGuide21] = useState()

// fonction formulaire

const trainingSubmit = (event) => {
	event.preventDefault()
trainingPost()
	};

const inscriptionSubmit = (event) => {
event.preventDefault()
register()	
};

const connexionSubmit = (event) => {
	event.preventDefault();
	login();
};

// req axios

const register = async () => {
	await axios.post('http://localhost:5000/admin', {
		firstname,
		lastname,		
		email,
		password,

	}).then(response => {
		navigate('/connexion');
	})
.catch(error => {

});
};
useEffect(() => {
getTraining()
  });


const getTraining = async () => {
await axios.get(`http://localhost:5000/training/${adminid}`).then(response => {
setfullTraining(response.data)
		
	})
	// Cas d'erreur
		.catch(error => {
			console.error(error);
			
		});
  
};

const deleteOneTraining = async () => {
	await axios.delete(`http://localhost:5000/training/${deleteTraining}`)
	.then(response => {
     navigate(`/training/${adminid}`)
	})
	// Cas d'erreur
		.catch(error => {
			console.error(error);
			
		});
  
};





const login = async () => {
	await axios.post('http://localhost:5000/admin/user', {
		email,
		password,

	}).then(response => {
			
		setConnexion(true);
		setpassword('');
		setadminid(response.data.admin_id)
	    getTraining()
		navigate('/menu')
		
	})
	// Cas d'erreur
		.catch(error => {
			console.error(error);
			
		});
  
};


const trainingPost = async () => {
	await axios.post('http://localhost:5000/training', {
	adminid,

	repDev1, repDev2,repDev3, repDev4,repDev5, repDev6, repDev7, repDev8, repDev9, repDev10, repDev11, repDev12, repDev13, repDev14, repDev15, repDev16,
    repDev17, repDev18, repDev19, repDev20, repDev21, repDev22, repDev23, repDev24,

	serDev1, serDev2, serDev3, serDev4, serDev5, serDev6, serDev7, serDev8, serDev9, serDev10, serDev11, serDev12, serDev13, serDev14, serDev15, serDev16,
	serDev17, serDev18, serDev19, serDev20, serDev21, serDev22, serDev23, serDev24,

	repGuide1, repGuide2,repGuide3, repGuide4,repGuide5, repGuide6, repGuide7, repGuide8, repGuide9, repGuide10, repGuide11, repGuide12, repGuide13, repGuide14,
	repGuide15, repGuide16, repGuide17, repGuide18, repGuide20, repGuide21,

	serGuide1, serGuide2, serGuide3, serGuide4, serGuide5, serGuide6, serGuide7, serGuide8, serGuide9, 
	serGuide10, serGuide11, serGuide12, serGuide13, serGuide14, serGuide15, serGuide16, serGuide17, serGuide18, serGuide20, serGuide21,

	repHaltere1, repHaltere2,repHaltere3, repHaltere4,repHaltere5, repHaltere6, repHaltere7, repHaltere8, repHaltere9, repHaltere10, repHaltere11, repHaltere12,
	repHaltere13, repHaltere14,

	serHaltere1, serHaltere2, serHaltere3, serHaltere4, serHaltere5, serHaltere6, serHaltere7, serHaltere8, serHaltere9, serHaltere10, serHaltere11, serHaltere12, serHaltere13, serHaltere14,

	repSquat1, repSquat2, repSquat3, repSquat4, repSquat5, repSquat6, repSquat7, repSquat8, repSquat9, repSquat10,

	serSquat1, serSquat2, serSquat3, serSquat4, serSquat5, serSquat6, serSquat7, serSquat8, serSquat9, serSquat10,

	}).then(response => {
			
		setConnexion(true);
		setpassword('');
		navigate(`/training/${adminid}`);

		
	})
	// Cas d'erreur
		.catch(error => {
			console.error(error);
			
		});
  
};

	const changeState = (event) =>{
		const machine = event.target.value;
		
		switch(machine){
		case 'squat':
			setSquat(true)
			break;
		case 'developpe':
			setDeveloppe(true)
			break;
		case 'guide':
			setGuide(true)
			break;
			case 'haltere':
			setHaltere(true)
			break;
		default:
			console.log("404")
		}
	};

	

	return (
		<div className="app">
{

	connexion ? 




			 <Routes>

			 <Route path="/start" element={

		       <Start 
				changeState={changeState}			
				
				/> } />


<Route path="/menu" element={ <Menu

adminid ={adminid}
fullTraining={fullTraining}
connexion={connexion}
setConnexion={setConnexion}

/>}/>


<Route path="/machine" element={ <Machine

  squat={squat}
  connexion={connexion}
  setConnexion={setConnexion}
  developpe={developpe}
  guide={guide}
  haltere={haltere}


/>}/>

<Route path="/squat" element={ <Squat

adminid={adminid}

repSquat1={repSquat1}
repSquat2={repSquat2}
repSquat3={repSquat3}
repSquat4={repSquat4}
repSquat5={repSquat5}
repSquat6={repSquat6}
repSquat7={repSquat7}
repSquat8={repSquat8}
repSquat9={repSquat9}
repSquat10={repSquat10}

setRepSquat1={setRepSquat1}
setRepSquat2={setRepSquat2}
setRepSquat3={setRepSquat3}
setRepSquat4={setRepSquat4}
setRepSquat5={setRepSquat5}
setRepSquat6={setRepSquat6}
setRepSquat7={setRepSquat7}
setRepSquat8={setRepSquat8}
setRepSquat9={setRepSquat9}
setRepSquat10={setRepSquat10}

serSquat1={serSquat1}
serSquat2={serSquat2}
serSquat3={serSquat3}
serSquat4={serSquat4}
serSquat5={serSquat5}
serSquat6={serSquat6}
serSquat7={serSquat7}
serSquat8={serSquat8}
serSquat9={serSquat9}
serSquat10={serSquat10}

setSerSquat1={setSerSquat1}
setSerSquat2={setSerSquat2}
setSerSquat3={setSerSquat3}
setSerSquat4={setSerSquat4}
setSerSquat5={setSerSquat5}
setSerSquat6={setSerSquat6}
setSerSquat7={setSerSquat7}
setSerSquat8={setSerSquat8}
setSerSquat9={setSerSquat9}
setSerSquat10={setSerSquat10}


connexion={connexion}
setConnexion={setConnexion}
trainingSubmit={trainingSubmit}

/>}/>

<Route path="/developpe" element={ <Developpe

repDev22={repDev22}
repDev23={repDev23}
repDev24={repDev24}
repDev24={repDev24}


setRepDev1={setRepDev1}
setRepDev2={setRepDev2}
setRepDev3={setRepDev3}
setRepDev4={setRepDev4}
setRepDev5={setRepDev5}
setRepDev6={setRepDev6}
setRepDev7={setRepDev7}
setRepDev8={setRepDev8}
setRepDev9={setRepDev9}
setRepDev10={setRepDev10}
setRepDev11={setRepDev11}
setRepDev12={setRepDev12}
setRepDev13={setRepDev13}
setRepDev14={setRepDev14}
setRepDev15={setRepDev15}
setRepDev16={setRepDev16}
setRepDev17={setRepDev17}
setRepDev18={setRepDev18}
setRepDev19={setRepDev19}
setRepDev20={setRepDev20}
setRepDev21={setRepDev21}
setRepDev22={setRepDev22}
setRepDev23={setRepDev23}
setRepDev24={setRepDev24}


serDev1={serDev1}
serDev2={serDev2}
serDev3={serDev3}
serDev4={serDev4}
serDev5={serDev5}
serDev6={serDev6}
serDev7={serDev7}
serDev8={serDev8}
serDev9={serDev9}
serDev10={serDev10}
serDev11={serDev11}
serDev12={serDev12}
serDev13={serDev13}
serDev14={serDev14}
serDev15={serDev15}
serDev16={serDev16}
serDev17={serDev17}
serDev18={serDev18}
serDev19={serDev19}
serDev20={serDev20}
serDev21={serDev21}
serDev22={serDev22}
serDev23={serDev23}
serDev24={serDev24}


setSerDev1={setSerDev1}
setSerDev2={setSerDev2}
setSerDev3={setSerDev3}
setSerDev4={setSerDev4}
setSerDev5={setSerDev5}
setSerDev6={setSerDev6}
setSerDev7={setSerDev7}
setSerDev8={setSerDev8}
setSerDev9={setSerDev9}
setSerDev10={setSerDev10}
setSerDev11={setSerDev11}
setSerDev12={setSerDev12}
setSerDev13={setSerDev13}
setSerDev14={setSerDev14}
setSerDev15={setSerDev15}
setSerDev16={setSerDev16}
setSerDev17={setSerDev17}
setSerDev18={setSerDev18}
setSerDev19={setSerDev19}
setSerDev20={setSerDev20}
setSerDev21={setSerDev21}
setSerDev22={setSerDev22}
setSerDev23={setSerDev23}
setSerDev24={setSerDev24}

trainingSubmit={trainingSubmit}
connexion={connexion}
setConnexion={setConnexion}




/> } />




<Route path="/guide" element={ <Guide
repGuide1={repGuide1}
repGuide2={repGuide2}
repGuide3={repGuide3}
repGuide4={repGuide4}
repGuide5={repGuide5}
repGuide6={repGuide6}
repGuide7={repGuide7}
repGuide8={repGuide8}
repGuide9={repGuide9}
repGuide10={repGuide10}
repGuide11={repGuide11}
repGuide12={repGuide12}
repGuide13={repGuide13}
repGuide14={repGuide14}
repGuide15={repGuide15}
repGuide16={repGuide16}
repGuide17={repGuide17}
repGuide18={repGuide18}
repGuide20={repGuide20}
repGuide21={repGuide21}


setRepGuide1={setRepGuide1}
setRepGuide2={setRepGuide2}
setRepGuide3={setRepGuide3}
setRepGuide4={setRepGuide4}
setRepGuide5={setRepGuide5}
setRepGuide6={setRepGuide6}
setRepGuide7={setRepGuide7}
setRepGuide8={setRepGuide8}
setRepGuide9={setRepGuide9}
setRepGuide10={setRepGuide10}
setRepGuide11={setRepGuide11}
setRepGuide12={setRepGuide12}
setRepGuide13={setRepGuide13}
setRepGuide14={setRepGuide14}
setRepGuide15={setRepGuide15}
setRepGuide16={setRepGuide16}
setRepGuide17={setRepGuide17}
setRepGuide18={setRepGuide18}
setRepGuide20={setRepGuide20}
setRepGuide21={setRepGuide21}


serGuide1={serGuide1}
serGuide2={serGuide2}
serGuide3={serGuide3}
serGuide4={serGuide4}
serGuide5={serGuide5}
serGuide6={serGuide6}
serGuide7={serGuide7}
serGuide8={serGuide8}
serGuide9={serGuide9}
serGuide10={serGuide10}
serGuide11={serGuide11}
serGuide12={serGuide12}
serGuide13={serGuide13}
serGuide14={serGuide14}
serGuide15={serGuide15}
serGuide16={serGuide16}
serGuide17={serGuide17}
serGuide18={serGuide18}
serGuide20={serGuide20}
serGuide21={serGuide21}


setSerGuide1={setSerGuide1}
setSerGuide2={setSerGuide2}
setSerGuide3={setSerGuide3}
setSerGuide4={setSerGuide4}
setSerGuide5={setSerGuide5}
setSerGuide6={setSerGuide6}
setSerGuide7={setSerGuide7}
setSerGuide8={setSerGuide8}
setSerGuide9={setSerGuide9}
setSerGuide10={setSerGuide10}
setSerGuide11={setSerGuide11}
setSerGuide12={setSerGuide12}
setSerGuide13={setSerGuide13}
setSerGuide14={setSerGuide14}
setSerGuide15={setSerGuide15}
setSerGuide16={setSerGuide16}
setSerGuide17={setSerGuide17}
setSerGuide18={setSerGuide18}
setSerGuide20={setSerGuide20}
setSerGuide21={setSerGuide21}

trainingSubmit={trainingSubmit}
connexion={connexion}
setConnexion={setConnexion}


/> } />

<Route path="/haltere" element={ <Haltere


repHaltere1={repHaltere1}
repHaltere2={repHaltere2}
repHaltere3={repHaltere3}
repHaltere4={repHaltere4}
repHaltere5={repHaltere5}
repHaltere6={repHaltere6}
repHaltere7={repHaltere7}
repHaltere8={repHaltere8}
repHaltere9={repHaltere9}
repHaltere10={repHaltere10}
repHaltere11={repHaltere11}
repHaltere12={repHaltere12}
repHaltere13={repHaltere13}
repHaltere14={repHaltere14}

setRepHaltere1={setRepHaltere1}
setRepHaltere2={setRepHaltere2}
setRepHaltere3={setRepHaltere3}
setRepHaltere4={setRepHaltere4}
setRepHaltere5={setRepHaltere5}
setRepHaltere6={setRepHaltere6}
setRepHaltere7={setRepHaltere7}
setRepHaltere8={setRepHaltere8}
setRepHaltere9={setRepHaltere9}
setRepHaltere10={setRepHaltere10}
setRepHaltere11={setRepHaltere11}
setRepHaltere12={setRepHaltere12}
setRepHaltere13={setRepHaltere13}
setRepHaltere14={setRepHaltere14}

serHaltere1={serHaltere1}
serHaltere2={serHaltere2}
serHaltere3={serHaltere3}
serHaltere4={serHaltere4}
serHaltere5={serHaltere5}
serHaltere6={serHaltere6}
serHaltere7={serHaltere7}
serHaltere8={serHaltere8}
serHaltere9={serHaltere9}
serHaltere10={serHaltere10}
serHaltere11={serHaltere11}
serHaltere12={serHaltere12}
serHaltere13={serHaltere13}
serHaltere14={serHaltere14}

setSerHaltere1={setSerHaltere1}
setSerHaltere2={setSerHaltere2}
setSerHaltere3={setSerHaltere3}
setSerHaltere4={setSerHaltere4}
setSerHaltere5={setSerHaltere5}
setSerHaltere6={setSerHaltere6}
setSerHaltere7={setSerHaltere7}
setSerHaltere8={setSerHaltere8}
setSerHaltere9={setSerHaltere9}
setSerHaltere10={setSerHaltere10}
setSerHaltere11={setSerHaltere11}
setSerHaltere12={setSerHaltere12}
setSerHaltere13={setSerHaltere13}
setSerHaltere14={setSerHaltere14}

trainingSubmit={trainingSubmit}
connexion={connexion}
setConnexion={setConnexion}



/> } />




<Route path="/training/:id" element={ <Training

fullTraining={fullTraining}
getTraining={getTraining}
adminid={adminid}
connexion={connexion}
setConnexion={setConnexion}

setDeleteTraining={setDeleteTraining}
deleteOneTraining={deleteOneTraining}

/> } />

			 </Routes>

			 :
<Routes>
			 <Route path="/" element={ <Home /> } />
			 <Route path="/registration" element={ <Registration 

firstname ={firstname}
lastname={lastname}
email={email}
password={password}

setfirstname={setfirstname}
setlastname={setlastname}
setemail={setemail}
setpassword={setpassword}

inscriptionSubmit ={inscriptionSubmit}/>} />

<Route path="/connexion" element={ <Connexion

email={email}
password={password}
setemail={setemail}
setpassword={setpassword}
connexionSubmit={connexionSubmit}



/>} />

<Route path="*" element={ <NotFound /> } />

</Routes>
}

			

		
		</div>
	);
};

// == Export
export default App;
