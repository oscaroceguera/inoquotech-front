import React, {Component} from 'react'

import { GenericTable, GenericToolbar } from 'components'

class UserListContainer extends Component {
  render () {
    return (
      <div>
        <GenericToolbar
          title={'LISTA DE USUARIOS'}
          path={'/panel'}
        />
        <GenericTable />
      </div>
    )
  }
}

export default UserListContainer
