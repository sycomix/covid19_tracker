import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SocialMedia from './SocialMedia'
import { mq } from '@/components/layouts/utils/base'
import { Colors } from '@/components/layouts/utils/theme'

const Container = styled.footer`
  width: 100%;
  height: 240px; /* TopContainer + BottomContainer */
  color: ${Colors.white};
`
const TopContainer = styled.div`
  height: 160px;
  background-color: ${Colors.concreteSolid};
  color: ${Colors.mirage};
  margin-top: 20px;
  font-size: 12px;
  
  ${mq.md(css`
    font-size: 16px;
  `)}
`
const BottomContainer = styled.div`
  height: 70px;
  background-color: ${Colors.mirage};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;

  ${mq.md(css`
    font-size: 16px;
  `)}
`

const ImageContainer = styled.div`
  margin-top: 10px;
  width: 110px;

  ${mq.md(css`
    margin-top: 20px;
    width: 150px;
  `)}  
`

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Footer = (props) => {
  return (
    <Container className="container">
      <TopContainer className="row">
       <div className="container">
         <div className="row">
           <div className="col-xs-12 col-md-12">
            <ImageContainer>
              <LogoImage/>
            </ImageContainer>
            <br/>
            <p>
              MindsDB is an automated machine learning platform that allows anyone to gain powerful insights from their data.
              With MindsDB, users can get fast, accurate, and interpretable answers to any of their data questions within minutes.
              <strong> support@mindsdb.com</strong>
            </p>
           </div>
         </div>
       </div>
      </TopContainer>
      <BottomContainer className="row">
        <div className="col-xs-6 col-md-10">
          <span>® 2020 MindsDB. All rights reserved.</span>
        </div>
        <div className="col-xs-3 col-md-2">
         <SocialMedia />
        </div>
      </BottomContainer>
    </Container>
  )
}

export default Footer
