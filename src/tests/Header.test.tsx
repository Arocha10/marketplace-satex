import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Header } from '../components/Header';
import { OrderContext } from '../contexts/OrderContext';
import { mockedEmptyOrderContextValue, mockedOrderContextValue } from './mocks/Order.mock';

describe('Header', () => {
  const mockOrder = {
    order: { ...mockedOrderContextValue },
    addItem: jest.fn(() => {
      return;
    }),
    clearCart: jest.fn(() => {
      return;
    }),
  };
  test('renders correctly', () => {
    render(
      <MockedProvider>
        <OrderContext.Provider value={mockOrder}>
          <Header />
        </OrderContext.Provider>
      </MockedProvider>
    );
    const imageElement = screen.getAllByRole('img');
    expect(imageElement.length).toBeLessThan(4);
  });
  test('renders with a lang', () => {
    const mockOrder = {
      order: { ...mockedEmptyOrderContextValue },
      addItem: jest.fn(() => {
        return;
      }),
      clearCart: jest.fn(() => {
        return;
      }),
    };
    render(
      <MockedProvider>
        <OrderContext.Provider value={mockOrder}>
          <Header />
        </OrderContext.Provider>
      </MockedProvider>
    );
    const subTotalTag = screen.getByAltText('logo');
    expect(subTotalTag).toBeInTheDocument();
  });
});
