import React, {Component} from 'react'

export default class HubListViewer extends Component {
  render() {
    let hubs = []

    this.props.hubs.forEach(hub => {
      let dom = (
        <li key="hub" className="hub">{hub}</li>
      )

      hubs.push(dom)
    })

    return (
      <ul>{hubs}</ul>
    )
  }
}
