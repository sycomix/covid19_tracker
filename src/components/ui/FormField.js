import React from 'react'
import styled from '@emotion/styled'

import { Colors } from '@/components/layouts/utils/theme'

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.marginBottom || '5px'};
  width: 100%;
  align-items: flex-end;
`
const InputLabel = styled.label`
  width: 100%;
`
const Input = styled.input`
  border: none;
  font-size: 16px;
  color: ${Colors.mirage};
  background-color: ${Colors.white};
  padding: 12px 5px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-weight: 700;
  text-align: ${props => props.textAlign || 'start'};
`
const Hint = styled.p`
  color: ${Colors.burntSienna};
  font-size: 12px;
  font-weight: 700;
  height: 26px;
  margin: 0;
`

const validRequired = (required, value) => (required ? value !== '' : true)

const validMatch = (pattern, value) => (pattern ? new RegExp(pattern).test(value) : true)

const onfieldChange = props => e => {
  const { onfieldChange, required, pattern } = props
  const { name, value } = e.target

  const valid = validRequired(required, value) && validMatch(pattern, value)

  onfieldChange(name, value, valid)
}

const FormField = (props) => {
  const {
    placeholder,
    type,
    textAlign,
    name,
    value,
    showHint,
    hint,
    marginBottom,
  } = props

  return (
    <FieldContainer marginBottom={marginBottom}>
      <InputLabel htmlFor={name} />
      <Input
        placeholder={placeholder}
        type={type}
        textAlign={textAlign}
        id={name}
        name={name}
        onChange={onfieldChange(props)}
        value={value}
        {...props}
      />
      {
        hint
          ? <Hint>{showHint ? hint : ''}</Hint>
          : null
      }
    </FieldContainer>
  )
}

export default FormField
