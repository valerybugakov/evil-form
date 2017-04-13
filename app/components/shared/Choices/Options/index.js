import React from 'react'
import styled from 'styled-components'
import { withFieldAddHandler } from 'utils/form'
import { media, buttonReset, COLORS } from 'styles'
import Item from './Item'

const Container = styled.div`
  ${media.upToPhone`
    width: 100%;
  `}
`
const AddOptionButton = styled.button`
  ${buttonReset}
  margin-top: 10px;
  font-size: 14px;
  color: ${COLORS.HIGHLIGHTED_DISABLED};

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
  }
`
const Error = styled.div`
  width: 190px;
  color: ${COLORS.ERROR};
  font-size: 14px;
`

const Options = ({
  fields,
  type,
  handleAddClick,
  meta: { error },
}) => (
  <Container>
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
    {error && <Error>Options {error}</Error>}
    <AddOptionButton onClick={handleAddClick}>
      + Add Option
    </AddOptionButton>
  </Container>
)

export default withFieldAddHandler({ payload: '' })(Options)
