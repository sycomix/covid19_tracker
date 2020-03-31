import React, { useState } from 'react'
import styled from '@emotion/styled'
import firebase from 'gatsby-plugin-firebase'

import WizardForm from '@/components/wizard/WizardForm'
import Title from '@/components/ui/Title'
import SEO from '../components/seo'

const Separate = styled.hr`
  background: #40bb7d;
  height: 5px;
  width: 10%;
  margin: -21px auto 20px;
`

const Description = styled.p`
  width: 90%;
  text-align: center;
  margin: 0 auto 20px;
`

const WizardContainer = styled.div`
  margin: 20px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 5px 0px 12px -3px #88888B;
`

const TestPage = () => {
  const [showForm, setShowForm] = useState(true)

  const setAnswerData = async (values) => {
    if (values) {
      const answersCollection = firebase.firestore().collection('answers')
      const result = await answersCollection.add(values)
  
      if (result.id) {
        setShowForm(false)
      } 
    }
  }

  return (
    <>
      <SEO title="Test Page" />

      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Title marginTop="30px" marginBottom="30px" max="10" min="20">
              START THE TEST
            </Title>
            <Separate />
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s
            </Description>
          </div>
          <div className="col-xs-12">
            {/* Wizard */}
            {
              showForm
                ? (
                  <WizardContainer>
                    <WizardForm onSubmit={setAnswerData} />
                  </WizardContainer>
                )
                : (
                  <WizardContainer>
                    <Title marginTop="20px" marginBottom="30px" max="10" min="20">
                      The form was completed successfully
                    </Title>
                    <Description>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s
                    </Description>
                    <Title marginTop="30px" marginBottom="30px" max="10" min="20" color="#40bb7d">
                      Thank you!
                    </Title>
                  </WizardContainer>
                )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TestPage
