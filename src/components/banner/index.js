import React, { useState } from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'
import { navigate } from 'gatsby'
import ReCAPTCHA from 'react-google-recaptcha'

import Button from '@/components/ui/Button'
import Description from '@/components/ui/Description'
import { css } from '@emotion/core'

import Title from '@/components/ui/Title'
import { mq } from '@/components/layouts/utils/base'
import { Colors } from '@/components/layouts/utils/theme'

const BackgroundContent = ({ className, children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          device: file(relativePath: { eq: "banner.png" }) {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.device.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={Colors.mirage}
          >
            {children}
          </BackgroundImage>
        )
      }}
    />
  )
}

const BackgroundContainer = styled(BackgroundContent)`
  width: 100%;
  height: 90vh;
  background-repeat: repeat-y;

  ${mq.md(css`
    height: 50vh;
  `)}
`

const HighlightTitle = styled.h2`
  color: white;
  margin: 40px 0 1% 0;
  background: #e65862;
  width: 140px;

  ${mq.md(css`
    color: white;
    margin: 120px 0 1% 0;
    background: #e65862;
    width: 160px;
  `)}
`

const DivContainer = styled.div`
  background: white;
  height: 400px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 10px -2px rgba(0,0,0,0.8);

  ${mq.md(css`
    height: 500px;
    margin-top: 30px;
    margin-bottom: 20px;
  `)}
`

const ButtonContainer = styled.div`
  margin: 10px auto;
  text-align: center;

  ${mq.md(css`
    margin: 30px auto;
  `)}

`
const alertSpan = css`
  color: #f25c63;
`

const successSpan = css`
  color: #00b06d;
`
const CaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  ${mq.md(css`
    margin-top: 30px;
  `)}
`

const BannerComponent = () => {
  const goto = () => {
    navigate('/test')
  }

  const [isValidRecaptcha, setIsValidRecaptcha] = useState(false)
  const onRecaptchaValidated = (recaptchaToken) => {
    setIsValidRecaptcha(!!recaptchaToken)
  }

 return (
  <BackgroundContainer>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <div>
            <HighlightTitle>COVID-19:</HighlightTitle>
            <Title marginTop="5px" marginBottom="10px" max="10" min="25" textAlign="left" color="white">
              FLATTEN THE CURVE IN YOUR CITY
            </Title>
            <Description textAlign="left" color="white" max="10" min="18">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s.
            </Description>
          </div>
        </div>
        <div className="col-xs-12 col-md-5">
          <DivContainer>
            <Description textAlign="left" color="#5d6970" max="10" min="14">
              This assessment <span css={alertSpan}>is not a substitute for professional medical advice</span>, 
              diagnosis or treatment. This assessment aims to <span css={successSpan}>guide you to the right next steps to take</span>, based on the severity of your symptoms and your location.
            </Description>
            <Description marginTop="5px" textAlign="left" color="#5d6970" max="10" min="14">
              The COVID-19 Coronavirus is a new disease and we continue to learn more every day. If you think you may have a life threatening emergency, immediately call your doctor or dial 911.
            </Description>
            <CaptchaContainer>
              <ReCAPTCHA
                sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_KEY}
                onChange={onRecaptchaValidated}
              />
            </CaptchaContainer>
            <ButtonContainer>
              <Button
                type="button"
                stylesType="common"
                backgroundColor={Colors.lightGreen}
                backgroundColorHover={Colors.white}
                callback={goto}
                disabled={!isValidRecaptcha}
              >
                START CENSUS
              </Button>
            </ButtonContainer>
          </DivContainer>
        </div>
      </div>
    </div>
    
  </BackgroundContainer>
 )
}

export default BannerComponent
