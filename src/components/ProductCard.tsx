import styled from 'styled-components'

interface ProductItemProps {
  selected: boolean;
}
export const ProductCard: React.FC<ProductItemProps>  = styled.div<ProductItemProps>`
  display: flex;
  flex-grow: 4;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 12px 8px;
  justify-content: flex-start;
  border-radius: 8px;
  background: ${props => props.selected ? `rgb(184, 207, 245)` : `#F4F0EC`};
  border: 1px #010203 solid;
  grid-row-start: ${props => props.selected ? `span 2` : `span 1`};
  transition: 450ms;
  img {
    margin-bottom: 16px;
    height: 250px;
    width: auto;
    object-fit: cover;
    @media (max-width: 600px) {
      height: 150px;
    }
  }
  h3 {
    font-size: 1em;
  }

  .quantity-buttons {
    justify-content: center;
    margin-bottom: 8px;

    button {
      background: #7dd186;
      color: #010203;
    }
  }
`
