import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './contexts/OrderContext';

function App():JSX.Element {

  return (
    <OrderProvider>
      <Header></Header>
      <div className="product-grid">
        <ProductList></ProductList>
      </div>
    </OrderProvider>
  );
}

export default App;
