import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'
import { Checkbox } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'

const {func} = PropTypes

class SolicitudServicioRequerido extends Component {
  static propTypes = {
    handleTextChange: func.isRequired
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  render () {
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
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'esquema')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Tienen certificado en inocuidad, cuales?'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'hasCertificado')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Tema de capacitación?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'capacitacionTema')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Nivel jeráquico'}
          hintText="General, Mando medios, ..."
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'nivelJerarquico')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Objetivos de muestras?'}
          hintText="Microbiólogico, Toxicológico, Alérgenos, ..."
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'objetivoMuestras')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'¿Para que require el muestreo?'}
          hintText="Rutinario, Retiro de producto, ..."
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'porqueMuestreo')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'Tipo de muestreo que requiere:'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'tipoMuestreo')} // eslint-disable-line
          hintText="Muestreo dirigido, Muestreo aleatorio, ..."
          width={'large'}
        />
        <GenericTextField
          floating={'¿Cuenta con programa de vigilancia y monitoreo?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'hasProgramaVigilanciaMonitoreo')} // eslint-disable-line
          width={'large'}
          hintText="Si/No"
        />
        <GenericTextField
          floating={'¿Tiene fecha del último muestreo realizado?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'muestreoFecha')} // eslint-disable-line
          width={'large'}
          hintText="Si/No"
        />
        <GenericTextField
          floating={'¿Tiene resultados del último análisis?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'analisisFecha')} // eslint-disable-line
          width={'large'}
          hintText="Si/No"
        />
        <GenericTextField
          floating={'¿El análisis se realizó en un laboratorio acreditado?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'laboratorioAcreditado')} // eslint-disable-line
          width={'large'}
          hintText="Si/No"
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioRequerido
