import React, {PropTypes,Component} from 'react'
import { GenericTextField } from 'components'
import {RFC_FIELDS} from './RFCFormFields'

const {func} = PropTypes

class SolicitudRFC extends Component {
  static propTypes = {
    handleTextChange: func.isRequired,
    handleError: func,
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  onValidate (section, field, type) {
    return this.props.handleError(section, field, type)
  }

  mapItems () {
    return RFC_FIELDS.map(({floating, hinText, width, sectionItem, fieldItem, requiredType}, key) => (
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
    return (
      <div>
        {this.mapItems()}
      </div>
    )
  }
}

export default SolicitudRFC
