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

const Nofound = {
  textAlign: 'center',
  color: Colors.grey500,
  fontSize: '2em'
}

const TableContainer = styled.div`
  position: relative;
`

const BtnContainer = styled.div`
  position: fixed;
  right: 1em;
  bottom: 2em;
`

// TODO: PropTypes TableRow
const DataRow = ({columns, item}) => (
  <TableRow>
    {columns.map(({keyName}, index) => <TableRowColumn key={index}>{item[keyName]}</TableRowColumn>)}
  </TableRow>
)

// TODO: PropTypes GenericTable
const GenericTable = ({goToRoute, data, columns}) => {

  return (
    <TableContainer>
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            {columns.map(({label}, index) => <TableHeaderColumn key={index}>{label}</TableHeaderColumn>)}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {data.length === 0
            ? <TableRow><TableRowColumn style={Nofound}>{'No se encontraron registros'}</TableRowColumn></TableRow>
            : data.map((item, key) => <DataRow key={key} columns={columns} item={item}/>)
          }
        </TableBody>
      </Table>
      <BtnContainer>
        <FloatingActionButton
          onClick={goToRoute}
          backgroundColor={Colors.red500}>
          <ContentAdd />
        </FloatingActionButton>
      </BtnContainer>
    </TableContainer>
  )
}

export default GenericTable