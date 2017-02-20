import React from 'react'
import { TextField } from 'material-ui'
import { FormRequestWrapper } from 'components'

function SolicitudServicioDistribuidora() {
  return (
    <FormRequestWrapper
      icon={'distribuidora'}
      title={'Datos de distribuidora'}
    >
      <TextField floatingLabelText={'¿Cuántos almacenes tiene?'} />
      <TextField floatingLabelText={'¿Qué productos comercializa?'} />
      <TextField floatingLabelText={'¿Cuál es su mercado de destino?'} />
      <TextField floatingLabelText={'¿Es importador a USA?'} />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioDistribuidora
