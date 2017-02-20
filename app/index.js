import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createSagaMiddleware from 'redux-saga'

import * as reducers from 'reducers'
import getRoutes from 'config/routes'
import rootSagas from 'sagas'


const sagaMiddleware = createSagaMiddleware()

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.css'

injectTapEventPlugin()

const store = createStore(
  combineReducers({...reducers, routing: routerReducer}),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

sagaMiddleware.run(rootSagas)

const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      {getRoutes(history)}
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
