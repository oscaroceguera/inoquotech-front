import { fromJS, List } from 'immutable'
import _ from 'lodash'

// Actions
const LISTEND_FIELDS_VALUE = 'app/reducers/users/LISTEND_FIELDS_VALUE'
const LISTEND_CHECKBOXES_VALUE = 'app/reducers/users/LISTEND_CHECKBOXES_VALUE'
const UNCHECKED_CHECKBOXES = 'app/reducers/users/UNCHECKED_CHECKBOXES'
const RESET_FIELDS = 'app/reducers/users/RESET_FIELDS'
export const SAVED_USER_RESQUEST = 'app/reducers/users/SAVED_USER_RESQUEST'
const SAVED_USER_SUCCESS = 'app/reducers/users/SAVED_USER_SUCCESS'
const SAVED_USER_FAIL = 'app/reducers/users/SAVED_USER_FAIL'

// Actions Creators
export const userActions = {
  listenUserFields: (section, field, value) => ({type: LISTEND_FIELDS_VALUE, section, field, value}),
  listendCheckboxes: (section, field, value) => ({ type: LISTEND_CHECKBOXES_VALUE, section, field, value }),
  uncheckedCheckboxes: (section, field, value) => ({ type: UNCHECKED_CHECKBOXES, section, field, value }),
  resetFields: () => ({ type: RESET_FIELDS }),
  savedUserResquest: () => ({ type: SAVED_USER_RESQUEST }),
  savedUserSuccess: (data) => ({ type: SAVED_USER_SUCCESS, data }),
  savedUserFail: (err) => ({ type: SAVED_USER_FAIL, err })
}


// Reducer
const initialState = fromJS({
  user: {
    name: '',
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    confPassword: '',
    moduleTypes: []
  },
  isSavedLoading: false,
  isSaved: false,
  savedFail: null
})

/* eslint-disable */
function userReducer (state = initialState, action) {
  switch (action.type) {
    case LISTEND_FIELDS_VALUE:
      return state.setIn([action.section, action.field], action.value)
    case LISTEND_CHECKBOXES_VALUE:
      return state
        .setIn([action.section, action.field], state.getIn([action.section, action.field]).unshift(action.value))
    case UNCHECKED_CHECKBOXES:
      const actionValue = action.value
      const currentValues = state.getIn([action.section, action.field]).toJS()
      const currentKeys = _.map(currentValues, (value, key) => value === actionValue && key)
      const filter = _.find(currentKeys, (value) => value !== false)
      return state.deleteIn([action.section, action.field, filter])
    case SAVED_USER_RESQUEST:
      return state
        .set('isSavedLoading', true)
        .set('savedFail', null)
    case SAVED_USER_SUCCESS:
      return state.merge({
        user: action.data,
        isSavedLoading: false,
        isSaved: true
      })
    case SAVED_USER_FAIL:
      return state.merge({
        savedFail: action.err,
        isSavedLoading: false,
        isSaved: false,
      })
    case RESET_FIELDS:
      return state.merge({
        user: {
          name: '',
          firstName: '',
          secondName: '',
          email: '',
          password: '',
          confPassword: '',
          moduleTypes: []
        },
        isSavedLoading: false,
        isSaved: false,
        savedFail: null
      })
    default:
      return state
  }
}
/* eslint-enable */

export default userReducer
