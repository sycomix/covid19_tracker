import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getMatchMedias } from '@/components/layouts/utils/base'
import {
  setViewport,
} from '@/store/actions/ui'

const AppContext = React.createContext()

const AppProvider = ({ children, setViewportGlobally }) => {

  const [viewport, setViewportLocally] = useState('xs')
  useEffect(() => {
    let currentViewport
    const matchMedias = getMatchMedias()
    const onViewportChange = ({ matches, media }) => {
      if (matches) {
        setViewportLocally(matchMedias[media][1])
      }
    }

    Object.keys(matchMedias).forEach((key) => {
      const [mm, vp] = matchMedias[key]
      if (mm.matches) {
        currentViewport = vp
      }
      mm.addListener(onViewportChange)
    })

    setViewportLocally(currentViewport)
    setViewportGlobally(currentViewport)

    return function cleanup() {
      Object.keys(matchMedias).forEach((key) => {
        matchMedias[key][0].removeListener(onViewportChange)
      })
    }
  }, [viewport, setViewportGlobally])

  if (viewport) {
    return (
      <AppContext.Provider value={{ ...viewport }}>
        {children}
      </AppContext.Provider>
    )
  }

  return null
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

const mapDispatchToProps = {
  setViewportGlobally: setViewport,
}

export default connect(null, mapDispatchToProps)(AppProvider)
