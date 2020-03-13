import React from 'react'
import { Link } from 'react-router-dom'

const FooterNav = () => (
  <nav className="footer__nav">
    <div className="footer__container">
      <h4 className="heading-4">Praktiske Oplysninger</h4>
      <ul className="footer__list">
        <li className="footer__item">
          <Link to="/about" title="Gå til Om Os Siden" className="footer__link">
            Om Scuba Diving
          </Link>
        </li>
        <li className="footer__item">
          <Link
            to="/contact"
            title="Gå til Kontakt Siden"
            className="footer__link"
          >
            Kontakt
          </Link>
        </li>
        <li className="footer__item">
          <Link
            to="/terms"
            title="Gå til Handelsbetingelser Siden"
            className="footer__link"
          >
            Handelsbetingelser
          </Link>
        </li>
        <li className="footer__item">
          <Link
            to="/terms"
            title="Gå til Persondatapolitik Siden"
            className="footer__link"
          >
            Persondatapolitik
          </Link>
        </li>
        <li className="footer__item">
          <Link
            to="/about"
            title="Gå til Åbningstider Siden"
            className="footer__link"
          >
            Åbningstider
          </Link>
        </li>
      </ul>
    </div>

    <div className="footer__container">
      <h4 className="heading-4">Praktiske Oplysninger</h4>
      <ul className="footer__list">
        <li className="footer__item">
          <Link
            to="/categories"
            title="Gå til Kategorier Siden"
            className="footer__link"
          >
            Hovedkategorier
          </Link>
        </li>
        <li className="footer__item">
          <Link
            to="/equipment"
            title="Gå til Dykkerudstyr Siden"
            className="footer__link"
          >
            Dykkerudstyr
          </Link>
        </li>
        <li className="footer__item">
          <Link
            to="/trips"
            title="Gå til Dykkerrejser Siden"
            className="footer__link"
          >
            Dykkerrejser
          </Link>
        </li>
        <li className="footer__item">
          <Link
            to="/courses"
            title="Gå til Kurser Siden"
            className="footer__link"
          >
            Dykkerkurser
          </Link>
        </li>
        <li className="footer__item">
          <Link
            to="/contact"
            title="Gå til Service Siden"
            className="footer__link"
          >
            Service
          </Link>
        </li>
      </ul>
    </div>

    <div className="footer__container">
      <h4 className="heading-4">Sociale Medier - Følg Os Her:</h4>
      <ul className="footer__list">
        <li className="footer__item">
          <a
            href="https://linkedin.com"
            title="Gå til Linkedin"
            className="footer__link"
          >
            Linkedin <i className="icon-linkedin-square"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://facebook.com"
            title="Gå til Facebook"
            className="footer__link"
          >
            Facebook <i className="icon-facebook-square"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://instagram.com"
            title="Gå til Instagram"
            className="footer__link"
          >
            Instagram <i className="icon-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default FooterNav
