import React from 'react'
import styled from 'styled-components'
import {RadioButton, RadioButtonGroup} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'

const IsClientContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
`

const IsClientAsk = styled.p`
  color: ${Colors.grey900};
`

function IsClientForm () {
  return (
    <IsClientContainer>
      <IsClientAsk>{'¿Ya eres cliente?'}</IsClientAsk>
      <RadioButtonGroup name='isClient' style={{display: 'flex', width: '300px', marginLeft: '1em'}}>
        <RadioButton
          value='true'
          label='Si'
          style={{width: '30%'}}
          labelStyle={{color: Colors.grey500}}/>
        <RadioButton
          value='false'
          label='No'
          style={{width: '30%'}}
          labelStyle={{color: Colors.grey500}}
        />
      </RadioButtonGroup>
    </IsClientContainer>
  )
}

export default IsClientForm
