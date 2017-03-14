import React from 'react'
import { GenericToolbar } from 'components'

// TODO: proptypes
const SimpleCRUWrapper = ({title, returnPath, children}) => {
  return (
    <div>
      <GenericToolbar
        title={title}
        returnPath={returnPath}
      />
      {children}
    </div>
  )
}

export default SimpleCRUWrapper
