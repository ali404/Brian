import ReactDOM from 'react-dom'
import Routes from './routes'
import './index.css'

import AuthActionCreator from './actions/authActionCreator'

import {firebaseApp} from './constants'

firebaseApp.auth().onAuthStateChanged(user => {
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
