import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

const {func} = PropTypes

class SolicitudServicioProcesadora extends Component {
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

  render () {
    return (
      <FormRequestWrapper
        icon={'procesadora'}
        title={'Datos de procesadora'}
      >
        <GenericTextField
          floating={'¿Qué productos fabrican?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'procesadora', 'productos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('procesadora', 'productos', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Turnos de producción'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'procesadora', 'turnos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('procesadora', 'turnos', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Nº de plantas'}
          width={'small'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'procesadora', 'plantas')} // eslint-disable-line
          onUpdateValidate={this.onValidate('procesadora', 'plantas', 'text')} // eslint-disable-line
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioProcesadora
