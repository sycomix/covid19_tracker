import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { FormattedMessage } from 'react-intl'
import ReCAPTCHA from 'react-google-recaptcha'

import Title from '@/components/ui/Title'
import validate from './validate'
import renderField from './renderField'
import { Colors } from '@/components/layouts/utils/theme'
import Button from '@/components/ui/Button'
import { mq } from '@/components/layouts/utils/base'

const Form = styled.form`
  input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid ${Colors.silver};
  }
`
const CaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  ${mq.md(css`
    margin-top: 30px;
  `)}
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const WizardFormSecondPage = props => {
  const { 
    handleSubmit, 
    previousPage,
    feeling,
    end
  } = props

  const [isValidRecaptcha, setIsValidRecaptcha] = useState(false)
  const onRecaptchaValidated = (recaptchaToken) => {
    setIsValidRecaptcha(!!recaptchaToken)
  }

  return (
    <Form onSubmit={feeling ? end : handleSubmit}>
       <Title marginBottom="30px" max="10" min="25" color="black">
        WHERE ARE YOU LOCATED?
      </Title>
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
      {
        feeling &&
          <CaptchaContainer>
            <ReCAPTCHA
              sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_KEY}
              onChange={onRecaptchaValidated}
            />
          </CaptchaContainer>
      }
      <ButtonContainer>  
        <Button
          stylesType="common"
          backgroundColor="#fedc8c"
          backgroundColorHover={Colors.white}
          callback={previousPage}
        >
         <FormattedMessage id="wizard.previous.button" />
        </Button>
        <Button
          type="submit"
          stylesType="common"
          backgroundColor={Colors.lightGreen}
          backgroundColorHover={Colors.white}
          disabled={feeling && !isValidRecaptcha}
        >
          {
            feeling ?
              <FormattedMessage id="wizard.submit.button" />
            :
              <FormattedMessage id="wizard.next.button" />
          }
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
})(WizardFormSecondPage)
