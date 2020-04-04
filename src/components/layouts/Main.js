import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { get } from 'lodash'
import { IntlProvider } from 'react-intl'

import NavBar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'
import './utils/layout.scss'

// Messages
import en from '@/content/i18n/en.json'
import es from '@/content/i18n/es.json'

const messages = { en, es }

const PageContainer = styled.div`
  margin: 0 auto;
`

const Layout = (props) => {
  const {
    children,
    location,
    locale,
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
    <IntlProvider locale={locale} messages={messages[locale]}>
      <NavBar
        siteTitle={data.site.siteMetadata.title}
        location={location}
        locale={locale}
      />
      <PageContainer>
        <main>{children}</main>
      </PageContainer>
      <Footer showSubscribe={showSubscribe} />
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
