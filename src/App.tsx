import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './contexts/OrderContext';

function App() {

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
