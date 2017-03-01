import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import {servicesActions} from 'reducers/services'
import {catalogsActions} from 'reducers/catalogs'
import {validation} from 'selectors/SelectorSolicitudServicio'

import { AutoComplete, RaisedButton } from 'material-ui'

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
  overflow: hidden;
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

const BtnContainer = styled.div`
  text-align: right;
  margin-top: 1.5em;
`

// TODO: Cuando se guarde los datos mostrar mensaje de exitoso o fail
// TODO: Mensaje cuando se selecciono como cliente pero no se encontro en la bd

class SolicitudServicioContainer extends Component {
  componentWillMount () {
    this.props.solicitudCatalogsRequest()
  }

  handleUpdateAutoComplete = (value, data, field) => {
    const uuid = _.find(data, item => item.value === value)
    if (!uuid) return
    /* eslint-disable */
    switch (field) {
      case 'country':
        return this.props.setCountry(uuid.id)
      case 'state':
        return this.props.setState(uuid.id)
      case 'town':
        return this.props.setTown(uuid.id)
      default:
        return
    }
    /* eslint-enable */
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
    const {servicesTypes, sectionsTypes, company, client, servicio, countries, states, towns, disabled} = this.props

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
              dataSourceCountries={countries}
              dataSourceStates={states}
              dataSourceTowns={towns}
              handleUpdate={this.handleUpdateAutoComplete}
              filter={AutoComplete.fuzzyFilter}
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
      <BtnContainer>
        <RaisedButton
          label={'Guardar'}
          disabled={disabled}
          secondary
        />
      </BtnContainer>
      </FormsContainer>
    )
  }
}

const {object, bool} = React.PropTypes

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
  countries: object.isRequired,
  states: object,
  towns: object,
  disabled: bool.isRequired
}

const  mapStateToProps = (state) => {
  const servicesJS = state.services.toJS()
  const catalogsJS = state.catalogs.toJS()
  return {
    disabled: !validation(state),
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
    servicesTypes: catalogsJS.services,
    countries: catalogsJS.countries,
    states: catalogsJS.states,
    towns: catalogsJS.towns
  }
}

const mapdispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...servicesActions,
    ...catalogsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapdispatchToProps)(SolicitudServicioContainer)
