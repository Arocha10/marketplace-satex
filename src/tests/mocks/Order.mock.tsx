export const mockedOrderContextValue = {
  id: '31',
  subTotal: 248648,
  totalQuantity: 3,
  lines: [
    {
      productVariant: {
        name: 'Laptop 13 inch 16GB',
        price: 219900,
        id: '3',
        __typename: 'ProductVariant',
      },
      quantity: 1,
      linePriceWithTax: 263880,
      __typename: 'OrderLine',
    },
    {
      productVariant: {
        name: 'Curvy Monitor 24 inch',
        price: 14374,
        id: '9',
        __typename: 'ProductVariant',
      },
      quantity: 2,
      linePriceWithTax: 34498,
      __typename: 'OrderLine',
    },
  ],
  __typename: 'Order',
};

export const mockedEmptyOrderContextValue = {
  id: '30',
  subTotal: 0,
  totalQuantity: 0,
  lines: [],
  __typename: 'Order',
};
