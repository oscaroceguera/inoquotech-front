import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

const {func} = PropTypes

class SolicitudServicioAcuicola extends Component {
  static propTypes = {
    handleTextChange: func.isRequired
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  render () {
    return (
      <FormRequestWrapper
        icon={'acuicola'}
        title={'Datos de acuícola'}
      >
        <GenericTextField
          floating={'¿Que tipo de sistema de producción tiene?'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'acuicola', 'tipoSistemaProduccion')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Tiene juntas todas sus unidades de producción, en caso de si donde?'}
          width={'xLarge'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'acuicola', 'ubicacionProduccion')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Qué productos o especies producen?'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'acuicola', 'tipoProduccion')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Llevan a cabo proceso de empacado?'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'acuicola', 'empacado')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Cuántos albergues tiene la empresa?'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'acuicola', 'albergues')} // eslint-disable-line
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioAcuicola
