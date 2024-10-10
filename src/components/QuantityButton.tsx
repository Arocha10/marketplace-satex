import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CounterButton = styled.button<ButtonProps>`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const CounterText = styled.div`
  font-size: 18px;
`;

interface ButtonProps {
  onClick:(id:number)=>void
  children: string;
}

export function QuantityButton({ children, setQuantity }: { children: React.ReactNode, setQuantity: (value:number)=>void }) {

  const increment = () => {
    setQuantity(1);
  };

  const decrement = () => {
    setQuantity(-1);
  };

  return (
    <div className='quantity-buttons'>
    <CounterContainer >
      <CounterButton onClick={decrement}>-</CounterButton> 
        <CounterText>{children}</CounterText>
      <CounterButton onClick={increment}>+</CounterButton>
    </CounterContainer>
    </div>
  );
}