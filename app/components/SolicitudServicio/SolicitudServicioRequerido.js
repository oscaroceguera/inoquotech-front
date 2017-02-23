import React, {Component, PropTypes} from 'react'
import {
  FormRequestWrapper,
  FormRadiobuttomWrapper,
  GenericTextField,
  GenericCheckbox
} from 'components'

import {TIPO_SERVICIO_UUID} from 'commons/CatalogsUID'
import {FIELDS} from './ServicioRequeridoFields'
import _ from 'lodash'
import styled from 'styled-components'

const {func, array, object} = PropTypes

const MapItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class SolicitudServicioRequerido extends Component {
  static propTypes = {
    handleTextChange: func.isRequired,
    handleError: func,
    servicesTypes: array.isRequired,
    handleCheckboxChange: func.isRequired,
    data: object.isRequired
  }

  onChidCheckboxChange (e, checked, section, field) {
    this.props.handleCheckboxChange(e, checked, section, field)
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  onValidate (section, field, type) {
    return this.props.handleError(section, field, type)
  }

  validateTipoServico (uuid) {
    const {data} = this.props
    const tipoServicio = data.tipoServicio
    const validateUUID = _.find(tipoServicio, (x) => x === TIPO_SERVICIO_UUID[uuid])
    return !!validateUUID
  }

  mapItems (item) {
    return <MapItemsContainer>
      {
        FIELDS[item].map(({floating, hinText, width, sectionItem, fieldItem, requiredType}, key) => {
          return <GenericTextField
            key={key}
            floating={floating}
            hintText={hinText}
            width={width}
            onChange={(e, value, section, field) => this.onChildChange(e, value, sectionItem, fieldItem)} // eslint-disable-line
            onUpdateValidate={this.onValidate(sectionItem, fieldItem, requiredType)} // eslint-disable-line
          />
        })
      }
    </MapItemsContainer>
  }

  render () {
    const {servicesTypes} = this.props
    const isDiag = this.validateTipoServico('diagnostico')
    const isPre = this.validateTipoServico('preauditoria')
    const isImp = this.validateTipoServico('implementacion')
    const isCap = this.validateTipoServico('capacitacion')
    const isMue = this.validateTipoServico('muestreo')

    return (
      <FormRequestWrapper
        icon={'servicio'}
        title={'Solicitud de servicio'}
      >
        <FormRadiobuttomWrapper title={'Servicio requerido'}>
          <GenericCheckbox
            items={servicesTypes}
            onChange={(e, checked, section, field) => this.onChidCheckboxChange(e, checked, 'servicio', 'tipoServicio')} // eslint-disable-line
          />
        </FormRadiobuttomWrapper>

        {(isDiag || isPre || isImp) && this.mapItems('diagPreImp')}

        {isCap && this.mapItems('capacitacion')}

        {isMue && this.mapItems('muestreo')}
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioRequerido
