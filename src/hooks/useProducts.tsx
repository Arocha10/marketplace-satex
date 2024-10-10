import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { ADD_ITEM_TO_ORDER, REMOVE_ORDER_LINE } from '../graphql/mutations';
import useStateWithStorage from './useStateWithStorage';
import { useOrderContext } from '../contexts/OrderContext';

export const useProducts = () => {
  const result = useQuery(GET_PRODUCTS);
  return result
}

export const useAddProductOrder = () => {
  const {addItem} = useOrderContext();

  return useMutation(ADD_ITEM_TO_ORDER, {
    onCompleted: (data) => {
        // Trigger additional logic or other hooks here
        console.log('Item created:', data.addItemToOrder);
        addItem(data.addItemToOrder)
    },
    onError: (error) => {
        console.error('Error creating item:', error);
    }
});
}

export const useRemoveOrderLine = () => {
  const {clearCart} = useOrderContext();

  return useMutation(REMOVE_ORDER_LINE, {
    onCompleted: (data) => {
        // Trigger additional logic or other hooks here
        console.log('Item useRemoveOrderLine:', data.removeAllOrderLines);
        clearCart()
    },
    onError: (error) => {
        console.error('Error creating item:', error);
    }
});
}