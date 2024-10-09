import React from 'react'
import styled from 'styled-components'

interface SectionProps {
  columns?: number
  justify?: string
}
const FlexWrapper:React.FC<SectionProps> = styled.section<SectionProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20 auto;
  object-fit: cover;
  align-content: space-evenly;
  width: 100%;
  row-gap: 0;
  justify-content: ${props => `${props.columns}`}; 
`

export const Flex: React.FC<{columns?: number, justify?: string}> = ({ children, columns, justify }) => {
  return (
    <FlexWrapper justify={justify} columns={columns} >
      {children}
    </FlexWrapper>
  )
}
