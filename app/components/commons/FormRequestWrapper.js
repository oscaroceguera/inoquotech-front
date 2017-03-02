import React, { PropTypes } from 'react'
import * as Colors from 'material-ui/styles/colors'
import styled from 'styled-components'

import EmpresaIcon from 'commons/office-block.svg'
import AgricolaIcon from 'commons/sprout.svg'
import SolicitudIcon from 'material-ui/svg-icons/action/add-shopping-cart'
import FishIcon from 'commons/fish.svg'
import ProcesadoraIcon from 'material-ui/svg-icons/action/settings'
import DistribuidoraIcon from 'commons/distribuitor.svg'
import RestauranteIcon from 'material-ui/svg-icons/maps/restaurant'
import LaboratorioIcon from 'commons/flask.svg'
import TransporteIcon from 'material-ui/svg-icons/maps/local-shipping'

const styles = {
  w30: { width: '30px' },
  w25: { width: '25px' },
  w40: { width: '40px' },
  wh30: { width: '30px', height: '30px' },
}

const ICONS = {
  empresa: <img src={EmpresaIcon} style={styles.w30}/>,
  agricola: <img src={AgricolaIcon} style={styles.w25}/>,
  acuicola: <img src={FishIcon} style={styles.w40}/>,
  servicio: <SolicitudIcon color={Colors.indigo500} style={styles.wh25}/>,
  procesadora: <ProcesadoraIcon color={Colors.cyan500} style={styles.wh25}/>,
  distribuidora: <img src={DistribuidoraIcon} style={styles.w30}/>,
  restaurante: <RestauranteIcon color={Colors.pink500} style={styles.wh25}/>,
  laboratorio: <img src={LaboratorioIcon} style={styles.w25}/>,
  transporte: <TransporteIcon color={Colors.deepOrange500} style={styles.wh30}/>,
}

const Hero = styled.div`
  margin-top: 1.5em;
`

const Header = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  margin-right: .5em;
`

const Title = styled.div`
  font-size: 1.5em;
  color: ${Colors.grey700};
`

const ChildContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function FormRequestWrapper ({icon, title, children}) {
  return (
    <Hero>
      <Header>
        <Icon>{ICONS[icon]}</Icon>
        <Title>{title}</Title>
      </Header>
      <ChildContainer>
        {children}
      </ChildContainer>
    </Hero>
  )
}

const {any, string} = PropTypes

FormRequestWrapper.propTypes = {
  title: string.isRequired,
  children: any.isRequired,
  icon: any.isRequired
}

export default FormRequestWrapper
