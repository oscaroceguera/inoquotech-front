import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { userActions } from 'reducers/users'
import { catalogsActions } from 'reducers/catalogs'
import { bindActionCreators } from 'redux'
import * as Colors from 'material-ui/styles/colors'
import { SimpleCRUWrapper, GenericTextField, FormRadiobuttomWrapper, GenericCheckbox } from 'components'
import aux from 'commons/FormAuxFunctions'
import styled from 'styled-components'
import {passwordsAreEqualsSelector, showSubmitSelector, modulesLengthSelector} from 'selectors/userSelectors'

const FormContainer = styled.div`
  display: flex;
  padding: 1em 2em;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  @media(max-width: 420px) {
    display: block;
  }
  @media(max-width: 420px){
    padding: 1em;
  }
`

const FormTexFieldItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
  @media(max-width: 1024px){
    max-width: 60%;
  }
  @media(max-width: 420px){
    max-width: 100%;
  }
`

const FormCheckboxesItems = styled.div`
  max-width: 30%;
  @media(max-width: 420px){
    max-width: 100%;
    margin-top: 1.5em;
  }
`

const InstructionCheckboxex = styled.p`
  padding: 0;
  color: ${Colors.red500};
`

class UserFormContainer extends Component {
  static propTypes = {
    moduleTypes: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    showSubmit: PropTypes.bool.isRequired,
    showInstruction: PropTypes.bool.isRequired,
    passwordsAreEquals: PropTypes.string.isRequired
  }
  componentWillMount () {
    const modulength = this.props.moduleTypes.length

    if (modulength === 0) {
      this.props.catForDashboardRequest()
    }

    this.props.resetFields()
  }
  handleErrorText  = (section, field, type) => {
    const item = this.props[section][field]
    return aux.errorTextMessage(item, type)
  }
  onTextChange = (e, value, section, field) => {
    this.props.listenUserFields(section, field, value)
  }
  onCheckboxChage = (e, checked, section, field) => {
    const value = e.target.value

    if (!checked) {
      this.props.uncheckedCheckboxes(section, field, value)
      return
    }

    this.props.listendCheckboxes(section, field, value)
  }

  render () {
    const { moduleTypes, passwordsAreEquals, showSubmit, showInstruction } = this.props
    return (
      <SimpleCRUWrapper
        title={'CREAR USUARIO'}
        returnPath={'/panel/usuarios'}
        hasRBtn
        // TODO: Cuando se actualiza este debera de decir actualizar
        label={'Guardar'}
        disabled={showSubmit}
        >
        <FormContainer>
          <FormTexFieldItems>
            <GenericTextField
              floating={'Nombre'}
              onChange={(e, value, section, field) => this.onTextChange(e, value, 'user', 'name')} // eslint-disable-line
              onUpdateValidate={this.handleErrorText('user', 'name', 'text')} // eslint-disable-line
              />
            <GenericTextField
              floating={'Apellido Paterno'}
              onChange={(e, value, section, field) => this.onTextChange(e, value, 'user', 'firstName')} // eslint-disable-line
              onUpdateValidate={this.handleErrorText('user', 'firstName', 'text')} // eslint-disable-line
              />
            <GenericTextField
              floating={'Apellido Materno'}
              onChange={(e, value, section, field) => this.onTextChange(e, value, 'user', 'secondName')} // eslint-disable-line
              onUpdateValidate={this.handleErrorText('user', 'secondName', 'text')} // eslint-disable-line
              />
            <GenericTextField
              floating={'Email'}
              onChange={(e, value, section, field) => this.onTextChange(e, value, 'user', 'email')} // eslint-disable-line
              onUpdateValidate={this.handleErrorText('user', 'email', 'email')} // eslint-disable-line
              />
            <GenericTextField
              floating={'Password'}
              type={'password'}
              onChange={(e, value, section, field) => this.onTextChange(e, value, 'user', 'password')} // eslint-disable-line
              onUpdateValidate={this.handleErrorText('user', 'password', 'text')} // eslint-disable-line
              />
            <GenericTextField
              floating={'Confirmar password'}
              type={'password'}
              onChange={(e, value, section, field) => this.onTextChange(e, value, 'user', 'confPassword')} // eslint-disable-line
              onUpdateValidate={passwordsAreEquals} // eslint-disable-line
              />
          </FormTexFieldItems>
          <FormCheckboxesItems>
            {/* TODO: if disabled is false no mostrar esto */}
            {showInstruction
              ? <InstructionCheckboxex>{'Mínimo un módulo seleccionado'}</InstructionCheckboxex>
              : ''
            }
            <FormRadiobuttomWrapper title=''>
              <GenericCheckbox
                items={moduleTypes}
                onChange={(e, checked, section, field) => this.onCheckboxChage(e, checked, 'user', 'moduleTypes')} // eslint-disable-line
                />
            </FormRadiobuttomWrapper>
          </FormCheckboxesItems>
        </FormContainer>
      </SimpleCRUWrapper>
    )
  }
}

// TODO: proptypes
const mapStateToProps = (state) => {
  const catalogsJS = state.catalogs.toJS()
  const userJS = state.users.toJS()
  return {
    showSubmit: !showSubmitSelector(state),
    passwordsAreEquals: passwordsAreEqualsSelector(state),
    showInstruction: !modulesLengthSelector(state),
    user: userJS.user,
    moduleTypes: catalogsJS.modules
  }
}

const mapdispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...userActions,
    ...catalogsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapdispatchToProps)(UserFormContainer)
