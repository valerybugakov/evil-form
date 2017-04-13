import React from 'react'
import { sortBy } from 'lodash'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { actionButtonCSS, COLORS } from 'styles'

const Container = styled.main`
  padding: 25px;
`
const PageTitle = styled.h1`
  margin: 0 0 15px 0;
  font-size: 18px;
  color: ${COLORS.PRIMARY};
`
const FormList = styled.ul`
  margin-bottom: 30px;
  padding-left: 20px;
`
const FormItem = styled.li`
  margin-bottom: 5px;
`
const FormLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.SECONDARY};

  &:hover {
    color: ${COLORS.HIGHLIGHTED};
  }
`
const CreateNewButton = styled(Link)`
  ${actionButtonCSS}
  display: block;
  text-decoration: none;
  text-align: center;
  line-height: 26.9px;
`

const SavedForms = ({ forms }) => (
  <Container>
    <PageTitle>Saved forms</PageTitle>
    <FormList>
      {forms.map(form => (
        <FormItem key={form.id} >
          <FormLink to={`/forms/edit/${form.id}`}>
            {form.title}
          </FormLink>
        </FormItem>
      ))}
    </FormList>
    <CreateNewButton to="/forms/create">+ New form</CreateNewButton>
  </Container>
)

export default connect(state => ({
  forms: sortBy(Object.values(state.formBuilder.savedForms), ['updatedAt']),
}))(SavedForms)
