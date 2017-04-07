import React, {Component} from 'react'

import firebase from 'firebase'

export default class Profile extends Component {
  _logoutUser = () => {
    firebase.auth().signOut()
    .catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        Profile
        <button
          onClick={this._logoutUser}
        >
          Logout
        </button>
      </div>
    )
  }
}
