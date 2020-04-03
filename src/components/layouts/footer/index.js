import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { FormattedMessage } from 'react-intl'

import SocialMedia from './SocialMedia'
import { mq } from '@/components/layouts/utils/base'
import { Colors } from '@/components/layouts/utils/theme'

const Container = styled.footer`
  width: 100%;
  height: 200px;
  color: ${Colors.mirage};
`
const BottomContainer = styled.div`
  height: 80px;
  background-color: ${Colors.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;

  ${mq.md(css`
    font-size: 16px;
  `)}
`
const FooterList = styled.ul`
  line-height: 0.9;
  margin-top: 10px;
  list-style: none;
  margin-left: 0px;
`
const Href = styled.a`
  color: ${Colors.lightGreen};
`

const Footer = (props) => {
  return (
    <Container className="container-fluid">
      <BottomContainer className="row">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <strong><FormattedMessage id="footer.minds.title" /></strong>
              <FooterList>
                <li>
                  <Href href="">
                    <FormattedMessage id="footer.minds.link1" />
                  </Href>
                </li>
                <li>
                  <Href href="">
                    <FormattedMessage id="footer.minds.link2" />
                  </Href>
                </li>
                <li>
                  <Href href="">
                    <FormattedMessage id="footer.minds.link3" />
                  </Href>
                </li>
              </FooterList>
            </div>
            <div className="col-xs-6 col-md-10">
              <span>® 2020 MindsDB. All rights reserved.</span>
            </div>
            <div className="col-xs-3 col-md-2">
              <SocialMedia />
            </div>
          </div>
        </div>
      </BottomContainer>
    </Container>
  )
}

export default Footer
