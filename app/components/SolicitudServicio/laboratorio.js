import React from 'react'
import { TextField } from 'material-ui'
import { FormRequestWrapper } from 'components'

function SolicitudServicioLaboratorio() {
  return (
    <FormRequestWrapper
      icon={'laboratorio'}
      title={'Datos de laboratorio'}
    >
      <TextField floatingLabelText={'Giro del laboratorio'} />
      <TextField floatingLabelText={'Normatividad en la que requiere acreditarse'} />
      <TextField floatingLabelText={'¿Qué ensayos requiere acreditar?'} />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioLaboratorio
