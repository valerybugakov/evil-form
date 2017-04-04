import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { actionButtonCSS, COLORS } from 'styles'

const Container = styled.main`
  padding: 25px;
  font-size: 10px;
`
const PageTitle = styled.h1`
  margin: 0 0 15px 0;
  font-size: 15px;
  color: ${COLORS.PRIMARY};
`
const FormList = styled.ul`
  margin-bottom: 35px;
  padding-left: 10px;
`
const FormItem = styled(Link)`
  text-decoration: none;
  color: ${COLORS.SECONDARY};

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
  }
`
const BuilderLink = styled(Link)`
  ${actionButtonCSS}
  display: block;
  font-size: 12px;
  text-decoration: none;
  text-align: center;
  line-height: 26.9px;
`

const SavedForms = ({ forms }) => (
  <Container>
    <PageTitle>Saved forms</PageTitle>
    <FormList>
      {forms.map(form => (
        <li key={form.id} >
          <FormItem to="/">{form.title}</FormItem>
        </li>
      ))}
    </FormList>
    <BuilderLink to="/">+ New form</BuilderLink>
  </Container>
)

export default connect(state => ({
  forms: state.formBuilder.savedForms,
}))(SavedForms)
