import React from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

function SolicitudServicioAgricola() {
  return (
    <FormRequestWrapper
      icon={'agricola'}
      title={'Datos de agrícola'}
    >
      <GenericTextField
        floating={'¿Cuantas hectáreas de producción tiene la empresa?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Qué productos producen?'}
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

export default SolicitudServicioAgricola
