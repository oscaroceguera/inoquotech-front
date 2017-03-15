import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { userActions } from 'reducers/users'
import { bindActionCreators } from 'redux'
import { usersForList } from 'selectors/userSelectors'

import { browserHistory } from 'react-router'

import { GenericTable, SimpleCRUWrapper } from 'components'

const TABLE_PARAMS = [
  { keyName: 'name', label: 'Nombre' },
  { keyName: 'email', label: 'Email' },
  { keyName: 'status', label: 'Status' }
]

// TODO: proptypes
// TODO: cuando no se encuentren datos mostrar modal de no datos
// TODO: snackbar de error
// TODO: progress load
class UserListContainer extends Component {
  componentWillMount () {
    this.props.fetchUsersRequest()
  }

  goToUserAdd = () =>{
    browserHistory.push('/panel/usuarios/new')
  }
  render () {
    const { usersList } = this.props
    return (
      <SimpleCRUWrapper
        title={'LISTA DE USUARIOS'}
        returnPath={'/panel'}
        >
        <GenericTable
          data={usersList}
          columns={TABLE_PARAMS}
          goToRoute={this.goToUserAdd} />
      </SimpleCRUWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: usersForList(state),
  }
}

const mapdispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...userActions,
  }, dispatch)
}
export default connect(mapStateToProps, mapdispatchToProps)(UserListContainer)
