import React from 'react'
import styled from 'styled-components'
import * as Colors from 'material-ui/styles/colors'

const Title = styled.p`
  color: ${Colors.grey700};
  font-size: 1.5em;
`

FormRadiobuttomWrapper.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.object.isRequired
}

function FormRadiobuttomWrapper ({title, children}) {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  )
}

export default FormRadiobuttomWrapper
