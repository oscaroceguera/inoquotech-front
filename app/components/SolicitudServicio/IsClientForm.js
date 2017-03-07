import React, {Component, PropTypes} from 'react'
import {FormRadiobuttomWrapper, GenericRadioButton} from 'components'

const RADIOS_ITEMS = {
  name: 'isClient',
  question: '¿Ya eres cliente?',
  radios: [ { _id: true, value: 'Si' }, { _id: false, value: 'No' } ],
  radioDefault: false
}

const {func} = PropTypes

class IsClientForm extends Component {
  static propTypes = {
    handleRadioChange: func.isRequired
  }

  onChildChange (e, value, section, field) {
    this.props.handleRadioChange(e, value, section, field)
  }

  render () {
    return (
      <FormRadiobuttomWrapper title={RADIOS_ITEMS.question}>
        <GenericRadioButton
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'client', 'isClient')} // eslint-disable-line
          name={RADIOS_ITEMS.name}
          radios={RADIOS_ITEMS.radios}
          radioDefault={RADIOS_ITEMS.radioDefault}
        />
      </FormRadiobuttomWrapper>
    )
  }
}

export default IsClientForm
