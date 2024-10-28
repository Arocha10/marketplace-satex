import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './contexts/OrderContext';

function App():JSX.Element {

  return (
    <OrderProvider>
      <Header/>
      <div className="product-grid">
        <ProductList/>
      </div>
    </OrderProvider>
  );
}

export default App;
