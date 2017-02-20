import { fromJS, List } from 'immutable'

// Actions
const SERVICIO = 'app/redux/SERVICIO'

// Actions Creators
export const servicesActions = {
  setServices: () => ({type: SERVICIO})
}

// Reducer
const initialState = fromJS({
  isClient: false,
  chale: 'oscar',
})

function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICIO:
      return state.set('servicio', action.servicio)
    default:
      return state
  }
}

export default servicesReducer
