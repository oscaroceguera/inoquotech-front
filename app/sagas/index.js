import { sagas as RSSagas } from './RequestSolicitud'
import { sagas as MSagas } from './Modules'

export default [
  ...RSSagas,
  ...MSagas
]
