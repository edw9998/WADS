import React, {useState} from 'react';

function LoginForm({Login, error}) {
  // local details for the form.
  const [details, setDetails] = useState({name: "", email: "", password: ""});

  // function to handle submitted form entries.
  const submitHandler = e => {
    // set the login form to not automatically re - render.  
    e.preventDefault();

    // call the passed Login function.
    Login(details);
  }

  return (
    // added handler function to the form.
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login Below !</h2>
            {(error != "") ? (<div className='error'>{error}</div>) : ""}
            <div className='form-group'>
                <label htmlFor='name'>Name :</label>
                <input type='text' id='name' name='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>E-mail :</label>
                <input type='email' id='email' name='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password :</label>
                <input type='password' id='password' name='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type='submit' value='Login'/>
        </div>
    </form>
  )
}

export default LoginForm;