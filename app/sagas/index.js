import { sagas as RSSagas } from './RequestSolicitud'
import { sagas as MSagas } from './Modules'
import { sagas as UserSagas } from './Users'

export default [
  ...RSSagas,
  ...MSagas,
  ...UserSagas
]
