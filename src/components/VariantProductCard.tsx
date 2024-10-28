import styled from 'styled-components'

interface ProductItemProps {
  selected: boolean;
  onClick: ()=>void;
}
export const VariantProductCard: React.FC<ProductItemProps>  = styled.div<ProductItemProps>`
  display: flex;
  width: 95%;
  flex-direction: column;
  margin-bottom: 12px;
  max-height: 80px;
  padding: 6px 8px;
  justify-content: flex-start;
  border-radius: 8px;
  background: ${props => props.selected ? `#7dd186` : `#F4F0EC`};
  border: 1px #010203 solid;
  grid-row-start: ${props => props.selected ? `span 2` : `span 1`};
  cursor: ${props => props.selected ? `default` : `pointer`};
  transition: 450ms;
  title {
    font-size: 1em;
  }
  button {
    background: ${props => props.selected ? `#7dd186` : `#1CA9C9`};
    color: ${props => props.selected ? `#010203` : `#FCFAFD`};
  }
  .price {
    flex: 1;
  }
  h3 {
    margin-top: 7px;
    margin-bottom: 7px;
  }
`
