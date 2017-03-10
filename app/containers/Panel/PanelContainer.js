import React, {Component} from 'react'
import {TopBar} from 'components'

class PanelContainer extends Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  }
  render () {
    return (
      <div>
        <TopBar />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default PanelContainer
