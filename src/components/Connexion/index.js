import Header from '../Header';
import './styles.scss';

const Connexion = ({email, password, connexionSubmit, setpassword, setemail, inscriptionValidate}) => {

	const inputValue = (event) => {
		switch (event.target.name) {

			case 'email':
				setemail(event.target.value);
				break;
			case 'password':
				setpassword(event.target.value);
				break;
			default:
				console.log('Error inputValue du formulaire d\'enregistrement');
		}
	}  

	return (

<div className="connexion">

<Header/>

<div className="container">

{inscriptionValidate ? <h2 className="text-center m-2">Inscription validée</h2> : ' '}

<form className="d-flex flex-column m-auto " onSubmit={connexionSubmit}>

  <div className="form-group ">
    <input type="email" name="email" value={email} className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={inputValue}/>
  </div>

  <div className="form-group">

    <input type="password" name="password" value={password} className="form-control text-center" id="exampleInputPassword1" placeholder="Mot de passe" onChange={inputValue}/>
  </div>
 

  <button type="submit" className="btn btn-primary btn_connexion ">Connexion</button>
</form>

</div>

</div>

	)


};

	export default Connexion;
