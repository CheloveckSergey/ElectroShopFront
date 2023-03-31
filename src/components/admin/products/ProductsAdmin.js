import React, { useRef, useState } from 'react';
import ProductsTable from './ProductsTable';
import AddProduct from './AddProduct';

const ProductsAdmin = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div className='add-product'>
      <AddProduct setUpdate={setUpdate} update={update} />
      <ProductsTable update={update} />
    </div>
  );
}

export default ProductsAdmin;
