import React from 'react'
import { Route } from 'react-router-dom'

// ROUTES - PAGES
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CoursesPage from '../pages/CoursesPage'
import EquipmentPage from '../pages/EquipmentPage'
import LoginPage from '../pages/LoginPage'
import TripsPage from '../pages/TripsPage'
import NotFoundPage from '../pages/NotFoundPage'

const Routes = props => {
  const mainTitle = 'ScubaLiving -'
  const routes = [
    {
      path: '/',
      component: <HomePage />,
      title: `${mainTitle} Home`,
      exact: true
    },
    {
      path: '/about',
      component: <AboutPage />,
      title: `${mainTitle} About`
    },
    {
      path: '/contact',
      component: <ContactPage />,
      title: `${mainTitle} Contact`
    },
    {
      path: '/courses',
      component: <CoursesPage />,
      title: `${mainTitle} Courses`
    },
    {
      path: '/courses/:courseId',
      component: <CoursesPage />,
      title: `${mainTitle} Course`
    },
    {
      path: '/equipment',
      component: <EquipmentPage />,
      title: `${mainTitle} Equipment`
    },
    {
      path: '/equipment/:productId',
      component: <EquipmentPage />,
      title: `${mainTitle} Equipment`
    },
    {
      path: '/trips',
      component: <TripsPage {...props} />,
      title: `${mainTitle} Trips`
    },
    {
      path: '/trips/:tripId',
      component: <TripsPage {...props} />,
      title: `${mainTitle} Trip`
    },
    {
      path: '/login',
      component: <LoginPage />,
      title: `${mainTitle} Login`
    }
  ]

  return routes.map((route, index) => {
    const { path, title, component, exact } = route

    return (
      <Route
        exact={exact}
        path={path}
        key={index}
        render={() => {
          document.title = title ? title : mainTitle
          return component
        }}
      />
    )
  })
}

export default Routes
