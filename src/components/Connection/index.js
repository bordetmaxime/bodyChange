import Header from '../Header';

const Connection = ({email, password, connectionSubmit, setpassword, setemail}) => {

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

<div className="connection">

<Header/>


<form className="d-flex flex-column m-auto w-25 " onSubmit={connectionSubmit}>

  <div className="form-group ">
    <input type="email" name="email" value={email} className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={inputValue}/>
  </div>

  <div className="form-group">

    <input type="password" name="password" value={password} className="form-control text-center" id="exampleInputPassword1" placeholder="Mot de passe" onChange={inputValue}/>
  </div>
 

  <button type="submit" className="btn btn-primary">Connection</button>
</form>

</div>

	)


};

	export default Connection;
