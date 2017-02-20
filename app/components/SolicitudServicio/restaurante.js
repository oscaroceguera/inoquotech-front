import React from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

function SolicitudServicioRestaurante() {
  return (
    <FormRequestWrapper
      icon={'restaurante'}
      title={'Datos de restaurante'}
    >
      <GenericTextField
        floating={'¿Qué productos venden?'}
      />
      <GenericTextField
        floating={'Horarios de servicio de la empresa'}
        width={'medium'}
      />
      <GenericTextField
        floating={'Nº de sucursales'}
        width={'small'}
      />
      <GenericTextField
        floating={'¿Las instalaciones son propias o rentadas?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Cuenta con sistemas de congelación para sus materias primas?'}
        width={'xLarge'}
      />
      <GenericTextField
        floating={'¿Cuenta con servicio de verificacion de la NOM-251?'}
        width={'xLarge'}
      />
      <GenericTextField
        floating={'¿Cuenta con sanitarios exclusivos para sus empleados?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿El personal cuanta con capacitacón de manejo de alimentos?'}
        width={'xLarge'}
      />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioRestaurante
