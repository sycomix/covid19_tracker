import React from 'react'

import CustomSymptoms from '@/components/symptoms'
import BannerComponent from '@/components/banner'
import HowProtect from '@/components/how-protect'
import SEO from '../components/seo'
import locales from '@/content/locales'

const IndexPage = ({ pageContext: { locale } }) => {
  const urlPrefix = locales[locale].default ? '/' : `/${locale}`

  return (
    <>

      <SEO title="Home" />

      <BannerComponent urlPrefix={urlPrefix} />
      <HowProtect />
      <CustomSymptoms />

    </>
  )
}

export default IndexPage
