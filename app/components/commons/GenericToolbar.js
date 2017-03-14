import React, { PropTypes } from 'react'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle
} from 'material-ui'
import { Link } from 'react-router'
import Return from 'material-ui/svg-icons/hardware/keyboard-return'
import styled from 'styled-components'

const ToolbarContainer = styled(Toolbar)`
  display: flex;
  align-items: center;
`

const GenericToolbar = ({title, returnPath}) => (
  <ToolbarContainer>
    <ToolbarGroup>
      <ToolbarTitle text={title} />
    </ToolbarGroup>
    <Link to={returnPath}>
      <Return />
    </Link>
  </ToolbarContainer>
)

GenericToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  returnPath: PropTypes.string.isRequired
}

export default GenericToolbar
