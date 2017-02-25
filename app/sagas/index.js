import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put, select, fork } from 'redux-saga/effects'
import { getTownsAutocomplete, getSectionTypes, getServicesTypes, getCountriesAutocomplete, getStatesAutocomplete } from 'config/api'
import { SOLICITUD_CATALOGS_REQUEST, catalogsActions } from 'reducers/catalogs'
import { SET_COUNTRY, SET_STATE } from 'reducers/services'

// TODO: Resetear valores de los hijos cuando cambie el valor del padre
// TODO: Crear guardado de datos

export function* watchAutocompleteTown () {
  const stateUUID = yield select((state) => state.services.toJS().company.state)
  const towns = yield call(getTownsAutocomplete, stateUUID)
  try {
    yield put(catalogsActions.nestedTownsSuccess(towns))
  } catch (error) {
    yield put(catalogsActions.nestedTownsFail(error))
  }
}

export function* watchAutocompleteState () {
  // yield delay(5000)
  const countryUUID = yield select((state) => state.services.toJS().company.country)
  const states = yield call(getStatesAutocomplete, countryUUID)
  try {
    yield put(catalogsActions.nestedStatesSuccess(states))
  } catch (error) {
    yield put(catalogsActions.nestedStatesFail(error))
  }
}

export function* watchSolicitudCatalogos() {
  // yield delay(3000)
  try {
    const [sectionTypes, servicesTypes, countries] = yield [call(getSectionTypes), call(getServicesTypes), call(getCountriesAutocomplete)]
    yield put(catalogsActions.solicitudCatalogsSuccess(sectionTypes, servicesTypes, countries))
  } catch (error) {
    yield put(catalogsActions.solicitudCatalogsFail(error))
  }
}

// export function* helloSaga() {
//   console.log('Hello Sagas!');
// }

export default function* rootSaga() {
  yield [
    // helloSaga(),
    takeLatest(SOLICITUD_CATALOGS_REQUEST, watchSolicitudCatalogos),
    takeEvery(SET_COUNTRY, watchAutocompleteState),
    takeEvery(SET_STATE, watchAutocompleteTown)

  ]
}
