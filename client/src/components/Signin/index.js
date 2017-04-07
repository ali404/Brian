import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import './style.css'

import firebase from 'firebase'

import googleButton from './google_signin.svg'
import facebookButton from './facebook_signin.svg'

export default class Signin extends Component {

  _signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    this._signInWithProvider(provider)
  }

  _signInWithProvider(provider) {
    firebase.auth().signInWithPopup(provider)
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <div className="form">
          <div>
            <h2 className="form-headline">Signin</h2>
          </div>
          <button
            id="google-signin"
            className="form-signin"
            onClick={this._signInWithGoogle}
          >
            <img src={googleButton} alt="google logo" />
            Sign in with Google
          </button>
          {/* <Link className="form-signup-link" to="/signup">Don't have an account? Click here</Link> */}
        </div>
      </div>
    )
  }
}
