import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { catalogsActions } from 'reducers/catalogs'
import styled from 'styled-components'
import { ModuleItem } from 'components'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5em 3em;
  margin: 0 auto;
  max-width: 1000px;
  @media (max-width: 1025px){
    max-width: 650px;
    padding: 1.5em 0;
  }
`

class ModulesListContainer extends Component {
  static propTypes = {
    moduleTypes: PropTypes.array.isRequired
  }
  componentWillMount () {
    this.props.catForDashboardRequest()
  }
  render () {
    const { moduleTypes } = this.props
    const modulesOrder = _.orderBy(moduleTypes, 'value', 'asc')
    return (
      <ListContainer>
        {
          modulesOrder.map(({value, iconType, description, path}, index) => (
            <ModuleItem
              key={index}
              value={value}
              iconType={iconType}
              description={description}
              path={`/panel/${path}`}
            />
          ))
        }
      </ListContainer>
    )
  }
}

const mapStateToProps = (state) => {
  const catalogsJS = state.catalogs.toJS()
  return {
    moduleTypes: catalogsJS.modules
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...catalogsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulesListContainer)
