import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from '@emotion/styled'

import validate from './validate'
import renderField from './renderField'
import { Colors } from '@/components/layouts/utils/theme'
import Button from '@/components/ui/Button'

const Form = styled.form`
  input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid ${Colors.silver};
  }
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="country"
        type="text"
        component={renderField}
        label={<strong>Country:</strong>}
        placeholder="Enter a Country"
      />
      <Field
        name="city"
        type="text"
        component={renderField}
        label={<strong>City:</strong>}
        placeholder="Enter a City"
      />
      <Field
        name="neighborhood"
        type="text"
        component={renderField}
        label={<strong>Neighborhood:</strong>}
        placeholder="Enter a Neighborhood"
      />
      <ButtonContainer>
        <Button
          type="submit"
          stylesType="common"
          backgroundColor={Colors.mirage}
          backgroundColorHover={Colors.white}
        >
          Next
        </Button>
      </ButtonContainer>
    </Form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)
