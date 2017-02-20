import React from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

function SolicitudServicioTransporte() {
  return (
    <FormRequestWrapper
      icon={'transporte'}
      title={'Datos de transporte'}
    >
      <GenericTextField
        floating={'¿Qué productos transportan?'}
      />
      <GenericTextField
        floating={'¿Cuentan con algún tipo de certificación?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Llevan a cabo un programa de seguridad e higiene?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Cuentan con permisos para el transporte de la mercancía?'}
        hintText={'Nacional e Internacional SCT'}
        width={'xLarge'}
      />
      <GenericTextField
        floating={'Nº flotillas/vehículos'}
      />
      <GenericTextField
        floating={'¿Cuentan con talleres mecánicos propios?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Cuentan con registros de actividades?'}
        hintText={'Documentación necesaria para registro de actividades (Trazabilidad)'}
        width={'xLarge'}
      />
      <GenericTextField
        floating={'¿Realiza frecuentemente exámenes toxicológicos a los choferes?'}
        width={'xLarge'}
      />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioTransporte
