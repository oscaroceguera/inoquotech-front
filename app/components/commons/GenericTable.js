import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  FloatingActionButton
} from 'material-ui'
import * as Colors from 'material-ui/styles/colors'
import ContentAdd from 'material-ui/svg-icons/content/add'
import styled from 'styled-components'

const TableContainer = styled.div`
  position: relative;
`

const BtnContainer = styled.div`
  position: fixed;
  right: 1em;
  bottom: 2em;
`

// TODO: PropTypes
const GenericTable = (props) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>NOMBRE</TableHeaderColumn>
            <TableHeaderColumn>EMAIL</TableHeaderColumn>
            <TableHeaderColumn>STATUS</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Oscar Eduardo Oceguera Bibriesca</TableRowColumn>
            <TableRowColumn>oscaroceguera@gmail.com</TableRowColumn>
            <TableRowColumn>Activo</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      <BtnContainer>
        <FloatingActionButton
          onClick={props.goToUserAdd}
          backgroundColor={Colors.red500}>
          <ContentAdd />
        </FloatingActionButton>
      </BtnContainer>
    </TableContainer>
  )
}

export default GenericTable
