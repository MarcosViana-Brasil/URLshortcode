import React from 'react'
import {Logo, HeaderContainer} from './styles'

import URLIcon from '../../Assets/url0.png'

function Header(props) {
  return (
    <>
      <HeaderContainer>
          <Logo src={URLIcon} alt='URLshortcode - Encurtador de URL' />
          <h1>URL Short Code</h1>
          <p>{props.children}</p>
      </HeaderContainer>
    </>
  ) 
}

export default Header