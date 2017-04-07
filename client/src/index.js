import ReactDOM from 'react-dom'
import Routes from './routes'
import './index.css'

import AuthActionCreator from './actions/authActionCreator'

import firebase from 'firebase'
import config from './config/firebase'

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    AuthActionCreator.loginUser()
  }
  else {
    AuthActionCreator.logoutUser()
  }
})

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
