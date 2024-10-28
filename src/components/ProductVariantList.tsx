import { ProductVariants } from '../types/Product';
import { VariantProductCard } from './VariantProductCard';

export const ProductVariantList: React.FC<{
  products?: ProductVariants[];
  variant?: ProductVariants;
  updateVariant: (product: ProductVariants) => void;
}> = ({ products, variant, updateVariant }) => {
  if (!products) return <></>;
  const handleChangeVariant = (product: ProductVariants) => {
    if (variant?.id !== product?.id) {
      updateVariant(product);
    }
  };
  const listProductsVariantsList = () =>
    products.map((product) => (
      <VariantProductCard
        onClick={() => handleChangeVariant(product)}
        selected={variant?.id === product.id}
        key={product.id}
      >
        <h3>{product.name}</h3>
        <div
          className={variant?.id === product.id ? 'selected' : undefined}
        >{`Price: $ ${product.price}`}</div>
      </VariantProductCard>
    ));

  return <>{listProductsVariantsList()}</>;
};
