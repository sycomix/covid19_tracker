import React from 'react'
import { css } from '@emotion/core'
import { Colors } from '@/components/layouts/utils/theme'

import Title from '@/components/ui/Title'

const StrongColor = css`
  color: ${Colors.lightGreen};
`

const HowProtect = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Title marginTop="40px" marginBottom="30px" max="8" min="28">
          BE PART OF THE <strong css={StrongColor}>CURE</strong>
          </Title> 
        </div>
        <div className="col-xs-12 col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">1</div>
              <div className="col-xs-12 col-md-6">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowProtect
