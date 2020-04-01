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
  margin-top: 40px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 0px 12px -3px #88888B;

  ${mq.md(css`
    margin-top: 30px;
  `)}
`

const ButtonContainer = styled.div`
  margin: 40px auto;
  text-align: center;
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div>
            <HighlightTitle>COVID-19</HighlightTitle>
            <Title marginTop="5px" marginBottom="10px" max="10" min="25" textAlign="left" color="white">
              PROBABILISTIC ASSESMENT
            </Title>
            <Description textAlign="left" color="white" max="10" min="18">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s.
            </Description>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <DivContainer>
            <Title marginTop="20px" marginBottom="20px" max="10" min="22" textAlign="center" color="black">
              CORONAVIRUS PREVENTION
            </Title>
            <Description textAlign="left" color="black" max="10" min="15">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. typesetting industry.  
              make a type specimen book.
            </Description>
            <div>
              <ReCAPTCHA
                sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_KEY}
                onChange={onRecaptchaValidated}
              />
            </div>
            isValidRecaptcha_{JSON.stringify(isValidRecaptcha)}
            <ButtonContainer>
              <Button
                type="button"
                stylesType="common"
                backgroundColor={Colors.lightGreen}
                backgroundColorHover={Colors.white}
                callback={goto}
              >
                START THE TEST
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
