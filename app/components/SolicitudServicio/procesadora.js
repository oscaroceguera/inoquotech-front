import React from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

function SolicitudServicioProcesadora() {
  return (
    <FormRequestWrapper
      icon={'procesadora'}
      title={'Datos de procesadora'}
    >
      <GenericTextField
        floating={'¿Qué productos fabrican?'}
      />
      <GenericTextField
        floating={'Turnos de producción'}
      />
      <GenericTextField
        floating={'Nº de plantas'}
        width={'small'}
      />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioProcesadora
