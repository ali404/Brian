import React, {Component} from 'react'

import './style.css'

export default class Login extends Component {

  componentWillMount() {
    // check if api works
    fetch('/api', {
      method: 'get'
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <form className="form">
          <div>
            <h2 className="form-headline">Login</h2>
          </div>
          <div>
            <input name="username" type="text" className="form-input" placeholder="username..." />
          </div>
          <div>
            <input name="password" type="password" className="form-input" placeholder="password..." />
          </div>
          <div>
            <button className="form-submit">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}
