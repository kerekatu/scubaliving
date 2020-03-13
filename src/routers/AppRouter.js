import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// CONTEXT PROVIDER
import MainContextProvider from '../context/MainContext'

// CONTAINERS
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'

// ROUTES
import Routes from './Routes'
import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => (
  <MainContextProvider>
    <Router>
      <Header />
      <Switch>
        <Routes />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  </MainContextProvider>
)

export default AppRouter
