import { Product, ProductVariants } from '../types/Product';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS, FIND_PRODUCT } from '../graphql/queries';
import { ProductCard } from './ProductCard';
import { Grid } from './Grid';
import { Button } from './Button';
import { useEffect, useState } from 'react';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';

export function ProductList() {
  const [selected, setSelected] = useState(0);
  const [product, setProduct] = useState<ProductVariants>();
  const [getProduct, result] = useLazyQuery(FIND_PRODUCT)
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const [addItemToOrder, {data: fetchData, loading: isLoading, error: fetchError}] = useMutation(ADD_ITEM_TO_ORDER);
 // TODO: Fetchdata must update the subtotal in the context


  useEffect(() => {
    setProduct(result?.data?.product?.variants?.[0])
  }, [result]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (isLoading) return <p>Loading Order...</p>;
  if (fetchError) return <p>Error : {fetchError?.message}</p>;

  const handleShowVariants = (id:number) =>{
    if (id === selected){
      addItemToOrder({variables:{variantId: product?.id, quantity: 1}})
    } else {
      getProduct({variables:{productId: id}})
      setSelected(id)
    }
    
  }

  const handlePurchaseButton = (selected:boolean) => {
    return !selected ? 'Purchase' : product ? `$ ${product?.price}` : 'No disponible'
  }

  console.log(data);
  const showProducts = (products: Product[]) => {
    return products.map(({ id, name, description, featuredAsset }) => (
      <ProductCard selected={selected===id} key={id}>
        <h3>{name}</h3>
        <img alt="" src={featuredAsset?.preview} />
        {<div className="description">{description}</div>}
        <Button onClick={() => handleShowVariants(id)} >{handlePurchaseButton(selected===id)}</Button>
      </ProductCard>
    ));
  };
  return (
    <>
      <div>List</div>
      <Grid columns={4} >{showProducts(data?.products?.items)}</Grid>
    </>
  );
}
