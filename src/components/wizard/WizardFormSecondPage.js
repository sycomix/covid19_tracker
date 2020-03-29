import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import validate from './validate'
import renderField from './renderField'
import Button from '@/components/ui/Button'
import { Colors } from '@/components/layouts/utils/theme'
import { mq } from '@/components/layouts/utils/base'

const Form = styled.form`
  input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid ${Colors.silver};
  }
`
const GenderContainer = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
`
const Label = styled.label`
  input {
    margin-right: 5px;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  ${mq.sm(css`
    flex-direction: row;
  `)}

  button:last-child {
    margin-top: 10px;

    ${mq.sm(css`
      margin-top: 0px;
      margin-left: 10px;
    `)}
  }
`

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <span>Gender</span>
        <GenderContainer>
          <Label htmlFor="male">
            <Field id="male" name="sex" component="input" type="radio" value="male" />
            Male
          </Label>
          <Label htmlFor="female">
            <Field id="female" name="sex" component="input" type="radio" value="female" />
            Female
          </Label>
          <Label htmlFor="other">
            <Field id="other" name="sex" component="input" type="radio" value="other" />
            Other
          </Label>
          <Field name="sex" component={renderError} />
        </GenderContainer>
      </div>
      <ButtonContainer>
        <Button
          stylesType="common"
          backgroundColor={Colors.mirage}
          backgroundColorHover={Colors.white}
          callback={previousPage}
        >
          Previous
        </Button>
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
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)
