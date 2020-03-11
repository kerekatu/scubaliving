import React from 'react'
import { NavLink } from 'react-router-dom'

import iconLock from '../../assets/images/icon-lock.png'

const HeaderNav = () => {
  return (
    <nav className="header__navbar">
      <ul className="header__list">
        <li className="header__item">
          <NavLink
            to="/"
            activeClassName="header__link--active"
            className="header__link"
          >
            Home
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            to="/equipment"
            activeClassName="header__link--active"
            className="header__link"
          >
            Dykkerudstyr
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            to="/trips"
            activeClassName="header__link--active"
            className="header__link"
          >
            Dykkerrejser
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            to="/courses"
            activeClassName="header__link--active"
            className="header__link"
          >
            Dykkerkurser
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            to="/contact"
            activeClassName="header__link--active"
            className="header__link"
          >
            Kontakt
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            to="about"
            activeClassName="header__link--active"
            className="header__link"
          >
            Om Os
          </NavLink>
        </li>
      </ul>
      <form className="header__form">
        <input type="search" className="header__input--search" />
        <button className="header__btn--search">Søg</button>
      </form>
      <div className="header__btn-container">
        <img src={iconLock} alt="Icon Lock" className="header__icon" />
        <button className="header__btn--login">Login</button>
      </div>
    </nav>
  )
}

export default HeaderNav
