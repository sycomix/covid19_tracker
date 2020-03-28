import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

import { mq } from '@/components/layouts/utils/base'
import { Colors } from '@/components/layouts/utils/theme'

const Container = styled.footer`
  width: 100%;
  height: 240px; /* TopContainer + BottomContainer */
  color: ${Colors.white};
`
const TopContainer = styled.div`
  height: 170px;
  background-color: ${Colors.concreteSolid};
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

const SocialMedia = styled.ul`
  list-style-type: none;
  display: inline-flex;
  margin-top: 20px;

  li {
    margin: 0 15px;
  }

  a{ color: white} 
`

const Footer = (props) => {
  return (
    <Container className="container">
      <TopContainer className="row">
       
      </TopContainer>
      <BottomContainer className="row">
        <div className="col-xs-6 col-md-10">
          <span>® 2020 MindsDB. All rights reserved.</span>
        </div>
        <div className="col-xs-3 col-md-2">
         <SocialMedia>
           <li>
            <a target="_blank" className="facebook" href="https://www.facebook.com/MindsDB/">
            <FaFacebook />
            </a>
           </li>
           <li>
            <a target="_blank" className="facebook" href="https://github.com/mindsdb">
              <FaGithub/>
            </a>
           </li>
           <li>
            <a target="_blank" className="facebook" href="https://twitter.com/mindsdb">
              <FaTwitter />
            </a>
           </li>
         </SocialMedia>
        </div>
      </BottomContainer>
    </Container>
  )
}

export default Footer
