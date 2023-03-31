import React from 'react';
import { useQuery } from 'react-query';
import DescPanel from './DescPanel';
import { useParams } from 'react-router-dom';
import productService from '../../service/productService.js';

const ProductDesc = () => {
  const { name } = useParams();

  const { data, isLoading, error } = useQuery(
    ['getProduct', name],
    () => productService.getProductByName(name)
  )

  return (
    <div className='desc-page'>
      <h1>Description</h1>
      <p>Here you can check the product's description. Real product might vary.</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : data ? (
        <DescPanel product={data.data} />
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  );
}

export default ProductDesc;
