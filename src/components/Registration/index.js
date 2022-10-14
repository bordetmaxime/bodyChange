import Header from '../Header';
import './styles.scss';
1
const Registration = ({lastname, firstname, email, password, setlastname, setfirstname, setpassword, setemail, inscriptionSubmit}) => {

	const inputValue = (event) => {


		switch (event.target.name) {

			case 'lastname':
				setlastname(event.target.value);
				break;
			case 'firstname':
				setfirstname(event.target.value);
				break;
		    case 'password':
					setpassword(event.target.value);
					break;
			case 'email':
				setemail(event.target.value);
				break;
			default:
				console.log('Error inputValue du formulaire d\'enregistrement');
		}
	};  
	
return (
<div className="registration">

<Header/>
<div className="container d-flex align-items-center flex-column">
<form className="form_inscription" onSubmit={inscriptionSubmit}>
  <div className="row m-3">
  
    <div className="col">
      <input type="text" className="form-control input_registration" placeholder="Prénom" value={firstname} id="first_name" name="firstname" required onChange={inputValue} />
    </div>
    <div className="col">
      <input type="text" className="form-control input_registration" placeholder="Nom" value={lastname} id="last_name" name="lastname" required onChange={inputValue}/>
    </div>

  </div>

  <div className="row m-3">

<div className="col" >
  <input type="email" className="form-control input_registration" placeholder="Email" value={email} id="email" name="email" required onChange={inputValue}/>
</div>
<div className="col">
  <input type="password" className="form-control input_registration" placeholder="Mot de passe" value={password} id="password" name="password" required onChange={inputValue}/>
</div>

</div>
<div className="d-flex justify-content-center m-5">
<button type="submit" className="btn btn-primary btn_registration_validation">Valider</button>
</div>
</form>

</div>

</div>

	)


};

	export default Registration;
