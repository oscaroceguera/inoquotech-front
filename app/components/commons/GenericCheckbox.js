import React, {PropTypes} from 'react'
import {Checkbox} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'

const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
`

const inlStyl = {
  color: Colors.grey500
}

const {array, func} = PropTypes

GenericCheckbox.propTypes = {
  items: array.isRequired,
  onChange: func.isRequired
}

function GenericCheckbox({items, onChange}) {
  return (
    <Container>
      {
        items.map(({_id, value}, index) =>
          <Checkbox
            key={index}
            labelStyle={inlStyl}
            label={value}
            onCheck={onChange}
            value={_id}
          />
        )
      }
    </Container>
  )
}

export default GenericCheckbox
