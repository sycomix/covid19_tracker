import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Cookies from 'js-cookie';
import { FormattedMessage } from 'react-intl'

import { mq } from '@/components/layouts/utils/base'
import { Colors } from '@/components/layouts/utils/theme'
import locales from '@/content/locales'

const Slider = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: flex-end;
  text-align: center;
  -webkit-overflow-scrolling: touch;
  margin: 18px 0;

  ${mq.md(css`
    margin: 0;
    justify-content: flex-end;
  `)}
`
const Slide = styled.div`
  width: auto;
  height: 100%;
  flex-shrink: 0;
  margin-right: 25px;

  &:last-of-type {
    margin-right: 0;
  }
`
const RemoveCookie = styled.div`
  z-index:9999999;
  width: 100%;
  margin-top: -20px;
  display: flex;
  justify-content: center;
  background: #e65a64;
  color: white;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  ${mq.md(css`
    width: 80%;
    margin-top: 0;
  `)}
`
const ButtonCookie = styled.button`
  cursor: pointer;
  background: transparent;
  color: white;
  text-decoration: underline;
  text-decoration-color: white;
  &:hover {
    font-weight:900;
  }
`
const Item = styled.span`
  margin: 0 10px;
  border-bottom: 1px solid transparent;
  text-transform: capitalize;
  font-weight: 400;
  margin-left: 0;
  margin-right: 0;

  a {
    cursor: pointer;
    color: ${Colors.white};
    text-decoration: none;
    font-weight: 400;

    &:hover {
      color: ${Colors.white};
      font-weight: 900;
      border-bottom: 1px solid ${Colors.white};
    }
  }

  &.selected {
    a {
      color: ${Colors.white};
      font-weight: 900;
      border-bottom: 1px solid ${Colors.white};
    }
  }
`

const NavLinks = (props) => {
  const { locale } = props

  const mindsDBCovid = Cookies.get('mindsDBCovid')
  const [mindsDBCovidState, setMindsDBCovid] = useState(mindsDBCovid)

  const clearCookies = (e) => {
    e.preventDefault()
    e.stopPropagation()
    Cookies.set('mindsDBCovid', '')
    setMindsDBCovid('')
  }

  return (
    <>
    {
      mindsDBCovidState === 'completed' && (
        <RemoveCookie onClick={(e) => clearCookies(e)}>
          <FormattedMessage id="cookies.completed.msg" />&nbsp;&nbsp;
          <ButtonCookie><FormattedMessage id="cookies.completed.msg.action" /></ButtonCookie>
        </RemoveCookie>
      )
    }
    <Slider>
      {Object.keys(locales).map((key, idx) => (
        <Slide key={idx}>
          <Item className={key === locale  ? 'selected' : ''}>
            <Link to={locales[key].default ? '/' : `/${locales[key].path}`}>
              {locales[key].locale}
            </Link>
          </Item>
        </Slide>
      ))}
    </Slider>
    </>
  )
}

export default NavLinks
