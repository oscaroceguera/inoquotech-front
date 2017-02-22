import { takeLatest, delay } from 'redux-saga'
import { call, put, select, fork } from 'redux-saga/effects'

import { getSectionTypes } from 'config/api'

import { SECTION_TYPES_REQUEST, catalogsActions } from 'reducers/catalogs'

export function* watchSectionTypes() {
  // yield delay(3000)
  try {
    const sectionTypes = yield call(getSectionTypes)
    yield put(catalogsActions.sectionTypesSuccess(sectionTypes))
  } catch (error) {
    yield put(catalogsActions.sectionTypesFail(error))
  }
}

// export function* helloSaga() {
//   console.log('Hello Sagas!');
// }

export default function* rootSaga() {
  yield [
    // helloSaga(),
    takeLatest(SECTION_TYPES_REQUEST, watchSectionTypes)

  ]
}
