import React, { PropTypes } from 'react'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'

import EmpresaIcon from 'material-ui/svg-icons/communication/business'
import AgricolaIcon from 'material-ui/svg-icons/places/spa'

const ICONS = {
  empresa: <EmpresaIcon color={Colors.pink500} />,
  agricola: <AgricolaIcon color={Colors.green500} />
}

const Hero = styled.div`
  margin-top: 1.5em;
`

const Header = styled.div`
  display: flex;
`

const Icon = styled.div`
  margin-right: .5em;
`

const Title = styled.div`
  font-size: 1.5em;
  color: ${Colors.grey900};
`

function FormRequestWrapper ({icon, title, children}) {
  return (
    <Hero>
      <Header>
        <Icon>{ICONS[icon]}</Icon>
        <Title>{title}</Title>
      </Header>
      <div>
        {children}
      </div>
    </Hero>
  )
}

const {any, string, object} = PropTypes

FormRequestWrapper.propTypes = {
  title: string.isRequired,
  children: any.isRequired,
  icon: object.isRequired
}

export default FormRequestWrapper
