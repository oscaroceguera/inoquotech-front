import React from 'react'
import { FormRequestWrapper } from 'components'
import { RadioButton, RadioButtonGroup, TextField, AutoComplete } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import EmpresaIcon from 'material-ui/svg-icons/communication/business'

const AUTOCOMPLETE = {
  marginRight: '.5em'
}

function SolicitudGeneralesEmpresa ({dataSource, handle}) {
  return (
    <FormRequestWrapper
      icon={<EmpresaIcon color={Colors.pink500} />}
      title={'Datos de la empresa'}
    >
      <TextField floatingLabelText={'Nombre de la empresa'} />
      <TextField floatingLabelText={'RFC'} />
      <AutoComplete
        floatingLabelText="País"
        dataSource={dataSource}
        onUpdateInput={handle}
        style={AUTOCOMPLETE}
      />
      <AutoComplete
        floatingLabelText="Estado"
        dataSource={dataSource}
        onUpdateInput={handle}
        style={AUTOCOMPLETE}
      />
      <AutoComplete
        floatingLabelText="Municipio"
        dataSource={dataSource}
        onUpdateInput={handle}
        style={AUTOCOMPLETE}
      />
    <TextField floatingLabelText={'Localidad'} />
      <TextField floatingLabelText={'Calle y número'} />
      <TextField floatingLabelText={'Colonia'} />
      <TextField floatingLabelText={'C.P.'} />
      <TextField floatingLabelText={'Teléfono de la empresa'} />
      <TextField floatingLabelText={'Email de la empresa'} />
      <TextField floatingLabelText={'Nombre de representante legal'} />
      <TextField floatingLabelText={'Teléfono de representante legal'} />
      <TextField floatingLabelText={'Email de representante legal'} />
      <TextField floatingLabelText={'Nombre de contacto'} />
      <TextField floatingLabelText={'Teléfono de contacto'} />
      <TextField floatingLabelText={'Email de contacto'} />
      <TextField floatingLabelText={'Cargo de contacto'} />
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
  )
}

export default SolicitudGeneralesEmpresa
