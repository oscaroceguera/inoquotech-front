import React from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

function SolicitudServicioAcuicola() {
  return (
    <FormRequestWrapper
      icon={'acuicola'}
      title={'Datos de acuícola'}
    >
      <GenericTextField
        floating={'¿Que tipo de sistema de producción tiene?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Tiene juntas todas sus unidades de producción, en caso de si donde?'}
        width={'xLarge'}
      />
      <GenericTextField
        floating={'¿Qué productos o especies producen?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Llevan a cabo proceso de empacado?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Cuántos albergues tiene la empresa?'}
        width={'large'}
      />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioAcuicola
