import { Flex } from './Flex';
import CarIcon from '../assets/cart.svg';
import TrashIcon from '../assets/icons-trash.svg';
import { useRemoveOrderLine } from '../hooks/useProducts';
import { useOrderContext } from '../contexts/OrderContext';
export const Header = () => {
  const {order: {subTotal, totalQuantity}} = useOrderContext();
  const [removeOrderLine, { error: fetchError }] = useRemoveOrderLine();

  return (
    <header style={{ background: '#F37226' }}>
      <Flex justify="space-between">
        <img
          className="home"
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
        {totalQuantity > 0 ? (
          <>
            <div className="total">
              <div>
                <img src={CarIcon} alt="car" />
              </div>
              <p>{`$ ${subTotal}`}</p>
            </div>
            <div onClick={() => removeOrderLine()}>
              <img src={TrashIcon} alt="remove" />
            </div>
          </>
        ) : (
          <></>
        )}
      </Flex>
    </header>
  );
};
