import styled from 'styled-components'

interface ButtonProps {
  onClick:(id:number)=>void
}
export const Button:React.FC<ButtonProps> = styled.button<ButtonProps>`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #F4F0EC;
border-radius: 3px;
cursor: pointer;
`;