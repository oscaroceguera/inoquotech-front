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

const GenericToolbar = ({title, path}) => (
  <ToolbarContainer>
    <ToolbarGroup>
      <ToolbarTitle text={title} />
    </ToolbarGroup>
    <Link to={path}>
      <Return />
    </Link>
  </ToolbarContainer>
)

GenericToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default GenericToolbar
