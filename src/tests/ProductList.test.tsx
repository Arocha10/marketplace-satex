import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ProductList } from '../components/ProductList';
import { OrderContext } from '../contexts/OrderContext';
import { mockedEmptyOrderContextValue } from './mocks/Order.mock';
import { mockEmptyGrid } from './mocks/ProductVariant.mock';

describe('ProductList', () => {
  const mockOrder = {
    order: { ...mockedEmptyOrderContextValue },
    addItem: jest.fn(() => {
      return;
    }),
    clearCart: jest.fn(() => {
      return;
    }),
  };
  test('renders correctly', () => {
    render(
      <MockedProvider mocks={mockEmptyGrid} addTypename={false}>
        <OrderContext.Provider value={mockOrder}>
          <ProductList />
        </OrderContext.Provider>
      </MockedProvider>
    );
    const welcomeText = screen.getByText('Welcome, get full your car!');
    expect(welcomeText).toBeInTheDocument();
  });
});
