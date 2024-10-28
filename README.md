# Front End Training Challenge
*delivered by Andres Rocha*

This document outlines the technical and architectural decisions made during the development of a React application designed to display a product line. The application connects to a GraphQL API to fetch the required data. Node.js v16.20.2 and npm 8.19.4 were selected as the technology stack for this project. The document delves into the rationale behind these choices and the solutions implemented to overcome challenges encountered during development.

## Goals

- Fetch product data from the shop's API with Apollo
- Enhance performance and user experience, implementing a pagination system that initially loads a subset of products
- Display a list of variant products in a grid format. Allow users to select a variant (even if there's only one), then specify the quantity, and view the total cost before adding to the cart.
- Provide a 'Clear Cart' button to allow users to remove all items from their cart.
- Display a subtotal, providing the customer with a clear view of the total cost before taxes and fees
- To ensure a seamless experience across page refreshes, we implemented a custom hook called useStateWithStorage. This hook checks local storage for a previously saved order, restoring it if found. Additionally, the hook listens for changes to the addItemToOrder mutation, updating the stored order accordingly. This persistence mechanism guarantees that the customer's cart remains intact even after navigating away from the page.
- When a customer clicks on a variant that they have already added to their cart, the component displays the current quantity, providing a quick reference. 
- Given the importance of responsive design, it's clear that the styles remain consistent, even when viewed on standard mobile devices.
- The use of custom hooks, such as useProducts, contributed to the project's modularity and maintainability. By encapsulating specific logic within these hooks, we were able to improve code organization and reusability.

## Requirements

- Implement a home page with a grid of products that includes product picture, description and price (from any product variant). ✅
- Create a "Buy" button for each product in the greed and implement a mutation to update an order everytime a user clicks on that button. ✅
  The mutation is called `addItemToOrder`. ✅
- Implement app header component that includes the subtotal of the current order and persists through page refresh. Hint: use Graphql mutation and Context API ✅
- Add custom hook named `useStateWithStorage` with same API as `useState` hook but adding local storage capabilities.  ✅
- Create tests for grid UI item and other components ✅

## Main components

### Header.tsx

Header component at first will only display the project logo. However, once a product is added to the cart, it will include an element that displays the subtotal and a button in the top right corner to clear the entire order.

### OrderContext.tsx

The entire application shares the order state through this context. The significance of this is that it allows us to share the product list information for an order without be sharing parameters between components, enabling us to display individual items or calculate the total order amount, as we do in the header.


### useStateWithStorage.tsx

To ensure a seamless experience across page refreshes, we implemented a custom hook called useStateWithStorage. This hook checks local storage for a previously saved order, restoring it if found. Additionally, the hook listens for changes to the addItemToOrder mutation, updating the stored order accordingly. This persistence mechanism guarantees that the customer's cart remains intact even after navigating away from the page.

### ProductGrid.tsx

This component encapsulates all the logic involved in displaying a product, providing a list of available product variants, and ensuring that the "Add to cart" button is only enabled when a variant and a valid quantity have been selected.

### ProductList.tsx

This component is responsible for handling queries to the Apollo API, mapping the retrieved items, and managing the marketplace pagination.

## Improvements

To enhance the application, we should implement proper error handling to inform the user of test failures caused by external factors, such as the shop API. Additionally, a detailed order menu should be added. Due to query matching issues, we were unable to fully test the ProductList component.

## Scripts

### `yarn start`

Runs the app in the development mode.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
