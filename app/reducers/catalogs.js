import { fromJS, List } from 'immutable'

// Actions
export const SOLICITUD_CATALOGS_REQUEST = 'app/reducers/catalogs/SOLICITUD_CATALOGS_REQUEST'
const SOLICITUD_CATALOGS_SUCCESS = 'app/reducers/catalogs/SOLICITUD_CATALOGS_SUCCESS'
const SOLICITUD_CATALOGS_FAIL = 'app/reducers/catalogs/SOLICITUD_CATALOGS_FAIL'

// Actions Creators
export const catalogsActions = {
  solicitudCatalogsRequest: () => ({ type: SOLICITUD_CATALOGS_REQUEST }),
  solicitudCatalogsSuccess: (sections, services, countries) => ({ type: SOLICITUD_CATALOGS_SUCCESS, sections, services, countries }),
  solicitudCatalogsFail: (error) => ({ type: SOLICITUD_CATALOGS_FAIL, error }),
}

const initialState = fromJS({
  sections: [],
  services: [],
  countries: [],
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
    return state .set('sectionError', action.error)
  default:
    return state
  }
}

export default catalogsReducer
