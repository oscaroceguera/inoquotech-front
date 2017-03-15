import React from 'react'
import { GenericToolbar } from 'components'

// TODO: proptypes
const SimpleCRUWrapper = ({title, returnPath, children, ...other}) => {
  return (
    <div>
      <GenericToolbar
        title={title}
        returnPath={returnPath}
        {...other}
      />
      {children}
    </div>
  )
}

export default SimpleCRUWrapper
