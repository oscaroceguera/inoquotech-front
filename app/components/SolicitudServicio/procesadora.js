import React from 'react'
import { TextField } from 'material-ui'
import { FormRequestWrapper } from 'components'

function SolicitudServicioProcesadora() {
  return (
    <FormRequestWrapper
      icon={'procesadora'}
      title={'Datos de procesadora'}
    >
      <TextField floatingLabelText={'¿Qué productos fabrican?'} />
      <TextField floatingLabelText={'Turnos de producción'} />
      <TextField floatingLabelText={'¿Qué productos o especies producen?'} />
      <TextField floatingLabelText={'Número de plantas procesadoras'} />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioProcesadora
