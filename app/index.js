import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import getRoutes from 'config/routes'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.css'

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    {getRoutes(browserHistory)}
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
