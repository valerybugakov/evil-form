import React from 'react'
import styled from 'styled-components'
import { compose, lifecycle } from 'recompose'
import { SortableContainer } from 'react-sortable-hoc'
import FieldEditor from './FieldEditor'

const Table = styled.table`
  width: 100%;
  text-align: left;
`
const ColumnTitle = styled.th`
  font-size: 9.9px;
  font-weight: normal;
  text-transform: uppercase;
  padding-bottom: 13.3px;
`

const FieldList = ({
  fields,
}) => (
  <Table>
    <tbody>
      <tr>
        <th />
        <ColumnTitle>Question title</ColumnTitle>
        <ColumnTitle>Choices</ColumnTitle>
        <ColumnTitle>Required?</ColumnTitle>
        <th />
      </tr>
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
