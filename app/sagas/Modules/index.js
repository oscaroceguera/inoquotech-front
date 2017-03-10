import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { getModulesTypes } from 'config/api'
import { SOLICITUD_CAT_FOR_DASHBOARD_REQUEST, catalogsActions } from 'reducers/catalogs'

function* watchCatModules () {
  try {
    const modulesTypes = yield call(getModulesTypes)
    yield put(catalogsActions.catForDashboardSuccess(modulesTypes))
  } catch (error) {
    yield put(catalogsActions.catForDashboardFail(error))
  }
}

function* defaultSaga () {
  yield [
    takeLatest(SOLICITUD_CAT_FOR_DASHBOARD_REQUEST, watchCatModules)
  ]
}

export const sagas = [
  defaultSaga
]
