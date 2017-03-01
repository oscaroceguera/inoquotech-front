import { createSelector } from 'reselect'
import aux from 'commons/FormAuxFunctions'
import {TIPO_SERVICIO_UUID, GIRO_UUID} from 'commons/CatalogsUID'
import {includes, every} from 'lodash/collection'
import {COMPANY_FORM} from './RequiredFields'


const getItems = (state) => state.services.toJS()

// IsClient :: [TRUE/FALSE]
const isClient = createSelector(
  getItems,
  ({client}) => client.isClient
)

// RFC :: Non Null
// RFC :: IsRFCValidator
const RFCValidation = createSelector(
  getItems,
  ({client}) => {
    const isValid = !!client.isClientRFC && !!aux.isRFCForSelector(client.isClientRFC)
    return isValid
  }
)

// tipoServicio ::: length > 0
const tipoServicioLengthValidation = createSelector(
  getItems,
  ({servicio}) => servicio.tipoServicio.length > 0
)

// tipoServicioItem
const tipoServicioItem = createSelector(
  getItems,
  ({servicio}) => servicio.tipoServicio
)

// Get tipo servicio fields required
const tipoServicioFieldsRequired = createSelector(
  tipoServicioItem,
  (tipo) => {
    const fields = []
    const includeDiag = includes(tipo, TIPO_SERVICIO_UUID['diagnostico'])
    const includePre = includes(tipo, TIPO_SERVICIO_UUID['preauditoria'])
    const includeImp = includes(tipo, TIPO_SERVICIO_UUID['implementacion'])
    const includeCap = includes(tipo, TIPO_SERVICIO_UUID['capacitacion'])
    const includeMues = includes(tipo, TIPO_SERVICIO_UUID['muestreo'])
    const isDiagPreImp = includeDiag || includePre || includeImp

    if (isDiagPreImp) { fields.push('esquema', 'hasCertificado') }
    if (includeCap) { fields.push('capacitacionTema', 'cantidadPersonas', 'nivelJerarquico') }
    if (includeMues) { fields.push('objetivoMuestras', 'porqueMuestreo', 'tipoMuestreo', 'hasProgramaVigilanciaMonitoreo', 'muestreoFecha', 'analisisFecha', 'laboratorioAcreditado') }

    return fields
  }
)

// Compare current fields with state
const tipoServicioFieldsRequiredEvery = createSelector(
  [tipoServicioFieldsRequired, getItems],
  (fields, {servicio}) => {
    const fieldState = fields.map(value => servicio[value].length > 1)
    return every(fieldState)
  }
)

// General fields required
// generalFielsRequired
// RFC validation
// Email validation
const generalFieldsRequiredEvery = createSelector(
  getItems,
  ({company}) => {
    const fieldsState = COMPANY_FORM.map(value => company[value])
    const validRFC = !!aux.isRFCForSelector(company.rfc)
    const validEmailCompany = aux.isEmailForSelector(company.companyEmail)
    const validEmailLegal = aux.isEmailForSelector(company.legalEmail)
    const validEmailContact = aux.isEmailForSelector(company.contactEmail)
    return every(fieldsState) && validRFC && validEmailCompany && validEmailContact && validEmailLegal
  }
)

// Giro de empresa ::: !== ''
const giroEmpresaLengthValidation = createSelector(
  getItems,
  ({company}) => !!company.companyGiro
)

// Get giro de la empresa
const getGiroEmpresa = createSelector(
  getItems,
  ({company}) => company.companyGiro
)

// Get giro de la empresa fields required
// son true y son leng > 0
// getGiroEmpresaFieldsRequired
const getGiroEmpresaFieldsRequired = createSelector(
  [getItems, getGiroEmpresa],
  (stateFields, giro) => {
    /* eslint-disable */
    switch (giro) {
      case GIRO_UUID['agricola']:
        return every(stateFields['agricola'], (value) => value.length > 1)
      case GIRO_UUID['acuicola']:
        return every(stateFields['acuicola'], (value) => value.length > 1)
      case GIRO_UUID['procesadora']:
        return every(stateFields['procesadora'], (value) => value.length > 1)
      case GIRO_UUID['distribuidora']:
        return every(stateFields['distribuidora'], (value) => value.length > 1)
      case GIRO_UUID['laboratorio']:
        return every(stateFields['laboratorio'], (value) => value.length > 1)
      case GIRO_UUID['restaurante']:
        return every(stateFields['restaurante'], (value) => value.length > 1)
      case GIRO_UUID['transporte']:
        return every(stateFields['transporte'], (value) => value.length > 1)
      default:
        return false
    }
    /* eslint-enable */
  }
)

// Client Main validation
// RFC fields required
// Tipo servicio length > 0
// Tipo servicio fields required
const isClientMainValidation = createSelector(
  [
    RFCValidation,
    tipoServicioLengthValidation,
    tipoServicioFieldsRequiredEvery
  ],
  (rfc, length, required) => {
    return rfc && length && required
  }
)


// New Client validation
// General fields required
// Giro empresa !== ''
// Giro empresa Fields required *
// Tipo servicio > 0
// Tipo servicio fields required
const newClientMainValidation = createSelector(
  [
    generalFieldsRequiredEvery,
    tipoServicioLengthValidation,
    tipoServicioFieldsRequiredEvery,
    giroEmpresaLengthValidation,
    getGiroEmpresaFieldsRequired
  ],
  (general, servicioLength, servicioRequired, giroLength, giroRequired) => general && servicioLength && servicioRequired && giroLength && giroRequired
)

export const validation = createSelector(
  [isClient, isClientMainValidation, newClientMainValidation],
  (isClient, clientValidation, newClientValidation) => isClient ? clientValidation : newClientValidation
)
