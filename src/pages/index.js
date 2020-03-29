import React from 'react'
import styled from '@emotion/styled'
import { mq } from '@/components/layouts/utils/base'
import { css } from '@emotion/core'
import Title from '@/components/ui/Title'
import { Colors } from '@/components/layouts/utils/theme'

import Button from '@/components/ui/Button'
import Image from '../components/image'
import SEO from '../components/SEO'
import Wizard from '../components/ui/Wizard'

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  background-image: url(https://assets.website-files.com/5c7e77a16fbaf30ffda0de72/5e6023255c14ce020abb9754_Backgorund%402x.png);
  background-position: 50% 0%;
  background-size: cover;
  height: 230px;

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  ${mq.md(css`
    height: 500px; 
    -webkit-clip-path: polygon(0 0,100% 0,43% 180%,0 100%);
    clip-path: polygon(0 0,100% 0,43% 180%,0 100%);

    .text {
      color: white;
      font-size: 30px;
      position: absolute;
      top: 50%;
      left: 25%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }

  `)}
`
const Description = styled.p`
  width: 90%;
  text-align: center;
  margin: 0 auto 20px;
`

const DescriptionBanner = styled.p`
  width: 85%;
  text-align: center; 
  margin: -10px auto;

  ${mq.md(css`
    text-align: left; 
    margin: 0;
  `)}
`

const HowProtect = styled.div`
  margin: 30px;

  img { 
    width: 80%;
    margin: 0 auto;
    display: block;
  }

  ${mq.md(css`
    img { 
      width: 30%;
      margin: 0 auto;
      display: block;
    }
  `)}
`

const Separate  = styled.hr`
  background: #40bb7d;
  height: 5px;
  width: 10%;
  margin: -21px auto 20px;
`

const Hr = styled.hr`
background: #40bb7d;
width: 100%;
position: relative;
bottom: 0px;
height: 2px;`

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <div className="container-fluid">
      <div className="row">
        <BannerContainer className="col-xs-12 col-md-7">
          <div style={{marginTop: '16%'}}>
            <Title marginTop="30px" marginBottom="30px" max="10" min="25" color="#fff" textAlign="left">
              CORONAVIRUS PREVENTION
            </Title>
            <DescriptionBanner style={{color: 'white'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </DescriptionBanner>
          </div>
        </BannerContainer>
        <div className="col-xs-12 col-md-5">
          <div style={{marginTop: '19%'}}>
            <Title marginTop="30px" marginBottom="30px" max="10" min="25" textAlign="left">
              CORONAVIRUS PREVENTION
            </Title>
            <DescriptionBanner>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</DescriptionBanner>
            <Button
              type="common"
              backgroundColor={Colors.mirage}
              backgroundColorHover={Colors.mirage}
            >
              How To Protect
            </Button>
          </div>
        </div>
      </div>
      <Hr/>
      <Title marginTop="30px" marginBottom="30px" max="10" min="20">
        HOW TO PROTECT YOURSELF
      </Title> 
      <Separate/>
      <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Description>
      <div className="row center-xs center-md">
        <div className="col-xs-6 col-md-4">
          <HowProtect>
            <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/wash.png" />
            <strong>Wash your Hands</strong>
          </HowProtect>
        </div>
        <div className="col-xs-6 col-md-4">
          <HowProtect>
            <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/home-run.png" />
            <strong>Avoide Close Contact</strong>
          </HowProtect>
        </div>
        <div className="col-xs-6 col-md-4">
          <HowProtect>
            <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/bed.png" />
            <strong>Stay Home</strong>
          </HowProtect>
        </div>
        <div className="col-xs-6 col-md-4">
          <HowProtect>
            <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/cough.png" />
            <strong>Cover Coughs and Sneezes</strong>
          </HowProtect>
        </div>
        <div className="col-xs-6 col-md-4">
          <HowProtect>
            <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/sick.png" />
            <strong>Wear a Face Mask</strong>
          </HowProtect>
        </div>
        <div className="col-xs-6 col-md-4">
          <HowProtect>
            <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/bucket.png" />
            <strong>Clean and Disinfect</strong>
          </HowProtect>
        </div>
      </div>
    </div>

    {/* <Wizard /> */}
  </>
)

export default IndexPage
