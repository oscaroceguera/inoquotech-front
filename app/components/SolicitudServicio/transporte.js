import React from 'react'
import { TextField } from 'material-ui'
import { FormRequestWrapper } from 'components'

function SolicitudServicioTransporte() {
  return (
    <FormRequestWrapper
      icon={'transporte'}
      title={'Datos de transporte'}
    >
      <TextField floatingLabelText={'¿Qué productos transportan?'} />
      <TextField floatingLabelText={'¿Cuentan con algún tipo de certificación?'} />
      <TextField floatingLabelText={'¿Llevan a cabo un programa de seguridad e higiene?'} />
      <TextField floatingLabelText={'Cuentan con permisos para el transporte de la mercancía (nacional/internacional SCT)'} />
      <TextField floatingLabelText={'Número de flotillas/vehículos'} />
      <TextField floatingLabelText={'¿Cuentan con talleres mecánicos propios?'} />
      <TextField floatingLabelText={'¿Cuentan con documentación necesaria para registro de actividades (trazabilidad)?'} />
      <TextField floatingLabelText={'¿Realiza frecuentemente exámenes toxicológicos a los choferes?'} />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioTransporte
