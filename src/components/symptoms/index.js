import React from 'react'
import styled from '@emotion/styled'
import { mq } from '@/components/layouts/utils/base'
import { css } from '@emotion/core'

import Title from '@/components/ui/Title'

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
  -webkit-clip-path: polygon(100% 0,135% 100%,0 100%,0 7%);
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
  `)}
`

const CustomSymptoms = () => {

  return (
    <div className="container-fluid">
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
  )
}

export default CustomSymptoms
