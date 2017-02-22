import React, {PropTypes} from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'

const inlStyl = {
  style: { width: '30%', marginRight: '.5em' },
  labelStyle : { color: Colors.grey500 }
}

const RadioButtonGroupStyled = styled(RadioButtonGroup)`
  display: flex;
  width: 300px;
`

const {string, array, bool, func} = PropTypes

GenericRadioButton.propTypes = {
  name: string.isRequired,
  radios: array.isRequired,
  radioDefault: bool,
  onChange: func.isRequired
}

function GenericRadioButton ({name, radios, radioDefault, onChange}) {
  return (
    <RadioButtonGroupStyled
      name={name}
      onChange={onChange}
      defaultSelected={radioDefault}
    >
      {
        radios.map(({id, value}, index) =>
          <RadioButton
            key={index}
            value={id}
            label={value}
            style={inlStyl.style}
            labelStyle={inlStyl.labelStyle}
          />
        )
      }
    </RadioButtonGroupStyled>
  )
}

export default GenericRadioButton
