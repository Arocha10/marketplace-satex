import styled from 'styled-components'

interface ButtonProps {
  onClick:(id:number)=>void;
  disabled?:boolean;
}
export const Button:React.FC<ButtonProps> = styled.button<ButtonProps>`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #F4F0EC;
border-radius: 3px;
cursor: ${props => props.disabled ? `inherit` : `pointer`};
background: ${props => props.disabled ? `#c7c5c5` : `#7dd186`};
color: ${props => props.disabled ? `#F4F0EC` : `#010203`};
width: 50%;
`;

export const LoadButton:React.FC<ButtonProps> = styled.button<ButtonProps>`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 3px solid #FBF0EC;
border-radius: 3px;
cursor: pointer;
background: none;
`;