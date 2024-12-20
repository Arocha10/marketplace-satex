import React from 'react'
import styled from 'styled-components'

interface SectionProps {
  columns?: number
  justify?: string
}
export const FlexBottom:React.FC = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px;
  align-items: center;
  align-items: space-evenly;
  width: 100%;
  row-gap: 0;
  justify-content: flex-end;
`
const FlexWrapper:React.FC<SectionProps> = styled.section<SectionProps>`
  display: flex;
  min-height: 62px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  object-fit: cover;
  align-items: center;
  align-items: space-evenly;
  width: 100%;
  row-gap: 0;
  justify-content: ${props => `${props.justify}`};
  .home {
    height: 30px;
    @media (max-width: 470px) {
      display: none;
    }
  }

  .total {
    min-width: 100px;
    justify-content: space-between;
    display:flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    border: 1px #FCFAFD solid;
    margin: 10px;
    padddin: 5px;
    
    p {
      margin: 0.35em;
    }
    
    .car {
      padding-left: 3px;
    }

  }
    .clean {
      cursor: pointer;
    }
    `

export const Flex: React.FC<{columns?: number, justify?: string}> = ({ children, columns, justify }) => {
  return (
    <FlexWrapper justify={justify} columns={columns} >
      {children}
    </FlexWrapper>
  )
}
