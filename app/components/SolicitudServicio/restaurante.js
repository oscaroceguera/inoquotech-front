import React from 'react'
import { TextField } from 'material-ui'
import { FormRequestWrapper } from 'components'

function SolicitudServicioRestaurante() {
  return (
    <FormRequestWrapper
      icon={'restaurante'}
      title={'Datos de restaurante'}
    >
      <TextField floatingLabelText={'¿Que tipo de sistema de producción tiene?'} />
      <TextField floatingLabelText={'¿Tiene juntas todas sus unidades de producción, en caso de si donde?'} />
      <TextField floatingLabelText={'¿Qué productos o especies producen?'} />
      <TextField floatingLabelText={'¿Llevan a cabo proceso de empacado?'} />
      <TextField floatingLabelText={'¿Cuántos albergues tiene la empresa?'} />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioRestaurante
