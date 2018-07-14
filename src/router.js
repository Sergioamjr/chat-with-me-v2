import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Initial, Chat } from './pages'

class AppRouter extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Initial} />
          <Route exact path='/:id' component={Chat} />
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
