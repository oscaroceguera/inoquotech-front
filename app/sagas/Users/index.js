import { takeLatest, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'

import {addUser, getUsers} from 'config/api'

import { SAVED_USER_RESQUEST, FETCH_USERS_REQUEST, userActions } from 'reducers/users'
import { browserHistory } from 'react-router'


// TODO: email se repite
function* watchAddUser() {
  yield delay(1000)
  const user = yield select((state) => state.users.toJS().user)
  try {
    const userRegister = yield call(addUser, user)
    yield put(userActions.savedUserSuccess(userRegister))
    browserHistory.push('/panel/usuarios')
  } catch (error) {
    yield put(userActions.savedUserFail(error))
  }
}

function* watchFetchUsers() {
  yield delay(1000)
  try {
    const users = yield call(getUsers)
    yield put(userActions.fetchUsersSuccess(users))
  } catch (e) {
    yield put(userActions.fetchUsersFail(e))
  }
}

function* defaultSaga() {
  yield [
    takeLatest(SAVED_USER_RESQUEST, watchAddUser),
    takeLatest(FETCH_USERS_REQUEST, watchFetchUsers)
  ]
}

export const sagas = [
  defaultSaga
]
