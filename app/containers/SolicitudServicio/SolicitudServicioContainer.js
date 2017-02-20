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

  onTextChange (e, value, section, field) {
    this.props.listendFields(section, field, value)
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
        <SolicitudRFC
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/* Generales de la empresa */}
        <SolicitudGeneralesEmpresa
          dataSource={this.state.dataSource}
          handle={this.handleUpdateInput}
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/* Agricola */}
        <SolicitudServicioAgricola
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/* Acuicola */}
        <SolicitudServicioAcuicola
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/* Procesadora */}
        <SolicitudServicioProcesadora
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/* Distribuidora */}
        <SolicitudServiciodistrbuidora
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/* Restaurante */}
        <SolicitudServicioRestaurante
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/* Transporte */}
        <SolicitudServicioTransporte
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/* Laboratorio */}
        <SolicitudServicioLaboratorio
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
        {/*  Servicio Requerido */}
        <SolicitudServicioRequerido
          handleTextChange={(e, value, section, field) => this.onTextChange(e, value, section, field)}
        />
      </FormsContainer>
    )
  }
}

const {object} = React.PropTypes

SolicitudServicioContainer.proptypes = {
  company: object.isRequired
}

const  mapStateToProps = ({services}) => {
  const servicesJS = services.toJS()
  return {
    //compare: getRequiredFields(services.toJS())
    company: servicesJS.company,
    saludo: 'hello'
  }
}

export default connect(mapStateToProps, servicesActions)(SolicitudServicioContainer)
