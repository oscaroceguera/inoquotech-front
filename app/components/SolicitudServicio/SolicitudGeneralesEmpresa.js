import React, {PropTypes, Component} from 'react'
import { FormRequestWrapper, FormRadiobuttomWrapper, GenericRadioButton, GenericTextField, GenericAutoComplete } from 'components'

const {array, func} = PropTypes

class SolicitudGeneralesEmpresa extends Component {
  static propTypes = {
    dataSourceCountries: array.isRequired,
    servicesTypes: array.isRequired,
    handleUpdate: func.isRequired,
    handleTextChange: func.isRequired,
    handleError: func,
    filter: func.isRequired,
    dataSourceStates: array,
    dataSourceTowns: array,
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  onValidate (section, field, type) {
    return this.props.handleError(section, field, type)
  }

  render () {
    const { handleUpdate, dataSourceTowns, dataSourceCountries, dataSourceStates, servicesTypes } = this.props
    return (
      <div>
        <FormRequestWrapper
          icon={'empresa'}
          title={'Datos de la empresa'}
        >
           <GenericTextField
            floating={'Nombre de la empresa'}
            width={'large'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'companyName')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'companyName', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'RFC'}
            width={'small'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'rfc')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'rfc', 'rfc')} // eslint-disable-line
          />
          <GenericAutoComplete
            label="País"
            dataSource={dataSourceCountries}
            handle={(value, data, field) => handleUpdate(value, data, 'country')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'country', 'text')} // eslint-disable-line
          />
          <GenericAutoComplete
            label="Estado"
            dataSource={dataSourceStates}
            handle={(value, data, field) => handleUpdate(value, data, 'state')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'state', 'text')} // eslint-disable-line
          />
          <GenericAutoComplete
            label="Municipio"
            dataSource={dataSourceTowns}
            handle={(value, data, field) => handleUpdate(value, data, 'town')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'town', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Localidad'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'locality')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Calle y número'}
            width={'large'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'address')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'address', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Colonia'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'neighborhood')} // eslint-disable-line
          />
          <GenericTextField
            floating={'C.P.'}
            width={'xSmall'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'zipCode')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'zipCode', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Teléfono de la empresa'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'companyPhone')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'companyPhone', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Email de la empresa'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'companyEmail')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'companyEmail', 'email')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Nombre de representante legal'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'legalName')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'legalName', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Teléfono de representante legal'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'legalPhone')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'legalPhone', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Email de representante legal'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'legalEmail')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'legalEmail', 'email')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Nombre de contacto'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'contactName')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'contactName', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Teléfono de contacto'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'contactPhone')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'contactPhone', 'text')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Email de contacto'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'contactEmail')} // eslint-disable-line
            onUpdateValidate={this.onValidate('company', 'contactEmail', 'email')} // eslint-disable-line
          />
          <GenericTextField
            floating={'Cargo de contacto'}
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'contactPosition')} // eslint-disable-line
          />
        </FormRequestWrapper>
        <FormRadiobuttomWrapper title={'Giro de la empresa'}>
          <GenericRadioButton
            onChange={(e, value, section, field) => this.onChildChange(e, value, 'company', 'companyGiro')} // eslint-disable-line
            name={'giro'}
            radios={servicesTypes}
            />
        </FormRadiobuttomWrapper>
      </div>
    )
  }
}

export default SolicitudGeneralesEmpresa
