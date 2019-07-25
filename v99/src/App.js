import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    var redux = require('redux');
    var oldState = {
      num : ["chuot", "man hinh", "ban phim"],
      editStatus : true
    }

    var reducer1 = (state = oldState, action) => {
      switch (action.type){
        case "CHANGE_EDIT_STATUS":
          return {...state,editStatus:!state.editStatus}
        case "ADD_NEW":
          return {...state,num:[...state.num,action.newItem]}
        case "DELETE":
          return {...state,num:state.num.filter((value, i) => i !== action.number)}
        default:
        return state;
      }

    }
    var store1 = redux.createStore(reducer1);
    store1.subscribe(() => {
      console.log(store1.getState())
    })
    store1.dispatch({type:"CHANGE_EDIT_STATUS"})
    store1.dispatch({
      type:"ADD_NEW",
      newItem:"tai nghe"
    })
    store1.dispatch({
      type:"DELETE",
      number:0
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
