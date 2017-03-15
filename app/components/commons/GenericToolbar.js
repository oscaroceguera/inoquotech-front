import React, { PropTypes } from 'react'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  RaisedButton
} from 'material-ui'
import { Link } from 'react-router'
import Return from 'material-ui/svg-icons/hardware/keyboard-return'
import styled from 'styled-components'
import * as Colors from 'material-ui/styles/colors'

const marginR = {
  marginRight: '1em'
}

const ToolbarContainer = styled(Toolbar)`
  display: flex;
  align-items: center;
`

const GenericToolbar = ({title, returnPath, hasRBtn, ...other}) => (
  <ToolbarContainer>
    <ToolbarGroup>
      <ToolbarTitle text={title} />
    </ToolbarGroup>
    <div>
      {hasRBtn
        ? <RaisedButton
            backgroundColor={Colors.amber500}
            labelColor={'white'}
            style={marginR}
            {...other}
          />
        : null}
      <Link to={returnPath}>
        <Return />
      </Link>
    </div>
  </ToolbarContainer>
)

GenericToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  returnPath: PropTypes.string.isRequired
}

export default GenericToolbar
