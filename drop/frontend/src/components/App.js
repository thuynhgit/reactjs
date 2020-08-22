import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Explorer from './Explorer';
// import axios from 'axios';
// import RippleAPI from './ripple-lib';
// const api = new RippleAPI({server:'wss://s1.ripple.com'});

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Explorer/>
      </div>
    );
  }
}

export default App;