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

import aux from 'commons/FormAuxFunctions'
import {servicesActions} from 'reducers/services'

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

class SolicitudServicioContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      dataSource: []
    }
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

  handleErrorText  = (section, field, type) => {
    const item = this.props[section][field]

    return aux.errorTextMessage(item, type)

  }

  render () {
    return (
      <FormsContainer>
        <IconHeaderContainer>
          <img src={Logo} />
        </IconHeaderContainer>
        <H1>{'Solicitud de Servicio'}</H1>
        <IsClientForm
          handleRadioChange={this.onTextChange}/>
        {/* RFC si es cliente */}
        <SolicitudRFC
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/* Generales de la empresa */}
        <SolicitudGeneralesEmpresa
          dataSource={this.state.dataSource}
          handle={this.handleUpdateInput}
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/* Agricola */}
        <SolicitudServicioAgricola
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/* Acuicola */}
        <SolicitudServicioAcuicola
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/* Procesadora */}
        <SolicitudServicioProcesadora
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/* Distribuidora */}
        <SolicitudServiciodistrbuidora
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/* Restaurante */}
        <SolicitudServicioRestaurante
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/* Transporte */}
        <SolicitudServicioTransporte
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/* Laboratorio */}
        <SolicitudServicioLaboratorio
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
        {/*  Servicio Requerido */}
        <SolicitudServicioRequerido
          handleTextChange={this.onTextChange}
          handleError={this.handleErrorText}
        />
      </FormsContainer>
    )
  }
}

const {object} = React.PropTypes

SolicitudServicioContainer.proptypes = {
  company: object.isRequired,
  client: object.isRequired
}

const  mapStateToProps = ({services}) => {
  const servicesJS = services.toJS()
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
  }
}

export default connect(mapStateToProps, servicesActions)(SolicitudServicioContainer)
