import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

const {func} = PropTypes

class SolicitudServicioDistribuidora extends Component {
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
        icon={'distribuidora'}
        title={'Datos de distribuidora'}
      >
        <GenericTextField
          floating={'¿Cuántos almacenes tiene?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'distribuidora', 'almacenes')} // eslint-disable-line
          onUpdateValidate={this.onValidate('distribuidora', 'almacenes', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Qué productos comercializa?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'distribuidora', 'productos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('distribuidora', 'productos', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Cuál es su mercado de destino?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'distribuidora', 'mercado')} // eslint-disable-line
          onUpdateValidate={this.onValidate('distribuidora', 'mercado', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Es importador a USA?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'distribuidora', 'importa')} // eslint-disable-line
          onUpdateValidate={this.onValidate('distribuidora', 'importa', 'text')} // eslint-disable-line
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioDistribuidora
