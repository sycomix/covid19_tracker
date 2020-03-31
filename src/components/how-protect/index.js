import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { mq } from '@/components/layouts/utils/base'
import { Colors } from '@/components/layouts/utils/theme'
import Title from '@/components/ui/Title'
import Description from '@/components/ui/Description'

const StrongColor = css`
  color: ${Colors.lightGreen};
`

const marginDiv = css`
  margin-bottom: 20px;
`
const InformedContainer = styled.div`
  margin: 0;
  margin-bottom: 20px;

  .title-informed {
    background: ${Colors.lightGreen};
    width: 250px;
    margin: 0 auto;

    strong {
      color: ${Colors.white};
    }
  }

  ${mq.md(css`
    margin: 20px 0 0 40px;
  `)}
`

const HowProtect = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Title marginTop="40px" marginBottom="20px" max="8" min="28" textAlign="left">
          BE PART OF THE <strong css={StrongColor}>CURE</strong>
          </Title> 
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-7">
          <div css={marginDiv}>
            <Title marginTop="10px" marginBottom="10px" max="8" min="20" textAlign="left">
              Wash Your Hands
            </Title> 
            <Description textAlign="left" color="black" max="10" min="18">
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Description> 
          </div>
          <div css={marginDiv}>
            <Title marginTop="10px" marginBottom="10px" max="8" min="20" textAlign="left">
              Don't Touch Your Face
            </Title> 
            <Description textAlign="left" color="black" max="10" min="18">
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Description> 
          </div>
          <div css={marginDiv}>
            <Title marginTop="10px" marginBottom="10px" max="8" min="20" textAlign="left">
              Avoid Social Physical Contact
            </Title> 
            <Description textAlign="left" color="black" max="10" min="18">
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Description> 
          </div>
        </div>
        <div className="col-xs-12 col-md-5">
          <InformedContainer>
            <Title marginTop="10px" marginBottom="20px" max="8" min="25" textAlign="center">
              <div className="title-informed">
                BE <strong>WELL</strong> INFORMED
              </div> 
            </Title>
            <Description textAlign="center" color="black" max="10" min="18">
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Description> 
          </InformedContainer>
        </div>
      </div>
    </div>
  )
}

export default HowProtect
