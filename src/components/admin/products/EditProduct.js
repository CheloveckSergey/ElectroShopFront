import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import productService from '../../../service/productService';
import EditProductPanel from './EditProductPanel';

const EditProduct = () => {
  const params = useParams();

  const {data, isLoading, error} = useQuery(
    ['getProduct', params.name], 
    () => productService.getProductByName(params.name),
    {
      // onSuccess: (data) => console.log(data),
    }
  )

  return (
    <div className='edit-product-panel'>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error...</p>
      ) : data ? (
        <EditProductPanel product={data.data} />
      ) : (
        <p>Something went wrong...</p>
      )}
    </div>
  );
}

export default EditProduct;
