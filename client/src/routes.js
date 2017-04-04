import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import App from './components/App'
import Signin from './components/Signin'
import Profile from './components/Profile'
import NotFound from './components/NotFound'

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/signin" component={Signin} />
    <Route path="/profile" component={Profile} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default Routes
