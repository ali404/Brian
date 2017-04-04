import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import App from './components/App'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound'

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default Routes
