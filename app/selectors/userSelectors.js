import { createSelector } from 'reselect'
import {every, orderBy} from 'lodash/collection'
import aux from 'commons/FormAuxFunctions'

const USER_FORM = [ 'name', 'firstName', 'secondName', 'email', 'password', 'confPassword' ]

const getItems = (state) => state.users.toJS()

const passwordsAreEquals = createSelector(
  getItems, ({user}) => user.confPassword === user.password
)

export const passwordsAreEqualsSelector = createSelector(
  passwordsAreEquals,
  (areEquals) => areEquals ? '' : 'Passwords no coinciden'
)

const userFieldsRequiredEvery = createSelector(
  getItems,
  ({user}) => {
    const userTexts = USER_FORM.map(value => user[value])
    return every(userTexts)
  }
)

export const modulesLengthSelector = createSelector(
  getItems,
  ({user}) => user.moduleTypes.length > 0
)

const isEmailValidation = createSelector(
  getItems, ({user}) => aux.isEmailForSelector(user.email)
)

export const showSubmitSelector = createSelector(
  [
    userFieldsRequiredEvery,
    modulesLengthSelector,
    passwordsAreEquals,
    isEmailValidation
  ],
  (everyUserFields, modules, passEquals, isEmail) => {
    return everyUserFields && modules && passEquals && isEmail
  }
)

export const usersForList = createSelector(
  getItems,
  ({users}) => {
    const userList = users.map((user) => {
      return {
        id: user.id,
        name: `${user.name} ${user.firstName} ${user.secondName}`,
        email: user.email,
        status: user.userStatus.value
      }
    })
    return orderBy(userList, 'name', 'asc')
  }
)
