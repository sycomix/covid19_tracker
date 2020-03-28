import React from 'react'
import PropTypes from 'prop-types'

import './utils/layout.scss'

const FullContent = ({ children }) => {

  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

FullContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullContent
