import React from 'react'
import {AppBar, IconMenu, MenuItem, IconButton} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import Account from 'material-ui/svg-icons/social/person'

const inlStyles =  {
  appBarStyle: {
    backgroundColor: Colors.deepPurple500
  },
  appBarTitleStyle: {
    color: Colors.deepPurple100
  }
}

// TODO: settings proptypes
const Settings = (props) => ((
  <IconMenu
    iconButtonElement={<IconButton><Account color='white'/></IconButton>}
  >
    <MenuItem primaryText={'Cambiar password'} />
    <MenuItem primaryText={'Cerrar sesión'} />
  </IconMenu>
))

// TODO: topbar proptypes
const TopBar = (props) => ((
  <AppBar
    title={'Inoquotech App'}
    style={inlStyles.appBarStyle}
    titleStyle={inlStyles.appBarTitleStyle}
    showMenuIconButton={false}
    iconElementRight={<Settings />}
  />
))

export default TopBar
