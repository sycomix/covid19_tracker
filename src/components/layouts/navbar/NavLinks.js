import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

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
const Item = styled.span`
  margin: 0 10px;
  border-bottom: 1px solid transparent;
  text-transform: capitalize;
  font-weight: 400;
  margin-left: 0;
  margin-right: 0;

  a {
    cursor: pointer;
    color: ${Colors.mirage};
    text-decoration: none;
    font-weight: 400;

    &:hover {
      color: ${Colors.lightGreen};
      border-bottom: 1px solid ${Colors.lightGreen};
    }
  }

  &.selected {
    a {
      color: ${Colors.lightGreen};
      border-bottom: 1px solid ${Colors.lightGreen};
    }
  }
`

const NavLinks = (props) => {
  const { locale } = props

  return (
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
  )
}

export default NavLinks
