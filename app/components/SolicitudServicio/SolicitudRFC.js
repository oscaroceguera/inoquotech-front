import React, {PropTypes,Component} from 'react'
import { GenericTextField } from 'components'

const {func} = PropTypes

class SolicitudRFC extends Component {
  static propTypes = {
    handleTextChange: func.isRequired
  }

  onChildChange (e, value, section, field) {
    this.props.handleTextChange(e, value, section, field)
  }

  render () {
    return (
      <div>
        <GenericTextField
          floating={'RFC de cliente'}
          width={'small'}
          onChange={(e, value, section, field) => this.onChildChange(e, value, 'client', 'isClientRFC')} // eslint-disable-line
        />
      </div>
    )
  }
}

export default SolicitudRFC
