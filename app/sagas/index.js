import { takeLatest, delay } from 'redux-saga'
import { call, put, select, fork } from 'redux-saga/effects'

import { getSectionTypes, getServicesTypes } from 'config/api'

import { SOLICITUD_CATALOGS_REQUEST, catalogsActions } from 'reducers/catalogs'

// TODO: Crear llamadas al api para pais, estado, municipio

export function* watchSolicitudCatalogos() {
  // yield delay(3000)
  try {
    const [sectionTypes, servicesTypes] = yield [call(getSectionTypes), call(getServicesTypes)]
    yield put(catalogsActions.solicitudCatalogsSuccess(sectionTypes, servicesTypes))
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
    takeLatest(SOLICITUD_CATALOGS_REQUEST, watchSolicitudCatalogos)

  ]
}
