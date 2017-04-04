import React, { Component } from 'react'
// import {Link} from 'react-router'

import './style.css'

import Login from '../Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-headline">Brian</h2>
        </div>
        <Login />
      </div>
    );
  }
}

export default App
