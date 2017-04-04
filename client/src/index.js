import ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import Routes from './routes'

import './index.css'

import firebaseConfig from './config/firebase'
import * as firebase from 'firebase'

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
