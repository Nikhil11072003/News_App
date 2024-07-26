import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Auth0Provider
    //domain="dev-aflsnufmq6c4r5mn.us.auth0.com"
    //clientId="pN4UoIDd7V10TnlFs66nqtkxa1BaCU6Y"
    //authorizationParams={{
    //  redirect_uri: window.location.origin
    //}}
  //>
    <App/>
  //</Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))   <App />
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



