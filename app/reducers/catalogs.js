import { fromJS, List } from 'immutable'

// Actions
export const SOLICITUD_CATALOGS_REQUEST = 'app/reducers/catalogs/SOLICITUD_CATALOGS_REQUEST'
const SOLICITUD_CATALOGS_SUCCESS = 'app/reducers/catalogs/SOLICITUD_CATALOGS_SUCCESS'
const SOLICITUD_CATALOGS_FAIL = 'app/reducers/catalogs/SOLICITUD_CATALOGS_FAIL'
const NESTED_STATES_SUCCESS = 'app/reducers/catalogs/NESTED_STATES_SUCCESS'
const NESTED_STATES_FAIL = 'app/reducers/catalogs/NESTED_STATES_FAIL'
const NESTED_TOWNS_SUCCESS = 'app/reducers/catalogs/NESTED_TOWNS_SUCCESS'
const NESTED_TOWNS_FAIL = 'app/reducers/catalogs/NESTED_TOWNS_FAIL'

// Actions Creators
export const catalogsActions = {
  solicitudCatalogsRequest: () => ({ type: SOLICITUD_CATALOGS_REQUEST }),
  solicitudCatalogsSuccess: (sections, services, countries) => ({ type: SOLICITUD_CATALOGS_SUCCESS, sections, services, countries }),
  solicitudCatalogsFail: (error) => ({ type: SOLICITUD_CATALOGS_FAIL, error }),
  nestedStatesSuccess: (states) => ({ type: NESTED_STATES_SUCCESS, states}),
  nestedStatesFail: (error) => ({ type: NESTED_STATES_FAIL, error}),
  nestedTownsSuccess: (towns) => ({ type: NESTED_TOWNS_SUCCESS, towns}),
  nestedTownsFail: (error) => ({ type: NESTED_TOWNS_FAIL, error})
}

const initialState = fromJS({
  sections: [],
  services: [],
  countries: [],
  states: [],
  statesFail: null,
  towns: [],
  townsFail: null,
  solicitudCatFail: null
})

function catalogsReducer (state = initialState, action) {
  switch (action.type) {
  case SOLICITUD_CATALOGS_SUCCESS:
    return state.merge({
      'sections' : List.of(...action.sections),
      'services' : List.of(...action.services),
      'countries' : List.of(...action.countries)
    })
  case SOLICITUD_CATALOGS_FAIL:
    return state.set('sectionError', action.error)
  case NESTED_STATES_SUCCESS:
    return state.set('states', action.states)
  case NESTED_STATES_FAIL:
    return state.set('statesFail', action.error)
  case NESTED_TOWNS_SUCCESS:
    return state.set('towns', action.towns)
  case NESTED_TOWNS_FAIL:
    return state.set('townsFail', action.error)
  default:
    return state
  }
}

export default catalogsReducer
