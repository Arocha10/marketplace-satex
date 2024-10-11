import { Product, ProductVariants } from '../types/Product';
import { ProductCard } from './ProductCard';
import { Grid } from './Grid';
import { Button } from './Button';
import { useEffect, useState } from 'react';
import { useAddProductOrder, useProducts } from '../hooks/useProducts';
import { ProductVariantList } from './ProductVariantList';
import { useOrderProduct } from '../hooks/useOrderProduct';
import { QuantityButton } from './QuantityButton';
import { useOrderContext } from '../contexts/OrderContext';
import { LoadingSpinner } from './LoadingButton';
import { Flex } from './Flex';

export function ProductList() {
  const [selected, setSelected] = useState('0');
  const [page, setPage] = useState(10);
  const [quantity, setQuantity] = useState(0);
  const [mainList, setMainList] = useState([]);
  const {order: {lines}} = useOrderContext();
  const [product, updateVariant] = useOrderProduct();
  const { data, loading, error, refetch } = useProducts(page, 0);
  const [addItemToOrder, { error: fetchError }] = useAddProductOrder();
  useEffect(() => {
    if (data)
      setMainList(data?.products?.items)
  }, [data]);

  if (error) return <p>Error : {error.message}</p>;

  if (fetchError) return <p>Error : {fetchError?.message}</p>;


  const handleupdateQuantity = (num:number) => {
    setQuantity(quantity+num > 0 ? quantity+num : 0)
  }

  const searchQuantityInOrder = (id:string) => {
    const variant =  lines?.find((variant) => variant.productVariant.id === id)
    return variant ? variant.quantity : 0;
  }

  const handleChangeSelectVariant = (variant:ProductVariants) => {
    updateVariant(variant)
    setQuantity(searchQuantityInOrder(variant.id))
  }

  const handleRefetchProducts = () => {
    setPage(page +10)
    refetch()
  }

  const handleShowVariants = (id: string) => {
    if (id === selected) {
      if(quantity>0)
        addItemToOrder({ variables: { variantId: product?.id, quantity: quantity } });
    } else {
      setSelected(id);
      const productVariant: ProductVariants = data?.products?.items.find(
        (item: { id: string }) => item.id === id
      )?.variants?.[0];
      updateVariant(productVariant)
      setQuantity(searchQuantityInOrder(productVariant.id))
    }
  };

  const handlePurchaseButton = (selected: boolean) => {
    return !selected
      ? 'Purchase'
      : product
      ? `$ ${product?.price*quantity}`
      : 'Not available';
  };

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
      <div className="welcome">Welcome, get full your car!</div>
      <Grid columns={4}>
        {showProducts(mainList)}
        <Flex justify='"center'>
          <LoadingSpinner loading={loading}>
            <Button onClick={handleRefetchProducts}>
                {`Load more ...`}
            </Button>
          </LoadingSpinner>
        </Flex>
      </Grid>
    </>
  );
}
