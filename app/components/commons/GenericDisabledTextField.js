import React, {PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'

const TxtField = styled(TextField)`
  width: 310px;
  margin-right: .5em;
`

const GenericDisableTextField = ({item, label}) => (
  <TxtField
    style={{width: '310px', marginRight: '.5em'}}
    disabled
    floatingLabelText={label}
    defaultValue={item}
  />
)

GenericDisableTextField.propTypes = {
  item: PropTypes.string,
  label: PropTypes.string
}

export default GenericDisableTextField
