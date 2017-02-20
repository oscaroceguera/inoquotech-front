import React from 'react'
import { FormRequestWrapper, FormRadiobuttomGeneric, GenericTextField } from 'components'
import { RadioButton, RadioButtonGroup, AutoComplete } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'

const AUTOCOMPLETE = {
  marginRight: '.5em'
}

const {array, func} = React.PropTypes

SolicitudGeneralesEmpresa.proptypes = {
  dataSource: array.isRequired,
  handle: func.isRequired
}

function SolicitudGeneralesEmpresa ({dataSource, handle}) {
  return (
    <FormRequestWrapper
      icon={'empresa'}
      title={'Datos de la empresa'}
    >
      <GenericTextField
        floating={'Nombre de la empresa'}
        width={'large'}
      />
      <GenericTextField
        floating={'RFC'}
        width={'small'}
      />
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
      <GenericTextField
        floating={'Localidad'}
      />
      <GenericTextField
        floating={'Calle y número'}
        width={'large'}
      />
      <GenericTextField
        floating={'Colonia'}
      />
      <GenericTextField
        floating={'C.P.'}
        width={'xSmall'}
      />
      <GenericTextField
        floating={'Teléfono de la empresa'}
      />
      <GenericTextField
        floating={'Email de la empresa'}
      />
      <GenericTextField
        floating={'Nombre de representante legal'}
      />
      <GenericTextField
        floating={'Teléfono de representante legal'}
      />
      <GenericTextField
        floating={'Email de representante legal'}
      />
      <GenericTextField
        floating={'Nombre de contacto'}
      />
      <GenericTextField
        floating={'Teléfono de contacto'}
      />
      <GenericTextField
        floating={'Email de contacto'}
      />
      <GenericTextField
        floating={'Cargo de contacto'}
      />
      <FormRadiobuttomGeneric title='Giro de la empresa'>
        <RadioButtonGroup name='giro' style={{display: 'flex', width: '300px'}}>
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
      </FormRadiobuttomGeneric>
    </FormRequestWrapper>
  )
}

export default SolicitudGeneralesEmpresa
