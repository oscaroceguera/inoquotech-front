import React, {PropTypes, Component} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

const {func} = PropTypes

class SolicitudServicioAgricola extends Component {
  static propTypes = {
    handleTextChange: func.isRequired
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  render () {
    return (
      <FormRequestWrapper
        icon={'agricola'}
        title={'Datos de agrícola'}
      >
        <GenericTextField
          floating={'¿Cuantas hectáreas de producción tiene la empresa?'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'agricola', 'ha')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Qué productos producen?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'agricola', 'productos')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Llevan a cabo proceso de empacado?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'agricola', 'empacado')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'¿Cuántos albergues tiene la empresa?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'agricola', 'albergues')} // eslint-disable-line
          width={'large'}
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioAgricola
