import React from 'react'
import { TextField } from 'material-ui'
import { FormRequestWrapper } from 'components'

function SolicitudServicioAgricola() {
  return (
    <FormRequestWrapper
      icon={'agricola'}
      title={'Datos de agrícola'}
    >
      <TextField floatingLabelText={'¿Cuantas hectáreas de producción tiene la empresa?'} />
      <TextField floatingLabelText={'¿Qué productos producen?'} />
      <TextField floatingLabelText={'¿Llevan a cabo proceso de empacado?'} />
      <TextField floatingLabelText={'¿Cuántos albergues tiene la empresa?'} />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioAgricola
