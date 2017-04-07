import keyMirror from 'keymirror'
import * as firebase from 'firebase'
import config from '../config/firebase'

let app = firebase.initializeApp(config)

const AuthConstants = keyMirror({
  LOGIN_USER: null,
  LOGOUT_USER: null
})

export {
  AuthConstants,
  app as firebaseApp,
  firebase
}
