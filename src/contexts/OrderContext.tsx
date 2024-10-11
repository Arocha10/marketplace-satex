
import { createContext, useContext, useState } from 'react';
import { Order, OrderLine } from '../types/Order';
import useStateWithStorage from '../hooks/useStateWithStorage';

interface OrderContextType {
  order: {
    id: string
    subTotal?: number
    totalQuantity: number
    lines?: OrderLine[]
  };
  addItem: (order: Order) => void;
  clearCart: () => void;
}

const OrderContext = createContext<OrderContextType>({
  order: {
    id: '0',
    subTotal: undefined,
    totalQuantity: 0,
    lines: []
  },
  addItem: () => {},
  clearCart: () => {}
});

function useOrderContext() {
  return useContext(OrderContext);
}


function OrderProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [value, setValue] = useStateWithStorage('orderLine', undefined)

  const [order, setOrder] = useState({
    id: value?.id || 0,
    subTotal: value?.subTotal || 0,
    totalQuantity: value?.totalQuantity || 0,
    lines: value?.lines || []
  });

  const addItem = (order: Order) => {
    setOrder((prevOrder) => ({
      ...prevOrder, ...order
    }));
    setValue(order)
  };

  const clearCart = () => {
    const clearOrder = {
      id: 0,
      subTotal: 0,
      totalQuantity: 0,
      lines: []
    }
    setValue(clearOrder)
    setOrder((prevOrder) => ({
      ...prevOrder, ...clearOrder,
    }));
  };

  return (
    <OrderContext.Provider value={{ order, addItem, clearCart }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, useOrderContext, OrderProvider };