import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import {FormRadiobuttomGeneric} from 'components'

function IsClientForm () {
  return (
    <FormRadiobuttomGeneric title={'¿Ya eres cliente?'}>
      <RadioButtonGroup name='isClient' style={{display: 'flex', width: '300px'}}>
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
    </FormRadiobuttomGeneric>
  )
}

export default IsClientForm
