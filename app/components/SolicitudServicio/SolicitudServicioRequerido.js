import React from 'react'
import { FormRequestWrapper } from 'components'
import { TextField, Checkbox } from 'material-ui'
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
      <TextField floatingLabelText={'Esquema requerido'} />
      <TextField floatingLabelText={'¿Tienen certificado en inocuidad, cuales?'} />
      <TextField floatingLabelText={'¿Tema de capacitación?'} />
      <TextField floatingLabelText={'Nivel jeráquico'} hintText="General, Mando medios, ..." />
      <TextField floatingLabelText={'¿Objetivos de muestras?'} hintText="Microbiólogico, Toxicológico, Alérgenos, ..." />
      <TextField floatingLabelText={'¿Para que require el muestreo?'} hintText="Rutinario, Retiro de producto, ..." />
      <TextField floatingLabelText={'Tipo de muestreo que requiere:'} hintText="Muestreo dirigido, Muestreo aleatorio, ..." />
      <TextField floatingLabelText={'¿Cuenta con programa de vigilancia y monitoreo?'} hintText="Si/No" />
      <TextField floatingLabelText={'¿Tiene fecha del último muestreo realizado?'} hintText="Si/No" />
      <TextField floatingLabelText={'¿Tiene resultados del último análisis?'} hintText="Si/No" />
      <TextField floatingLabelText={'¿El análisis se realizó en un laboratorio acreditado?'} hintText="Si/No" />
    </FormRequestWrapper>
  )
}

export default SolicitudServicioRequerido
