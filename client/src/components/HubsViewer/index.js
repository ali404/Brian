import React, {Component} from 'react'
import './style.css'

import HubListViewer from '../HubListViewer'

import {firebaseDB, firebaseApp} from '../../constants'

export default class HubsViewer extends Component {
  constructor() {
    super()

    this.state = {
      hubs: []
    }
  }

  componentDidMount() {
    const uid = firebaseApp.auth().currentUser.uid

    firebaseDB.ref('users/' + uid).once('value').then(snapshot => {
      this.setState({
        hubs: snapshot.val().hubs
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="hubs">
        <div className="hubs-headline">
          Your subscriptions
        </div>
        <div className="hubs-viewer">
          <HubListViewer hubs={this.state.hubs} />
        </div>
      </div>
    )
  }
}
