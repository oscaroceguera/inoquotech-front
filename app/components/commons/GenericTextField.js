import React, {PropTypes} from 'react'
import { TextField } from 'material-ui'
import styled from 'styled-components'

// large = 400; normal = 250; small = 150; xSmall = 100px
const TextFieldWrapper = styled(TextField)`
  margin-right: .5em;
  @media (max-width: 410px){
    width: 100% !important;
  };
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

function GenericTextField({floating, width, hintText, onChange, onUpdateValidate, type}) {
  return (
    <TextFieldWrapper
      floatingLabelText={floating}
      width={width}
      hintText={hintText}
      onChange={onChange}
      errorText={onUpdateValidate}
      type={type}
    />
  )
}

const {string, func, any } = PropTypes

GenericTextField.defaultProps = {
  type: 'text'
}

GenericTextField.propTypes = {
  floating: string.isRequired,
  width: string,
  hintText: string,
  onChange: func.isRequired,
  onUpdateValidate: any,
  type: string.isRequired
}

export default GenericTextField
