import './App.scss';

import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/navbar';
import LogIn from './components/login';
import Certificate from './components/certificate';
import art from './images/art.png';
import Footer from './components/footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      art: art,
    }
  }

  render() {
    return (
      <div className="App">
        <div className='App-container'>
          <NavBar />
          <Route exact path='/' render={props => (<Certificate {...props} art={this.state.art} />)} />
          <Route path='/login' render={props => (<LogIn {...props} />)} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
