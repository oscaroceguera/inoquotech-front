import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, SolicitudServicioContainer, PanelContainer, ModulesListContainer } from 'containers'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer} >
        <IndexRoute component={HomeContainer} />
        <Route path='solicitud-servicio' component={SolicitudServicioContainer} />
        <Route path='panel' component={PanelContainer}>
          <IndexRoute component={ModulesListContainer} />
        </Route>
      </Route>
    </Router>
  )
}
