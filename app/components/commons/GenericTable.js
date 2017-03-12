import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui'


// TODO: PropTypes
const GenericTable = (props) => {
  return (
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
      </TableBody>
    </Table>
  )
}

export default GenericTable
