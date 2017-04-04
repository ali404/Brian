import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import * as firebase from 'firebase'

export default class Profile extends Component {
  constructor() {
    super()

    const user = firebase.auth().currentUser

    if(!!user) {
      // do nothing
    }
    else {
      browserHistory.push('/signin')
    }
  }

  render() {
    return (
      <div>Profile</div>
    )
  }
}
