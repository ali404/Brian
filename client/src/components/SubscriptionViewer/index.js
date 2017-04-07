import React, {Component} from 'react'
import './style.css'

export default class SubscriptionViewer extends Component {
  render() {
    return (
      <div className="subscriptions">
        <div className="subscription-headline">
          Your subscriptions
        </div>
        <p className="subscription-viewer">
          No subscriptions available
        </p>
      </div>
    )
  }
}
