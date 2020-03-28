import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { get } from 'lodash'

import { mq } from '@/components/layouts/utils/base'
import NavBar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'
import './utils/layout.scss'

const PageContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  /* 240px: Footer Height */
  /* 88px: Main Section Margin Top */
  min-height: calc(100vh - 240px - 100px);

  ${mq.md(css`
    margin-top: 64px;
    /* 240px: Footer Height */
    /* 64px: Main Section Margin Top */
    min-height: calc(100vh - 240px - 64px);
  `)}
`

const Layout = (props) => {
  const {
    children,
    location,
  } = props

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pathname = get(location, 'pathname', '/')
  const showSubscribe = pathname === '/' || pathname === '/404'

  return (
    <>
      <NavBar siteTitle={data.site.siteMetadata.title} location={location} />
      <PageContainer>
        <main>{children}</main>
      </PageContainer>
      <Footer showSubscribe={showSubscribe} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
