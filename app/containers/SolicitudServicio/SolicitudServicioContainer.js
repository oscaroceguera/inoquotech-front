import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'

import {servicesActions} from 'reducers/services'
import {catalogsActions} from 'reducers/catalogs'
// import {getRequiredFields} from 'selectors/example'

import {
  IsClientForm, SolicitudGeneralesEmpresa, SolicitudServicioRequerido,
  GenericTextFieldForm
} from 'components'

import aux from 'commons/FormAuxFunctions'
import {GIRO_UUID} from 'commons/CatalogsUID'
import {
  AGRICOLA_FIELDS, ACUICOLA_FIELDS, DISTRIBUIDORA_FIELDS,
  LABORATORIO_FIELDS, PROCESADORA_FIELDS, RESTAURANTE_FIELDS,
  TRANSPORTE_FIELDS, RFC_FIELDS
} from './TextFields'

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
        {client.isClient &&
          <GenericTextFieldForm
            handleTextChange={this.onTextChange}
            handleError={this.handleErrorText}
            fields={RFC_FIELDS}
          />}

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
            {company.companyGiro === GIRO_UUID['agricola'] &&
              <GenericTextFieldForm
                icon={'agricola'}
                title={'Datos de agrícola'}
                handleTextChange={this.onTextChange}
                handleError={this.handleErrorText}
                fields={AGRICOLA_FIELDS}
              />}

            {/* Acuicola */}
            {company.companyGiro === GIRO_UUID['acuicola'] &&
              <GenericTextFieldForm
                icon={'acuicola'}
                title={'Datos de acuícola'}
                handleTextChange={this.onTextChange}
                handleError={this.handleErrorText}
                fields={ACUICOLA_FIELDS}
              />}

            {/* Procesadora */}
            {company.companyGiro === GIRO_UUID['procesadora'] &&
              <GenericTextFieldForm
                icon={'procesadora'}
                title={'Datos de procesadora'}
                handleTextChange={this.onTextChange}
                handleError={this.handleErrorText}
                fields={PROCESADORA_FIELDS}
              />}

            {/* Distribuidora */}
            {company.companyGiro === GIRO_UUID['distribuidora'] &&
              <GenericTextFieldForm
                icon={'distribuidora'}
                title={'Datos de distribuidora'}
                handleTextChange={this.onTextChange}
                handleError={this.handleErrorText}
                fields={DISTRIBUIDORA_FIELDS}
              />}

            {/* Restaurante */}
            {company.companyGiro === GIRO_UUID['restaurante'] &&
              <GenericTextFieldForm
                icon={'restaurante'}
                title={'Datos de restaurante'}
                handleTextChange={this.onTextChange}
                handleError={this.handleErrorText}
                fields={RESTAURANTE_FIELDS}
              />}

            {/* Transporte */}
            {company.companyGiro === GIRO_UUID['transporte'] &&
              <GenericTextFieldForm
                icon={'transporte'}
                title={'Datos de transporte'}
                handleTextChange={this.onTextChange}
                handleError={this.handleErrorText}
                fields={TRANSPORTE_FIELDS}
              />}

            {/* Laboratorio */}
            {company.companyGiro === GIRO_UUID['laboratorio'] &&
              <GenericTextFieldForm
                icon={'laboratorio'}
                title={'Datos de laboratorio'}
                handleTextChange={this.onTextChange}
                handleError={this.handleErrorText}
                fields={LABORATORIO_FIELDS}
              />}
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
