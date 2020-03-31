import React from 'react'

import CustomSymptoms from '@/components/symptoms'
import BannerComponent from '@/components/banner'
import HowProtect from '@/components/how-protect'
import SEO from '../components/seo'

const IndexPage = () => {  
  return (
    <>
    
      <SEO title="Home" />

      <BannerComponent />
      <HowProtect />
      <CustomSymptoms />

    </>
)}

export default IndexPage
