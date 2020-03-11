import React from 'react'

import LogoImgBig from '../../assets/images/scubaliving-logo.svg'
import LogoImgSmall from '../../assets/images/scubaliving-logo-small.svg'

const Logo = () => (
  <img
    src={LogoImgSmall}
    alt="Logo"
    className={LogoImgSmall ? 'logo logo--small' : 'logo logo--big'}
  />
)

export default Logo
