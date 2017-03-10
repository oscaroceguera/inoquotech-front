import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {Paper} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'

import User from 'commons/user.svg'
import Training from 'commons/training.svg'
import Client from 'commons/client.svg'
import Schema from 'commons/schema.svg'
import Sampling from 'commons/sampling.svg'
import Schedule from 'commons/schedule.svg'
import RService from 'commons/request-service.svg'
import Checklist from 'commons/check-list.svg'

const ICONS = {
  user: <img src={User} style={{width: '50px'}}/>,
  rservice: <img src={RService} style={{width: '50px'}}/>,
  schema: <img src={Schema} style={{width: '50px'}}/>,
  client: <img src={Client} style={{width: '50px'}}/>,
  evaluacion: <img src={Checklist} style={{width: '50px'}}/>,
  work: <img src={Schedule} style={{width: '50px'}}/>,
  sampling: <img src={Sampling} style={{width: '50px'}}/>,
  trainig: <img src={Training} style={{width: '50px'}}/>
}

const LinkStyled = styled(Link)`
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`

const CardItem = styled(Paper)`
  width: 300px;
  margin: .5em;
  padding: .5em;
`

const IconTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const IconTitle = styled.p`
  font-size: 1.3em;
  margin-left: .5em;
`

const Description = styled.div`
  color: ${Colors.blue500};
  text-align: center;
`

const ModuleItem = ({path, iconType, value, description}) => ((
  <LinkStyled to={path}>
    <CardItem>
      <IconTitleContainer>
        {ICONS[iconType]}
        <IconTitle>{value}</IconTitle>
      </IconTitleContainer>
      <Description>{description}</Description>
    </CardItem>
  </LinkStyled>
))

ModuleItem.propTypes = {
  path: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ModuleItem
