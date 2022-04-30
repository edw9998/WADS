import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Home = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   // use the cookie hook 'useCookies(['cookie_name'])' to set cookies.
   const [cookies, setCookie, removeCookie] = useCookies(['user']);

   /*
        function to set the cookies for the user(passed to button).
   */
    /*
        when the button is clicked, the handle function is executed which will set cookies for the user.

        the path '/' signifies that the cookie is available for all pages in the react app.
    */

    // cookies(key names) must be written for access point generation.
   const handle = () => {
      setCookie('Name', name, { path: '/' });
      setCookie('Password', pwd, { path: '/' });
   };

   return (
    <div className="App">
      <h1>Name of the user:</h1>
      <input
         placeholder="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
         type="password"
         placeholder="name"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
         <button onClick={handle}>Set Cookie</button>
      </div>
      <br />
      {cookies.Name && (
      <div>
         Name: <p>{cookies.Name}</p>
      </div>
      )}
      {cookies.Password && (
      <div>
         Password: <p>{cookies.Password}</p>
      </div>
      )}
    </div>
   );
};

export default Home;