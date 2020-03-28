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
      <div className="row">
        <div className="col-xs-12 col-md-3">1</div>
        <div className="col-xs-12 col-md-3">2</div>
        <div className="col-xs-12 col-md-3">3</div>
        <div className="col-xs-12 col-md-3">4</div>
        <div className="col-xs-12 col-md-3">5</div>
        <div className="col-xs-12 col-md-3">6</div>
      </div>
    </div>

    {/* <Wizard /> */}
  </>
)

export default IndexPage
