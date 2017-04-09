import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from 'styles'

const Container = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  margin: 0;
  padding: 18px 25px;
  background-color: ${COLORS.HIGHLIGHTED};
`
const Title = styled(Link)`
  margin-right: 20px;
  padding: 0;
  font-size: 24px;
  font-weight: 600;
  color: white;
`
const Nav = styled.nav`

`
const NavLink = styled(Link)`
  margin-right: 15px;
  color: white;

  &:hover {
    border-bottom: 1px solid ${COLORS.BORDER};
  }
`

const Header = () => (
  <Container>
    <Title to="/">Form Constructor</Title>
    <Nav>
      <NavLink to="/">Saved forms</NavLink>
      <NavLink to="/forms/create">Create form</NavLink>
    </Nav>
  </Container>
)

export default Header
