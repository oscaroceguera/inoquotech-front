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
    isClientRFC: null
  },
  company: {
    companyName: null,
    rfc: null,
    locality: null,
    address: null,
    neighborhood: null,
    zipCode: null,
    companyPhone: null,
    companyEmail: null,
    legalName: null,
    legalPhone: null,
    legalEmail: null,
    contactName: null,
    contactPhone: null,
    contactEmail: null,
    contactPosition: null
  },
  agricola: {
    ha: null,
    productos: null,
    empacado: null,
    albergues: null
  },
  acuicola: {
    tipoSistemaProduccion: null,
    ubicacionProduccion: null,
    tipoProduccion: null,
    empacado: null,
    albergues: null
  },
  procesadora: {
    productos: null,
    turnos: null,
    plantas: null
  },
  distribuidora: {
    almacenes: null,
    productos: null,
    mercado: null,
    importa: null
  },
  restaurante: {
    productos: null,
    horario: null,
    sucursales: null,
    tipoInstalacion: null,
    congelacion: null,
    verificacion: null,
    sanitarios: null,
    capacitacion: null
  },
  transporte: {
    productos: null,
    cetificado: null,
    saludHigiene: null,
    permisos: null,
    noVehiculos: null,
    talleres: null,
    registros: null,
    toxicologicos: null
  },
  laboratorio:  {
    giro: null,
    normativa: null,
    ensayos: null
  },
  servicio: {
    tipoServicio: [],
    esquema: null,
    hasCertificado: null,
    capacitacionTema: null,
    nivelJerarquico: null,
    objetivoMuestras: null,
    porqueMuestreo: null,
    tipoMuestreo: null,
    hasProgramaVigilanciaMonitoreo: null,
    muestreoFecha: null,
    analisisFecha: null,
    laboratorioAcreditado: null
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
