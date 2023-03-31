import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/StoreProvider';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
  const { setShowFilterbar } = useContext(ProductContext);

  // useEffect(() => {
  //   setShowFilterbar(true)

  //   return () => {
  //     setShowFilterbar(false)
  //   }
  // }, []);

  return (
    <div className='product-list'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
