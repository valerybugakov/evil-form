import React, { Component } from 'react'
import styled from 'styled-components'
import { animateScroll } from 'react-scroll'
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
  ${media.upToPhone`
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
  width: 10%;
`
const RemoveColumn = ColumnTitle.extend`
  width: 39px;

  @media (min-width: 64em) and (max-width: 80em) {
    width: 6%;
  }
`

@SortableContainer
class FieldList extends Component {
  shouldScroll = false // eslint-disable-line

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
            <ChoicesColumn>Choices</ChoicesColumn>
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
