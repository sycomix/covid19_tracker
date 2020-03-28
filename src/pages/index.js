import React from 'react'
import styled from '@emotion/styled'
import { mq } from '@/components/layouts/utils/base'
import { css } from '@emotion/core'
import Title from '@/components/ui/Title'

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

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.1;
    transition: .5s ease;
    background-color: #40bb7d;
  }

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
    -webkit-clip-path: polygon(0 0, 61% 0, 43% 100%, 0 100%);
    clip-path: polygon(0 0, 61% 0, 43% 100%, 0 100%);

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

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <div className="container-fluid">
      <div className="row">
        <BannerContainer>
        <div className="overlay">
        </div>
        <div className="text">CORONAVIRUS PREVENTION</div>
        </BannerContainer>
      </div>
      <Title marginTop="30px" marginBottom="30px" max="10" min="20">
        HOW TO PROTECT YOURSELF
      </Title>
      <Description>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</Description>
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
