import React from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'
import { Checkbox } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'

function SolicitudServicioRequerido () {
  return (
    <FormRequestWrapper
      icon={'servicio'}
      title={'Solicitud de servicio'}
    >
      <div>
        <p>Servicio requerido:</p>
        <div>
          <Checkbox labelStyle={{color: Colors.grey500}} label="Diagnóstico" />
          <Checkbox labelStyle={{color: Colors.grey500}} label="Pre-Auditoría" />
          <Checkbox labelStyle={{color: Colors.grey500}} label="Implementación" />
          <Checkbox labelStyle={{color: Colors.grey500}} label="Muestreo" />
          <Checkbox labelStyle={{color: Colors.grey500}} label="Capacitación" />
        </div>
      </div>
      <GenericTextField
        floating={'Esquema requerido'}
      />
      <GenericTextField
        floating={'¿Tienen certificado en inocuidad, cuales?'}
        width={'large'}
      />
      <GenericTextField
        floating={'¿Tema de capacitación?'}
      />
      <GenericTextField
        floating={'Nivel jeráquico'}
        hintText="General, Mando medios, ..."
      />
      <GenericTextField
        floating={'¿Objetivos de muestras?'}
        hintText="Microbiólogico, Toxicológico, Alérgenos, ..."
        width={'large'}
      />
      <GenericTextField
        floating={'¿Para que require el muestreo?'}
        hintText="Rutinario, Retiro de producto, ..."
        width={'large'}
      />
      <GenericTextField
        floating={'Tipo de muestreo que requiere:'}
        hintText="Muestreo dirigido, Muestreo aleatorio, ..."
        width={'large'}
      />
      <GenericTextField
        floating={'¿Cuenta con programa de vigilancia y monitoreo?'}
        width={'large'}
        hintText="Si/No"
      />
      <GenericTextField
        floating={'¿Tiene fecha del último muestreo realizado?'}
        width={'large'}
        hintText="Si/No"
      />
      <GenericTextField
        floating={'¿Tiene resultados del último análisis?'}
        width={'large'}
        hintText="Si/No"
      />
      <GenericTextField
        floating={'¿El análisis se realizó en un laboratorio acreditado?'}
        width={'large'}
        hintText="Si/No"
      />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioRequerido
