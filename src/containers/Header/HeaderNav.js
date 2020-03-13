import React from 'react'
import { NavLink, Link } from 'react-router-dom'

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

      <ul className="header__list--collapsed">
        <li className="header__item">
          <NavLink
            to="/"
            activeClassName="header__link--active"
            className="header__link"
          >
            Menu
          </NavLink>
        </li>
      </ul>

      <form className="header__form">
        <input type="search" className="header__input--search" />
        <button className="header__btn--search">Søg</button>
        <i className="header__icon header__icon--search"></i>
      </form>
      <Link to="/login" href="" className="header__btn--login">
        <img
          src={iconLock}
          alt="Icon Lock"
          className="header__icon header__icon--lock"
        />
        <span>Login</span>
      </Link>
    </nav>
  )
}

export default HeaderNav
