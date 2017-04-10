import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { media, COLORS } from 'styles'

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 64px;
  margin: 0;
  padding: 18px 25px;
  z-index: 5;
  align-items: center;
  background-color: ${COLORS.HIGHLIGHTED};

  ${media.upToPhone`
    position: relative;
    font-size: 16px;
  `}
`
const Title = styled(Link)`
  margin-right: 20px;
  padding: 0;
  font-size: 24px;
  font-weight: 600;
  color: white;

  ${media.upToPhone`
    display: none;

  `}
`
const StyledLink = styled(({ children, ...rest }) => (
  <NavLink {...rest} activeStyle={{ borderBottom: '1px solid #f7f7f7' }}>
    {children}
  </NavLink>
))`
  margin-right: 15px;
  padding-bottom: 2px;
  color: white;

  &:hover {
    border-bottom: 1px solid ${COLORS.BORDER};
  }
`

const Header = () => (
  <Container>
    <Title to="/">Form Constructor</Title>
    <nav>
      <StyledLink exact to="/">Saved forms</StyledLink>
      <StyledLink exact to="/forms/create">Create form</StyledLink>
    </nav>
  </Container>
)

export default Header
