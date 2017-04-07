import Dispatcher from '../dispatcher'
import {AuthConstants} from '../constants'

export default {
  loginUser: () => {
    Dispatcher.dispatch({
      type: AuthConstants.LOGIN_USER
    })
  },

  logoutUser: () => {
    Dispatcher.dispatch({
      type: AuthConstants.LOGOUT_USER
    })
  }
}
