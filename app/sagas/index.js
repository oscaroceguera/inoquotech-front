import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put, select, fork } from 'redux-saga/effects'
import {
  getTownsAutocomplete, getSectionTypes, getServicesTypes,
  getCountriesAutocomplete, getStatesAutocomplete, addSolicitudServicio,
} from 'config/api'
import { SOLICITUD_CATALOGS_REQUEST, catalogsActions } from 'reducers/catalogs'
import { SET_COUNTRY, SET_STATE, SOLICITUD_SERVICIO_REQUEST, CLOSE_SNACKBAR, servicesActions } from 'reducers/services'
import { browserHistory } from 'react-router'

export function* watchCloseSnakcBar() {
  yield put(servicesActions.resetFieldsAction())
}

export function* watchSavedSolicitudServicio(action) {
  yield delay(1000)
  try {
    const data = yield call(addSolicitudServicio, action.data)
    if (data.length === 0) {
      return yield put(servicesActions.notFoundUser('No se encuetra registrado como cliente'))
    }
    yield put(servicesActions.solicitudServicioSuccess())
    browserHistory.push('/')
  } catch (error) {
    yield put(servicesActions.solicitudServicioFail('Ups!, algo paso y no se guardo la solicitud.'))
  }
}

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
  const countryUUID = yield select((state) => state.services.toJS().company.country)
  const states = yield call(getStatesAutocomplete, countryUUID)
  try {
    yield put(catalogsActions.nestedStatesSuccess(states))
  } catch (error) {
    yield put(catalogsActions.nestedStatesFail(error))
  }
}

export function* watchSolicitudCatalogos() {
  try {
    const [sectionTypes, servicesTypes, countries] = yield [call(getSectionTypes), call(getServicesTypes), call(getCountriesAutocomplete)]
    yield put(catalogsActions.solicitudCatalogsSuccess(sectionTypes, servicesTypes, countries))
  } catch (error) {
    yield put(catalogsActions.solicitudCatalogsFail(error))
  }
}


export default function* rootSaga() {
  yield [
    takeLatest(SOLICITUD_CATALOGS_REQUEST, watchSolicitudCatalogos),
    takeLatest(SET_COUNTRY, watchAutocompleteState),
    takeLatest(SET_STATE, watchAutocompleteTown),
    takeLatest(SOLICITUD_SERVICIO_REQUEST, watchSavedSolicitudServicio),
    takeLatest(CLOSE_SNACKBAR, watchCloseSnakcBar)
  ]
}
