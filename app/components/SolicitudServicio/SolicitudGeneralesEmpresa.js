import React, {PropTypes, Component} from 'react'
import { FormRequestWrapper, FormRadiobuttomGeneric, GenericTextField } from 'components'
import { RadioButton, RadioButtonGroup, AutoComplete } from 'material-ui'
import * as Colors from 'material-ui/styles/colors'

const AUTOCOMPLETE = {
  marginRight: '.5em'
}

const {array, func} = PropTypes

class SolicitudGeneralesEmpresa extends Component {

  static propTypes = {
    dataSource: array.isRequired,
    handle: func.isRequired,
    handleTextChange: func.isRequired,
    handleError: func
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  onValidate (section, field, type) {
    return this.props.handleError(section, field, type)
  }

  render () {
    const { dataSource, handle } = this.props

    return (
      <FormRequestWrapper
        icon={'empresa'}
        title={'Datos de la empresa'}
      >
        <GenericTextField
          floating={'Nombre de la empresa'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'companyName')} // eslint-disable-line
        />
        <GenericTextField
          floating={'RFC'}
          width={'small'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'rfc')} // eslint-disable-line
          onUpdateValidate={this.onValidate('company', 'rfc', 'rfc')} // eslint-disable-line
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
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'locality')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Calle y número'}
          width={'large'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'address')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Colonia'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'neighborhood')} // eslint-disable-line
        />
        <GenericTextField
          floating={'C.P.'}
          width={'xSmall'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'zipCode')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Teléfono de la empresa'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'companyPhone')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Email de la empresa'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'companyEmail')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Nombre de representante legal'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'legalName')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Teléfono de representante legal'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'legalPhone')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Email de representante legal'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'legalEmail')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Nombre de contacto'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'contactName')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Teléfono de contacto'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'contactPhone')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Email de contacto'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'contactEmail')} // eslint-disable-line
        />
        <GenericTextField
          floating={'Cargo de contacto'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'contactPosition')} // eslint-disable-line
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
}

export default SolicitudGeneralesEmpresa
