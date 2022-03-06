import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  // testing account details.
  /*
    should it ever be a real web application,
    account details should be stored in a virtual database and fetched through Node.
  */
  const adminUser = {
    email: "edowadosan99@gmail.com",
    password: "edowadosan990"
  }

  // to set more users.
  const [user, setUser] = useState({name: "", email: ""});

  // to catch and display errors.
  const [error, setError] = useState("");

  // login function.
  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Successfully logged in !");
      setUser({
        name: details.name,
        email: details.email
      }); 
    }
    else{
      console.log("Given details are incorrect !");
      setError("Given details are incorrect !");
    }
  }

  // logout function.
  const Logout = () => {
    // reset values.
    setUser({name: "", email: ""});
  }

  /*
  the ternary operator works as such :
  if the user has entered a valid email address value and logged in, render(display) a welcome section in DOM.
  if not, then go to(start the app from) the LoginForm so that the user will login first. 
  */
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className='Welcome'>
          <h2>Welcome, <span>{user.name}</span> !</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        // To display the error message, if there's any.
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;