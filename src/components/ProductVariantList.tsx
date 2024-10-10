import { ProductVariants } from '../types/Product';
import { VariantProductCard } from './VariantProductCard';
interface ProductVariantListProps {
  selected: boolean;
  products: ProductVariants[];
}
export const ProductVariantList: React.FC<{
  selected: boolean;
  products?: ProductVariants[];
  variant?: ProductVariants;
  updateVariant: (product:ProductVariants)=> void;
}> = ({ selected, products, variant, updateVariant }) => {
  if (!selected || !products) return <></>;
  const handleChangeVariant = (product:ProductVariants) => {
    if (variant?.id !== product?.id) {
      updateVariant(product)
    }
  }
  const listProductsVariantsList = () =>
    products.map(product => (
      <VariantProductCard onClick={()=>handleChangeVariant(product)} selected={variant?.id === product.id} key={product.id}>
        <h3>{product.name}</h3>
        <div className="price">{`Price: $ ${product.price}`}</div>
      </VariantProductCard>
    ));

  return <>{listProductsVariantsList()}</>;
};
