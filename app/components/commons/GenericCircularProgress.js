import React from 'react'
import { CircularProgress } from 'material-ui'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 1.5em;
  text-align: center;
`

const GenericCircularProgress = () => (
  <Container>
    <CircularProgress size={80} thickness={5} />
  </Container>
)

export default GenericCircularProgress
