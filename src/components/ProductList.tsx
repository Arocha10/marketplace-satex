import { Product } from '../types/Product';
import { Grid } from './Grid';
import { LoadButton } from './Button';
import { useEffect, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { LoadingSpinner } from './LoadingButton';
import { Flex } from './Flex';
import { PAGE_SIZE } from '../constants/constants';
import { ProductGrid } from './ProductGrid';

export function ProductList() {
  const [page, setPage] = useState(PAGE_SIZE);
  const [mainList, setMainList] = useState([]);
  const { data, loading, error, refetch } = useProducts(page, 0);
  useEffect(() => {
    if (data) setMainList(data?.products?.items);
  }, [data]);

  if (error) return <p>Error : {error.message}</p>;

  const handleRefetchProducts = () => {
    setPage(page + PAGE_SIZE);
    refetch();
  };

  const showProducts = (products: Product[]) => {
    return products.map(
      ({ id, name, description, featuredAsset, variants }) => (
        <ProductGrid
          id={id}
          name={name}
          description={description}
          src={featuredAsset?.preview}
          variants={variants}
        />
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
            <LoadButton onClick={handleRefetchProducts}>{`Load more ...`}</LoadButton>
          </LoadingSpinner>
        </Flex>
      </Grid>
    </>
  );
}
