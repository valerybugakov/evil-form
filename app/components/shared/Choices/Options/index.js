import React from 'react'
import styled from 'styled-components'
import { withFieldAddHandler } from 'utils/form'
import { buttonReset, COLORS } from 'styles'
import Item from './Item'

const AddOptionButton = styled.button`
  ${buttonReset}
  margin-top: 5px;
  font-size: 14px;
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
      + Add Option
    </AddOptionButton>
  </div>
)

export default withFieldAddHandler({ payload: '' })(Options)
