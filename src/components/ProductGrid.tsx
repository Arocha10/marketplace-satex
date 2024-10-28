import { ProductVariants } from '../types/Product';
import { Button } from './Button';
import { ProductCard } from './ProductCard';
import { ProductVariantList } from './ProductVariantList';
import { QuantityButton } from './QuantityButton';
import { useOrderProduct } from '../hooks/useOrderProduct';
import { useAddProductOrder } from '../hooks/useProducts';
import { FlexBottom } from './Flex';
import { BUTTON_BUY } from '../constants/constants';
import { useState } from 'react';

export const ProductGrid: React.FC<{
  id: string;
  name: string;
  description: string;
  src?: string;
  variants?: ProductVariants[];
}> = ({ id, name, description, src, variants }) => {
  const [addItemToOrder, { error: fetchError }] = useAddProductOrder();
  const [variant, updateVariant, quantity, setQuantity] = useOrderProduct();
  const [priceProduct, setPriceProduct] = useState(BUTTON_BUY);
  const handleupdateQuantity = (num: number) => {
    if(quantity + num > 0){
      setQuantity(quantity + num);
      setPriceProduct(variant ? `${BUTTON_BUY}: $${variant?.price*(quantity + num)}`:BUTTON_BUY)
    }
  };

  const handleAddItem = () => {
    if (quantity > 0) {
      addItemToOrder({
        variables: { variantId: variant?.id, quantity: quantity },
      });
    }
  };

  const handlePurchaseButton = () => {
    return variant ? priceProduct : BUTTON_BUY;
  };

  return (
    <ProductCard selected key={id}>
      <h3>{name}</h3>
      <img alt="" src={src} />
      <div className="description">{description}</div>
      <FlexBottom>
        <ProductVariantList
          variant={variant}
          products={variants}
          updateVariant={updateVariant}
        />
        {variant && 
        <QuantityButton setQuantity={handleupdateQuantity}>
          {quantity}
        </QuantityButton>}
        <div>{fetchError?.message}</div>
        <Button disabled={!variant || !quantity} onClick={() => handleAddItem()}>
          {handlePurchaseButton()}
        </Button>
      </FlexBottom>
    </ProductCard>
  );
};
