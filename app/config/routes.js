import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, SolicitudServicioContainer } from 'containers'

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer} >
        <IndexRoute component={HomeContainer} />
        <Route path='solicitud-servicio' component={SolicitudServicioContainer} />
      </Route>
    </Router>
  )
}
