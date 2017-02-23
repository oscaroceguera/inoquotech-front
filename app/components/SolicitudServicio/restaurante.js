import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'
import {RESTAURANTE_FIELDS} from './GiroFormsFields'

const {func} = PropTypes

class SolicitudServicioRestaurante extends Component {
  static propTypes = {
    handleTextChange: func.isRequired,
    handleError: func
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  onValidate (section, field, type) {
    return this.props.handleError(section, field, type)
  }

  mapItems () {
    return RESTAURANTE_FIELDS.map(({floating, hinText, width, sectionItem, fieldItem, requiredType}, key) => (
      <GenericTextField
        key={key}
        floating={floating}
        hintText={hinText}
        width={width}
        onChange={(e, value, section, field) => this.onChildChange(e, value, sectionItem, fieldItem)} // eslint-disable-line
        onUpdateValidate={this.onValidate(sectionItem, fieldItem, requiredType)} // eslint-disable-line
      />
    ))
  }


  render () {
    return (
      <FormRequestWrapper
        icon={'restaurante'}
        title={'Datos de restaurante'}
      >
        {this.mapItems()}
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioRestaurante
