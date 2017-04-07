import React, {Component} from 'react'

import firebase from 'firebase'
import './style.css'

export default class Profile extends Component {
  constructor() {
    super()
    const user = firebase.auth().currentUser;
    this.user = {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL
    }
  }
  
  render() {
    return (
      <div className="profile">
        <div className="profile-headline">Profile</div>
        <img
          src={this.user.photoUrl}
          alt="user profile"
          className="profile-image"
        />
        <div className="profile-details">
          <p className="profile-details--name">{this.user.name}</p>
          <p className="profile-details--email">{this.user.email}</p>
        </div>
      </div>
    )
  }
}
