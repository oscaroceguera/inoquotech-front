import React, {Component, PropTypes} from 'react'
import {
  FormRequestWrapper,
  FormRadiobuttomWrapper,
  GenericTextField,
  GenericCheckbox
} from 'components'

const {func, array} = PropTypes

class SolicitudServicioRequerido extends Component {
  static propTypes = {
    handleTextChange: func.isRequired,
    handleError: func,
    servicesTypes: array.isRequired,
    handleCheckboxChange: func.isRequired
  }

  onChidCheckboxChange (e, checked, section, field) {
    this.props.handleCheckboxChange(e, checked, section, field)
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  onValidate (section, field, type) {
    return this.props.handleError(section, field, type)
  }

  render () {
    return (
      <FormRequestWrapper
        icon={'servicio'}
        title={'Solicitud de servicio'}
      >
        <FormRadiobuttomWrapper title={'Servicio requerido'}>
          <GenericCheckbox
            items={this.props.servicesTypes}
            onChange={(e, checked, section, field) => this.onChidCheckboxChange(e, checked, 'servicio', 'tipoServicio')} // eslint-disable-line
          />
        </FormRadiobuttomWrapper>
        <GenericTextField
          floating={'Esquema requerido'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'esquema')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'esquema', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Tienen certificado en inocuidad, cuales?'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'hasCertificado')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'hasCertificado', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Tema de capacitación?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'capacitacionTema')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'capacitacionTema', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Nivel jeráquico'}
          hintText="General, Mando medios, ..."
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'nivelJerarquico')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'nivelJerarquico', 'text')} // eslint-disable-line
        />
        <GenericTextField
          floating={'¿Objetivos de muestras?'}
          hintText="Microbiólogico, Toxicológico, Alérgenos, ..."
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'objetivoMuestras')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'objetivoMuestras', 'text')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'¿Para que require el muestreo?'}
          hintText="Rutinario, Retiro de producto, ..."
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'porqueMuestreo')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'porqueMuestreo', 'text')} // eslint-disable-line
          width={'large'}
        />
        <GenericTextField
          floating={'Tipo de muestreo que requiere:'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'tipoMuestreo')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'tipoMuestreo', 'text')} // eslint-disable-line
          hintText="Muestreo dirigido, Muestreo aleatorio, ..."
          width={'large'}
        />
        <GenericTextField
          floating={'¿Cuenta con programa de vigilancia y monitoreo?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'hasProgramaVigilanciaMonitoreo')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'hasProgramaVigilanciaMonitoreo', 'text')} // eslint-disable-line
          width={'large'}
          hintText="Si/No"
        />
        <GenericTextField
          floating={'¿Tiene fecha del último muestreo realizado?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'muestreoFecha')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'muestreoFecha', 'text')} // eslint-disable-line
          width={'large'}
          hintText="Si/No"
        />
        <GenericTextField
          floating={'¿Tiene resultados del último análisis?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'analisisFecha')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'analisisFecha', 'text')} // eslint-disable-line
          width={'large'}
          hintText="Si/No"
        />
        <GenericTextField
          floating={'¿El análisis se realizó en un laboratorio acreditado?'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'servicio', 'laboratorioAcreditado')} // eslint-disable-line
          onUpdateValidate={this.onValidate('servicio', 'laboratorioAcreditado', 'text')} // eslint-disable-line
          width={'large'}
          hintText="Si/No"
        />
      </FormRequestWrapper>
    )
  }
}

export default SolicitudServicioRequerido
