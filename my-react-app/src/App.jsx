import { useState, useEfect } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  if (window.location.href == "http://localhost:5173/signup") {
    return (
      <div>
        <Signup></Signup>
      </div>
    );
  }
  //if the url is the search url and this user is logged in
    //then render the search stuff
  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default App;