import React from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

function SolicitudServicioDistribuidora() {
  return (
    <FormRequestWrapper
      icon={'distribuidora'}
      title={'Datos de distribuidora'}
    >
      <GenericTextField
        floating={'¿Cuántos almacenes tiene?'}
      />
      <GenericTextField
        floating={'¿Qué productos comercializa?'}
      />
      <GenericTextField
        floating={'¿Cuál es su mercado de destino?'}
      />
      <GenericTextField
        floating={'¿Es importador a USA?'}
      />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioDistribuidora
