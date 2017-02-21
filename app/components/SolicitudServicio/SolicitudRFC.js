import React, {PropTypes,Component} from 'react'
import { GenericTextField } from 'components'

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

  render () {
    return (
      <div>
        <GenericTextField
          floating={'RFC de cliente'}
          width={'small'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'client', 'isClientRFC')} // eslint-disable-line
          onUpdateValidate={this.onValidate('client', 'isClientRFC', 'rfc')} // eslint-disable-line
        />
      </div>
    )
  }
}

export default SolicitudRFC
