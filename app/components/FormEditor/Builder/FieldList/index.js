import React, { Component } from 'react'
import styled from 'styled-components'
import { arrayMove } from 'redux-form'
import { animateScroll } from 'react-scroll'
import { dispatch } from 'redux/store'
import { media, COLORS } from 'styles'
import TableBody from './TableBody'

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
`
const TitleColumn = ColumnTitle.extend`
  width: 65%;

  ${media.upToSmall`
    width: 45%;
  `}
`
const ChoicesColumn = ColumnTitle.extend`
  width: 35%;
`
const RequiredColumn = ColumnTitle.extend`
  width: 65px;
`
const RemoveColumn = ColumnTitle.extend`
  width: 14px;
`
const Error = styled.div`
  color: ${COLORS.ERROR};
`

const shouldCancelStart = ({ target }) => (
  !Array.prototype.includes.call(target.parentNode.classList, 'draggable')
)

const onSortEnd = ({ oldIndex, newIndex }) => {
  if (oldIndex !== newIndex) {
    dispatch(arrayMove('formBuilder', 'fields', oldIndex, newIndex))
  }
}

class FieldList extends Component {
  shouldScroll = false // eslint-disable-line react/sort-comp

  shouldComponentUpdate(nextProps) {
    this.shouldScroll = this.props.fields.length < nextProps.fields.length
    return this.props.fields.length !== nextProps.fields.length
  }

  render() {
    if (this.shouldScroll) animateScroll.scrollToBottom()
    const { fields } = this.props

    if (fields.length === 0) {
      return (
        <Error>{'<-'} Form should contain at least one question</Error>
      )
    }

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
        <TableBody
          fields={fields}
          onSortEnd={onSortEnd}
          useWindowAsScrollContainer
          helperClass="draggable-helper"
          shouldCancelStart={shouldCancelStart}
        />
      </Table>
    )
  }
}

export default FieldList
