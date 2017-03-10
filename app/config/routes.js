import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
<<<<<<< HEAD
import { MainContainer, HomeContainer, SolicitudServicioContainer, UserFormContainer } from 'containers'
=======
import { MainContainer, HomeContainer, SolicitudServicioContainer, PanelContainer, ModulesListContainer } from 'containers'
>>>>>>> dashboard

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer} >
        <IndexRoute component={HomeContainer} />
        <Route path='solicitud-servicio' component={SolicitudServicioContainer} />
<<<<<<< HEAD
        <Route path='usuarios' component={UserFormContainer} />
=======
        <Route path='panel' component={PanelContainer}>
          <IndexRoute component={ModulesListContainer} />
        </Route>
>>>>>>> dashboard
      </Route>
    </Router>
  )
}
