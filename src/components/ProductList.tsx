import { Product, ProductVariants } from '../types/Product';
import { ProductCard } from './ProductCard';
import { Grid } from './Grid';
import { Button } from './Button';
import { useState } from 'react';
import { useAddProductOrder, useProducts } from '../hooks/useProducts';
import { ProductVariantList } from './ProductVariantList';
import { useOrderProduct } from '../hooks/useOrderProduct';
import { QuantityButton } from './QuantityButton';
import { useOrderContext } from '../contexts/OrderContext';

export function ProductList() {
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const {order: {lines}} = useOrderContext();
  const [product, updateVariant] = useOrderProduct();
  const { data, loading, error } = useProducts();
  const [addItemToOrder, { error: fetchError }] = useAddProductOrder();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (fetchError) return <p>Error : {fetchError?.message}</p>;

  const handleupdateQuantity = (num:number) => {
    setQuantity(quantity+num > 0 ? quantity+num : 0)
  }

  const searchQuantityInOrder = (id:number) => {
    const variant =  lines?.find((variant) => variant.productVariant.id === id)
    return variant ? variant.quantity : 0;
  }

  const handleChangeSelectVariant = (variant:ProductVariants) => {
    updateVariant(variant)
    setQuantity(searchQuantityInOrder(variant.id))
  }

  const handleShowVariants = (id: number) => {
    if (id === selected) {
      if(quantity>0)
        addItemToOrder({ variables: { variantId: product?.id, quantity: quantity } });
    } else {
      setSelected(id);
      const productVariant: ProductVariants = data?.products?.items.find(
        (item: { id: number }) => item.id === id
      )?.variants?.[0];
      updateVariant(productVariant)
      setQuantity(searchQuantityInOrder(productVariant.id))
    }
  };

  const handlePurchaseButton = (selected: boolean) => {
    return !selected
      ? 'Purchase'
      : product
      ? `$ ${product?.price}`
      : 'Not available';
  };

  console.log(data);
  const showProducts = (products: Product[]) => {
    return products.map(
      ({ id, name, description, featuredAsset, variants }) => (
        <ProductCard selected={selected === id} key={id}>
          <h3>{name}</h3>
          <img alt="" src={featuredAsset?.preview} />
          <div className="description">{description}</div>
          <Button onClick={() => handleShowVariants(id)}>
            {handlePurchaseButton(selected === id)}
          </Button>
          <QuantityButton setQuantity={handleupdateQuantity}>{quantity}</QuantityButton>
          <ProductVariantList
            selected={selected === id}
            variant={product}
            products={variants}
            updateVariant={handleChangeSelectVariant}
          />
        </ProductCard>
      )
    );
  };
  return (
    <>
      <div>List</div>
      <Grid columns={4}>{showProducts(data?.products?.items)}</Grid>
    </>
  );
}
