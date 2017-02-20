import React, {PropTypes} from 'react'
import { TextField } from 'material-ui'
import styled from 'styled-components'


// large = 400; normal = 250; small = 150; xSmall = 100px
const TextFieldWrapper = styled(TextField)`
  margin-right: .5em;
  ${(props) => {
    switch (props.width) {
    case 'large': return 'width: 400px !important;'
    case 'xLarge': return 'width: 500px !important;'
    case 'small': return 'width: 150px !important;'
    case 'xSmall': return 'width: 100px !important;'
    default: return 'width: 250px !important;'
    }
  }}
`

function GenericTextField({floating, width, hintText, onChange}) {
  return (
    <TextFieldWrapper
      floatingLabelText={floating}
      width={width}
      hintText={hintText}
      onChange={onChange}
    />
  )
}

const {string, func} = PropTypes

GenericTextField.propTypes = {
  floating: string.isRequired,
  width: string,
  hintText: string,
  onChange: func,
  // onChange: func.isRequired
}

export default GenericTextField
