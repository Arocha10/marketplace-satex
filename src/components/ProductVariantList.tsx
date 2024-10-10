import { ProductVariants } from '../types/Product';
import { ProductCard } from './ProductCard';
interface ProductVariantListProps {
  selected: boolean;
  products: ProductVariants[];
}
export const ProductVariantList: React.FC<{
  selected: boolean;
  products?: ProductVariants[];
  variant?: ProductVariants;
}> = ({ selected, products, variant }) => {
  if (!selected || !products) return <></>;

  const listProductsVariantsList = () =>
    products.map(({ id, name, price }) => (
      <ProductCard selected={variant?.id === id} key={id}>
        <h3>{name}</h3>
        <div className="description">{price}</div>
      </ProductCard>
    ));

  return <>{listProductsVariantsList()}</>;
};
