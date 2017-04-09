import React, { Component } from 'react'
import styled from 'styled-components'
import { animateScroll } from 'react-scroll'
import { SortableContainer } from 'react-sortable-hoc'
import { media, COLORS } from 'styles'
import FieldEditor from './FieldEditor'

const Table = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  table-layout: fixed;
  text-align: left;
`
const TableHead = styled.thead`
  ${media.upToPhone`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: none;
  `}
`
const ColumnTitle = styled.th`
  padding-bottom: 17.3px;
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;
  color: ${COLORS.INACTIVE};
`
const DragColumn = ColumnTitle.extend`
  width: 26px;

  @media (min-width: 64em) and (max-width: 80em) {
    width: 4%;
  }
`
const TitleColumn = ColumnTitle.extend`
  width: 55%;

  ${media.upToSmall`
    width: 45%;
  `}

  @media (min-width: 64em) and (max-width: 80em) {
    width: 45%;
  }
`
const ChoicesColumn = ColumnTitle.extend`
  width: 25%;
`
const RequiredColumn = ColumnTitle.extend`
  width: 60px;
`
const RemoveColumn = ColumnTitle.extend`
  width: 14px;

  @media (min-width: 64em) and (max-width: 80em) {
    width: 3%;
  }
`

@SortableContainer
class FieldList extends Component {
  shouldScroll = false // eslint-disable-line react/sort-comp

  shouldComponentUpdate(nextProps) {
    this.shouldScroll = this.props.fields.length < nextProps.fields.length
    return this.props.fields.length !== nextProps.fields.length
  }

  render() {
    if (this.shouldScroll) animateScroll.scrollToBottom()
    const { fields } = this.props

    return (
      <Table>
        <TableHead>
          <tr>
            <DragColumn />
            <TitleColumn>Question title</TitleColumn>
            <ChoicesColumn>Preview</ChoicesColumn>
            <RequiredColumn>Required?</RequiredColumn>
            <RemoveColumn />
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
  }
}

export default FieldList
