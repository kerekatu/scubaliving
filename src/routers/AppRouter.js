import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// CONTAINERS
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'

// ROUTES
import Routes from './Routes'

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Routes />
    </Switch>
    <Footer />
  </Router>
)

export default AppRouter
