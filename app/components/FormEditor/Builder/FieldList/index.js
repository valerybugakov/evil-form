import React from 'react'
import styled from 'styled-components'
import { compose, lifecycle } from 'recompose'
import { SortableContainer } from 'react-sortable-hoc'
import { media } from 'styles'
import FieldEditor from './FieldEditor'

const Table = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  table-layout: fixed;
  text-align: left;
`
const TableHead = styled.thead`
  ${media.phone`
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `}
`
const ColumnTitle = styled.th`
  font-size: 9.9px;
  font-weight: normal;
  text-transform: uppercase;
  padding-bottom: 17.3px;

  &:nth-child(1) {
    width: 26px;
  }
  &:nth-child(2) {
    width: 55%;
  }
  &:nth-child(3) {
    width: 25%;
  }
  &:nth-child(4) {
    width: 10%;
  }
  &:nth-child(5) {
    width: 39px;
  }

  @media (min-width: 64em) and (max-width: 80em) {
    &:nth-child(1) {
      width: 4%;
    }
    &:nth-child(2) {
      width: 45%;
    }
    &:nth-child(5) {
      width: 6%;
    }
  }

  ${media.smallUp`
    &:nth-child(2) {
      width: 45%;
    }
  `}
`

const FieldList = ({ fields }) => (
  <Table>
    <TableHead>
      <tr>
        <ColumnTitle />
        <ColumnTitle>Question title</ColumnTitle>
        <ColumnTitle>Choices</ColumnTitle>
        <ColumnTitle>Required?</ColumnTitle>
        <ColumnTitle />
      </tr>
    </TableHead>
    <tbody>
      {
        fields.map((input, index) => (
          <FieldEditor
            key={input}
            input={input}
            index={index}
            fields={fields}
          />
        ))
      }
    </tbody>
  </Table>
)

export default compose(
  lifecycle({
    shouldComponentUpdate(nextProps) {
      return this.props.fields.length !== nextProps.fields.length
    },
  }),
  SortableContainer,
)(FieldList)
