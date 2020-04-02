import React from 'react'
import { Link } from 'gatsby'
import { injectIntl } from 'react-intl'

import locales from '@/content/locales'

export const LocalizedLink = injectIntl(({ to, intl: { locale }, ...props }) => {
  const path = locales[locale].default ? to : `/${locale}${to}`

  return <Link {...props} to={path} />
})

export default {}
