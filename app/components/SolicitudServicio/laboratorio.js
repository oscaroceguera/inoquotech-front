import React from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

function SolicitudServicioLaboratorio() {
  return (
    <FormRequestWrapper
      icon={'laboratorio'}
      title={'Datos de laboratorio'}
    >
      <GenericTextField
        floating={'Giro del laboratorio'}
        width={'xLarge'}
        hintText={'Fitosanitaria, Residuos Toxicológicos, Inocuidad alimentaria, ...etc)'}
      />
      <GenericTextField
        floating={'Normatividad en la que requiere acreditarse'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Qué ensayos requiere acreditar?'}
      />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioLaboratorio
