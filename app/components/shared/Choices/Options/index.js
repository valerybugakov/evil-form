import React from 'react'
import styled from 'styled-components'
import { withFieldAddHandler } from 'utils/form'
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
      fields.map((input, index) => (
        <Item
          key={input}
          input={input}
          type={type}
          index={index}
          fields={fields}
        />
      ))
    }
    <AddOptionButton onClick={handleAddClick}>
      + Add Choice
    </AddOptionButton>
  </div>
)

export default withFieldAddHandler({ payload: '' })(Options)
