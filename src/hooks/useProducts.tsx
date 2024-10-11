import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { ADD_ITEM_TO_ORDER, REMOVE_ORDER_LINE } from '../graphql/mutations';
import { useOrderContext } from '../contexts/OrderContext';

export const useProducts = (take:number, skip:number) => {
  const result = useQuery(GET_PRODUCTS, {variables: {take, skip}});
  return result
}

export const useAddProductOrder = () => {
  const {addItem} = useOrderContext();

  return useMutation(ADD_ITEM_TO_ORDER, {
    onCompleted: (data) => {
        addItem(data.addItemToOrder)
    }
});
}

export const useRemoveOrderLine = () => {
  const {clearCart} = useOrderContext();

  return useMutation(REMOVE_ORDER_LINE, {
    onCompleted: (data) => {
        clearCart()
    }
});
}