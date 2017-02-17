import React, { Component } from 'react'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'
import {
  IsClientForm, SolicitudRFC, SolicitudGeneralesEmpresa, SolicitudServicioRequerido,
  SolicitudServicioAgricola
} from 'components'

const FormsContainer = styled.div`
  max-width: 1000px;
  margin: 2.5em auto;
  @media (max-width: 1000px) {
    margin: 2.5em 1em;
  }
`

const H1 = styled.h1`
  color: ${Colors.deepPurple500};
`

// const TextFieldLarge = styled(TextField)`
//   margin-right: .5em;
//   width: 25em !important;
//   @media (max-width: 420px) {
//     width: 100% !important;
//   }
// `
// const TextFieldMedium = styled(TextField)`
//   margin-right: .5em;
//   width: 15em !important;
//   @media (max-width: 420px) {
//     width: 100% !important;
//   }
// `
//
// const TextFieldSmall = styled(TextField)`
//   margin-right: .5em;
//   width: 10em !important;
//   @media (max-width: 420px) {
//     width: 100% !important;
//   }
// `

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
        <H1>{'Solicitud de Servicio'}</H1>

        {/* Es cliente */}
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
        {/* Procesadora */}
        {/* Distribuidora */}
        {/* Restaurante */}
        {/* Transporte */}
        {/* Laboratorio */}

        {/*  Servicio Requerido */}
        <SolicitudServicioRequerido />

      </FormsContainer>
    )
  }
}

export default SolicitudServicioContainer
