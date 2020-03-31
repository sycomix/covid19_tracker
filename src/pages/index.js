import React from 'react'
import styled from '@emotion/styled'
// import { navigate } from 'gatsby'
import { mq } from '@/components/layouts/utils/base'
import { css } from '@emotion/core'
import Title from '@/components/ui/Title'

import Separate from '@/components/ui/separate'
import BannerComponent from '@/components/banner'
// import HowProtect from '@/components/how-protect'
import SEO from '../components/seo'

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

const Symptoms = styled.div`
  margin: 0 20px 0 20px;
  color: white;

  img {
    width: 25%; 
    margin: 0 auto;
    display: block;
  }

  ${mq.md(css`
    img { 
      width: 25%;
      margin: 0 auto 20px;
      display: block;
    }
  `)}
`

const BarInterm = styled.div`
  position: relative;
  background-image: url(https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/coronavirus-test-1.jpg);
  background-position: 53% 1px;
  background-size: cover;
  clip-path: polygon(100% 0,135% 84%,0 100%,0 7%);
  -webkit-clip-path: polygon(100% 0,135% 84%,0 100%,0 7%);
  margin-top: 20px;
  height: 900px;

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.9;
    transition: .5s ease;
    background-color: #2b2d36e0;
    z-index: -900;
  }

  ${mq.md(css`
    height: 470px;
    background-position: 30% -120px;
    -webkit-clip-path: polygon(100% 0, 100% 84%, 0 100%, 0 23%);
    clip-path: polygon(100% 0, 100% 84%, 0 100%, 0 23%);
  `)}
`
const IndexPage = () => {

  // const goto = () => {
  //   navigate('/test')
  // }
  
  return (
    <>
      <SEO title="Home" />

      <BannerComponent />

      <div className="container-fluid">
        <Title marginTop="30px" marginBottom="30px" max="10" min="20">
          HOW TO PROTECT YOURSELF
        </Title> 
        <Separate/>
        <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Description>
        <div className="row center-xs center-md">
          <div className="col-xs-6 col-md-4">
            <HowProtect>
              <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/wash.png" alt="" />
              <strong>Wash your Hands</strong>
            </HowProtect>
          </div>
          <div className="col-xs-6 col-md-4">
            <HowProtect>
              <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/home-run.png" alt="" />
              <strong>Avoide Close Contact</strong>
            </HowProtect>
          </div>
          <div className="col-xs-6 col-md-4">
            <HowProtect>
              <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/bed.png" alt="" />
              <strong>Stay Home</strong>
            </HowProtect>
          </div>
          <div className="col-xs-6 col-md-4">
            <HowProtect>
              <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/cough.png" alt="" />
              <strong>Cover Coughs and Sneezes</strong>
            </HowProtect>
          </div>
          <div className="col-xs-6 col-md-4">
            <HowProtect>
              <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/sick.png" alt="" />
              <strong>Wear a Face Mask</strong>
            </HowProtect>
          </div>
          <div className="col-xs-6 col-md-4">
            <HowProtect>
              <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/bucket.png" alt="" />
              <strong>Clean and Disinfect</strong>
            </HowProtect>
          </div>
        </div>

        <div className="row">
          <BarInterm className="col-xs-12 col-md-12">
            <Title marginTop="100px" marginBottom="30px" max="10" min="20" color="#fff">
              WHAT ARE THE SYMPTOMS OF CORONAVIRUS
            </Title> 
            <div className="overlay" />
            <div className="row center-xs center-md">
              <div className="col-xs-12 col-md-4">
                <Symptoms>
                  <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/fever-75x75.png" alt="" />
                  <strong>Fever</strong>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </Symptoms>
              </div>
              <div className="col-xs-12 col-md-4">
                <Symptoms>
                  <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2020/03/cough-1-75x75.png" alt="" />
                  <strong>COUGH</strong>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </Symptoms>
              </div>
              <div className="col-xs-12 col-md-4">
                <Symptoms>
                  <img src="https://modeltheme.com/mt_medplus/wp-content/uploads/2016/09/mt_medplus_icon3-75x75.png" alt="" />
                  <strong>BREATH SHORTNESS</strong>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </Symptoms>
              </div>
            </div>
          </BarInterm>
        </div>
      </div>

    </>
)}

export default IndexPage
