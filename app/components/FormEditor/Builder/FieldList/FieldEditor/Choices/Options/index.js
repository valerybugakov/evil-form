import React from 'react'
import styled from 'styled-components'
import { withHandlers } from 'recompose'
import { buttonReset, COLORS } from 'styles'
import Item from './Item'

const AddOptionButton = styled.button`
  ${buttonReset}
  font-size: 10px;
  color: ${COLORS.HIGHLIGHTED_DISABLED};

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
  }
`

const Options = ({ fields, type, handleAddClick }) => (
  <div>
    {
      fields.map(input => <Item key={input} input={input} type={type} />)
    }
    <AddOptionButton onClick={handleAddClick}>
      + Add Choice
    </AddOptionButton>
  </div>
)

export default withHandlers({
  handleAddClick: ({ fields }) => e => {
    e.preventDefault()
    fields.push('')
  },
})(Options)

