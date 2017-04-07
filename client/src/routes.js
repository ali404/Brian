import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import App from './components/App'
import NotFound from './components/NotFound'

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default Routes
