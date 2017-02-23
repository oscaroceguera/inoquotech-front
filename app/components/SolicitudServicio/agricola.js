import React, {PropTypes, Component} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'
import {AGRICOLA_FIELDS} from './GiroFormsFields'

const {func} = PropTypes

class SolicitudServicioAgricola extends Component {
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
    return AGRICOLA_FIELDS.map(({floating, hinText, width, sectionItem, fieldItem, requiredType}, key) => (
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
        icon={'agricola'}
        title={'Datos de agrícola'}
      >
        {this.mapItems()}
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioAgricola
