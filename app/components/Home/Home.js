import React from 'react'
import { Link } from 'react-router'

import * as styles from './style.css'
import styled from 'styled-components'

import Logo from 'commons/logo.svg'

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const LoginLink = styled(Link)`
  background: #673AB7;
  padding: .5em;
  color: white;
  box-shadow: 0px 0px 5px gray;
  text-decoration: none;
  margin: 1em 1em 0 0;
  transition: .3s;
  &:hover{
    opacity: 0.8;
  }
`

const SolicitudContainer = styled.div`
  margin-top: 5em;
  text-align: center;
`
const SolicitudLink = styled(Link)`
  color: #212121;
  font-size: 2em;
  background: white;
  padding: .5em;
  box-shadow: 0px 0px 5px gray;
  border-radius: 4px;
  transition: .3s;
  text-decoration: none;
  &:hover{
    color: #F44336;
    background: #F5F5F5;
  }
`

function Home () {
  return (
    <div>
      <div className={styles.Home_header}>
        <HeaderTop>
          <img src={Logo} />
          <LoginLink to='/'>Iniciar Sesión</LoginLink>
        </HeaderTop>
        <SolicitudContainer>
          <SolicitudLink to='/solicitud-servicio'>Me gustaría recibir una cotización</SolicitudLink>
        </SolicitudContainer>
      </div>
    </div>
  )
}

export default Home
