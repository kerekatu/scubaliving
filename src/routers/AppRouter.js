import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// PAGES

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component="" />
      </Switch>
    </Router>
  )
}

export default AppRouter
