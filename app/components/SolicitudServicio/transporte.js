import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

const {func} = PropTypes

class SolicitudServicioTransporte extends Component {
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
        icon={'transporte'}
        title={'Datos de transporte'}
      >
        <GenericTextField
          floating={'¿Qué productos transportan?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'transporte', 'productos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('transporte', 'productos', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Cuentan con algún tipo de certificación?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'transporte', 'cetificado')} // eslint-disable-line
          onUpdateValidate={this.onValidate('transporte', 'cetificado', 'text')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'¿Llevan a cabo un programa de seguridad e higiene?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'transporte', 'saludHigiene')} // eslint-disable-line
          onUpdateValidate={this.onValidate('transporte', 'saludHigiene', 'text')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'¿Cuentan con permisos para el transporte de la mercancía?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'transporte', 'permisos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('transporte', 'permisos', 'text')} // eslint-disable-line
          hintText={'Nacional e Internacional SCT'}
          width={'xLarge'}
        />
        <GenericTextField
          floating={'Nº flotillas/vehículos'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'transporte', 'noVehiculos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('transporte', 'noVehiculos', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Cuentan con talleres mecánicos propios?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'transporte', 'talleres')} // eslint-disable-line
          onUpdateValidate={this.onValidate('transporte', 'talleres', 'text')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'¿Cuentan con registros de actividades?'}
          hintText={'Documentación necesaria para registro de actividades (Trazabilidad)'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'transporte', 'registros')} // eslint-disable-line
          onUpdateValidate={this.onValidate('transporte', 'registros', 'text')} // eslint-disable-line
          width={'xLarge'}
        />
        <GenericTextField
          floating={'¿Realiza frecuentemente exámenes toxicológicos a los choferes?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'transporte', 'toxicologicos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('transporte', 'toxicologicos', 'text')} // eslint-disable-line
          width={'xLarge'}
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioTransporte
