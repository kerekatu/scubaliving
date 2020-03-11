import React from 'react'
import { Link } from 'react-router-dom'

import HeaderNav from './HeaderNav'
import Logo from '../../components/Logo/Logo'

const Header = () => (
  <header className="header">
    <Link to="/" className="header__link">
      <Logo />
    </Link>
    <HeaderNav />
  </header>
)

export default Header
