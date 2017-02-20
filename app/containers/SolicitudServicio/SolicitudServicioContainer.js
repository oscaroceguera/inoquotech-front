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

import {getRequiredFields} from 'selectors/example'

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

  render () {
    return (
      <FormsContainer>
        <IconHeaderContainer>
          <img src={Logo} />
        </IconHeaderContainer>
        <H1>{'Solicitud de Servicio'}</H1>
        <IsClientForm />
        {/* RFC si es cliente */}
        <SolicitudRFC />
        {/* Generales de la empresa */}
        <SolicitudGeneralesEmpresa
          dataSource={this.state.dataSource}
          handle={this.handleUpdateInput}
        />
        {/* Agricola */}
        <SolicitudServicioAgricola />
        {/* Acuicola */}
        <SolicitudServicioAcuicola />
        {/* Procesadora */}
        <SolicitudServicioProcesadora />
        {/* Distribuidora */}
        <SolicitudServiciodistrbuidora />
        {/* Restaurante */}
        <SolicitudServicioRestaurante />
        {/* Transporte */}
        <SolicitudServicioTransporte />
        {/* Laboratorio */}
        <SolicitudServicioLaboratorio />
        {/*  Servicio Requerido */}
        <SolicitudServicioRequerido />
      </FormsContainer>
    )
  }
}

function mapStateToProps ({services}) {
  return {
    compare: getRequiredFields(services.toJS())
  }
}

export default connect(mapStateToProps, null)(SolicitudServicioContainer)
