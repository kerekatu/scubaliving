import React from 'react'
import { Route } from 'react-router-dom'

// ROUTES - PAGES
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CoursesPage from '../pages/CoursesPage'
import EquipmentPage from '../pages/EquipmentPage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import TripsPage from '../pages/TripsPage'

const Routes = () => {
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
      path: '/equipment',
      component: <EquipmentPage />,
      title: `${mainTitle} Equipment`
    },
    {
      path: '/login',
      component: <LoginPage />,
      title: `${mainTitle} Login`
    },
    {
      path: '/notfound',
      component: <NotFoundPage />,
      title: `${mainTitle} NotFound`
    },
    {
      path: '/trips',
      component: <TripsPage />,
      title: `${mainTitle} Trips`
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
