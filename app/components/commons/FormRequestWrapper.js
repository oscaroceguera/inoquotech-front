import React, { PropTypes } from 'react'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'

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
        <Icon>{icon}</Icon>
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
