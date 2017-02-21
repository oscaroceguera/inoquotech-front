import { fromJS, List } from 'immutable'

// Actions
const LISTEND_FIELDS_VALUE = 'app/redux/LISTEND_FIELDS_VALUE'

// Actions Creators
export const servicesActions = {
  listendFields: (section, field, value) => ({ type: LISTEND_FIELDS_VALUE, section, field, value })
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
  default:
    return state
  }
}

export default servicesReducer
