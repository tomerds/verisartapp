import './App.css';

import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/navbar';
import LogIn from './components/login';
import Certificate from './components/certificate';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' render={props => (<Certificate {...props} />)} />
      <Route path='/login' render={props => (<LogIn {...props} />)} />
    </div>
  );
}

export default App;
