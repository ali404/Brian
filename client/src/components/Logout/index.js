import React, {Component} from 'react'

import {firebaseApp} from '../../constants'
import './style.css'

export default class Logout extends Component {
  _logoutUser = () => {
    firebaseApp.auth().signOut()
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="logout">
        <button
          className="logout-btn"
          onClick={this._logoutUser}
        >
          Log out
        </button>
      </div>
    )
  }
}
