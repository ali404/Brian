import EventEmitter from 'events'
import AppDispatcher from '../dispatcher'
import {AuthConstants} from '../constants'

const CHANGE_EVENT = 'change'

class AuthStore extends EventEmitter {
  constructor() {
    super()
    this.authenticated = undefined
  }

  loginUser() {
    this.authenticated = true
  }

  logoutUser() {
    this.authenticated = false
  }

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
}

let authStore = new AuthStore()

authStore.dispatchToken = AppDispatcher.register(payload => {
  switch(payload.type) {
    case AuthConstants.LOGIN_USER:
      authStore.loginUser()
      authStore.emitChange()
    break

    case AuthConstants.LOGOUT_USER:
      authStore.logoutUser()
      authStore.emitChange()
    break
  }
})

export default authStore
