import React, {Component, PropTypes} from 'react'
import { FormRequestWrapper, GenericTextField } from 'components'

const {func, string, array} = PropTypes

class GenericTextFieldForm extends Component {
  static defaultProps = {
    icon : '',
    title: ''
  }

  static propTypes = {
    handleTextChange: func.isRequired,
    handleError: func,
    fields: array.isRequired,
    icon: string.isRequired,
    title: string.isRequired
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  onValidate (section, field, type) {
    return this.props.handleError(section, field, type)
  }

  mapItems () {
    const {fields} = this.props
    return fields.map(({floating, hinText, width, sectionItem, fieldItem, requiredType}, key) => (
      <GenericTextField
        key={key}
        floating={floating}
        hintText={hinText}
        width={width}
        onChange={(e, value, section, field) => this.onChildChange(e, value, sectionItem, fieldItem)} // eslint-disable-line
        onUpdateValidate={this.onValidate(sectionItem, fieldItem, requiredType)} // eslint-disable-line
      />
    ))
  }

  render () {
    const {icon, title} = this.props
    return (
      <FormRequestWrapper
        icon={icon}
        title={title}
      >
        {this.mapItems()}
      </FormRequestWrapper>
    )
  }
}

export default GenericTextFieldForm
