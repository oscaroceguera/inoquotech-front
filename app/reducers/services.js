import { fromJS, List } from 'immutable'
import _ from 'lodash'
// Actions
const LISTEND_FIELDS_VALUE = 'app/reducers/services/LISTEND_FIELDS_VALUE'
const LISTEND_CHECKBOXES_VALUE = 'app/reducers/services/LISTEND_CHECKBOXES_VALUE'
const UNCHECKED_CHECKBOXES = 'app/reducers/services/UNCHECKED_CHECKBOXES'
export const SET_COUNTRY = 'app/reducers/services/SET_COUNTRY'
export const SET_STATE = 'app/reducers/services/SET_STATE'
export const SET_TOWN = 'app/reducers/services/SET_TOWN'

// Actions Creators
export const servicesActions = {
  listendFields: (section, field, value) => ({ type: LISTEND_FIELDS_VALUE, section, field, value }),
  listendCheckboxes: (section, field, value) => ({ type: LISTEND_CHECKBOXES_VALUE, section, field, value }),
  uncheckedCheckboxes: (section, field, value) => ({ type: UNCHECKED_CHECKBOXES, section, field, value }),
  setCountry: (country) => ({ type: SET_COUNTRY, country }),
  setState: (state) => ({ type: SET_STATE, state }),
  setTown: (town) => ({ type: SET_TOWN, town })
}

// Reducer
const initialState = fromJS({
  client: {
    isClient: false,
    isClientRFC: ''
  },
  company: {
    companyGiro: '',
    companyName: '',
    rfc:'',
    country: '',
    state: '',
    town: '',
    locality: '',
    address: '',
    neighborhood: '',
    zipCode: '',
    companyPhone: '',
    companyEmail: '',
    legalName: '',
    legalPhone: '',
    legalEmail: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactPosition: ''
  },
  agricola: {
    hectarea: '',
    productos: '',
    empacado: '',
    albergues: ''
  },
  acuicola: {
    tipoSistemaProduccion: '',
    ubicacionProduccion: '',
    tipoProduccion: '',
    empacado: '',
    albergues: ''
  },
  procesadora: {
    productos: '',
    turnos: '',
    plantas: ''
  },
  distribuidora: {
    almacenes: '',
    productos: '',
    mercado: '',
    importa: ''
  },
  restaurante: {
    productos: '',
    horario: '',
    sucursales: '',
    tipoInstalacion: '',
    congelacion: '',
    verificacion: '',
    sanitarios: '',
    capacitacion: ''
  },
  transporte: {
    productos: '',
    cetificado: '',
    saludHigiene: '',
    permisos: '',
    noVehiculos: '',
    talleres: '',
    registros: '',
    toxicologicos: ''
  },
  laboratorio:  {
    giro: '',
    normativa: '',
    ensayos: ''
  },
  servicio: {
    tipoServicio: [],
    esquema: '',
    hasCertificado: '',
    capacitacionTema: '',
    cantidadPersonas: '',
    nivelJerarquico: '',
    objetivoMuestras: '',
    porqueMuestreo: '',
    tipoMuestreo: '',
    hasProgramaVigilanciaMonitoreo: '',
    muestreoFecha: '',
    analisisFecha: '',
    laboratorioAcreditado: ''
  }
})

function servicesReducer (state = initialState, action) {
  switch (action.type) {
  case LISTEND_FIELDS_VALUE:
    return state.setIn([action.section, action.field], action.value)
  case LISTEND_CHECKBOXES_VALUE:
    return state
      .setIn([action.section, action.field], state.getIn([action.section, action.field]).unshift(action.value))
  case UNCHECKED_CHECKBOXES: // eslint-disable-line
    const actionValue = action.value
    const currentValues = state.getIn([action.section, action.field]).toJS()
    const currentKeys = _.map(currentValues, (value, key) => value === actionValue && key)
    const filter = _.find(currentKeys, (value) => value !== false)
    return state.deleteIn([action.section, action.field, filter])
  case SET_COUNTRY:
    return state
      .setIn(['company', 'country'], action.country)
  case SET_STATE:
    return state.setIn(['company', 'state'], action.state)
  case SET_TOWN:
    return state.setIn(['company', 'town'], action.town)
  default:
    return state
  }
}

export default servicesReducer
