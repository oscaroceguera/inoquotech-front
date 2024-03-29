import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put, select, fork } from 'redux-saga/effects'
import {
  getTownsAutocomplete, getSectionTypes, getServicesTypes,
  getCountriesAutocomplete, getStatesAutocomplete, addSolicitudServicio,
} from 'config/api'
import { SOLICITUD_CATALOGS_REQUEST, catalogsActions } from 'reducers/catalogs'
import { SET_COUNTRY, SET_STATE, SOLICITUD_SERVICIO_REQUEST, servicesActions } from 'reducers/services'
import { browserHistory } from 'react-router'

function* watchSavedSolicitudServicio(action) {
  yield delay(1000)
  try {
    yield call(addSolicitudServicio, action.data)
    yield put(servicesActions.solicitudServicioSuccess())
    browserHistory.push('/')
  } catch (error) {
    yield put(servicesActions.solicitudServicioFail(error))
  }
}

function* watchAutocompleteTown () {
  const stateUUID = yield select((state) => state.services.toJS().company.state)
  const towns = yield call(getTownsAutocomplete, stateUUID)
  try {
    yield put(catalogsActions.nestedTownsSuccess(towns))
  } catch (error) {
    yield put(catalogsActions.nestedTownsFail(error))
  }
}

function* watchAutocompleteState () {
  const countryUUID = yield select((state) => state.services.toJS().company.country)
  const states = yield call(getStatesAutocomplete, countryUUID)
  try {
    yield put(catalogsActions.nestedStatesSuccess(states))
  } catch (error) {
    yield put(catalogsActions.nestedStatesFail(error))
  }
}

function* watchSolicitudCatalogos() {
  try {
    const [sectionTypes, servicesTypes, countries] = yield [call(getSectionTypes), call(getServicesTypes), call(getCountriesAutocomplete)]
    yield put(catalogsActions.solicitudCatalogsSuccess(sectionTypes, servicesTypes, countries))
  } catch (error) {
    yield put(catalogsActions.solicitudCatalogsFail(error))
  }
}


function* defaultSaga() {
  yield [
    takeLatest(SOLICITUD_CATALOGS_REQUEST, watchSolicitudCatalogos),
    takeLatest(SET_COUNTRY, watchAutocompleteState),
    takeLatest(SET_STATE, watchAutocompleteTown),
    takeLatest(SOLICITUD_SERVICIO_REQUEST, watchSavedSolicitudServicio)
  ]
}

export const sagas = [
  defaultSaga
]
