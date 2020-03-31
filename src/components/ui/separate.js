import React from 'react'

import styled from '@emotion/styled'
import { Colors } from '@/components/layouts/utils/theme'

const CustomSeparate = styled.hr`
  background: ${props => props.color || Colors.lightGreen};
  height: 5px;
  width: 10%;
  margin: -21px auto 20px;
`

const Separate = (props) => {
  const { color } = props

  return (
    <CustomSeparate  color={color} />
  )
}

export default Separate
