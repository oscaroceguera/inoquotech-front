import React, {PropTypes} from 'react'
import {AutoComplete} from 'material-ui'

const AUTOCOMPLETE = {
  marginRight: '.5em'
}

const {array, object, func, string} = PropTypes

GenericAutoComplete.proptypes = {
  dataSource: array.isRequired,
  handle: func.isRequired,
  dataSourceConfig: object,
  label: string.isRequired
}
function GenericAutoComplete ({ dataSource, dataSourceConfig = { text: 'value', value: 'id' }, handle, label}) {
  return (
    <AutoComplete
      floatingLabelText={label}
      dataSource={dataSource}
      dataSourceConfig={dataSourceConfig}
      filter={AutoComplete.fuzzyFilter}
      onUpdateInput={handle}
      style={AUTOCOMPLETE}
    />
  )
}

export default GenericAutoComplete
