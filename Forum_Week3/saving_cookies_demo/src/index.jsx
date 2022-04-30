import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App";

/*
    Firstly, wrap the index.js or the root app component of 
    your application with the CookiesProvider component from the react-cookie package.
*/
ReactDOM.render(
   <CookiesProvider>
      <App />
   </CookiesProvider>,
   document.getElementById('root')
);