import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

const {func} = PropTypes

class SolicitudServicioLaboratorio extends Component {
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
        icon={'laboratorio'}
        title={'Datos de laboratorio'}
      >
        <GenericTextField
          floating={'Giro del laboratorio'}
          width={'xLarge'}
          hintText={'Fitosanitaria, Residuos Toxicológicos, Inocuidad alimentaria, ...etc)'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'laboratorio', 'giro')} // eslint-disable-line
          onUpdateValidate={this.onValidate('laboratorio', 'giro', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Normatividad en la que requiere acreditarse'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'laboratorio', 'normativa')} // eslint-disable-line
          onUpdateValidate={this.onValidate('laboratorio', 'normativa', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Qué ensayos requiere acreditar?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'laboratorio', 'ensayos')} // eslint-disable-line
          onUpdateValidate={this.onValidate('laboratorio', 'ensayos', 'text')} // eslint-disable-line
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioLaboratorio
