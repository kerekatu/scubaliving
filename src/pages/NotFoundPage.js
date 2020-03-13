import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <main className="container sub">
    <span className="notfound">
      <Link to="/">
        Error 404 - Ingenting at se her, gå tilbage til forsiden
      </Link>
    </span>
  </main>
)

export default NotFoundPage
