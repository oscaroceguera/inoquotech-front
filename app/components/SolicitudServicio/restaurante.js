import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

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

  render () {
    return (
      <FormRequestWrapper
        icon={'restaurante'}
        title={'Datos de restaurante'}
      >
        <GenericTextField
          floating={'¿Qué productos venden?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'restaurante', 'productos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('restaurante', 'productos', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Horarios de servicio de la empresa'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'restaurante', 'horario')} // eslint-disable-line
          onUpdateValidate={this.onValidate('restaurante', 'horario', 'text')} // eslint-disable-line
          width={'medium'}
        />
        <GenericTextField
          floating={'Nº de sucursales'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'restaurante', 'sucursales')} // eslint-disable-line
          onUpdateValidate={this.onValidate('restaurante', 'sucursales', 'text')} // eslint-disable-line
          width={'small'}
        />
        <GenericTextField
          floating={'¿Las instalaciones son propias o rentadas?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'restaurante', 'tipoInstalacion')} // eslint-disable-line
          onUpdateValidate={this.onValidate('restaurante', 'tipoInstalacion', 'text')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'¿Cuenta con sistemas de congelación para sus materias primas?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'restaurante', 'congelacion')} // eslint-disable-line
          onUpdateValidate={this.onValidate('restaurante', 'congelacion', 'text')} // eslint-disable-line
          width={'xLarge'}
        />
        <GenericTextField
          floating={'¿Cuenta con servicio de verificacion de la NOM-251?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'restaurante', 'verificacion')} // eslint-disable-line
          onUpdateValidate={this.onValidate('restaurante', 'verificacion', 'text')} // eslint-disable-line
          width={'xLarge'}
        />
        <GenericTextField
          floating={'¿Cuenta con sanitarios exclusivos para sus empleados?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'restaurante', 'sanitarios')} // eslint-disable-line
          onUpdateValidate={this.onValidate('restaurante', 'sanitarios', 'text')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'¿El personal cuenta con capacitacón de manejo de alimentos?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'restaurante', 'capacitacion')} // eslint-disable-line
          onUpdateValidate={this.onValidate('restaurante', 'capacitacion', 'text')} // eslint-disable-line
          width={'xLarge'}
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioRestaurante
