import React, {Component} from 'react'
import { browserHistory } from 'react-router'

import { GenericTable, SimpleCRUWrapper } from 'components'

class UserListContainer extends Component {
  goToUserAdd = () =>{
    browserHistory.push('/panel/usuarios/new')
  }
  render () {
    return (
      <SimpleCRUWrapper
        title={'LISTA DE USUARIOS'}
        returnPath={'/panel'}
        >
        <GenericTable
          goToUserAdd={this.goToUserAdd} />
      </SimpleCRUWrapper>
    )
  }
}

export default UserListContainer
