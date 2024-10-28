import { useState } from 'react';
import { ProductVariants } from '../types/Product';
import { useOrderContext } from '../contexts/OrderContext';

export function useOrderProduct(): [
  ProductVariants | undefined,
  (value: ProductVariants) => void,
  number,
  (quantity: number) => void
] {
  const {
    order: { lines },
  } = useOrderContext();

  const [variant, setVariant] = useState<ProductVariants | undefined>(
    undefined
  );
  const [quantityProduct, setQuantityProduct] = useState<number>(0);

  const searchQuantityInOrder = (id: string): number => {
    const variant = lines?.find((variant) => variant.productVariant.id === id);
    return variant ? variant.quantity : 0;
  };

  const updateVariant = (product: ProductVariants) => {
    setVariant(product);
    setQuantityProduct(searchQuantityInOrder(product.id));
  };

  return [variant, updateVariant, quantityProduct, setQuantityProduct];
}
