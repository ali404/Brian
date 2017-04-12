import React, { Component } from 'react'
import './style.css'
import '../Logout/style.css'

import AuthStore from '../../stores/authStore'
import Signin from '../Signin'
import Profile from '../Profile'
import HubsViewer from '../HubsViewer'
import Logout from '../Logout'

export default class App extends Component {
  constructor() {
    super()
    this.state = this._getState()
  }

  _getState() {
    return {
      authenticated: AuthStore.authenticated
    }
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange)
  }

  _onChange = () => {
    this.setState(this._getState())
  }

  render() {
    let component = (
      <div>Loading</div>
    )

    if(this.state.authenticated === true) {
      component = (
        <div className="App-content">
          <Profile />
          <HubsViewer />
          <Logout />
        </div>
      )
    }
    else if(this.state.authenticated === false) {
      component = (
        <div className="App-signin">
          <Signin />
        </div>
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-headline">Brian</h2>
        </div>
        {component}
      </div>
    );
  }
}
