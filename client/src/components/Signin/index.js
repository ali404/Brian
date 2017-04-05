import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import './style.css'

import * as firebase from 'firebase'

import googleButton from './google_signin.svg'
import facebookButton from './facebook_signin.svg'

export default class Signin extends Component {

  componentWillMount() {
    // check if api works
    fetch('/api', {
      method: 'get'
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  _signinWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      browserHistory.push('/profile')
    })
    .catch(error => {
      // var errorCode = error.code
      // var errorMessage = error.message
      // var email = error.email
      // var credential = error.credential
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
            onClick={this._signin}
          >
            <img src={googleButton} alt="google logo" />
            Sign in with Google
          </button>
          <button
            id="facebook-signin"
            className="form-signin"
            onClick={this._signinWithFacebook}
          >
            <img src={facebookButton} alt="facebook logo" />
            Sign in with Facebook
          </button>
          {/* <Link className="form-signup-link" to="/signup">Don't have an account? Click here</Link> */}
        </div>
      </div>
    )
  }
}
