import React from "react"

import styled from "@emotion/styled"
import { Colors } from "@/components/layouts/utils/theme"
import { makeResponsive } from "@/components/layouts/utils/base"

const CustomTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  color: ${props => props.color || Colors.mirage};
  text-align: ${props => props.textAlign || "center"};
  margin-top: ${props => props.marginTop || "0px"};
  margin-bottom: ${props => props.marginBottom || "0px"};

  ${props =>
    makeResponsive([
      {
        property: "font-size",
        min: props.min,
        max: props.max,
        unit: "px",
      },
    ])}
`

const Title = props => {
  const {
    children,
    customClass,
    marginTop,
    marginBottom,
    color,
    textAlign,
    min,
    max,
  } = props

  return (
    <CustomTitle
      css={customClass}
      marginTop={marginTop}
      marginBottom={marginBottom}
      color={color}
      textAlign={textAlign}
      min={min || 36}
      max={max || 36}
    >
      {children}
    </CustomTitle>
  )
}

export default Title
