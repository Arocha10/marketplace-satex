import React from 'react'
import styled from 'styled-components'

interface SectionProps {
  columns?: number
  selected?: boolean
  index?: number
}
const GridWrapper:React.FC<SectionProps> = styled.section<SectionProps>`
  display: Grid;
  margin: 20 auto;
  object-fit: cover;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-column-gap: 32px;

`

export const Grid: React.FC<SectionProps> = ({ children, columns, selected }) => {
  return (
    <GridWrapper columns={columns} >
      {children}
    </GridWrapper>
  )
}
