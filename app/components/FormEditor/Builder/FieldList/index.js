import React from 'react'
import styled from 'styled-components'
import { SortableContainer } from 'react-sortable-hoc'
import { COLORS } from 'styles'
import FieldEditor, { dragColumnMargin } from './FieldEditor'

const Columns = styled.div`
  display: flex;
  margin: 0 39px 16.3px ${12 + dragColumnMargin}px;

  & > div:nth-child(1) {
    flex-grow: 5;
  }
  & > div:nth-child(2) {
    flex-grow: 2;
  }
  & > div:nth-child(3) {
    flex-grow: 1;
  }
`
const ColumnTitle = styled.div`
  color: ${COLORS.PRIMARY};
  font-size: 9.9px;
  text-transform: uppercase;
`

const FieldList = ({
  fields,
}) => (
  <div>
    <Columns>
      <ColumnTitle>Question title</ColumnTitle>
      <ColumnTitle>Choices</ColumnTitle>
      <ColumnTitle>Required?</ColumnTitle>
    </Columns>
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
  </div>
)

export default SortableContainer(FieldList)
