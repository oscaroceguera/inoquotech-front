import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'

import {
  IsClientForm, SolicitudRFC, SolicitudGeneralesEmpresa, SolicitudServicioRequerido,
  SolicitudServicioAgricola, SolicitudServicioAcuicola, SolicitudServicioProcesadora,
  SolicitudServiciodistrbuidora, SolicitudServicioRestaurante, SolicitudServicioLaboratorio,
  SolicitudServicioTransporte
} from 'components'

import { bindActionCreators } from 'redux'

import aux from 'commons/FormAuxFunctions'
import {GIRO_UUID} from 'commons/CatalogsUID'
import {servicesActions} from 'reducers/services'
import {catalogsActions} from 'reducers/catalogs'

// import {getRequiredFields} from 'selectors/example'

import Logo from 'commons/logo.svg'

const FormsContainer = styled.div`
  max-width: 1000px;
  margin: 2.5em auto;
  @media (max-width: 1000px) {
    margin: 2.5em 1em;
  }
`

const IconHeaderContainer = styled.div`
  text-align: center;
`

const H1 = styled.h1`
  color: ${Colors.deepPurple500};
`

// TODO: Mostrar/ocultar campos dependiendo de servicio seleccionado
// TODO: generic para autocomple
// TODO: Autocomplete dependientes
// TODO: Cuando se guarde los datos mostrar mensaje de exitoso o fail
// TODO: Mensaje cuando se selecciono como cliente pero no se encontro en la bd
// TODO: Boton de guardar
// TODO: validacion de boton guardar (usar reselctor para comprobacion de campos)

class SolicitudServicioContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }

  componentWillMount () {
    this.props.solicitudCatalogsRequest()
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    })
  }

  onTextChange = (e, value, section, field) => {
    this.props.listendFields(section, field, value)
  }

  onCheckboxChage = (e, checked, section, field) => {
    const value = e.target.value

    if (!checked) {
      this.props.uncheckedCheckboxes(section, field, value)
      return
    }

    this.props.listendCheckboxes(section, field, value)
  }

  handleErrorText  = (section, field, type) => {
    const item = this.props[section][field]
    return aux.errorTextMessage(item, type)
  }
  render () {
    const {servicesTypes, sectionsTypes, company, client, servicio} = this.props

    return (
      <FormsContainer>
        <IconHeaderContainer>
          <img src={Logo} />
        </IconHeaderContainer>
        <H1>{'Solicitud de Servicio'}</H1>

        <IsClientForm handleRadioChange={this.onTextChange}/>

        {/* RFC si es cliente */}
        {client.isClient
          && <SolicitudRFC handleTextChange={this.onTextChange} handleError={this.handleErrorText} />}

        {!client.isClient &&
          <div>
            {/* Generales de empresa */}
            <SolicitudGeneralesEmpresa
              dataSource={this.state.dataSource}
              handle={this.handleUpdateInput}
              handleTextChange={this.onTextChange}
              handleError={this.handleErrorText}
              servicesTypes={sectionsTypes}
            />
            {/* Agricola */}
            {company.companyGiro === GIRO_UUID['agricola']
              && <SolicitudServicioAgricola handleTextChange={this.onTextChange} handleError={this.handleErrorText} />}
            {/* Acuicola */}
            {company.companyGiro === GIRO_UUID['acuicola']
              && <SolicitudServicioAcuicola handleTextChange={this.onTextChange} handleError={this.handleErrorText} />}
            {/* Procesadora */}
            {company.companyGiro === GIRO_UUID['procesadora']
              && <SolicitudServicioProcesadora handleTextChange={this.onTextChange} handleError={this.handleErrorText} />}
            {/* Distribuidora */}
            {company.companyGiro === GIRO_UUID['distribuidora']
              && <SolicitudServiciodistrbuidora handleTextChange={this.onTextChange} handleError={this.handleErrorText} />}
            {/* Restaurante */}
            {company.companyGiro === GIRO_UUID['restaurante']
              && <SolicitudServicioRestaurante handleTextChange={this.onTextChange} handleError={this.handleErrorText} />}
            {/* Transporte */}
            {company.companyGiro === GIRO_UUID['transporte']
              && <SolicitudServicioTransporte handleTextChange={this.onTextChange} handleError={this.handleErrorText} />}
            {/* Laboratorio */}
            {company.companyGiro === GIRO_UUID['laboratorio']
              && <SolicitudServicioLaboratorio handleTextChange={this.onTextChange} handleError={this.handleErrorText} />}
          </div>
        }

        {/*  Servicio Requerido */}
        <SolicitudServicioRequerido
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
          servicesTypes={servicesTypes}
          handleCheckboxChange={this.onCheckboxChage}
          data={servicio}
        />
      </FormsContainer>
    )
  }
}

const {object} = React.PropTypes

SolicitudServicioContainer.proptypes = {
  company: object.isRequired,
  client: object.isRequired,
  agricola: object.isRequired,
  acuicola: object.isRequired,
  procesadora: object.isRequired,
  distribuidora: object.isRequired,
  restaurante: object.isRequired,
  transporte: object.isRequired,
  laboratorio: object.isRequired,
  servicio: object.isRequired,
  sectionsTypes: object.isRequired,
  servicesTypes: object.isRequired,
}

const  mapStateToProps = ({services, catalogs}) => {
  const servicesJS = services.toJS()
  const catalogsJS = catalogs.toJS()
  return {
    //compare: getRequiredFields(services.toJS())
    company: servicesJS.company,
    client: servicesJS.client,
    agricola: servicesJS.agricola,
    acuicola: servicesJS.acuicola,
    procesadora: servicesJS.procesadora,
    distribuidora: servicesJS.distribuidora,
    restaurante: servicesJS.restaurante,
    transporte: servicesJS.transporte,
    laboratorio: servicesJS.laboratorio,
    servicio: servicesJS.servicio,
    sectionsTypes: catalogsJS.sections,
    servicesTypes: catalogsJS.services
  }
}

const mapdispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...servicesActions,
    ...catalogsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapdispatchToProps)(SolicitudServicioContainer)
