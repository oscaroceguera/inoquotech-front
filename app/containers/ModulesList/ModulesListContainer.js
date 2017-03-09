import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {catalogsActions} from 'reducers/catalogs'

class ModulesListContainer extends Component {
  componentWillMount () {
    this.props.catForDashboardRequest()
  }
  render () {
    return (
      <h1>ModulesListContainer</h1>
    )
  }
}

// TODO: PROPTYPES
const mapStateToProps = (state, props) => {
  console.log('STATE', state);
  console.log('PROPS', props);
  return {
    saludo: 'hola'
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...catalogsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulesListContainer)
