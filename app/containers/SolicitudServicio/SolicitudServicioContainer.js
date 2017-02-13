import React, { Component } from 'react'
import { RadioButton, RadioButtonGroup, TextField, AutoComplete, Checkbox } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'
import EmpresaIcon from 'material-ui/svg-icons/communication/business'
import SolicitudIcon from 'material-ui/svg-icons/action/add-shopping-cart'

import { FormRequestWrapper } from 'components'

const FormsContainer = styled.div`
  max-width: 1000px;
  margin: 2.5em auto;
  @media (max-width: 1000px) {
    margin: 2.5em 1em;
  }
`

const H1 = styled.h1`
  color: ${Colors.deepPurple500};
`

const IsClientContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
`

const IsClientAsk = styled.p`
  color: ${Colors.grey900};
`

const TxtFieldLarge = styled(TextField)`
  margin-right: .5em;
  width: 25em !important;
  @media (max-width: 420px) {
    width: 100% !important;
  }
`
const TxtFieldMedium = styled(TextField)`
  margin-right: .5em;
  width: 15em !important;
  @media (max-width: 420px) {
    width: 100% !important;
  }
`

const TxtFieldSmall = styled(TextField)`
  margin-right: .5em;
  width: 10em !important;
  @media (max-width: 420px) {
    width: 100% !important;
  }
`

const AUTOCOMPLETE = {
  marginRight: '.5em'
}

class SolicitudServicioContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      dataSource: []
    }
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render () {
    return (
      <FormsContainer>
        <H1>{'Solicitud de Servicio'}</H1>
        <IsClientContainer>
          <IsClientAsk>{'¿Ya eres cliente?'}</IsClientAsk>
          <RadioButtonGroup name='isClient' style={{display: 'flex', width: '300px', marginLeft: '1em'}}>
            <RadioButton
              value='true'
              label='Si'
              style={{width: '30%'}}
              labelStyle={{color: Colors.grey500}}
            />
            <RadioButton
              value='false'
              label='No'
              style={{width: '30%'}}
              labelStyle={{color: Colors.grey500}}
            />
          </RadioButtonGroup>
        </IsClientContainer>
        <div>
          <TxtFieldMedium floatingLabelText={'RFC de cliente'} />
        </div>

        <FormRequestWrapper
          icon={<EmpresaIcon color={Colors.pink500} />}
          title={'Datos de la empresa'}
        >
          <TxtFieldLarge floatingLabelText={'Nombre de la empresa'} />
          <TxtFieldMedium floatingLabelText={'RFC'} />
          <AutoComplete
            floatingLabelText="País"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            style={AUTOCOMPLETE}
          />
          <AutoComplete
            floatingLabelText="Estado"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            style={AUTOCOMPLETE}
          />
          <AutoComplete
            floatingLabelText="Municipio"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            style={AUTOCOMPLETE}
          />
          <TxtFieldMedium floatingLabelText={'Localidad'} />
          <TxtFieldLarge floatingLabelText={'Calle y número'} />
          <TxtFieldMedium floatingLabelText={'Colonia'} />
          <TxtFieldSmall floatingLabelText={'C.P.'} />
          <TxtFieldMedium floatingLabelText={'Teléfono de la empresa'} />
          <TxtFieldMedium floatingLabelText={'Email de la empresa'} />
          <TxtFieldLarge floatingLabelText={'Nombre de representante legal'} />
          <TxtFieldMedium floatingLabelText={'Teléfono de representante legal'} />
          <TxtFieldMedium floatingLabelText={'Email de representante legal'} />
          <TxtFieldLarge floatingLabelText={'Nombre de contacto'} />
          <TxtFieldMedium floatingLabelText={'Teléfono de contacto'} />
          <TxtFieldMedium floatingLabelText={'Email de contacto'} />
          <TxtFieldMedium floatingLabelText={'Cargo de contacto'} />
          <div>
            <p>Giro de la empresa:</p>
            <RadioButtonGroup name='giro'>
              <RadioButton
                value='a'
                label='Agrícola'
                style={{width: '30%', marginRight: '.5em'}}
                labelStyle={{color: Colors.grey500}}
              />
              <RadioButton
                value='b'
                label='Acuícola'
                style={{width: '30%', marginRight: '.5em'}}
                labelStyle={{color: Colors.grey500}}
              />
              <RadioButton
                value='c'
                label='Laboratorio'
                style={{width: '30%', marginRight: '.5em'}}
                labelStyle={{color: Colors.grey500}}
              />
              <RadioButton
                value='d'
                label='Procesadora'
                style={{width: '30%', marginRight: '.5em'}}
                labelStyle={{color: Colors.grey500}}
              />
              <RadioButton
                value='e'
                label='Distibuidora'
                style={{width: '30%', marginRight: '.5em'}}
                labelStyle={{color: Colors.grey500}}
              />
              <RadioButton
                value='f'
                label='Restaurante'
                style={{width: '30%', marginRight: '.5em'}}
                labelStyle={{color: Colors.grey500}}
              />
              <RadioButton
                value='g'
                label='Transporte'
                style={{width: '30%'}}
                labelStyle={{color: Colors.grey500}}
              />
            </RadioButtonGroup>
          </div>
        </FormRequestWrapper>

        <FormRequestWrapper
          icon={<SolicitudIcon color={Colors.indigo500} />}
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
          <TxtFieldMedium floatingLabelText={'Esquema requerido'} />
          <TxtFieldLarge floatingLabelText={'¿Tienen certificado en inocuidad, cuales?'} />
          <TxtFieldLarge floatingLabelText={'¿Tema de capacitación?'} />
          <TxtFieldMedium floatingLabelText={'Nivel jeráquico'} hintText="General, Mando medios, ..." />
          <TxtFieldLarge floatingLabelText={'¿Objetivos de muestras?'} hintText="Microbiólogico, Toxicológico, Alérgenos, ..." />
          <TxtFieldLarge floatingLabelText={'¿Para que require el muestreo?'} hintText="Rutinario, Retiro de producto, ..." />
          <TxtFieldLarge floatingLabelText={'Tipo de muestreo que requiere:'} hintText="Muestreo dirigido, Muestreo aleatorio, ..." />
          <TxtFieldLarge floatingLabelText={'¿Cuenta con programa de vigilancia y monitoreo?'} hintText="Si/No" />
          <TxtFieldLarge floatingLabelText={'¿Tiene fecha del último muestreo realizado?'} hintText="Si/No" />
          <TxtFieldLarge floatingLabelText={'¿Tiene resultados del último análisis?'} hintText="Si/No" />
          <TxtFieldLarge floatingLabelText={'¿El análisis se realizó en un laboratorio acreditado?'} hintText="Si/No" />
        </FormRequestWrapper>

      </FormsContainer>
    )
  }
}

export default SolicitudServicioContainer
