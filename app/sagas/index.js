import { takeLatest, delay } from 'redux-saga'
import { call, put, select, fork } from 'redux-saga/effects'
import { getSectionTypes, getServicesTypes, getCountriesAutocomplete } from 'config/api'
import { SOLICITUD_CATALOGS_REQUEST, catalogsActions } from 'reducers/catalogs'

// TODO: Crear llamadas al api para pais, estado, municipio
// TODO: Crear llamado a autocomplete dependientes
// TODO: Crear guardado de datos
// const pais = yield select((state) => state.catalogs.toJS().countriesAutocomplete)

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
    //takeLatest(COUNTRIES_AUTOCOMPLETE_REQUEST, watchAutocompleteCountry)

  ]
}
