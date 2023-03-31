import React, { useContext } from 'react';
import LSService from '../../context/LSService';
import { ProductContext } from '../../context/StoreProvider';
import ProductCheck from './ProductCheck';

const Basket = () => {
  const {addedProducts, deleteProduct, deleteSingleProduct, addProduct} = useContext(ProductContext);

  return (
    <div className='basket-page'>
      <h1>Basket</h1>
      <p>Here you can check you orders with 
        further confirmation and payment</p>
      {
        addedProducts.map((product, index) => 
          <ProductCheck 
            key={index}
            product={product} 
            deleteProduct={deleteProduct} 
            deleteSingleProduct={deleteSingleProduct}
            addProduct={addProduct}
          />
        )
      }
    </div>
  );
}

export default Basket;
