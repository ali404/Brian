import React, {Component} from 'react'
import './style.css'

import {firebase, firebaseApp} from '../../constants'

import googleButton from './google_signin.svg'

export default class Signin extends Component {

  _signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    this._signInWithProvider(provider)
  }

  _signInWithProvider(provider) {
    firebaseApp.auth().signInWithPopup(provider)
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <div className="form">
          <button
            id="google-signin"
            className="form-signin"
            onClick={this._signInWithGoogle}
          >
            <img src={googleButton} alt="google logo" />
            Sign in with Google
          </button>
        </div>
      </div>
    )
  }
}
