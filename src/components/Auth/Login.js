import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
  const [values, setValues] = useState({
    userName: '',
    userPassword: '',
    redirect: false
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (values !== '') {
      setValues({
        ...values,
        redirect: true
      })
    }
  }

  const handleChange = e => {
    setValues({
      userName: e.target.value,
      userPassword: e.target.value
    })
  }

  return (
    <section className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <h2 className="heading-2">Login</h2>
        <hr className="line" />
        <div className="auth__box">
          <input
            type="text"
            id="inputUsername"
            className="auth__input"
            required
            onChange={handleChange}
          />
          <label htmlFor="inputUsername" className="auth__label">
            Brugernavn
          </label>
        </div>
        <div className="auth__box">
          <input
            type="text"
            id="inputPassword"
            className="auth__input"
            required
            onChange={handleChange}
          />
          <label htmlFor="inputPassword" className="auth__label">
            Adgangskode
          </label>
        </div>
        <button className="auth__btn">Login</button>
      </form>
      {values.redirect ? <Redirect to="/" /> : null}
    </section>
  )
}

export default Login
